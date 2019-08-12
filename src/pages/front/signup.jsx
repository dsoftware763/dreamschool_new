import React from 'react';
import {Input} from '../../components/UI'

const Signup = () => {
    return(
        <div class="login-signup-form">
            <div class="form-content custom-form-content">
                <h2>Parent Sign up</h2>
                <form id="new_parent" class="new_user" action="/users" accept-charset="UTF-8" method="post" novalidate="novalidate">
                    <Input type="hidden" name="authenticity_token" value="bJwUuGnzgEUqJMQRJrH5cHqpEQATvOt/RmGJRTPrcxHgubu+ii1QT6NHPBR3R64B4UvP778OqUZlpRfUIQM62Q==" />

                    <div class="form-group" id="email-input">
                        <label for="user_email">Email</label>
                        <br />
                        <Input class="form-control" type="email" value="" name="user[email]" id="user_email" />
                    </div>

                    <div class="form-group">
                        <label for="user_name">Name</label>
                        <br />
                        <Input class="form-control" type="text" name="user[name]" id="user_name" />
                    </div>

                    <div class="form-group">
                        <label for="user_password">Password</label>
                        <em>(6 characters minimum)</em>
                        <br />
                        <Input autocomplete="off" class="form-control" type="password" name="user[password]" id="user_password" />
                    </div>

                    <div class="form-actions">
                        <Input type="submit" name="commit" value="Sign up" class="btn btn-custom" data-disable-with="Sign up" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;