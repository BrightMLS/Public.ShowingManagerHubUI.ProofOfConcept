import { Typography } from '@material-ui/core'
import useStyle from './custom-label-style'
import clsx from 'clsx'
interface IProps {
  name: string | undefined
  isRequired?: boolean
  customLableStyle?: string
}
const CustomLabel = ({ name, isRequired, customLableStyle }: IProps) => {
  const classes = useStyle()
  return (
    <Typography
      variant="inherit"
      className={clsx(classes.placeHolder, customLableStyle)}
    >
      {`${name}${isRequired ? '*' : ''}`}
    </Typography>
  )
}

export default CustomLabel
