import React from 'react';
import ReactDOM from 'react-dom';
import { DistrictYear } from './DistrictYear';
import { shallow } from 'enzyme';

describe('District Year', () => {
  let wrapper
  let mockData = .04
  let mockYear

  beforeEach(() => {
    mockYear = '2004'
    wrapper = shallow(<DistrictYear year={mockYear} data={mockData} />)
  })

  it('should render with a year and data', () => {

    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('div').text()).toEqual(`${mockYear} : ${mockData}`)
  })

  it('data less than .5 should have a class of red', () => {
    mockData = .2

    expect(wrapper.find('.red')).toBeTruthy()
  })

  it('data greater than .5 should have a class of green', () => {
    mockData = .6

    expect(wrapper.find('.green')).toBeTruthy()
  })
})
