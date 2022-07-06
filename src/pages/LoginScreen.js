// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';

// Styles
import './LoginScreen.css';

const LoginScreen = () => {


    return (
        <div className='container'>
            <div id="login-page" className="row">
                <div className="col s12 z-depth-6 card-panel">
                    <form className="login-form">
                        <div className="row"></div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mail_outline</i>
                                <input className="validate" id="email" type="email"/>
                                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <input id="password" type="password"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button type='submit' className="btn waves-effect waves-light col s12">Ingresar</button>
                            </div>
                        </div>
                        <p className='or'>- o -</p>
                        <div className="row">
                            <div className="input-field col s12 googleBtn">
                                <GoogleButton onClick={() => {console.log('google')}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <p className="margin medium-small"><Link to='/register'>¿No tienes cuenta? Registrate aqui!</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;