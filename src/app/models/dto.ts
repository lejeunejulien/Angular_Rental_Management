/* Mettre à jour les dates*/
/* voir avec les dates dans le "datainit"*/


//Dans le cas du user si "Admin"-> ajouter UserDTO
export interface VehicleDTO {
  id:number,
  mileage: number,
  year: number,
  engine_power: number,
  category: CategoryDTO;
  supplier: SupplierDTO,
  list_vehicle_status: Vehicle_statusDTO[]

}

export interface Vehicle_form {
  mileage: number,
  year: number,
  engine_power: number,
  category: number,
  supplier: number,
  list_vehicle_status: Vehicle_statusDTO[]

}

//////////////////////////////

export interface CategoryDTO{
  id:number,
  brand: string,
  model: string,
  price: PriceDTO
}

export interface Category_form{
  brand: string,
  model: string,
  id_price: number
}


//////////////////////////////

export interface PriceDTO{
  id :number,
  price_day: number,
  price_weekend: number,
  price_month : number,
  caution: number,
}


export interface Price_form{
  price_day: number,
  price_weekend: number,
  price_month : number,
  caution: number,
}

//////////////////////////////

export interface SupplierDTO{
  id : number,
  name: string,
  adress: string,
  tel: string,
  purchase_price: number
}


export interface Supplier_form{
  name: string,
  adress: string,
  tel: string,
  purchase_price: number
}

/////////////////////////////////


export interface Vehicle_statusDTO{
  id : number,
  status: string,
  start_date: string,
  end_date: string
}

export interface Vehicle_status_form{
  status: string,
  start_date: string,
  end_date: string
}

//////////////////////////////////////////

export interface BookingDTO{
  id: number,
  adress: string,
  start_date : string,
  arrival_date: string
  registered_user: UserDTO,
  vehicle_properties: VehicleDTO

}

export interface Booking_form{
  adress: string,
  start_date : string,
  arrival_date: string
  registered_user: UserDTO,
  vehicle_properties: VehicleDTO

}

//////////////////////////////////////////


export interface UserDTO{
  id : number,
  last_name: string,
  first_name: string,
  login: string,
  password: string
}



export interface User_form{
  last_name: string,
  first_name: string,
  login: string,
  password: string
}

