import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import HeaderTitle from './header-title'

describe('<HeaderTitle /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<HeaderTitle title={'title'} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
