import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe('App renders child components', () => {

  it('renders with 181 district cards', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find('.card').length).toBe(181)
  })

  it('renders with 0 selected district cards', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find('.selected').length).toBe(0)
  })

  it('renders with with a search input', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find('input').length).toBe(1)
  })
})

describe('App manages state', () => {
  it('renders with the full set of kindergarten data', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.state('dataSet').length).toEqual(181)
  })

  it('renders with no cards selected in state', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.state('selectedCards').length).toEqual(0)
  })

  // it('changes state when cards are selected', () => {
  //   const wrapper = mount(<App />)
  //
  //   const card = wrapper.find('.card').first();
  //
  //   console.log(card.simulate('click'))
  //
  //   expect(wrapper.state('selectedCards').length).toEqual(1)
  // })

  it('a change in state renders Comparison Cards', () => {
    const wrapper = mount(<App />)

    wrapper.setState({selectedCards: ['COLORADO', 'ACADEMY 20']})

    expect(wrapper.find('.compared').length).toBe(2)
  })

  it('should render a Comparison Card when two districts are selected', () => {
    const wrapper = mount(<App />)

    wrapper.setState({selectedCards: ['COLORADO', 'ACADEMY 20']})

    expect(wrapper.find('.comparison').length).toBe(1)
  })

})
