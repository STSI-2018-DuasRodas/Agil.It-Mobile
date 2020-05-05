import { GenericIO } from './genericIO';
import { OrderEquipamentIO } from './orderequipamentIO';
import { OrderTypeIO } from './ordertypeIO';

export class ListIO extends GenericIO {
    private _orderNumber : string  = ''   ;
    private _priority    : string  = ''   ;
    private _orderStatus : string  = ''   ;
    private _type        : string  = ''   ;
    private _orderType           : OrderTypeIO              = new OrderTypeIO();
    private _orderEquipament     : Array<OrderEquipamentIO> = new Array<OrderEquipamentIO>();

    get orderNumber() : string{
        return this._orderNumber;
    }
    set orderNumber(value : string){
        this._orderNumber = value;
    }

    get priority() : string{
        return this._priority;
    }
    set priority(value : string){
        this._priority = value;
    }

    get orderStatus() : string{
        return this._orderStatus;
    }
    set orderStatus(value : string){
        this._orderStatus = value;
    }

    get type() : string{
        return this._type;
    }
    set type(value : string){
        this._type = value;
    }

    get orderType() : OrderTypeIO{
        return this._orderType;
    }
    set orderType(value : OrderTypeIO){
        this._orderType = value;
    }

    get orderEquipament() : Array<OrderEquipamentIO>{
        return this._orderEquipament;
    }
    set orderEquipament(value : Array<OrderEquipamentIO>){
        this._orderEquipament = value;
    }
}