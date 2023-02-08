import {Category} from "./Category";
import {Product} from "../../common/model/Product";
import {Page} from "../../common/model/Page";

export interface CategoryProducts {
  category: Category,
  products: Page<Product>
}
