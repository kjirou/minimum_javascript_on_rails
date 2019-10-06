import {getMessageA} from './ecma-script-module';

test('getMessageA', () => {
  expect(getMessageA()).toBe('MessageA');
});
