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
         cy.get(this.first_name).type(fname)
    }

    inputLastName(lname){
         cy.get(this.last_name).type(lname)
    }

    inputEmail(email){
      cy.get(this.e_mail).type(email)
    }

    inputDateOfBirth(day){
     cy.get(this.date_day).type(day)
    }

    inputMonthOfBirth(month){
        cy.get(this.date_month).type(month)
    }

    inputYearOfBirth(year){
        cy.get(this.date_year).type(year)
    }

    inputCompname(companyname){
        cy.get(this.company_name).type(companyname)
    }

    inputPwd(pwd){
         cy.get(this.password).type(pwd)
    }

    inputConfPwd(confirmpwd){
     cy.get(this.confirm_password).type(confirmpwd)
    }

    clickBtnRegister(){
    cy.get(this.btn_register).click()
    }

    clickLnkRegister(){
         cy.get(this.lnk_register).click()
    }

    selectRadioBtnGender(genderval){
         cy.get(this.gender).check(genderval)
    }

    selectChkboxNewsletter(newsletter){
        cy.get(this.newsletter).select(newsletter)
    }


}


export const  RegisterPage = new Register()