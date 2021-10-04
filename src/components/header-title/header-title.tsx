import { Typography } from '@material-ui/core'
import useStyle from './header-title-style'

interface IProps {
  title: string | null
}

const HeaderTitle = (props: IProps) => {
  const { title } = props
  const classes = useStyle()
  return (
    <Typography variant="h1" className={classes.root}>
      {title || null}
    </Typography>
  )
}
export default HeaderTitle
