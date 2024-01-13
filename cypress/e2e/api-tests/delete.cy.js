import { expect } from "chai"
import requests from "../../API/src/requests"
import responses from "../../API/src/responses"
import {faker} from "@faker-js/faker"
import autorizationBody from "../../fixtures/autorizationBody.json"

describe("DELETE",()=>{

    it("Registrar e deletar um usuário",()=>{

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
            
            requests.postRequest(postBody,token).then((postResponse)=>{
                responses.validatePostResponse(postResponse)
                
                const id = postResponse.body._id
                
                requests.deleteRequest(id).then((deleteResponse)=>{
                    expect(deleteResponse.status)
                        .equal(200)
                    expect(deleteResponse.body.message)
                        .equal("Registro excluído com sucesso")
                })

                    
                })
        })
    })
})