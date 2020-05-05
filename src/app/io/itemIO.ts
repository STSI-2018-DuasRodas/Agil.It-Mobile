import { GenericIO } from './genericIO';
import { MeasurementUnitIO } from './measurementunitIO';

export class ItemIO extends GenericIO{
    private _description     : string;
    private _measurementUnit : MeasurementUnitIO;

    get description() : string{
        return this._description;
    }
    set description(value : string){
        this._description = value;
    }

    get measurementUnit() : MeasurementUnitIO{
        return this._measurementUnit;
    }
    set measurementUnit(value : MeasurementUnitIO){
        this._measurementUnit = value;
    }
}