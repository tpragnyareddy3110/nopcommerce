/// <reference types = 'Cypress'/>
 
 class Launch{

    /*locators*/
        poll_options = '.poll-options>li'
        votebtn ='button#vote-poll-1'
        poll_msg = 'div#block-poll-vote-error-1'

    /*methods*/
    
    checkRadioVote(voteoption){
       return cy.get(this.poll_options)
            .should('have.length', '4')
            .each(($el) => {
                if ($el.text().includes(voteoption)) {
                    cy.get($el).click()
                }
            })
    }

    clickVote(){
      return  cy.get(this.votebtn)
            .should('be.visible')
            .focus()
            .wait(1000)
            .trigger('click')
    }

    verifyMsg(){
       return cy.get(this.poll_msg).should('contain.text','Only registered users can vote.')
    }


}

export const Launchpage = new Launch()