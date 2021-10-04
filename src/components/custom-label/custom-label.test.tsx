import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CustomLabel from './custom-label'

describe('<CustomLabel /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <CustomLabel name="Application ID" isRequired={true} />,
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})

describe('<CustomLabel /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <CustomLabel name="Application ID" isRequired={false} />,
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
