// MODULES: Allow code sharing between javascript files.
// REQUIRE FILES:
import something from 'framework'; // import specific method from framework
import * as something from 'framework'; // import all from framework
import { matchedProp } from 'framework'; // 

// EXPOSE VALUES:
export default function something {}
export var value = 'value';
export var another = 'value2';
export var matchedProp = 'someValue';