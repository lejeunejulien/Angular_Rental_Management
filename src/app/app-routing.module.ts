import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrestigeVehicleComponent } from './components/home-prestige-vehicle/home-prestige-vehicle.component';
import { HomeTransportVehicleComponent } from './components/home-transport-vehicle/home-transport-vehicle.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VehicleSheetComponent } from './components/vehicle-sheet/vehicle-sheet.component';
import { HomeComponent } from './components/home/home.component';
import { BookingFormComponent } from './CRUD/booking/booking-form/booking-form.component';
import { CategoryVHComponent } from './CRUD/category/category-vh/category-vh.component';
import { CategoryFormComponent } from './CRUD/category/category-form/category-form.component';
import { VHFormComponent } from './CRUD/vehicle_properties/vhform/vhform.component';
import { UserFormComponent } from './CRUD/user/user-form/user-form.component';
import { UserBookingComponent } from './CRUD/user/user-booking/user-booking.component';
import { SupplierVHComponent } from './CRUD/supplier/supplier-vh/supplier-vh.component';
import { SupplierFormComponent } from './CRUD/supplier/supplier-form/supplier-form.component';
import { StatusComponent } from './CRUD/status/status-vh/status.component';
import { PriceVHComponent } from './CRUD/price/price-vh/price-vh.component';
import { PriceFormComponent } from './CRUD/price/price-form/price-form.component';
import { StatusFormComponent } from './CRUD/status/status-form/status-form.component';
import { VhGeneralComponent } from './CRUD/vehicle_properties/vh-general/vh-general.component';

const routes: Routes = [
  //{path : "", component: HomeComponent},

  //Pages
  {path : "", component: VhGeneralComponent},
  {path : "vh_form/:id", component : VHFormComponent},

  {path : "home-prestige",component : HomePrestigeVehicleComponent},
  {path : "home-transport", component : HomeTransportVehicleComponent},
  {path : "login",component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "detail-vehicule", component:VehicleSheetComponent},

  //Form
  {path : "category", component: CategoryVHComponent},
  {path : "category/form", component : CategoryFormComponent},

  {path : "booking", component: BookingFormComponent},

  {path : "price", component: PriceVHComponent},
  {path : "price/form", component : PriceFormComponent},

  {path : "status", component: StatusComponent},
  {path : "status/form", component : StatusFormComponent},

  {path : "supplier", component: SupplierVHComponent},
  {path : "supplier/form", component : SupplierFormComponent},

  {path : "user", component: UserBookingComponent},
  {path : "user/form", component : UserFormComponent},

  {path : "vehicle_properties", component: VHFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
