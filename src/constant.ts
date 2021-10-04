/**
 * Font family
 */
export enum FONT_FAMILY {
  LATO = 'Lato, sans-serif',
  BITTER = 'Bitter, serif',
}
/**
 * sidebar list items -unauth
 */
export const sideBarLinks: Array<any> = [
  // This array holds sidebar values while being logged out
  [
    { route: '/', value: 'Login' },
    { route: '/register-organization', value: 'Register Organization' },
    { route: '/register-application', value: 'Register Application' },
  ],
  //This array holds sidebar values while being logged in
  [
    {
      title: 'Showing Events',
      submenu: [
        { route: '/register-property', value: 'Register Property' },
        {
          route: '/add-showing-restrictions',
          value: 'Add Showing Restrictions',
        },
        { route: '/respond-to-request', value: 'Respond to Request' },
        { route: '/cancel-appointment', value: 'Cancel Appointment' },
      ],
    },
    {
      title: 'Appointment Events',
      submenu: [
        { route: '/request-appointment', value: 'Request Appointment' },
        { route: '/cancel-appointments', value: 'Cancel Appointment' },
      ],
    },
    {
      title: 'Alerts',
      submenu: [
        { route: '/all-alerts', value: 'All Alerts' },
        { route: '/appointment-requests', value: 'Appointment Requests' },
        { route: '/request-response', value: 'Request Response' },
        { route: '/appointment-change', value: 'Appointment Change' },
      ],
    },
  ],
]

/**
 * COLORS
 */
export enum COLOR {
  brown = '#3E3C3C',
  yellow = '#FBB15A',
  grey = '#C4C4C4',
  red = '#ea4577',
}
/**
 * FONT WEIGHT
 */
export enum FONT_WEIGHT {
  NORMAL = 400,
  SEMIBOLD = 600,
  BOLD = 700,
}
/**
 *
 */
export const MODULE_HEADER_TITLE: any = {
  login: 'Login',
  register_organization: 'Register Organization',
  register_application: 'Register Application',
  register_property: 'Register Property',
  respond_to_request: 'Respond to Request',
  request_appointment: 'Request Appointment',
  add_showing_restrictions: 'Add Showing Restrictions',
  all_alerts: 'All Alerts',
  appointment_requests: 'Appointment Requests',
  request_response: 'Request Response',
  appointment_change: 'Appointment Change',
}

export const API_ERROR_MESSAGE = 'Something went wrong!'
export const API_URL_NOT_PRESENT = 'Api has not implemented'

export const REGISTER_ORG_TYPES: Array<any> = [
  { key: 'ShowingManager', value: 'ShowingManager' },
  { key: 'MLS', value: 'MLS' },
  { key: 'Brokerage', value: 'Brokerage' },
  { key: 'Syndicator', value: 'Syndicator' },
]

export const REGISTER_APP_TYPES: Array<any> = [
  { key: 'Read', value: 'Read' },
  { key: 'Write', value: 'Write' },
  { key: 'ReadWrite', value: 'ReadWrite' },
]

export const SHOWING_ALLOWED_TYPES: Array<any> = [
  { key: 'Showable', value: 'Showable' },
  { key: 'Not Showable', value: 'NotShowable' },
]

export const PROPERTY_CONFIRMATION_TYPES: Array<any> = [
  { key: 'Auto Approve', value: 'AutoApprove' },
  { key: 'Confirmation Required', value: 'ConfirmationRequired' },
  { key: 'Showing Instructions Only', value: 'ShowingInstructionsOnly' },
]

export const SHOWING_METHOD_TYPES: Array<any> = [
  { key: 'In-Person Only', value: 'InPersonOnly' },
  { key: 'Virtual Only', value: 'VirtualOnly' },
  { key: 'In-Person and Virtual', value: 'InPersonAndVirtual' },
]

export const REQUIRED_PARTICIPANTS_TYPES: Array<any> = [
  { key: 'Listing Agent', value: 'ListingAgent' },
  { key: 'Buying Agent', value: 'BuyingAgent' },
  { key: 'Both', value: 'BothBuyingAndListingAgent' },
  { key: 'None', value: 'NoParticipants' },
]

export const APPOINTMENT_TYPES: Array<any> = [
  { key: 'First Showing', value: 'FirstShowing' },
  { key: 'Second Showing', value: 'SecondShowing' },
  { key: 'Third Showing', value: 'ThirdShowing' },
  { key: 'Agent Preview', value: 'AgentPreview' },
  { key: 'Appraisal', value: 'Appraisal' },
  { key: 'Broker Price Opinion', value: 'BrokerPriceOpinion' },
  { key: 'Inspection', value: 'Inspection' },
  { key: 'Maintenance', value: 'Maintenance' },
  { key: 'Photography', value: 'Photography' },
  { key: 'Walk-Through', value: 'WalkThrough' },
]

export const EVENTS_MAPPING: any = {
  appointment_requests: 'RequestCreated',
  request_response: 'RequestChanged',
  appointment_change: 'AppointmentChanged',
}

export const ALERT_EVENT_TYPES: Array<any> = [
  { key: 'OrganizationCreated', value: 'OrganizationCreated' },
  { key: 'AppointmentDeleted', value: 'AppointmentDeleted' },
  { key: 'ShowListingDeleted', value: 'ShowListingDeleted' },
  { key: 'ApplicationDeleted', value: 'ApplicationDeleted' },
  { key: 'OrganizationDeleted', value: 'OrganizationDeleted' },
  { key: 'RequestCreated', value: 'RequestCreated' },
  { key: 'RequestChanged', value: 'RequestChanged' },
  { key: 'RequestDeleted', value: 'RequestDeleted' },
  { key: 'FeedbackCreated', value: 'FeedbackCreated' },
  { key: 'FeedbackChanged', value: 'FeedbackChanged' },
  { key: 'FeedbackDeleted', value: 'FeedbackDeleted' },
  { key: 'AppointmentChanged', value: 'AppointmentChanged' },
  { key: 'ShowListingChanged', value: 'ShowListingChanged' },
  { key: 'ApplicationChanged', value: 'ApplicationChanged' },
  { key: 'OrganizationChanged', value: 'OrganizationChanged' },
  { key: 'AppointmentCreated', value: 'AppointmentCreated' },
  { key: 'ShowListingCreated', value: 'ShowListingCreated' },
  { key: 'ApplicationCreated', value: 'ApplicationCreated' },
  { key: 'RestrictionCreated', value: 'RestrictionCreated' },
  {
    key: 'ReoccurringRestrictionCreated',
    value: 'ReoccurringRestrictionCreated',
  },
  { key: 'RestrictionChanged', value: 'RestrictionChanged' },
  {
    key: 'ReoccurringRestrictionChanged',
    value: 'ReoccurringRestrictionChanged',
  },
  { key: 'RestrictionDeleted', value: 'RestrictionDeleted' },
  {
    key: 'ReoccurringRestrictionDeleted',
    value: 'ReoccurringRestrictionDeleted',
  },
]

export enum enable_submenu {
  true = 1,
  false = 0,
}

export const APPOINTMENT_REQUESTS_COLUMNS: Array<any> = [
  'Date Received ↓',
  'Org ID',
  'App ID',
  'Subscription ID',
  'Event Type',
  'Attempt',
  'Data',
]

export const REQUEST_STATUS: Array<any> = [
  { key: 'Confirmed', value: 'Confirmed' },
  { key: 'Denied', value: 'Denied' },
]
