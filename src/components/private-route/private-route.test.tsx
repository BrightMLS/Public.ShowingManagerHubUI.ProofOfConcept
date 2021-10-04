import PrivateRoute from './private-route'
import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router'

describe('<PrivateRoute /> Component', () => {
  it('should render component if user has been authenticated', () => {
    const AComponent = () => <div>AComponent</div>
    const props = { path: '/aprivatepath', component: AComponent }

    const wrapper = shallow(
      <MemoryRouter initialEntries={[props.path]}>
        <PrivateRoute component={AComponent} path="/aprivatepath" />
      </MemoryRouter>,
    )
    localStorage.getItem('userDetails')
      ? expect(wrapper.exists(AComponent)).toBe(true)
      : expect(wrapper.exists(AComponent)).toBe(false)
  })
})
