
export interface Vehicle_propertiesDTO {
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
  id_category: number,
  id_supplier: number,
  list_status_vehicle: Vehicle_status_form[]

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
  caution: number
}


export interface Price_form{
  price_day: number,
  price_weekend: number,
  price_month : number,
  caution: number
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
  userDTO: UserDTO,
  Vehicle_propertiesDTO_User: vehicle_propertiesDTO_user

}

export interface vehicle_propertiesDTO_user{
  id : number,
  mileage : number,
  year : number,
  engine_power : number,
  category : CategoryDTO
}


export interface Booking_form{
  adress: string,
  start_date : string,
  arrival_date: string
  id_registered_user: number,
  id_vehicle_properties: number

}

//////////////////////////////////////////


export interface UserDTO{
  id : number,
  username: string
}



export interface User_form{
  last_name: string,
  first_name: string,
  username: string,
  password: string
}

export interface AuthDTO{
  username : string,
  token : string
  id_user : number
  role : string
}

export interface LoginForm{
  username : string,
  password : string
}

