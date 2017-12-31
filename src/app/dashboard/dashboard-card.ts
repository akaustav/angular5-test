import { InjectionToken } from '@angular/core';

export interface InputPropertyInterface {
  key: InjectionToken<string>;
  value: string;
}

export interface InputInterface {
  name: InputPropertyInterface;
  routerLink: InputPropertyInterface;
  color: InputPropertyInterface;
}

export class DashboardCard {
  static metadata: any = {
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    COLOR: new InjectionToken<string>('color')
  };

  constructor(
    private _input: InputInterface,
    private _component: any
  ) {}

  public get inputs(): any {
    return this._input;
  }

  public get component(): any {
    return this._component;
  }
}
