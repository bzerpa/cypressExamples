describe('Login with fixture data', () => {
	it('Should enter to website', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 30000 })
		
        cy.fixture('user').then(user =>{
            const username = user.username;
            const password = user.password;
            cy.get('#user_login').type(username, { delay: 50 })
            cy.get('#user_password').type(password, { delay: 100 })
        })

	})


	it('Should submit form', () => {
		cy.contains('Sign in').click()
	})

	it('Should display error message', () => {
		cy.get('.alert.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong')
	})
})
