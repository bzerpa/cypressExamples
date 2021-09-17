describe('Scroll', () => {
	it('Should scroll down', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/', { timeout: 30000 });
        cy.get('#submit-button').scrollIntoView();
        cy.wait(5000);
        cy.get('header').scrollIntoView();

	})
})


