export class GenericIO {
    private _id        : number = 0;
    private _createdAt : string = '';
    private _createdBy : number = 0;
    private _updatedAt : string = '';
    private _updatedBy : number = 0;

    get id(): number {
        return this._id;
    }
    set id(value: number) {        
        this._id = value;
    }

    get createdAt(): string {        
        return this._createdAt;
    }
    set createdAt(value: string) {        
        this._createdAt = value;
    }

    get createdBy(): number {        
        return this._createdBy;
    }
    set createdBy(value: number) {        
        this._createdBy = value;
    }

    get updatedAt(): string {        
        return this._updatedAt;
    }
    set updatedAt(value: string) {        
        this._updatedAt = value;
    }

    get updatedBy(): number {        
        return this._updatedBy;
    }
    set updatedBy(value: number) {        
        this._updatedBy = value;
    }
}