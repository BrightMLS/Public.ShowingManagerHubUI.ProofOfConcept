import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Layout from './layout'

describe('<Layout /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Layout children={null} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
