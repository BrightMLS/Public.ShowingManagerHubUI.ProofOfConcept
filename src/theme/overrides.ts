import { Theme } from '@material-ui/core'

const overrides = (theme: Theme) => ({
  MuiOutlinedInput: {
    input: {
      padding: theme.spacing(0.75, 1),
      fontSize: '0.9375rem',
    },
  },
  MuiButton: {
    label: {
      fontSize: '0.75rem',
    },
    contained: {
      boxShadow: 'none !important',
    },
    containedSecondary: {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(0.625, 2),
      '&:hover': {
        backgroundColor: '#ffbe9f',
      },
    },
  },
})

export default overrides
