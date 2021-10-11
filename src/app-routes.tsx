import { BrowserRouter as Router, Switch } from 'react-router-dom'
import {
  Login,
  RegisterOrganization,
  RegisterApplication,
  RegisterProperty,
  RespondToRquest,
  RequestAppointment,
  AddShowingRestrictions,
  Alerts,
  CancelAppointment,
} from 'pages'
import { Layout, PrivateRoute, PublicRoute } from 'components'

const AppRoutes = () => (
  <Router>
    <Layout>
      <Switch>
        <PublicRoute exact path={'/'} component={Login} />
        <PublicRoute
          exact
          path={'/register-organization'}
          component={RegisterOrganization}
        />
        <PublicRoute
          exact
          path={'/register-application'}
          component={RegisterApplication}
        />
        <PrivateRoute
          exact
          path="/register-property"
          component={RegisterProperty}
        />
        <PrivateRoute
          exact
          path="/request-appointment"
          component={RequestAppointment}
        />
        <PrivateRoute
          exact
          path={'/add-showing-restrictions'}
          component={AddShowingRestrictions}
        />
        <PrivateRoute
          exact
          path={'/all-alerts'}
          component={Alerts}
          extraProps={{ componentType: 'all_alerts' }}
        />
        <PrivateRoute
          exact
          path={'/appointment-requests'}
          component={Alerts}
          extraProps={{ componentType: 'appointment_requests' }}
        />
        <PrivateRoute
          exact
          path={'/request-response'}
          component={Alerts}
          extraProps={{ componentType: 'request_response' }}
        />
        <PrivateRoute
          exact
          path={'/appointment-change'}
          component={Alerts}
          extraProps={{ componentType: 'appointment_change' }}
        />
        <PrivateRoute
          exact
          path="/respond-to-request"
          component={RespondToRquest}
        />
        <PrivateRoute
          exact
          path="/cancel-appointment"
          component={CancelAppointment}
        />
        <PrivateRoute
          exact
          path="/cancel-appointments"
          component={CancelAppointment}
        />
      </Switch>
    </Layout>
  </Router>
)

export default AppRoutes
