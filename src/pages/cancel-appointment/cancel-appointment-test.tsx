import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CancelAppointment from './cancel-appointment'

describe('CancelAppointment /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CancelAppointment />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
