import { IDepC } from './interfaces/IDepC';
import container from './inversify.config';
import { TYPES } from './types';

var c = container.get<IDepC>(TYPES.IDepC);

c.doC();