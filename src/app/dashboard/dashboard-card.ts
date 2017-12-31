import { InjectionToken } from '@angular/core';

export class InputProperty {
  constructor(
    public key: InjectionToken<string>,
    public value: string
  ) {}
}

export class InputToken {
  constructor (
    public name: InputProperty,
    public routerLink: InputProperty,
    public iconClass: InputProperty,
    public color: InputProperty
  ) {}
}

export class DashboardCard {
  static metadata: any = {
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    ICONCLASS: new InjectionToken<string>('iconClass'),
    COLOR: new InjectionToken<string>('color')
  };

  constructor(
    private _input: InputToken,
    private _component: any
  ) {}

  public get inputs(): any {
    return this._input;
  }

  public get component(): any {
    return this._component;
  }
}
