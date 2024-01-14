import basePage from "../basePage"

export default{
    

    //Elements
    emailField(){
        return basePage.findElement("#email")
    },
    passwordField(){
        return basePage.findElement("#password")
    },

    rememberMeCheckBox(){
        return basePage.findElement("#rememberchb")
    },

    loginButton(){
        return basePage.findElement("#submitBTN")
    },



    //Actions

    performLogin(email, password){
        this.emailField().type(email)
        this.passwordField().type(password)
        this.loginButton().click()
    }

    
}