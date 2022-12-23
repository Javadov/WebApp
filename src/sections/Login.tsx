import React, { useEffect, useState } from 'react'
import Admin from '../Admin/Admin'


interface ILoginError {
    _firstName: string
    _lastName: string
    _email: string
    _password: string
}

const Login: React.FC = () => {

    const DEFAULT_VALUE: ILoginError = {_firstName: '',_lastName: '', _email: '', _password: ''}

    const [LoginForm, setLoginForm] = useState<ILoginError>(DEFAULT_VALUE)
    const [errors, setErrors] = useState<ILoginError>(DEFAULT_VALUE)
    const [token, setToken] = useState(null)
    const [signInSubmitted, setSignInSubmitted] = useState<boolean>(false)
    const [signUpSubmitted, setSignUpSubmitted] = useState<boolean>(false)
    const [signInFailed, setSignInFailed] = useState<boolean>(false)
    const [signUpFailed, setSignUpFailed] = useState<boolean>(false)
    
    useEffect(() => {
        setToken(localStorage.accessToken);
    }, []);

    const handleSignIn = async (e: any) => {
        e.preventDefault()
        setSignInSubmitted(false)
        setSignInFailed(false)
    
        const user = {
            _email: e.target[0].value,
            _password: e.target[1].value
        }

        const result = await fetch('http://localhost:9000/api/authentication/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    
        const data = await result.json()
        localStorage.setItem(`accessToken`, data.accessToken)

        if (result.status === 200 && localStorage.accessToken !== null) {
            setSignInSubmitted(true)
            setLoginForm(DEFAULT_VALUE)
        } else {
            setSignInSubmitted(false)
            setSignInFailed(true)
        }
    }

    const handleSignUp = async (e: any) => {
        e.preventDefault()
        setSignUpSubmitted(false)
        setSignUpFailed(false)
    
        const user = {
            _firstName: e.target[0].value,
            _lastName: e.target[1].value,
            _email: e.target[2].value,
            _password: e.target[3].value
        }

        const result = await fetch('http://localhost:9000/api/authentication/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    
        const data = await result.json()
        console.log(data)

        if (result.status === 201) {
            setSignUpSubmitted(true)
            setLoginForm(DEFAULT_VALUE)
        } else {
            setSignUpSubmitted(false)
            setSignUpFailed(true)
        }
    }

    return (
    <section className="__mobile-login">
        <div className="container">
            <div className="row full-height justify-content-center">
                <div className="col-12 text-center align-self-center py-5">
                    {   
                        token ?
                        (
                            <Admin />
                        )                     
                        : 
                        (
                            signInSubmitted ?  
                            (
                                <div > 
                                    <Admin />
                                </div>
                            ) 
                            :
                            
                            signInFailed ?     
                            (
                            <> 
                                <input className="checkbox __hidden" type="checkbox" id="reg-log" name="reg-log"/>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">

                                        <p className="alert alert-danger text-center __signedup">Login Failed 
                                            <input className="__hidden" type="checkbox" id="reg-log" name="reg-log" />
                                            <label htmlFor="reg-log">Please try again</label>
                                        </p>

                                        <div className="card-back">

                                        <div className="card-login">
                                                <h4>LOGIN</h4>
                                                <form id="signinForm_mobile" onSubmit={handleSignIn}>
                                                    <div className="mb-4">
                                                        <label htmlFor="signin_mobile_email">E-mail adress <span className="required">*</span></label>
                                                        <input id="signin_mobile_email"  type="text" placeholder="Javadov@" required />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="signin_mobile_password">Password <span className="required">*</span></label>
                                                        <input id="signin_mobile_password"  type="password" placeholder="*****" required />
                                                    </div>
                                                    <div className="mb-4 d-grid">
                                                        <button type="submit" className="btn button-login"><span>LOG IN</span></button>
                                                    </div> 
                                                </form>
                                                <div className="mb-4 password-settings d-flex j-c a-i">
                                                    <div><input id="signin_rememberMe" type="checkbox" /> 
                                                        <label htmlFor="signin_rememberMe">Remember me</label>
                                                    </div>
                                                    <div><a href="#">Lost your password?</a></div>
                                                </div>
                                                <div className="mb-4 alternative-login d-flex j-c a-i"> 
                                                    <hr />
                                                    <div className="button_margin">
                                                        <h6>OR LOGIN WITH</h6>
                                                    </div>
                                                    <hr />
                                                </div>    
                                                <div className="d-flex justify-content-evenly a-i">
                                                <a href="">fb image</a>
                                                <a href="">google image</a>  
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </>
                            )
                            :

                            signUpSubmitted ?  
                            (
                            <>  
                                <input className="checkbox __hidden" type="checkbox" id="reg-log" name="reg-log"/>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front"> 
                                            <p className="alert alert-warning text-center __signedup">Please 
                                                <input className="__hidden" type="checkbox" id="reg-log" name="reg-log" />
                                                <label htmlFor="reg-log">login</label>
                                            </p>
                                        </div>
                                        <div className="card-back">

                                            <div className="card-login">
                                                <h4>LOGIN</h4>
                                                <form id="signinForm_mobile" onSubmit={handleSignIn}>
                                                    <div className="mb-4">
                                                        <label htmlFor="signin_mobile_email">E-mail adress <span className="required">*</span></label>
                                                        <input id="signin_mobile_email"  type="text" placeholder="Javadov@" required />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="signin_mobile_password">Password <span className="required">*</span></label>
                                                        <input id="signin_mobile_password"  type="password" placeholder="*****" required />
                                                    </div>
                                                    <div className="mb-4 d-grid">
                                                        <button type="submit" className="btn button-login"><span>LOG IN</span></button>
                                                    </div> 
                                                </form>
                                                <div className="mb-4 password-settings d-flex j-c a-i">
                                                    <div><input id="signin_rememberMe" type="checkbox" /> 
                                                        <label htmlFor="signin_rememberMe">Remember me</label>
                                                    </div>
                                                    <div><a href="#">Lost your password?</a></div>
                                                </div>
                                                <div className="mb-4 alternative-login d-flex j-c a-i"> 
                                                    <hr />
                                                    <div className="button_margin">
                                                        <h6>OR LOGIN WITH</h6>
                                                    </div>
                                                    <hr />
                                                </div>    
                                                <div className="d-flex justify-content-evenly a-i">
                                                <a href="">fb image</a>
                                                <a href="">google image</a>  
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </>
                            )                     
                            : 
                            
                                
                            signUpFailed ?     (<div> <p className="alert alert-warning text-center">SignUp Failed</p> </div>) 
                            :
                            (
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                                    <label htmlFor="reg-log"></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">

                                            <div className="card-front">
                                                <div className="card-login">
                                                    <h4>LOGIN</h4>
                                                    <form id="signinForm_mobile" onSubmit={handleSignIn}>
                                                        <div className="mb-4">
                                                            <label htmlFor="signin_mobile_email">E-mail adress <span className="required">*</span></label>
                                                            <input id="signin_mobile_email"  type="text" placeholder="Javadov@" required />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="signin_mobile_password">Password <span className="required">*</span></label>
                                                            <input id="signin_mobile_password"  type="password" placeholder="*****" required />
                                                        </div>
                                                        <div className="mb-4 d-grid">
                                                            <button type="submit" className="btn button-login"><span>LOG IN</span></button>
                                                        </div> 
                                                    </form>
                                                    <div className="mb-4 password-settings d-flex j-c a-i">
                                                        <div><input id="signin_rememberMe" type="checkbox" /> 
                                                            <label htmlFor="signin_rememberMe">Remember me</label>
                                                        </div>
                                                        <div><a href="#">Lost your password?</a></div>
                                                    </div>
                                                    <div className="mb-4 alternative-login d-flex j-c a-i"> 
                                                        <hr />
                                                        <div className="button_margin">
                                                            <h6>OR LOGIN WITH</h6>
                                                        </div>
                                                        <hr />
                                                    </div>    
                                                    <div className="d-flex justify-content-evenly a-i">
                                                    <a href="">fb image</a>
                                                    <a href="">google image</a>  
                                                    </div>
                                                </div>  
                                            </div> 

                                            <div className="card-back">
                                                <div className="card-login">
                                                    <h4>REGISTER</h4>
                                                    <form id="signupForm_mobile" onSubmit={handleSignUp}>
                                                        <p className="card-text-small">
                                                            Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                                                        </p>
                                                        <div className="mb-4">
                                                            <label htmlFor="signup_mobile_firstName">Firstname <span className="required">*</span></label>
                                                            <input id="signup_mobile_firstName"  type="text" placeholder="Elvin" required />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="signup_mobile_lastName">Lastname <span className="required">*</span></label>
                                                            <input id="signup_mobile_lastName"  type="text" placeholder="Javadov" required />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="signup_mobile_email">E-mail adress <span className="required">*</span></label>
                                                            <input id="signup_mobile_email"  type="text" placeholder="Javadov@domain.com" required />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="signup_mobile_password">Password <span className="required">*</span></label>
                                                            <input id="signup_mobile_password"  type="password" placeholder="*****" required />
                                                        </div>
                                                        <p className="mb-4 card-text-medium">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="">privacy policy.</a></p>
                                                        <div className="d-grid">
                                                            <button type="submit" className="btn button-login"><span>REGISTER</span></button>
                                                        </div> 
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )

                        )
                    }
                </div>
            </div>
        </div>
	</section>
  )
}

export default Login