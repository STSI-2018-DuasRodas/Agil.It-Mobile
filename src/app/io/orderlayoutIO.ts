import { GenericIO } from './genericIO';

export class OrderLayoutIO extends GenericIO{
    private _description : string;
    private _orderLayout : string;

    get description() : string{
        return this._description;
    }
    set description(value : string){
        this._description = value;
    }

    get orderLayout() : string{
        return this._orderLayout;
    }
    set orderLayout(value : string){
        this._orderLayout = value;
    }
}