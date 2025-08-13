"use client";
import { OrderByDirection, SearchQueryVariables } from "@/gql/graphql";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchResultPage from "./SearchResultPage";

interface SearchProductsInfiniteScrollProps {
  collectionId?: string;
}

function SearchProductsInfiniteScroll({
  collectionId,
}: SearchProductsInfiniteScrollProps) {
  const searchParams = useSearchParams();
  const variables = searchParamsVariablesFactory(searchParams, collectionId);
  console.log("Variables", variables);

  const [pageVariables, setPageVariables] = useState([variables]);

  useEffect(() => {
    setPageVariables([
      searchParamsVariablesFactory(searchParams, collectionId),
    ]);
  }, [searchParams]);

  const loadMoreHandler = (after: string) => {
    setPageVariables([...pageVariables, { ...variables, after, first: 8 }]);
  };

  return (
    <section>
      {pageVariables.map((variable, i) => (
        <SearchResultPage
          key={"" + variable.after}
          variables={variable}
          isLastPage={i === pageVariables.length - 1}
          onLoadMore={loadMoreHandler}
        />
      ))}
    </section>
  );
}

export default SearchProductsInfiniteScroll;

const searchParamsVariablesFactory = (
  searchParams: ReadonlyURLSearchParams,
  collectionId?: string
) => {
  const priceRange = searchParams.get("price_range");
  const range = priceRange ? priceRange.split("-") : undefined;
  const collections =
    (JSON.parse(searchParams.get("collections")) as string[]) ?? [];
  const sort = searchParams.get("sort") ?? undefined;
  const search = searchParams.get("search") ?? undefined;

  let orderBy = undefined;

  switch (sort) {
    case "BEST_MATCH":
      orderBy = [
        { featured: OrderByDirection["DescNullsFirst"] },
        { created_at: OrderByDirection["DescNullsLast"] },
      ];
      break;
    case "PRICE_LOW_TO_HIGH":
      orderBy = [{ price: OrderByDirection["AscNullsLast"] }];
      break;
    case "PRICE_HIGH_TO_LOW":
      orderBy = [{ price: OrderByDirection["DescNullsLast"] }];
      break;
    case "NEWEST":
      orderBy = [{ created_at: OrderByDirection["DescNullsLast"] }];
      break;
    case "NAME_ASCE":
      orderBy = [{ name: OrderByDirection["AscNullsLast"] }];

      break;
    default:
      orderBy = undefined;
  }

  console.log("collections", collections);
  const variables: SearchQueryVariables = {
    search: search ? `%${search.trim()}%` : "%%",
    lower: range && range[0] ? `${range[0]}` : undefined,
    upper: range && range[1] ? `${range[1]}` : undefined,
    collections: collectionId
      ? [collectionId]
      : collections && collections.length > 0
        ? collections
        : undefined,
    orderBy,
    first: 4,
    after: undefined,
  };
  return variables;
};
