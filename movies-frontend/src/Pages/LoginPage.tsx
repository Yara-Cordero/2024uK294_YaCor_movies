import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import LoginService from '../service/LoginService';
import { useFormik } from 'formik';

function LoginPage() {
const navigate = useNavigate();

function handleSubmit(email: string, password: string) {

    LoginService().login({email, password})
    .then((response : { data: { accessToken: string}}) => {
        localStorage.setItem("token", "Bearer " + response.data.accessToken )
        navigate("/movies", {replace : true})
    })
    .catch((error: { response: { data : string }}) => {
        console.error(error.response.data)
    });
}

const formik = useFormik({
    initialValues: {
        email: "",
        password: ""
    },
    onSubmit: (values: {email: string; password: string}) => {
        handleSubmit(values.email, values.password)
    },
});

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
        <div
            style={{
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                width: "auto",
                margin: "auto",
                gap:"16px"
            }}
        >
            <TextField
                required
                id='email'
                label='Email'
                name='email'
                type='email'
                onChange={formik.handleChange} 
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <TextField
                required
                id='password'
                label='Password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
            />
            <Button
                variant='outlined'
                size='medium'
                type='submit'
                style={{
                    width: "30px",
                    alignItems: "center"
                }}
            >
                Login
            </Button>
        </div>
    </form>
    </>
  )
}

export default LoginPage