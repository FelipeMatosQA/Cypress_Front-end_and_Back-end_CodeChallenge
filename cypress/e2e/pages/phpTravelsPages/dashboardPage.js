import basePage from "../basePage"

export default{

    //elements

    userContentCard(){
        return basePage.findElement(".author-content")
    },

    logoutLink(){
        return basePage.findElement(".py-2.fadeout.btn.btn-primary")
    },

    hotelsLink(){
        return basePage.findElementByClassAndContent(".fadeout.waves-effect","Hotels")
    },

    //Actions

    validateLogin(userName){
        this.userContentCard()
            .should("contain",userName,{timeout: 15000 })
            
        this.logoutLink()
            .should("be.visible")
    },

    navigateToHotels(){
        this.hotelsLink().click()
        basePage.validateCurrentUrl("https://phptravels.net/hotels")
    }
}