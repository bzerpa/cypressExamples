describe('Find Transactions test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.password
			cy.login(username, password)
		})
	})

	it('should filter transactions', () => {

		cy.get('#account_activity_tab').should('be.visible')
		cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()

		cy.get('#aa_fromAmount').type('200')
		cy.get('#aa_toAmount').type('4000')
        cy.get('button[type="submit"]').click()

	})


    it('should display results', () => {
            cy.get('#filtered_transactions_for_account').should('be.visible')
            cy.screenshot({capture: "fullPage"})
            cy.get('tbody > tr')
                .its('length')
                .should('be.gt', 0)
        })
})
