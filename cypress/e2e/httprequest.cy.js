describe('this includes the api testing code',()=>{

    it('get call',()=>{
        // cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        // .its('status').should('eql',200)
        // cy.request('GET','https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
        //      expect(response.status).to.eql(200)
        // })

        let accesstoken = '73cae03e5850b443d6c7890d022a2d8fef410f3d9cf79123105d8428ffa53bc6'
        let emailid = 'testcypress'+Math.random()+'@gmail.com'
        var resdataid
        cy.log(emailid)

        cy.request({
                method : 'POST',
                headers :{
                    'Authorization' : 'Bearer '+accesstoken
                },
                body : {
                    'name' : "test automation",
                   'gender': 'female',
                    'email' : emailid,
                    'status' : 'active'
                },
                url : 'https://gorest.co.in/public/v1/users'

        }).then((response)=>{
                expect(response.status).to.eql(201)
                expect(response.duration).to.be.below(7000) 
                expect(response.body.data).has.property('name','test automation')   
                expect(response.body.data).has.property('gender','female')
                resdataid = response.body.data.id
                cy.log(resdataid)
                cy.request({
                    method : 'GET',
                    url : 'https://gorest.co.in/public/v1/users/' + resdataid,
                    headers : {
                        'Authorization' : 'Bearer ' +accesstoken
                    }
                }).then((response)=>{
                    expect(response.status).to.eql(200)
                })
        
        
           })

           cy.log(resdataid)
        
        
    })



})