
describe('Xpath Wachi', () => {

    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 30000 })
    })

	it('Buscamos por Xpath', () => {
        cy.xpath("//input[@type='submit']").should('be.visible');
		cy.xpath("//input[@type='submit']").click();
	})


})


