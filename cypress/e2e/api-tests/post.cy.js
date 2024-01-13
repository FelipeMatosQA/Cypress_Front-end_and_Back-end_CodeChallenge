import requests from "../../API/src/requests"
import responses from "../../API/src/responses"
import autorizationBody from "../../fixtures/autorizationBody.json"
import {faker} from "@faker-js/faker"


describe("POST",()=>{

    it("Registrar um usuário com autenticação",()=>{

        const email = faker.internet.email()
        const name = faker.person.firstName()
        const password = faker.internet.password()

        

        const postBody = {
            "nome": name,
             "email": email,
            "password": password,
            "administrador": "false"
        }

        

        requests.autorizationRequest(autorizationBody).then((responseAuth)=>{
            
            let token = responses.validateAuth(responseAuth)
            
            requests.postRequest(postBody,token).then((response)=>{
                responses.validatePostResponse(response)
        })
        })
    })
    
})