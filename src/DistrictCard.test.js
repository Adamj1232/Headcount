import React from 'react';
import ReactDOM from 'react-dom';
import { DistrictCard } from './DistrictCard';
import { shallow, mount } from 'enzyme';

let mockDistrict = 'Colorado'
let mockData = {'Colorado': { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 } }
let selectedCards = ['Colorado', 'Academy 20']

describe('DistrictCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<DistrictCard district={mockDistrict} districtSet={mockData} selectedCards={selectedCards}/>)
  })

  it('should render with a title district', () => {

    expect(wrapper.find('h3').length).toBe(1)
    expect(wrapper.find('h3').text()).toEqual(mockDistrict)
  })

  it('should have a class of selected when selected', () => {

    expect(wrapper.find('.selected').length).toBe(1)
  })
})


it('should render a year component for each year of data', () => {
  const wrapper = mount(<DistrictCard district={mockDistrict} districtSet={mockData} selectedCards={[]}/>)


  expect(wrapper.find('.card-data').length).toBe(3)
  expect(wrapper.find('.card-data').first().text()).toEqual("2004 : 0.24")
})
