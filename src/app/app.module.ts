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
    AllResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
