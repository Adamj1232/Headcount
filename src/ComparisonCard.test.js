import React from 'react';
import ReactDOM from 'react-dom';
import { ComparisonCard } from './ComparisonCard';
import { shallow } from 'enzyme';
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';



describe('DistrictCard', () => {

  it('should render a card with class of comparison', () => {
    const dataSet = new DistrictRepository(kinderData)
    const mockSelectState = ['Colorado', 'Academy 20']

    const wrapper = shallow(<ComparisonCard dataSet={dataSet} cardsToCompare={mockSelectState}/>)

    expect(wrapper.find('.comparison').length).toBe(1)
  })

  it('should list the districtName and average', () => {
    const dataSet = new DistrictRepository(kinderData)
    const mockSelectState = ['Colorado', 'Academy 20']


    const wrapper = shallow(<ComparisonCard dataSet={dataSet} cardsToCompare={mockSelectState}/>)
    const firstDistrict = wrapper.find('.comparison-district').first().text()
    const firstAverage = wrapper.find('.comparison-average').first().text()


    expect(firstDistrict).toEqual(mockSelectState[0].toUpperCase())
    expect(firstAverage).toEqual('0.53')
  })

  it('should compare the averages of the two schools', () => {
    const dataSet = new DistrictRepository(kinderData)
    const mockSelectState = ['Colorado', 'Academy 20']
    const wrapper = shallow(<ComparisonCard dataSet={dataSet} cardsToCompare={mockSelectState}/>)
    const expectedAverage = wrapper.find('.comparison-average').last().text()

    expect(expectedAverage).toEqual('1.302')
  })



})
