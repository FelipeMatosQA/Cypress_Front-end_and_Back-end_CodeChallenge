import basePage from "../basePage"

export default{

    //elements

    registerMessage(){
        return basePage.findElement(".page-body .result")
    },

    //actions
    validateSucessfullRegister(){
        this.registerMessage().should("be.visible").should("have.text","Your registration completed")
    }
}