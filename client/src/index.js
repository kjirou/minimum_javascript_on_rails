import commonJsModuleByImport, {message1} from './common-js-module';
import MessageC, {getMessageA, messageB} from './ecma-script-module';
import MessageZ, {getMessageX, messageY} from './strict-ecma-script-module';

const commonJsModuleByRequire = require('./common-js-module');

console.log(
  message1,
  commonJsModuleByRequire.message2,
  commonJsModuleByImport.message3,
  getMessageA(),
  messageB,
  new MessageC().get(),
  getMessageX(),
  messageY,
  new MessageZ().get(),
);
