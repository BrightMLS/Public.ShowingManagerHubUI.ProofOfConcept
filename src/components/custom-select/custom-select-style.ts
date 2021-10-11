import { Theme, makeStyles } from '@material-ui/core/styles'

const CustomSelectStyle = makeStyles((theme: Theme) => ({
  root: { display: 'flex', flexDirection: 'column' },
  inputField: {
    background: 'rgba(196, 196, 196, 1)',
    maxHeight: 30,
    width: 223,
    maxWidth: '100%',
    border: '#000',
    borderWidth: 1,
  },
}))

export default CustomSelectStyle
