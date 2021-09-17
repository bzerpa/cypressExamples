

describe('Comanditos custom', () => {
	it('Deberíamos loguearnos con comanditos custom', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 30000 });
		cy.login('kaka','kaka');
	})
})

