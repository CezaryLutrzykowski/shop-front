import {Category} from "./Category";
import {Product} from "../../product/model/Product";
import {Page} from "../../../shared/model/Page";

export interface CategoryProducts {
  category: Category,
  products: Page<Product>
}
