import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Loader from './loader'

describe('<Loader /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Loader visible={true} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

describe('<Loader /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Loader visible={false} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
