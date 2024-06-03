describe('practise the dropdowns',()=>{

  it('dropdown and different methods',()=>{

    cy.visit('https://demo.nopcommerce.com/digital-downloads')
    cy.title().should('eq','nopCommerce demo store. Digital downloads')
    cy.get('#products-pagesize').select(1)

  })







})