import { Injectable } from '@angular/core';
import { AgilitOrderStatus, AgilitUtils } from './agilitUtils';

export enum AgilitStorageTypes{
  USERDATA = 'user',
  USERNAME = 'username',
  PASSWORD = 'password',
  TOKEN    = 'token'
}

export class AgilitStorageUtils {
  public static clearSpecificData(agilitStorageType : AgilitStorageTypes){
    window.localStorage.removeItem(agilitStorageType);
  }

  public static getData(agilitStorageType : AgilitStorageTypes){   
    return window.localStorage.getItem(agilitStorageType);
  }

  public static getDataJSON(agilitStorageType : AgilitStorageTypes){    
    return JSON.parse(window.localStorage.getItem(agilitStorageType));
  }

  public static setData(agilitStorageType : AgilitStorageTypes, data : Object|Array<any>|string){
    if (AgilitUtils.isNullOrUndefined(data)){
      return;
    }

    if (typeof data === 'object'){
      window.localStorage.setItem(agilitStorageType, JSON.stringify(data));
      return;
    }

    if (typeof data === 'string'){
      window.localStorage.setItem(agilitStorageType, data);
    }    
  }

  public static isKeyNullUndefined(agilitStorageType : AgilitStorageTypes){
    if (AgilitUtils.isNullOrUndefined(AgilitStorageUtils.getDataJSON(agilitStorageType))){
      return true;
    }

    return false;
  }
}