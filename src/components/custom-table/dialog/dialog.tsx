import { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import { sanitize } from 'dompurify'
import useStyles from './dialog-style'
import { Button } from '@material-ui/core'

interface Iprops {
  data: Record<string, any>
}

const SimpleModal = (props: Iprops) => {
  const { data } = props
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.text}>
        Data
      </h2>
      <p
        id="simple-modal-description"
        dangerouslySetInnerHTML={{
          __html: sanitize(
            data
              ? JSON.stringify(data, null, 10).replace(
                  /\n( *)/g,
                  function (match, p1) {
                    return '<br>' + '&nbsp;'.repeat(p1.length)
                  },
                )
              : '',
          ),
        }}
      ></p>
    </div>
  )

  return (
    <>
      {data ? (
        <Button
          variant="contained"
          type="button"
          onClick={handleOpen}
          className={classes.button}
        >
          Show Data
        </Button>
      ) : (
        <div className={classes.disabledButton}>N/A</div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  )
}

export default SimpleModal
