import { IProduct } from "../types/products";

export const getProductData = (product, productGroupName): IProduct => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    groupName: productGroupName,
    selected: false,
  }
};
