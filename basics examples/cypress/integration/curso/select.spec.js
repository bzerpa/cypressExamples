describe('Select Box', () => {
	it('El sitio se carga correctamente con el select', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/', { timeout: 30000 });
	})

    it('Elementos selectables', () => {
		cy.get('#preferred-interface').select('JavaScript API');
	})
})

