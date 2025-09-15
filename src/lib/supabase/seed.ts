import * as seed from "./seedData";
import { exit } from "process";

const seeddata = async () => {
  await seed.medias();
  await seed.collections();
  await seed.products();
  // await seed.productMedias();
  // await seed.shopOrders()
  // await seed.address()
  exit();
};

seeddata();
