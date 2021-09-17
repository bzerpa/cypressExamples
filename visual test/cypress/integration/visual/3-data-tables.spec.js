describe('Visual Regression Data Tables', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.get('#user_login').type('username')
		cy.get('#user_password').type('password')
		cy.get('input[name="submit"]').click()
	})

	it('should load data tables', () => {
		cy.get('#account_activity_tab').click()
	})

    it('Data Tablet Snapshot', () => {
		cy.matchImageSnapshot()
	})
})
