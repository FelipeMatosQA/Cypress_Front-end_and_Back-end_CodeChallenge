export default{

    validateAuth(responseAuth){

        expect(responseAuth.status)
                .equal(200)
        expect(responseAuth.body.message)
                .equal("Login realizado com sucesso")
        expect(responseAuth.body.authorization).not.empty

        const token = responseAuth.body.authorization
    
        return token
    },

    validatePostResponse(response){

        expect(response.status)
            .equal(201)
                console.log(response)
        expect(response.body.message)
            .equal("Cadastro realizado com sucesso")
        expect(response.body._id).not.empty 

    },


    validateGetAllRegistersResponse(response){
        expect(response.status)
                .equal(200)
            expect(response.body.quantidade)
                .equal(response.body.usuarios.length)

            const users = response.body.usuarios
            
            users.forEach(user => {
                expect(user.nome).not.empty
                expect(user.nome).to.be.a('string')
                expect(user.email).not.empty
                expect(user.email).to.be.a('string')
                expect(user.password).not.empty
                expect(user.password).to.be.a('string')
                expect(user.administrador).not.empty
                expect(user.administrador).to.be.a('string')
                expect(user._id).not.empty
                expect(user._id).to.be.a('string')
            });
    },

    validateGetResponseWithAPostRequest(postBody,getResponse){
        expect(getResponse.status)
            .equal(200)
        expect(getResponse.body.nome)
            .equal(postBody.nome)
        expect(getResponse.body.email)
            .equal(postBody.email)
        expect(getResponse.body.password)
            .equal(postBody.password)
        expect(getResponse.body.administrador)
            .equal(postBody.administrador)
    }
}