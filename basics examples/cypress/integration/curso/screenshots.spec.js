describe('Screenshots', () => {
	it('Full page screenshot', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/', { timeout: 30000 });
        cy.screenshot({capture: "fullPage"});
	})

    it('Single element screenshot', () => {
        //only header
        cy.get('header').screenshot();
	})
})

