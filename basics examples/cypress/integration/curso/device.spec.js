describe('Device Tests', () => {

	it('720p', () => {
		cy.viewport(1280, 750);
        cy.visit("https://example.com");
        cy.wait(3000);
	})

    it('1080p', () => {
		cy.viewport(1980, 1080);
        cy.visit("https://example.com");
        cy.wait(3000);
	})

    it('iPhone X', () => {
		cy.viewport('iphone-x');
        cy.visit("https://example.com");
        cy.wait(3000);
	})

    it('iPad Mini', () => {
		cy.viewport('ipad-mini');
        cy.visit("https://example.com");
        cy.wait(3000);
	})

})
