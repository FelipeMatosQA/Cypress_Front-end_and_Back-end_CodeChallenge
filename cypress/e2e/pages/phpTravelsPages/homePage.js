import basePage from "../basePage"

export default{


    accountDropDown(){
        return basePage.findElementByClassAndContent(".nav-item.dropdown","Account")
    },

    LoginDropDown(){
        return basePage.findElementByClassAndContent("a","Login")
    },


    //Actions
    navigateToLoginPage(){
        this.accountDropDown().click()
        this.LoginDropDown().click()
        basePage.validateCurrentUrl("https://phptravels.net/login")
    }
}