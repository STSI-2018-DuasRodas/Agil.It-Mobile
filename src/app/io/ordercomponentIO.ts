import { ItemIO } from './itemIO';
import { GenericIO } from './genericIO';

export class OrderComponentIO extends GenericIO {
    private _item         : ItemIO;
    private _quantity     : number;
    private _canBeDeleted : boolean;

    get item() : ItemIO{
        return this._item;
    }
    set item(value : ItemIO){
        this._item = value;
    }

    get quantity() : number{
        return this._quantity;
    }
    set quantity(value : number){
        this._quantity = value;
    }

    get canBeDeleted() : boolean{
        return this._canBeDeleted;
    }
    set canBeDeleted(value : boolean){
        this._canBeDeleted = value;
    }
}