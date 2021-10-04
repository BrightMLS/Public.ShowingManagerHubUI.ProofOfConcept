import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SideBar from './sidebar'

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
  useHistory: jest.fn().mockImplementation(() => ({})),
}))

describe('<SideBar /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SideBar />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
