import { expect } from "chai"
import requests from "../API/src/requests"
import responses from "../API/src/responses"
import {faker} from "@faker-js/faker"
import autorizationBody from "../fixtures/autorizationBody.json"

describe("GET",()=>{

    it("List all registers",()=>{

        requests.getRequest().then((response)=>{
            responses.validateGetAllRegistersResponse(response)
        })
    })
    it.only("Register a specific register and validate the values with a GET request",()=>{
        
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
                
                requests.getSpecificRegisterRequest(id).then((getResponse)=>{
                    responses.validateGetResponseWithAPostRequest(postBody,getResponse)
                })
        })
        })
        
        
    })
})