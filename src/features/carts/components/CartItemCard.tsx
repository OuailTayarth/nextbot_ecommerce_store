"use client";
import { DocumentType, gql } from "@/gql";

import Image from "next/image";
import React from "react";

import QuantityInput from "../../../components/layouts/QuantityInput";
import { formatPrice } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { keytoUrl } from "@/lib/utils";
import { UseQueryExecute } from "@urql/next";
import Link from "next/link";
import { Icons } from "../../../components/layouts/icons";
import { Button } from "../../../components/ui/button";

export const CartItemCardFragment = gql(/* GraphQL */ `
  fragment CartItemCardFragment on products {
    id
    slug
    name
    price
    description
    featuredImage: medias {
      id
      key
      alt
    }
  }
`);

type CartItemCardProps = React.ComponentProps<typeof Card> & {
  product: DocumentType<typeof CartItemCardFragment>;
  disabled?: boolean;
  addOneHandler: () => void;
  minusOneHandler: () => void;
  removeHandler: () => void;
  quantity: number;
};

function CartItemCard({
  product,
  disabled,
  addOneHandler,
  minusOneHandler,
  removeHandler,
  quantity,
}: CartItemCardProps) {
  return (
    <Card className="flex items-center justify-between gap-x-6 gap-y-8 px-5 py-3 shadow-none border-0 border-b">
      <CardContent className="relative p-0 mb-5 overflow-hidden ">
        <Image
          src={keytoUrl(product.featuredImage?.key)}
          alt={product.featuredImage?.alt}
          width={150}
          height={150}
          sizes="(max-width: 767px) 395px, 150px"
          className="object-cover w-[395px] h-[68px] md:w-[150px] md:h-[150px]"
        />
      </CardContent>

      <CardHeader className="p-0 mb-3 md:mb-5 grow max-w-lg">
        <CardTitle>
          <Link href={`/shop/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>

        <CardDescription className="grow line-clamp-2 ">
          {product.description}
        </CardDescription>
        <p className="mt-2 font-semibold sm:hidden">
          $ {formatPrice(product.price)}
        </p>

        <QuantityInput
          value={quantity}
          addOneHandler={addOneHandler}
          minusOneHandler={minusOneHandler}
          disabled={disabled}
        />
      </CardHeader>

      <CardFooter className="gap-x-2 md:gap-x-5 p-0 ">
        <p className="hidden sm:block">$ {formatPrice(product.price)}</p>

        <Button
          aria-label="Remove Item Button"
          variant="ghost"
          onClick={removeHandler}>
          <Icons.close size={20} />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CartItemCard;
