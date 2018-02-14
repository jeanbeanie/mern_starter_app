import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// provides Enzyme compatibility with React 16
Enzyme.configure({ adapter: new Adapter() });


/* EXAMPLE TESTS (ASYNC AND SYNC) */

test('Sync test example', t => {
    t.pass();
});

test('Async test ezample', async t => {
    const bar = Promise.resolve('bar');

      t.is(await bar, 'bar');
});


/* REACT COMPONENT TESTS */

// LAYOUT
import Layout from '../src/components/Layout';

test('Layout component renders children when passed in', t => {
  const wrapper = shallow(
      <Layout>
        <div className="foo"/>
      </Layout>
  );
  t.true(wrapper.contains(<div className="foo"/>));
});
