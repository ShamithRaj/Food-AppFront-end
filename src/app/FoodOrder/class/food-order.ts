import { Staff } from "src/app/Staff/class/staff"

export class FoodOrder {
    id!:number
    status!:string
    total_price!:number
    order_time!:string
    deliver_time!:string
    customer_name!:string
    customer_number!:string

    staff=new Staff()

    constructor(){}
}
