import { Launchpage } from "../pages/launch"

describe('give the poll option without registering',()=>{

    let eachdata

    before('load the fixture data',()=>{
      cy.fixture('tc_04_communitypollwithoutregisteration.json').then((data)=>{
        eachdata = data
      })  
    })

    it('give the poll',()=>{
       cy.fixture('tc_04_communitypollwithoutregisteration.json').then((data)=>{
        cy.visit('/', { timeout: 80000 })
        Launchpage.checkRadioVote(eachdata.voteoptions)
        Launchpage.clickVote()
        Launchpage.verifyMsg()  
       })
     
    })

})