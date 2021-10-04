import { Grid, Button, Typography } from '@material-ui/core'
import useStyle from './custom-button-style'
import clsx from 'clsx'

interface IProps {
  rootStyle?: string
  buttonStyle?: string
  textStyle?: string
  title?: string
}
const CustomButton = ({ title, rootStyle, buttonStyle, textStyle }: IProps) => {
  const classes = useStyle()
  return (
    <Grid
      container
      item
      xs={12}
      md={10}
      justifyContent="center"
      className={clsx(classes.buttonWrapper, rootStyle)}
    >
      <Button
        type="submit"
        className={clsx(classes.submitButton, buttonStyle)}
        variant="contained"
      >
        <Typography className={clsx(classes.textSubmit, textStyle)}>
          {title ? title : 'Submit'}
        </Typography>
      </Button>
    </Grid>
  )
}

export default CustomButton
