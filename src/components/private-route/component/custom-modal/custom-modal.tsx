import { useHistory } from 'react-router-dom'
import React from 'react'
import useStyles from './custom-modal-style'
import Modal from '@material-ui/core/Modal'
import { Button } from '@material-ui/core'

const CustomModal = ({ component, ...rest }: any) => {
  const classes = useStyles()
  let history = useHistory()

  const handleClose = () => {
    localStorage.clear()
    history.push('/')
  }
  const modal = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.text}>
        YOUR SESSION HAS EXPIRED! Login Again
      </h2>
      <div className={classes.button}>
        <Button
          variant="contained"
          type="submit"
          onClick={handleClose}
          className={classes.close}
        >
          Close
        </Button>
      </div>
    </div>
  )

  return (
    <Modal
      open={true}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {modal}
    </Modal>
  )
}

export default CustomModal
