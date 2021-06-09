import { inject, injectable } from "inversify";
import { IDepA } from "../interfaces/IDepA";
import { IDepB } from "../interfaces/IDepB";
import { IDepC } from "../interfaces/IDepC";
import { TYPES } from "../types";

@injectable()
export class ServiceC implements IDepC {
    constructor(
        @inject(TYPES.IDepA)
        private _a: IDepA,
        @inject(TYPES.IDepB)
        private _b: IDepB
    ) {

    }
    doC(): void {
        this._a.doA();
        this._b.doB();
    }

}