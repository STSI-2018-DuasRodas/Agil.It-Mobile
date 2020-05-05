import { GenericIO } from './genericIO';
import { OrderTypeIO } from './ordertypeIO';
import { OrderClassificationIO } from './orderclassificationIO';
import { OrderLayoutIO } from './orderlayoutIO';
import { InstallationAreaIO } from './installationareaIO';
import { DefectOriginIO } from './defectoriginIO';
import { OrderEquipamentIO } from './orderequipamentIO';

export class DefaultIO extends GenericIO {
    private _integrationID       : string  = ''   ;
    private _deleted             : number  = 0    ;   
    private _orderNumber         : string  = ''   ;
    private _priority            : string  = ''   ;
    private _orderStatus         : string  = ''   ;
    private _needStopping        : boolean = false;
    private _isStoped            : boolean = false;
    private _exported            : boolean = false;
    private _openedDate          : string  = ''   ;
    private _defectOriginNote    : string  = ''   ;
    private _defectSymptomNote   : string  = ''   ;
    private _type                : string  = ''   ;
    private _orderType           : OrderTypeIO              = new OrderTypeIO();
    private _orderClassification : OrderClassificationIO    = new OrderClassificationIO();
    private _orderLayout         : OrderLayoutIO            = new OrderLayoutIO();
    private _installationArea    : InstallationAreaIO       = new InstallationAreaIO();
    private _defectOrigin        : DefectOriginIO           = new DefectOriginIO() ;
    private _orderEquipament     : Array<OrderEquipamentIO> = new Array<OrderEquipamentIO>();

    get integrationID() : string{
        return this._integrationID;
    }
    set integrationID(value : string){
        this._integrationID = value;
    }

    get deleted() : number{
        return this._deleted;
    }
    set deleted(value : number){
        this._deleted = value;
    }

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

    get needStopping() : boolean{
        return this._needStopping;
    }
    set needStopping(value : boolean){
        this._needStopping = value;
    }

    get isStoped() : boolean{
        return this._isStoped;
    }
    set isStoped(value : boolean){
        this._isStoped = value;
    }

    get exported() : boolean{
        return this._exported;
    }
    set exported(value : boolean){
        this._exported = value;
    }

    get openedDate() : string{
        return this._openedDate;
    }
    set openedDate(value : string){
        this._openedDate = value;
    }

    get defectOriginNote() : string{
        return this._defectOriginNote;
    }
    set defectOriginNote(value : string){
        this._defectOriginNote = value;
    }

    get defectSymptomNote() : string{
        return this._defectSymptomNote;
    }
    set defectSymptomNote(value : string){
        this._defectSymptomNote = value;
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

    get orderClassification() : OrderClassificationIO{
        return this._orderClassification;
    }
    set orderClassification(value : OrderClassificationIO){
        this._orderClassification = value;
    }

    get orderLayout() : OrderLayoutIO{
        return this._orderLayout;
    }
    set orderLayout(value : OrderLayoutIO){
        this._orderLayout = value;
    }

    get installationArea() : InstallationAreaIO{
        return this._installationArea;
    }
    set installationArea(value : InstallationAreaIO){
        this._installationArea = value;
    }

    get defectOrigin() : DefectOriginIO{
        return this._defectOrigin;
    }
    set defectOrigin(value : DefectOriginIO){
        this._defectOrigin = value;
    }

    get orderEquipament() : Array<OrderEquipamentIO>{
        return this._orderEquipament;
    }
    set orderEquipament(value : Array<OrderEquipamentIO>){
        this._orderEquipament = value;
    }
}