describe('Trabajamos con inputs', () => {
	it('Should enter to website', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 30000 })
		cy.url().should('equal', 'http://zero.webappsecurity.com/login.html')
		cy.clearCookies({ log: true })
		cy.clearLocalStorage('your item', { log: true })
	})

	it('Sobre escribimos la hora actual', () => {
		const date = new Date(2020, 3, 10).getTime() //esto devuelve un timestamp
		cy.clock(date)
		cy.log(date)
	})

	it('Should fill username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('Cractirolo', { delay: 50 })
	})

	it('Should fill password', () => {
		cy.get('#user_password').as('password')
		cy.get('@password').clear()
		cy.get('@password').type('Cractirolo', { delay: 100 })
	})

	it('Select checkbox to remember me', () => {
		cy.get('#user_remember_me').click()
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
