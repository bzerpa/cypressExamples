describe('Browser actions',()=>{

    it('Navegamos a la page y verifico url', ()=> {
        cy.visit('https://books.toscrape.com/', { timeout: 30000})
        cy.url().should('equal', 'https://books.toscrape.com/'); 
        cy.log('Before reload');
        cy.reload();
        cy.log('After reload');
    })

    it('Clickear en Travel Category y Verificar navegación', ()=> {
        cy.get('a').contains('Travel').click(); 
        cy.get('h1').should('have.text','Travel'); 
    })

    it('Se muestra bien la cantidad de numeritos', () =>{
        cy.get('.product_pod').its('length').should('eq', 11)

    })

    it('Clickear en Poetry y Verificar navegación', ()=> {
        cy.get('a').contains('Poetry').click(); 
        cy.get('h1').should('have.text','Poetry'); 
    })

    it('Seleccionar libro Olio y Verificar navegación y precio', ()=> {
        cy.get('a').contains('Olio').click(); 
        cy.get('h1').should('have.text','Olio'); 
        cy.get('.price_color').contains('£23.88'); 
    })

})
