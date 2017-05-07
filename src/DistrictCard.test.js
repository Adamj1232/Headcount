import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCard from './DistrictCard';
import { shallow, mount } from 'enzyme';

describe('DistrictCard', () => {

  it('should render with a title district', () => {
    const mockDistrict = 'Colorado'
    const mockData = {'Colorado': { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 } }

    const wrapper = shallow(<DistrictCard district={mockDistrict} districtSet={mockData} selectedCards={[]}/>)

    expect(wrapper.find('h3').length).toBe(1)
    expect(wrapper.find('h3').text()).toEqual(mockDistrict)
  })

  it('should render a year component for each year of data', () => {
    const mockDistrict = 'Colorado'
    const mockData = {'Colorado': { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 } }

    const wrapper = mount(<DistrictCard district={mockDistrict} districtSet={mockData} selectedCards={[]}/>)

    expect(wrapper.find('.card-data').length).toBe(3)
    expect(wrapper.find('.card-data').first().text()).toEqual("2004 : 0.24")
  })

  it('should have a class of selected when selected', () => {
    const mockDistrict = 'Colorado'
    const mockData = {'Colorado': { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 } }

    const wrapper = shallow(<DistrictCard district={mockDistrict} districtSet={mockData} selectedCards={['Colorado', 'Academy 20']}/>)

    expect(wrapper.find('.selected').length).toBe(1)
  })

  it('should run a function when clicked', () => {
    const mockSelect = jest.fn()
    const mockDistrict = 'Colorado'
    const mockData = {'Colorado': { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 } }

    const wrapper = shallow(<DistrictCard district={mockDistrict} districtSet={mockData} districtSelect={mockSelect} selectedCards={[]}/>)

    wrapper.simulate('click')

    expect(mockSelect).toHaveBeenCalled()
  })

})
