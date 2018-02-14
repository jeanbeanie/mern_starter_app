import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';

/* EXAMPLE TESTS (ASYNC AND SYNC) */

test('Sync test example', t => {
    t.pass();
});

test('Async test ezample', async t => {
    const bar = Promise.resolve('bar');

      t.is(await bar, 'bar');
});


