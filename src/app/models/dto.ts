/* Mettre à jour les dates*/
/* voir avec les dates dans le "datainit"*/


//Dans le cas du user si "Admin"-> ajouter UserDTO
export interface VehicleDTO {
  mileage: number,
  year: number,
  engine_power: number,
  category: CategoryDTO;
  supplier: SupplierDTO,
  list_vehicle_status: Vehicle_statusDTO[]

}

export interface CategoryDTO{
  brand: number,
  model: string,
  price: PriceDTO
}

export interface PriceDTO{
  price_day: number,
  price_weekend: number,
  price_month : number,
  caution: number,
}

export interface SupplierDTO{
  name: string,
  adress: string,
  tel: string,
  purchase_price: number
}

export interface Vehicle_statusDTO{
  status: string,
  start_date: string,
  end_date: string
}

export interface BookingDTO{
  adress: string,
  start_date : string,
  arrival_date: string
  registered_user: UserDTO,
  vehicle_properties: VehicleDTO

}

export interface UserDTO{
  last_name: string,
  first_name: string,
  login: string,
  password: string
}

