import { GenericIO } from './genericIO';
import { EquipamentIO } from './equipamentIO';
import { SuperiorEquipamentIO } from './superiorequipamentIO';
import { OrderOperationIO } from './orderoperationIO';
import { WorkersIO } from './workersIO';

export class OrderEquipamentIO extends GenericIO{
    private _equipament         : EquipamentIO;
    private _superiorEquipament : SuperiorEquipamentIO;
    private _orderOperation     : Array<OrderOperationIO>;
    private _workers            : WorkersIO;

    get equipament() : EquipamentIO{
        return this._equipament;
    }
    set equipament(value : EquipamentIO){
        this._equipament = value;
    }

    get superiorEquipament() : SuperiorEquipamentIO{
        return this._superiorEquipament;
    }
    set superiorEquipament(value : SuperiorEquipamentIO){
        this._superiorEquipament = value;
    }

    get orderOperation() : Array<OrderOperationIO>{
        return this._orderOperation;
    }
    set orderOperation(value : Array<OrderOperationIO>){
        this._orderOperation = value;
    }

    get workers() : WorkersIO{
        return this._workers;
    }
    set workers(value : WorkersIO){
        this._workers = value;
    }
}   