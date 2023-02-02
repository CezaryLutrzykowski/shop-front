import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductDetails} from "../product-details/model/ProductDetails";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {


  constructor(private http: HttpClient) {
  }

  getProductDetails(slug: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>("/api/products/" + slug);
  }
}
