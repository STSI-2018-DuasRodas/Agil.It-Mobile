import { DefaultIO } from '../io/defaultIO';
import { ListIO } from '../io/listIO';

export class Order {
    public orderDefault : any;
    public orderList    : any;    
    
    private static INSTANCE : Order = new Order();

    public static getInstance() : Order{
        return Order.INSTANCE;
    }
}