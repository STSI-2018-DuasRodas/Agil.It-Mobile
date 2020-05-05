import { GenericIO } from './genericIO';
import { InstallationAreaIO } from './installationareaIO';

export class SuperiorEquipamentIO extends GenericIO{
    private _description      : string;
    private _installationArea : InstallationAreaIO;    

    get description() : string{
        return this._description;
    }
    set description(value : string){
        this._description = value;
    }

    get installationArea() : InstallationAreaIO{
        return this._installationArea;
    }
    set installationArea(value : InstallationAreaIO){
        this._installationArea = value;
    }
}