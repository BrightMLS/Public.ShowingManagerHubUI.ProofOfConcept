import { Theme, makeStyles } from '@material-ui/core/styles'
interface IStyleProps {
  rowsData: boolean | undefined
}
const ResponseHubStyle = makeStyles<Theme, IStyleProps>((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  inputType: {
    background: 'rgba(196, 196, 196, 1)',
    width: ({ rowsData }) => (rowsData ? '100%' : 700),
    maxWidth: '100%',
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(2),
    minHeight: 150,
    maxHeight: 500,
    overflow: 'auto',
    padding: theme.spacing(1),
    border: '1px solid #000000',
    [theme.breakpoints.down('md')]: {
      width: 400,
    },
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
    [theme.breakpoints.down('xs')]: {
      width: 250,
    },
  },
  typoStyle: { marginLeft: theme.spacing(0.3) },
}))

export default ResponseHubStyle
