export interface BasicsRequests {
    getList(),
    get(id:number),
    post(id:number, object:any),
    update(id:number, object:any),
    updateAttributes(id:number, object:any),
    delete(id:number)
  }