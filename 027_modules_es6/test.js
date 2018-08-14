//import only works in ES6.  Still 'require' for vanilla js
import { print, log } from './text-helpers';
import freel from './mt-freel';

print('printing a message');

print('logging a message');

freel.print();

//You can scope module variables locally under different variable names:

import { print as p, log as l } from './text-helpers';

You can also import everyithing into a single variable using *:

import * as fns from './text-helpers';