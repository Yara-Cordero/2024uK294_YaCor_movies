import { AppBar, Box, Container, Grid, TextField } from '@mui/material'

function Login() {



  return (
    <Box>
        <Container>
            <AppBar></AppBar>
            <Grid container>
                <Grid item>
                    <h2>Login</h2>
                </Grid>
            </Grid>
            <Grid container>
                    <TextField label='username'margin='dense'/>
            </Grid>
            <Grid container>
                <TextField id='outlined-required' label='password'/>
            </Grid>
        </Container>
    </Box>
    
  )
}

export default Login