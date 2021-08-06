import { createTheme, ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './views/pages/LoginPage'
import RegistPage from './views/pages/RegistPage'
import PaperBase from './views/PaperBase'

let theme = createTheme({
  palette: {
    primary: {
      light: '#E69138',
      main: '#E38932',
      dark: '#DF7E2B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#388de6',
      main: '#328ce3',
      dark: '#2b8cdf',
      contrastText: '#fff',
    },
  },
})

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
  },
}

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={LoginPage} exact />
              <Route path="/regist" component={RegistPage} exact />
              <PaperBase>
                <Route path="/test" exact>
                  <div>test</div>
                </Route>
              </PaperBase>
              <Route>
                <div>Not Found</div>
              </Route>
            </Switch>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

export default App
