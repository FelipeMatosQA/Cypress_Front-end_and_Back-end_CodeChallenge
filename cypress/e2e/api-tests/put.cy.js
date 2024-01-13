import { expect } from "chai"
import requests from "../../API/src/requests"
import responses from "../../API/src/responses"
import {faker} from "@faker-js/faker"
import autorizationBody from "../../fixtures/autorizationBody.json"

describe("PUT request",()=>{

    it("Registrar e alterar um usuário", ()=>{

        const email = faker.internet.email()
        const name = faker.person.firstName()
        const password = faker.internet.password()
        const postBody = {
            "nome": name,
             "email": email,
            "password": password,
            "administrador": "false"
        }

        const putEmail = faker.internet.email()
        const putName = faker.person.firstName()
        const putPassword = faker.internet.password()
        const putBody = {
            "nome": putName,
            "email": putEmail,
            "password": putPassword,
            "administrador": "false"
           
        }

        requests.autorizationRequest(autorizationBody).then((responseAuth)=>{
            
            let token = responses.validateAuth(responseAuth)
            
            //Incluir Registro
            requests.postRequest(postBody,token).then((postResponse)=>{
                responses.validatePostResponse(postResponse)
                
                const id = postResponse.body._id
                
                //Alterar Registro
                requests.putRequest(putBody,id).then((putResponse)=>{
                    responses.validatePutResponse(putResponse)

                    //VALIDAR INFOR COM UM GET
                    requests.getSpecificRegisterRequest(id).then((getResponse)=>{
                        responses.validateGetResponseWithPayload(putBody,getResponse)
                    })


                    
                })

                    
                })
        })
    })
})
