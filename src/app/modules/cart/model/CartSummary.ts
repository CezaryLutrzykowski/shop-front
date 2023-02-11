import {CartSummaryItem} from "./CartSummaryItem";
import {Summary} from "./Summary";

export interface CartSummary{
  id: number,
  items: Array<CartSummaryItem>,
  summary : Summary
}
