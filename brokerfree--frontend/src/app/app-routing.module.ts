import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './HomePage/main-page/main-page.component';
import { OwnerLoginComponent } from './owner/owner-login/owner-login.component';
import { OwnerRegisterComponent } from './owner/owner-register/owner-register.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { ViewPropertyComponent } from './Property/view-property/view-property.component';
import { TenantLoginComponent } from './tenant/tenant-login/tenant-login.component';
import { TenantRegisterComponent } from './tenant/tenant-register/tenant-register.component';
import { ViewPropertyTenantComponent } from './tenant/view-property-tenant/view-property-tenant.component';
import { AboutusComponent } from './Homepage/aboutus/aboutus.component';
import { ContactusComponent } from './Homepage/contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerLogin1Component } from './owner/owner-login1/owner-login1.component';
import { OwnerRegister1Component } from './owner/owner-register1/owner-register1.component';
import { OwnerPageComponent } from './owner/owner-page/owner-page.component';
import { TenantPageComponent } from './tenant/tenant-page/tenant-page.component';

const routes: Routes = [
{ path: "", component: MainPageComponent },
{path: 'owner-register', component:OwnerRegisterComponent},
{path: 'owner-login',component:OwnerLoginComponent},
{path: 'owner-register1', component:OwnerRegister1Component},
{path: 'owner-login1',component:OwnerLogin1Component},
{path: 'tenant-login',component:TenantLoginComponent},
{path: 'tenant-register',component:TenantRegisterComponent},
{path:'add-property',component:AddPropertyComponent},
{path:'view-property',component:ViewPropertyComponent},
{path:'view-property-tenant',component:ViewPropertyTenantComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'admin',component:AdminComponent },
{path:'owner',component:OwnerPageComponent },
{path: 'tenant',component:TenantPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
