import requests from "../API/src/requests"

describe("GET11",()=>{

    it("List all registers",()=>{

        requests.getRequest().then((response)=>{
            expect(response.status)
                .equal(200)
            expect(response.body.quantidade)
                .equal(response.body.usuarios.lenth)

        })
    })
})