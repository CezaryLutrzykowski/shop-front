import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AdminProductUpdate} from "../model/AdminProductUpdate";
import {Observable} from "rxjs";
import {UploadResponse} from "../model/UploadResponse";

@Injectable({
  providedIn: 'root'
})
export class AdminProductUpdateService {

  constructor(private http: HttpClient) {
  }

  getProduct(id: number): Observable<AdminProductUpdate> {
    return this.http.get<AdminProductUpdate>("/api/admin/products/" + id)
  }

  saveProduct(id: number, value: AdminProductUpdate) {
    return this.http.put<AdminProductUpdate>('/api/admin/products/' + id, value)
  }
}
