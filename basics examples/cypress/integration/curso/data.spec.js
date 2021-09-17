
describe('Write/ Read Data to JSON or Text File', () => {
	it('Should write data into JSON', () => {
        cy.writeFile('log.json', { name: 'Raul', age: 23});
	})

	it('Should write data into Txt', () => {
        cy.writeFile('logueate.txt', 'Quién es el más poronga en este conventillo de mierda?');
	})

	it('Should read data into JSON', () => {
        cy.readFile('log.json').its('name').should('eq', 'Raul');
	})

	it('Should read data into Txt', () => {
        cy.readFile('logueate.txt').should('contain', 'conventillo de mierda');
	})

	it('Should read and verify browser Document content', () => {
		cy.visit('https://example.com/', { timeout: 30000 });
		cy.wait(2000);
		cy.document().its('contentType').should('equal', 'text/html');
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
	})

})


