import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ResponseHub from './response-hub'
describe('<ResponseHub /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <ResponseHub isResponse={true} responseObject={null} />,
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

describe('<ResponseHub /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <ResponseHub isResponse={false} responseObject={null} />,
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
