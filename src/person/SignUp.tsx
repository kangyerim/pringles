import React, {useState} from 'react';
import {MDBBtn, MDBInput} from "mdbreact";

/*commands : 액션과 리듀서를 연결*/
const signUpConstants = {
    SIGNUP_REQUEST: 'USER_SIGNUP_REQUEST',
    SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
    SIGNUP_FAILURE: 'USER_SIGNUP_FAILURE'
}

/*reducers*/
function signUpReducer(payload, userActions) {
    switch (userActions) {
        case signUpConstants.SIGNUP_REQUEST:
            return{
                signUp: true,
                user: userActions.user
            }
        case signUpConstants.SIGNUP_SUCCESS:
            return {
                signUp: true,
                user: userActions.user
            }
        case signUpConstants.SIGNUP_FAILURE:
            return {
                signUp: false,
                user: userActions.user
            }
    }
}

/*actions*/
const signUpActions = {
    signUp
}

function signUp(e) {
    e.preventDefault()
    return dispatch => {}
}
/*middleware(thunk)*/
function signUpService() {
    const userid = ''
    const password = ''
    const name = ''
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password, name})
    }
    return fetch(`https://facebook.github.io/react-native/movies.json`, requestOptions)
        .then()
        .then(user => {
            alert(` json 읽기 성공 `)
            localStorage.setItem('user', JSON.stringify(user))
        })
}

/*component*/
const SignUp = () => {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    signUpService()

    return (
        <div>
            <form name="form" >
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label htmlFor="id"><b>ID</b></label>
                    <input type="text" placeholder="Enter id" name="userid" />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password"/>

                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter your Name" name="name" />

                    <label>
                        <input type="checkbox" checked={false} name="remember"/> Remember me </label>

                    <p>By creating an account you agree to our <a href="#" >Terms
                        & Privacy</a>.</p>

                    <div className="clearfix">
                        <MDBBtn onClick={signUp} className={"button3"}>Cancel</MDBBtn>
                        <MDBBtn onClick={signUp} className={"button3"}>Sign Up</MDBBtn>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;