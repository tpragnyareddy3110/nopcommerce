describe('login using valid credentials',()=>{

    it('login using valid credentials',()=>{
        cy.visit("/",{timeout:3000})
        cy.login('testcypress@gmail.com','test@123')
    })


})