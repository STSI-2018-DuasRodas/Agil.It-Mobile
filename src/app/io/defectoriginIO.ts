import { GenericIO } from './genericIO';
import { MachineTypeIO } from './machinetypeIO';

export class DefectOriginIO extends GenericIO{
    private _description : string;
    private _machineType : MachineTypeIO;

    get description() : string{
        return this._description;
    }
    set description(value : string){
        this._description = value;
    }

    get machineType() : MachineTypeIO{
        return this._machineType;
    }
    set machineType(value : MachineTypeIO){
        this._machineType = value;
    }
}