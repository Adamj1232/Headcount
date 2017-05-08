import React from 'react';
import ReactDOM from 'react-dom';
import { DistrictYear } from './DistrictYear';
import { shallow } from 'enzyme';

describe('District Year', () => {

  it('should render with a year and data', () => {
    const mockYear = 2004
    const mockData = .04

    const wrapper = shallow(<DistrictYear year={mockYear} data={mockData} />)

    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('div').text()).toEqual(`${mockYear} : ${mockData}`)
  })

  it('data less than .5 should have a class of red', () => {
    const mockYear = 2004
    const mockData = .2

    const wrapper = shallow(<DistrictYear year={mockYear} data={mockData} />)

    expect(wrapper.find('.red')).toBeTruthy()
  })

  it('data greater than .5 should have a class of green', () => {
    const mockYear = 2004
    const mockData = .6

    const wrapper = shallow(<DistrictYear year={mockYear} data={mockData} />)

    expect(wrapper.find('.green')).toBeTruthy()
  })
})
