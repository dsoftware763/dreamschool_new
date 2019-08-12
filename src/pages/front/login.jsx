import React from 'react';
import {Input} from '../../components/UI'

const Login = () => {
    return(
        <div class="login-signup-form">
            <div class="form-content custom-form-content">
                <h2>Log in</h2>

                <form id="new_session" class="new_user" action="/users/sign-in" accept-charset="UTF-8" method="post" novalidate="novalidate">
                    <Input type="hidden" name="authenticity_token" value="zSqdbIuUyP/XYWf73pVChFfUux4z85ROG5+oEewE9RG7aRVWKCkH4cAf+b26msd6X2ZGFVzeTB2yzfMe+XLtBA==" />
                


                    <div class="form-group">
                        <label for="user_email">Email</label><br />
                        <Input class="form-control" type="email" value="" name="user[email]" id="user_email" />
                    </div>

                    <div class="form-group">
                        <label for="user_password">Password</label>
                        <br />
                        <Input autocomplete="off" class="form-control" type="password" name="user[password]" id="user_password" />
                    </div>


                    <label for="user_remember_me">
                        <Input name="user[remember_me]" type="hidden" value="0" />
                        <Input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me" /> Remember me
                    </label>
                <div class="form-actions">
                    <Input type="submit" name="commit" value="Login" class="btn btn-custom" data-disable-with="Login" />
                </div>
            </form>
                
            <a href="/users/sign-up">Sign up</a><br />

            <a href="/users/password/new">Forgot your password?</a><br />




            </div>
        </div>
    )
}

export default Login;