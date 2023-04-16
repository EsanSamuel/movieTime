import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google'

const clientId = '933346313398-22f48ghtba2akrbcov27fvk1egovqul7.apps.googleusercontent.com'

function Logout() {
    const onSuccess = () => {
        console.log('LogOut successfull')
    }
    return (
        <div>
        <GoogleOAuthProvider clientId='<33346313398-22f48ghtba2akrbcov27fvk1egovqul7.apps.googleusercontent.com>'>
            <GoogleLogin
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            />
            </GoogleOAuthProvider>
        </div>
    )
}

export default Logout