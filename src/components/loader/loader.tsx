import { Typography, Backdrop } from '@material-ui/core'
import useStyles from './loader-style'

interface IProps {
  visible?: boolean
  title?: string
}

const Loader = ({ visible, title }: IProps) => {
  const classes = useStyles()

  return visible ? (
    <>
      <Backdrop
        open
        transitionDuration={0}
        className={classes.backdrop}
      ></Backdrop>
      <div className={classes.spinnerContainer}>
        <div className={classes.spinner} />
        {title && <Typography variant="h2">{title}</Typography>}
      </div>
    </>
  ) : null
}

Loader.defaultProps = {
  visible: true,
}

export default Loader
