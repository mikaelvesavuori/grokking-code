import test from 'ava';

import { greet } from '../src/greet.mjs';

test('It should greet the user', (t) => {
  const expected = 'Hello World!';

  const result = greet('World');

  t.is(result, expected);
});
