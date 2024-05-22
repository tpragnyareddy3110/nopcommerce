/// <reference types = 'Cypress'/>

 class Register{
    /*locators*/

    
    gender ='input[type="radio"]'
    first_name = 'input#FirstName'
    last_name = 'input#LastName'
    e_mail = 'input#Email'
    company_name = 'input#Company'
    password = 'input#Password'
    confirm_password = 'input#ConfirmPassword'
    newsletter = 'input#Newsletter'
    btn_register = '#register-button'
    lnk_register = 'a[href*="register?returnUrl=%2F"]'
    date_day = '[name="DateOfBirthDay"]'
    date_month = '[name="DateOfBirthMonth"]'
    date_year = '[name="DateOfBirthYear"]'

   
    inputFirstName(fname){
          return cy.get(this.first_name).type(fname)
    }

    inputLastName(lname){
        return cy.get(this.last_name).type(lname)
    }

    inputEmail(email){
        return cy.get(this.e_mail).type(email)
    }

    inputDateOfBirth(day){
        return cy.get(this.date_day).type(day)
    }

    inputMonthOfBirth(month){
        return cy.get(this.date_month).type(month)
    }

    inputYearOfBirth(year){
        return cy.get(this.date_year).type(year)
    }

    inputCompname(companyname){
        return cy.get(this.company_name).type(companyname)
    }

    inputPwd(pwd){
        return cy.get(this.password).type(pwd)
    }

    inputConfPwd(confirmpwd){
        return cy.get(this.confirm_password).type(confirmpwd)
    }

    clickBtnRegister(){
        return cy.get(this.btn_register).click()
    }

    clickLnkRegister(){
        return cy.get(this.lnk_register).click()
    }

    selectRadioBtnGender(genderval){
        return cy.get(this.gender).check(genderval)
    }

    selectChkboxNewsletter(newsletter){
        return cy.get(this.newsletter).select(newsletter)
    }


}


export const  RegisterPage = new Register()