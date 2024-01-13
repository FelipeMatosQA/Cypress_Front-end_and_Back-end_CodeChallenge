import { base } from "@faker-js/faker"
import basePage from "../basePage"

export default{

    //Elements

    registerLink(){
        return basePage.findElement(".ico-register")
    },

    //Actions

    navigateToRegisterPage(){
        this.registerLink()
            .click()
        basePage.validateCurrentUrl("https://demo.nopcommerce.com/register")
    }
}