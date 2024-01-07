import requests from "../API/src/requests"
import autorizationBody from "../fixtures/autorizationBody.json"
import {faker} from "@faker-js/faker"


describe("POST",()=>{

    it("autorization",()=>{

        const email = faker.internet.email()
        const postBody = {
            "nome": "yyyy",
             "email": "aaaattt@aaadgtt.com",
            "password": "teste",
            "administrador": "false"
        }

        requests.autorizationRequestTest(autorizationBody).then((responseAuth)=>{
            expect(responseAuth.status)
                .equal(200)
            expect(responseAuth.body.message)
                .equal("Login realizado com sucesso")
            expect(responseAuth.body.authorization).not.empty

            let token = responseAuth.body.authorization
            
            requests.postRequest(postBody,token).then((response)=>{
                expect(response.status)
                    .equal(201)
                console.log(response)
                expect(response.body.message)
                    .equal("Cadastro realizado com sucesso")
                expect(response.body._id).not.empty 
        })
        })
    })

    
})