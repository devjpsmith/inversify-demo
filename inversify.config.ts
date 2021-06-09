import 'reflect-metadata';
import { Container } from 'inversify';
import { IDepA } from './interfaces/IDepA';
import { IDepB } from './interfaces/IDepB';
import { IDepC } from './interfaces/IDepC';
import { TYPES } from './types';
import { ServiceC } from './services/ServiceC';
import { ServiceB } from './services/ServiceB';
import { ServiceA } from './services/ServiceA';

let container = new Container();

// transient by default

// always the same instance
container.bind<IDepA>(TYPES.IDepA).to(ServiceA).inSingletonScope();
// new instance each time
container.bind<IDepB>(TYPES.IDepB).to(ServiceB).inTransientScope();
// singleton, but transient to each http request (as in a backend api)
container.bind<IDepC>(TYPES.IDepC).to(ServiceC).inRequestScope();

export default container;