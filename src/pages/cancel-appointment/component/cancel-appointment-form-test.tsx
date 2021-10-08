import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CancelAppointmentForm from './cancel-appointment-form'
import { useFormik } from 'formik'

describe('<CancelAppointment /> Component', () => {
  it('should render without crashing', () => {
    const formik = useFormik({
      initialValues: {
        appointmentId: '',
        initiator: '',
        cancelReason: '',
        cancellationComments: '',
      },
      onSubmit: () => {
        jest.fn()
      },
    })
    const wrapper = shallow(<CancelAppointmentForm formik={formik} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
