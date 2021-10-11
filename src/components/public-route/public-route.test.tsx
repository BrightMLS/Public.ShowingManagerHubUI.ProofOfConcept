import PublicRoute from './public-route'
import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { isPublicRoute } from 'utils'

describe('<PrivateRoute /> Component', () => {
  it('should render component if user has been authenticated', () => {
    const AComponent = () => <div>AComponent</div>
    const props = { path: '/aprivatepath', component: AComponent }

    const wrapper = shallow(
      <MemoryRouter initialEntries={[props.path]}>
        <PublicRoute component={AComponent} path="/aprivatepath" />
      </MemoryRouter>,
    )
    isPublicRoute()
      ? expect(wrapper.exists(AComponent)).toBe(false)
      : expect(wrapper.exists(AComponent)).toBe(true)
  })
})
