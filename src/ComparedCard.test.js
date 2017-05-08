import React from 'react';
import ReactDOM from 'react-dom';
import { ComparedCard } from './ComparedCard';
import { shallow } from 'enzyme';

describe('DistrictCard', () => {

  it('should render with a title district', () => {
    const mockDistrict = 'Colorado'
    const mockData = { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 }
    const mockSelectState = ['Colorado', 'Academy 20']

    const wrapper = shallow(<ComparedCard district={mockDistrict} dataSet={mockData} cardsToCompare={mockSelectState}/>)

    expect(wrapper.find('h3').length).toBe(1)
    expect(wrapper.find('h3').text()).toEqual(mockDistrict)
  })

  it('should have a class of selected ', () => {
    const mockDistrict = 'Colorado'
    const mockData = { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 }
    const mockSelectState = ['Colorado', 'Academy 20']

    const wrapper = shallow(<ComparedCard district={mockDistrict} dataSet={mockData} cardsToCompare={mockSelectState}/>)

    expect(wrapper.find('.selected')).toBeTruthy()
  })

  it('should return an empty div when no cards are selected', () => {
    const mockDistrict = 'Colorado'
    const mockData = { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 }
    const mockSelectState = []

    const wrapper = shallow(<ComparedCard district={mockDistrict} dataSet={mockData} cardsToCompare={mockSelectState}/>)


    expect(wrapper.find('div').first().text()).toEqual('')
  })

})
