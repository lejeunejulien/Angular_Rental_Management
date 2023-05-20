import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserBookingListComponent } from './components/user-booking-list/user-booking-list.component';
import { SearchComponent } from './components/search/search.component';
import { VehicleSheetComponent } from './components/vehicle-sheet/vehicle-sheet.component';
import { HomeTransportVehicleComponent } from './components/home-transport-vehicle/home-transport-vehicle.component';
import { HomePrestigeVehicleComponent } from './components/home-prestige-vehicle/home-prestige-vehicle.component';
import { BookingRequestComponent } from './components/booking-request/booking-request.component';
import { AllResultsComponent } from './components/all-results/all-results.component';

import { VHFormComponent } from './CRUD/vehicle_properties/vhform/vhform.component';
import { CategoryVHComponent } from './CRUD/category/category-vh/category-vh.component';
import { CategoryFormComponent } from './CRUD/category/category-form/category-form.component';
import { PriceVHComponent } from './CRUD/price/price-vh/price-vh.component';
import { PriceFormComponent } from './CRUD/price/price-form/price-form.component';
import { SupplierVHComponent } from './CRUD/supplier/supplier-vh/supplier-vh.component';
import { SupplierFormComponent } from './CRUD/supplier/supplier-form/supplier-form.component';

import { UserBookingComponent } from './CRUD/user/user-booking/user-booking.component';
import { UserFormComponent } from './CRUD/user/user-form/user-form.component';
import { BookingFormComponent } from './CRUD/booking/booking-form/booking-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusComponent } from './CRUD/status/status-vh/status.component';
import { StatusFormComponent } from './CRUD/status/status-form/status-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserBookingListComponent,
    SearchComponent,
    VehicleSheetComponent,
    HomeTransportVehicleComponent,
    HomePrestigeVehicleComponent,
    BookingRequestComponent,
    AllResultsComponent,
    BookingFormComponent,
    VHFormComponent,
    CategoryVHComponent,
    CategoryFormComponent,
    PriceVHComponent,
    PriceFormComponent,
    SupplierVHComponent,
    SupplierFormComponent,
    UserBookingComponent,
    UserFormComponent,
    StatusComponent,
    StatusFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
