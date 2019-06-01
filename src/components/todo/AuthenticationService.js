class AuthenticationService{
        registerSuccessfulLogin(username,password){
           
            sessionStorage.setItem('authenticatedUser',username)
        }

        logout(){
            sessionStorage.removeItem('authenticatedUser')
        }

        isUserLoggedIn(){
            let user = sessionStorage.getItem('authenticatedUser')
            if(user===null){
                return false
            }
            else {return true}
        }

        LoggedInUsername(){
            let user = sessionStorage.getItem('authenticatedUser')
            if(user===null){
                return null
            }
            else {return user}
        }
}

export default new AuthenticationService();