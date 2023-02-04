import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SidebarCategory} from "./model/SidebarCategory";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private  http: HttpClient) { }

  getCategories() :Observable<Array<SidebarCategory>> {
    return this.http.get<Array<SidebarCategory>>("/api/categories");
  }
}
