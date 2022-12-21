import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerRegisterComponent } from './owner/owner-register/owner-register.component';
import { OwnerRegister1Component } from './owner/owner-register1/owner-register1.component';
import { MainPageComponent } from './HomePage/main-page/main-page.component';
import { FooterComponent } from './HomePage/footer/footer.component';
import { HeaderComponent } from './HomePage/header/header.component';
import { OwnerLoginComponent } from './owner/owner-login/owner-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TenantRegisterComponent } from './tenant/tenant-register/tenant-register.component';
import { TenantLoginComponent } from './tenant/tenant-login/tenant-login.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { ViewPropertyComponent } from './Property/view-property/view-property.component';
import { OwnerPageComponent } from './owner/owner-page/owner-page.component';
import { ViewPropertyTenantComponent } from './tenant/view-property-tenant/view-property-tenant.component';
import { AboutusComponent } from './Homepage/aboutus/aboutus.component';
import { ContactusComponent } from './Homepage/contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerLogin1Component } from './owner/owner-login1/owner-login1.component';
import { TenantPageComponent } from './tenant/tenant-page/tenant-page.component';




@NgModule({
  declarations: [
    AppComponent,
    OwnerRegisterComponent,
    MainPageComponent,
    FooterComponent,
    HeaderComponent,
    OwnerLoginComponent,
    TenantRegisterComponent,
    TenantLoginComponent,
    AddPropertyComponent,
    ViewPropertyComponent,
    OwnerPageComponent,
    ViewPropertyTenantComponent,
    AboutusComponent,
    ContactusComponent,
    AdminComponent,
    OwnerLogin1Component,
    OwnerRegister1Component,
    TenantPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
