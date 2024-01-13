
import autorizationBody from "../../fixtures/autorizationBody.json"
export default {

    postRequest(body,token){
        
        return  cy.request({
                    method: "POST",
                    url: 'https://serverest.dev/usuarios',
                    failOnStatusCode:false,
                    headers: {
                        "Content-Type": "application/json",
                        "user": token
                    },
                    body:body

    }).then((response)=> {return response})
    },

    autorizationRequestTest(body){
        return cy.request({
                    method: "POST",
                    url: 'https://serverest.dev/login',
                    failOnStatusCode:false,
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: body
            }).then((responseAuth)=> {return responseAuth})
    },
    autorizationRequest(body){
        return cy.request({
                    method: "POST",
                    url: 'https://serverest.dev/login',
                    failOnStatusCode:false,
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: body
            }).then((response)=> {return response})
    },

    putRequest(body,id){
        return cy.request({
                    method: "PUT",
                    url: `https://serverest.dev/usuarios/${id}`,
                    body: body
            }).then((response)=> {return response})
    },
    
    getRequest(){
        return cy.request({
                    method: "GET",
                    url: 'https://serverest.dev/usuarios',
                    failOnStatusCode:false
            }).then((response)=> {return response})
    },
    getSpecificRegisterRequest(id){
        return cy.request({
                    method: "GET",
                    url: `https://serverest.dev/usuarios/${id}`,
                    failOnStatusCode:false
            }).then((response)=> {return response})
    },
    
    deleteRequest(id){
        return cy.request({
                method: "DELETE",
                url: `https://serverest.dev/usuarios/${id}`
            }).then((response)=> {return response})
    }
}