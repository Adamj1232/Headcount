import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('App renders child components', () => {
  beforeEach(() => {
    const wrapper = mount(<App />)
  })

  it.only('renders with 181 district cards', () => {
    // const wrapper = mount(<App />)

    expect(wrapper.find('.card').length).toBe(181)
  })

  it('renders with 0 selected district cards', () => {
    // const wrapper = mount(<App />)

    expect(wrapper.find('.selected').length).toBe(0)
  })
})

it('renders with with a search input', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find('.selected').length).toBe(0)
})
