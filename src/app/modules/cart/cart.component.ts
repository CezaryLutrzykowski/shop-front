import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "./cart.service";
import {CartSummary} from "./model/CartSummary";
import {CookieService} from "ngx-cookie-service";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CartSummaryItem} from "./model/CartSummaryItem";
import {CartIconService} from "../common/service/cart-icon.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  summary!: CartSummary;
  formGroup!: FormGroup;
  private isProductAdded = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private cookieService: CookieService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cartIconService: CartIconService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.queryParams['productId']);
    if (id > 0) {
      this.isProductAdded = true;
      this.addToCart(id);
    } else {
      this.isProductAdded = false;
      this.getCart()
    }

    this.formGroup = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
  }

  getCart() {
    let cartId = Number(this.cookieService.get("cartId"));
    if (cartId > 0) {
      this.cartService.getCart(cartId)
        .subscribe(summary => {
          this.summary = summary

          this.patchFormItems();
        })
    }
  }

  addToCart(id: number) {
    let cartId = Number(this.cookieService.get("cartId"));
    this.cartService.addToCart(cartId, {productId: id, quantity: 1})
      .subscribe(summary => {
        this.summary = summary;
        this.patchFormItems();
        this.cartIconService.cartChanged(summary.items.length);
        this.cookieService.set("cartId", summary.id.toString());
        this.router.navigate(["/cart"]);
      });
  }

  patchFormItems() {
    let formItems = <FormArray>this.formGroup.get("items");
    this.summary.items.forEach(item => {
      formItems.push(this.formBuilder.group({
        id: [item?.id],
        quantity: [item?.quantity],
        product: [item?.product],
        lineValue: [item?.lineValue]
      }));
    });
  }

  private expiresDays(days: number): Date {
    return new Date(Date.now() + days * 24 * 60 * 60 & 1000);
  }

  submit() {
    let cartId = Number(this.cookieService.get("cartId"));
    this.cartService.updateCart(cartId, this.mapToRequestListDto())
      .subscribe(summary => {
        this.summary = summary;
        this.formGroup.get("items")?.setValue(summary.items)
      })
  }

  private mapToRequestListDto(): any[] {
    let items: Array<CartSummaryItem> = this.formGroup.get("items")?.value;
    return items.map(item => ({
      productId: item.product.id,
      quantity: item.quantity
    }))

  }

  deleteItem(itemId: any) {
    this.cartService.deleteCartItem(itemId)
      .subscribe(() => this.ngOnInit())
  }

  get items() {
    return (<FormArray>this.formGroup.get("items")).controls;
  }

  back() {
    this.location.historyGo(this.isProductAdded ? -2 : -1);
  }
}