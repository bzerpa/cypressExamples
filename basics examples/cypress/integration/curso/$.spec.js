
describe('Cypress.$ function', () => {

    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 30000 })
    })

	it('Expose jQuery element in the current window', () => {
        const signInButton = Cypress.$('#signin_button');
        signInButton.click();
    	})


})


