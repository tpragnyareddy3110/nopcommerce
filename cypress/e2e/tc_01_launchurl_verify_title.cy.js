
describe('launch the url', () => {

    it('launch the url and verify the title', () => {
        cy.visit('/', { timeout: 80000 })
        cy.title('nopCommerce demo store').then(($title) => {
            if ($title == 'nopCommerce demo store') {
                cy.log('URL launched successfully')
            } else {
                cy.log('URL not launched')
            }
        })
    })

})