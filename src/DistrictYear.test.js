import React from 'react';
import ReactDOM from 'react-dom';
import DistrictYear from './DistrictYear';
import { shallow } from 'enzyme';

describe('District Year', () => {

  it('should render with a year and data', () => {
    const mockYear = 2004
    const mockData = .04

    const wrapper = shallow(<DistrictYear year={mockYear} data={mockData} />)

    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('div').text()).toEqual(`${mockYear} : ${mockData}`)
  })
})
