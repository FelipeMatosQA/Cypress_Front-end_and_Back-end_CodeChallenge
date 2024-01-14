import basePage from "../basePage"

export default{

    //elements

    registerMessage(){
        return basePage.findElement(".page-body .result")
    },

    //actions
    validateSucessfullRegister(){
        basePage.validateCurrentUrl("https://demo.nopcommerce.com/registerresult/1")
        this.registerMessage().should("be.visible").should("have.text","Your registration completed")
    }
}