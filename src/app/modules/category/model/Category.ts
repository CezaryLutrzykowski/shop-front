import {Product} from "../../common/model/Product";

export interface Category {
  name: string,
  description: string,
  slug: string,
  product: Array<Product>
}
