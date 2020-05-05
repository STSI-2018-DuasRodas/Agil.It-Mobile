import { GenericIO } from './genericIO';
import { SectorIO } from './sectorIO';

export class InstallationAreaIO extends GenericIO {
    private _description : string;
    private _sector : SectorIO;
    
    get description() : string{
        return this._description;
    }
    set description(value : string){
        this._description = value;
    }

    get sector() : SectorIO{
        return this._sector;
    }
    set sector(value : SectorIO){
        this._sector = value;
    }
}