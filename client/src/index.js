// This polyfill way is the easiest way, but it has the largest file size and has some global side effects.
// If you want to know different ways, you may want to read from the following article.
// https://babeljs.io/blog/2019/03/19/7.4.0#core-js-3-7646-https-githubcom-babel-babel-pull-7646
import 'core-js/stable';
import 'regenerator-runtime/runtime';

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

// If this method works with older browsers (eg. IE11),
//   then cross-browser support is probably fine.
async function printMessageWithPromiseAndAsyncAwait() {
  async function delay(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
  await delay(200).then(() => {
    console.log('Cound use async/await!');
  });
};
printMessageWithAsyncAwait();
