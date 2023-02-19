import {CartProduct} from "./CartProduct";

export interface CartSummaryItem {
  id: number,
  quantity: number,
  product: CartProduct,
  lineValue: number
}
