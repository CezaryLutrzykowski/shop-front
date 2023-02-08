import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullpageadminComponent} from './fullpageadmin.component';
import {AdminComponent} from 'src/app/modules/admin/admin.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {MaterialModule} from "../../shared/material.module";
import {AdminProductComponent} from "../../modules/admin/admin-product/admin-product.component";
import {AdminProductUpdateComponent} from "../../modules/admin/admin-product/admin-product-update/admin-product-update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminMessageComponent} from "../../modules/admin/common/componnent/admin-message/admin-message.component";
import {AdminConfirmDialogComponent} from "../../modules/admin/common/componnent/admin-confirm-dialog/admin-confirm-dialog.component";
import {AdminCategoryComponent} from "../../modules/admin/admin-category/admin-category.component";
import { AdminProductFormConponent } from 'src/app/modules/admin/admin-product/admin-product-form/admin-product-form.component';
import {
  AdminCategoryAddComponent
} from "../../modules/admin/admin-category/admin-category-add/admin-category-add.component";
import {
  AdminCategoryUpdateComponent
} from "../../modules/admin/admin-category/admin-category-update/admin-category-update.component";
import {
  AdminCategoryFormComponent
} from "../../modules/admin/admin-category/admin-category-form/admin-category-form.component";
import {
  AdminProductAddComponent
} from "../../modules/admin/admin-product/admin-product-add/admin-product-add.component";

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProductFormConponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent,
    AdminCategoryComponent,
    AdminCategoryAddComponent,
    AdminCategoryUpdateComponent,
    AdminCategoryFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule {
}
