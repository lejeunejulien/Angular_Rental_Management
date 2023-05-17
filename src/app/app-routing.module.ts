import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrestigeVehicleComponent } from './components/home-prestige-vehicle/home-prestige-vehicle.component';
import { HomeTransportVehicleComponent } from './components/home-transport-vehicle/home-transport-vehicle.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VehicleSheetComponent } from './components/vehicle-sheet/vehicle-sheet.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "home-prestige",component : HomePrestigeVehicleComponent},
  {path : "home-transport", component : HomeTransportVehicleComponent},
  {path : "login",component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "detail-vehicule", component:VehicleSheetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
