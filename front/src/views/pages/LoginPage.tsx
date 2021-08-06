import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core'

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography align="center" component="h1" variant="h5">
          ログイン画面
        </Typography>
        <form noValidate action="/test" method="get">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            ログイン
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/regist" variant="body2">
                {'新規会員登録'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default LoginPage
