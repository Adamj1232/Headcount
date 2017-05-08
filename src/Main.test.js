import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { shallow, mount } from 'enzyme';

describe('Main', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Main />)
  })

  it('renders with an input field', () => {
    expect(wrapper.find('input').length).toBe(1)
  })

  it('renders with an empty string as state', () => {
    expect(wrapper.state('search')).toEqual('')
  })
})

it('updates state on Change', () => {
  const mockSubmit = jest.fn();
  const wrapper = shallow(<Main handleSearch={mockSubmit}/>)

  const input = wrapper.find('input')

  const expectedState = {search: 'colorado'}

  input.simulate('change', {target: {value: 'colorado'}})
  expect(wrapper.state()).toEqual(expectedState)
  expect(mockSubmit).toHaveBeenCalled()
})
