describe('Login/Logout Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.url().should('include', 'login.html')
	})

	it('should try to login with invalid data', () => {
		cy.login('lala', 'lala')
	})

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})

	it('should login to the application', () => {
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.password
            cy.login(username, password)
		})

		cy.get('.nav-tabs').should('be.visible')
	})

	it('should logout from application', () => {
        cy.contains('username').click();
        cy.get('#logout_link').click();
        cy.url().should('include', 'index.html')
    })
})
