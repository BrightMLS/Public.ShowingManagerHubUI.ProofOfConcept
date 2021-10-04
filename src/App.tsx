import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import AppRoutes from 'app-routes'
import theme from 'theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        autoHideDuration={5000}
      >
        <AppRoutes />
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
