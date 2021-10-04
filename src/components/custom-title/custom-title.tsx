import { Typography } from '@material-ui/core'
import useStyle from './custom-title-style'

interface IProps {
  title: string | null
}

const CustomTitle = (props: IProps) => {
  const { title } = props
  const classes = useStyle()
  return (
    <Typography variant="h6" className={classes.root}>
      {title || null}
    </Typography>
  )
}
export default CustomTitle
