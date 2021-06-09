import { injectable } from "inversify";
import { IDepA } from "../interfaces/IDepA";

@injectable()
export class ServiceA implements IDepA {
    doA(): void {
        console.log('doing A');
    }

}