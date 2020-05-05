import { GenericIO } from './genericIO';
import { OrderComponentIO } from './ordercomponentIO';

export class OrderOperationIO extends GenericIO {
    private _description     : string;
    private _operationNumber : string;
    private _planningTime    : number;
    private _executeTime     : number
    private _executed        : boolean;
    private _note            : string;
    private _orderComponents : Array<OrderComponentIO>;

    get description() : string{
        return this._description;
    }
    set description(value : string){
        this._description = value;
    }

    get operationNumber() : string{
        return this._operationNumber;
    }
    set operationNumber(value : string){
        this._operationNumber = value;
    }

    get planningTime() : number{
        return this._planningTime;
    }
    set planningTime(value : number){
        this._planningTime = value;
    }

    get executeTime() : number{
        return this._executeTime;
    }
    set executeTime(value : number){
        this._executeTime = value;
    }

    get executed() : boolean{
        return this._executed;
    }
    set executed(value : boolean){
        this._executed = value;
    }

    get note() : string{
        return this._note;
    }
    set note(value : string){
        this._note = value;
    }

    get orderComponents() : Array<OrderComponentIO>{
        return this._orderComponents;
    }
    set orderComponents(value : Array<OrderComponentIO>){
        this._orderComponents = value;
    }
}