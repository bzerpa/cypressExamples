describe('New Payee Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.password
			cy.login(username, password)
		})
	})

	it('should add new payee to the list', () => {
		cy.get('#pay_bills_tab').should('be.visible')
		cy.get('#pay_bills_tab').click()

		cy.contains('Add New Payee').click()

		cy.get('#np_new_payee_name').type('Name')
		cy.get('#np_new_payee_address').type('The address bro')
		cy.get('#np_new_payee_account').type('Accoutr')
		cy.get('#np_new_payee_details').type('The details')
		cy.get('#add_new_payee').click()
	})

	it('shourld show success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The new payee Name was successfully created')
	})
})
