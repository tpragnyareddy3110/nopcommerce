import { RegisterPage } from "../pages/Register"

describe('end to end flow from login and register a new user',()=>{

   let userdata

    before('login before the test',()=>{
        cy.visit("/",{timeout:3000})
        cy.fixture('tc_02_registernewuser').then((data) => {
            userdata = data
        })
    })

    it('register the new user',()=>{
        userdata.forEach((eachdata) => {
            const randomemail = Math.random().toString(36).substring(2, 15)
            cy.visit('/', { timeout: 30000 })
            RegisterPage.clickLnkRegister()
            RegisterPage.selectRadioBtnGender(eachdata.gender)
            RegisterPage.inputFirstName(eachdata.firstname)
            RegisterPage.inputLastName(eachdata.lastname)
            RegisterPage.inputDateOfBirth(eachdata.dateofbirth)
            RegisterPage.inputMonthOfBirth(eachdata.monthofbirth)
            RegisterPage.inputYearOfBirth(eachdata.yearofbirth)
            RegisterPage.inputEmail(randomemail + eachdata.email)
            RegisterPage.inputCompname(eachdata.companyname)
            RegisterPage.inputPwd(eachdata.pwd)
            RegisterPage.inputConfPwd(eachdata.confpwd)
            RegisterPage.clickBtnRegister()
            cy.get('div.page-body').invoke('text').then(($text) => {
                expect($text).to.contain('Your registration completed')
            })
            cy.get('.ico-logout').click()
       })
        
    })
})