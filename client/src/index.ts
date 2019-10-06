import MessageQ, {getMessageO, messageP} from './typescript-module';

console.log(
  getMessageO(),
  messageP,
  new MessageQ().get(),
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
printMessageWithPromiseAndAsyncAwait();
