import React from 'react';
import ReactDOM from 'react-dom';
import { ComparedCard } from './ComparedCard';
import { shallow } from 'enzyme';

let mockDistrict = 'Colorado'
let mockData = { 2004 : 0.24, 2005 : 0.278, 2006 : 0.337 }

describe('DistrictCard', () => {
  let mockSelectState = ['Colorado', 'Academy 20']
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ComparedCard district={mockDistrict} dataSet={mockData} cardsToCompare={mockSelectState}/>)
  })

  it('should render with a title district', () => {

    expect(wrapper.find('h3').length).toBe(1)
    expect(wrapper.find('h3').text()).toEqual(mockDistrict)
  })

  it('should have a class of selected ', () => {

    expect(wrapper.find('.selected')).toBeTruthy()
  })
})

  it('should return an empty div when no cards are selected', () => {
    const mockSelectStateEmpty = []
    const wrapper = shallow(<ComparedCard district={mockDistrict} dataSet={mockData} cardsToCompare={mockSelectStateEmpty}/>)

    expect(wrapper.find('div').first().text()).toEqual('')
  })
