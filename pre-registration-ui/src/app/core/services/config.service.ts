import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configs = {};

  public setConfig(configJson: any) {
    console.log('config',configJson);
    localStorage.setItem('config',JSON.stringify(configJson.response));

  }

  public getConfigByKey(key: string) {
    return  {...JSON.parse(localStorage.getItem('config'))}[key];
  }

  public getConfig() {
    return {...JSON.parse(localStorage.getItem('config'))};
  }
}
