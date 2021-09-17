describe('Visual Regression Percy and Cypress', () => {
	before(function () {
		cy.visit('http://example.com')
	})

	it('should take a percy snapshot', () => {
		cy.percySnapshot()
	})

    it('Data Tablet Snapshot', () => {
		cy.matchImageSnapshot()
	})
})
