import { DefaultIO } from '../io/defaultIO';
import { ListIO } from '../io/listIO';
import { Observable } from 'rxjs';
import { AgilitUtils } from '../utils/agilitUtils';

export class Order {
    public orderDefault : any;
    public orderList    : any;
    public orderRoute   : any;
    
    private static INSTANCE : Order = new Order();

    public static getInstance() : Order{
        return Order.INSTANCE;
    }

    public static clearOrders(){
      Order.getInstance().orderDefault = {};
      Order.getInstance().orderList    = {};
      Order.getInstance().orderRoute   = {};
    }
}