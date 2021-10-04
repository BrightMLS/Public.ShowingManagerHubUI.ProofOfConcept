import { Theme, makeStyles } from '@material-ui/core/styles'

const PostRequestFormStyle = makeStyles((theme: Theme) => ({
  root: { display: 'flex', justifyContent: 'center' },
  form: { display: 'flex', width: '100%' },
  postwarpperForm: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  rootStyle: { marginTop: theme.spacing(2.5) },
}))

export default PostRequestFormStyle
