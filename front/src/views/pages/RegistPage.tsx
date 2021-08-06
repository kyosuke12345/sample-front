import React from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const stepLabels = ['登録', '確認', '完了']

const REGIST_STEP = {
  REGIST: 0,
  CONFIRM: 1,
  COMPLETE: 2,
} as const

const RegistPage: React.FC = () => {
  const [step, setStep] = React.useState(0)

  const handleNext = () => {
    setStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Stepper activeStep={step} alternativeLabel>
          {stepLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {step === REGIST_STEP.REGIST && (
          <>
            <form noValidate>
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </form>
          </>
        )}
        {step === REGIST_STEP.COMPLETE && (
          <Typography variant="body1">登録が完了しました。</Typography>
        )}

        <Grid container alignItems="center" justify="center">
          <Grid item>
            {step === REGIST_STEP.COMPLETE ? (
              <Link to="/">ログイン画面へ</Link>
            ) : (
              <>
                <Button disabled={step === 0} onClick={handleBack}>
                  戻る
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {step === REGIST_STEP.CONFIRM ? '登録' : '次へ'}
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default RegistPage
