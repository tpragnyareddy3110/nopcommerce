import { RegisterPage } from '../pages/Register'

describe('register a new user with invalid values', () => {

    let userdata
    before('load the fixture data to use in multiple it blocks', () => {
        cy.fixture('tc_03_registernewuserwithinvalidvalues').then((data) => {
            userdata = data
        })
    })

    it('click on register and enter the values', () => {
            userdata.forEach((eachdata) => {
                cy.visit('/', { timeout: 30000 })
                RegisterPage.clickLnkRegister()
                RegisterPage.selectRadioBtnGender(eachdata.gender)
                RegisterPage.inputFirstName(eachdata.firstname)
                RegisterPage.inputLastName(eachdata.lastname)
                RegisterPage.inputDateOfBirth(eachdata.dateofbirth)
                RegisterPage.inputMonthOfBirth(eachdata.monthofbirth)
                RegisterPage.inputYearOfBirth(eachdata.yearofbirth)
                RegisterPage.inputEmail(eachdata.email)
                RegisterPage.inputCompname(eachdata.companyname)
                RegisterPage.inputPwd(eachdata.pwd)
                RegisterPage.inputConfPwd(eachdata.confpwd)
                RegisterPage.clickBtnRegister()
                cy.get('div.page-body').invoke('text').then(($text) => {
                    expect($text).to.contain('The specified email already exists')
                })
                cy.get('.ico-logout').click()
        })
    })
})


