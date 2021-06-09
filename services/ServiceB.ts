import { injectable } from "inversify";
import { IDepB } from "../interfaces/IDepB";

@injectable()
export class ServiceB implements IDepB {
    doB(): void {
        console.log('doing B');
    }

}