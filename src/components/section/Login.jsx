import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

const clientId = '933346313398-22f48ghtba2akrbcov27fvk1egovqul7.apps.googleusercontent.com'


function Login() {


    const onSuccess = (res) => {
        console.log('LOGIN SUCCESS! Current user: ', res.profileObj)
    }

    const onFailure = (res) => {
        console.log('LOGIN Failed! res: ', res)
    }
    return (
        <div className=''>
        <GoogleOAuthProvider clientId='<33346313398-22f48ghtba2akrbcov27fvk1egovqul7.apps.googleusercontent.com>'>
        <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'sign_host_origin'}
                isSigned={true} 
                />
        </GoogleOAuthProvider>
        </div>
    )
}

export default Login