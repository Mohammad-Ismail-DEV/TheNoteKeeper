import React, { useState } from 'react'
import {
    CircularProgress,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField,
    Fade,
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'

// styles
import './login.css'

// background
import bck from './bck.jpg'
// import google from "../../images/google.svg";

// api
import { LoginUser, registerUser } from '../../utils/api'

function Login(props) {
    // local
    var [isLoading, setIsLoading] = useState(false)
    var [error, setError] = useState(null)
    var [errorMessage, setErrorMessage] = useState('')
    var [activeTabId, setActiveTabId] = useState(0)
    var [nameValue, setNameValue] = useState('')
    var [loginValue, setLoginValue] = useState('')
    var [passwordValue, setPasswordValue] = useState('')

    const errors = {
        invalid_email: 'This User Does Not Exist',
        wrong_password: 'Incorrect Password',
        user_already_exists: 'Email Already Registered',
        invalid_email_format: 'Invalid Email',
        invalid_name_format: 'Enter First and Last Name',
    }

    const handleLogin = () =>
        LoginUser(
            loginValue,
            passwordValue,
            props.history,
            setIsLoading,
            setError,
            setErrorMessage
        )
    const handleSignup = () =>
        registerUser(
            nameValue,
            loginValue,
            passwordValue,
            props.history,
            setIsLoading,
            setError,
            setErrorMessage
        )
    return (
        <div>
            <div
                className="img"
                style={{
                    backgroundImage: `url(${bck})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    textShadow:
                        '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                }}
            >
                <div className="titleContainer">
                    <Typography variant="h1" className="title">
                        The Note Keeper
                    </Typography>
                </div>
            </div>
            <div className="formContainer">
                <div className="form">
                    <Tabs
                        value={activeTabId}
                        onChange={(e, id) => {
                            setError(false)
                            setErrorMessage('')
                            setActiveTabId(id)
                        }}
                        indicatorColor="primary"
                        textColor="inherit"
                        centered
                    >
                        <Tab label="Login" className="tab" />
                        <Tab label="Register" className="tab" />
                    </Tabs>
                    {activeTabId === 0 && (
                        <React.Fragment>
                            <Fade in={error}>
                                <Typography color="secondary">
                                    {errors[errorMessage]}
                                </Typography>
                            </Fade>
                            <TextField
                                id="email"
                                value={loginValue}
                                onChange={(e) => setLoginValue(e.target.value)}
                                margin="normal"
                                placeholder="Email Adress"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                value={passwordValue}
                                onChange={(e) =>
                                    setPasswordValue(e.target.value)
                                }
                                margin="normal"
                                placeholder="Password"
                                type="password"
                                fullWidth
                            />
                            <div>
                                {isLoading ? (
                                    <CircularProgress size={26} />
                                ) : (
                                    <Button
                                        disabled={
                                            loginValue.length === 0 ||
                                            passwordValue.length === 0
                                        }
                                        onClick={handleLogin}
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        size="large"
                                    >
                                        Login
                                    </Button>
                                )}
                            </div>
                        </React.Fragment>
                    )}
                    {activeTabId === 1 && (
                        <React.Fragment>
                            <Fade in={error}>
                                <Typography color="secondary">
                                    {errors[errorMessage]}
                                </Typography>
                            </Fade>
                            <TextField
                                id="name"
                                value={nameValue}
                                onChange={(e) => setNameValue(e.target.value)}
                                margin="normal"
                                placeholder="Full Name"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                id="email"
                                value={loginValue}
                                onChange={(e) => setLoginValue(e.target.value)}
                                margin="normal"
                                placeholder="Email Adress"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                value={passwordValue}
                                onChange={(e) =>
                                    setPasswordValue(e.target.value)
                                }
                                margin="normal"
                                placeholder="Password"
                                type="password"
                                fullWidth
                            />
                            <div>
                                {isLoading ? (
                                    <CircularProgress size={26} />
                                ) : (
                                    <Button
                                        onClick={handleSignup}
                                        disabled={
                                            loginValue.length === 0 ||
                                            passwordValue.length === 0 ||
                                            nameValue.length === 0
                                        }
                                        size="large"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Create your account
                                    </Button>
                                )}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
