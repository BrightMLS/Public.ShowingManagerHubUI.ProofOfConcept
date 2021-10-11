import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import App from './App'

describe('<App /> Component', () => {
  it('should render <App /> without crashing', () => {
    const output = shallow(<App />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
