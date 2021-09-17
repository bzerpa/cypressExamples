describe('Browser actions',()=>{
    it('Vamo a navegar a una url', ()=> {
        cy.visit('http://example.com/', { timeout: 3000}) 
    })

    it('Vamo a verificar la url', ()=>{
        cy.url().should('include', 'example.com');
    })

    it('Vamo a esperar por tres segundos', ()=>{
        cy.wait(3000);
    })

    it('Vamos a pausar la ejecución brokoli', ()=>{
        cy.pause()
    })

    it('Vamo a chequear que exista un elemento en la page', ()=>{
        cy.get('h1').should('be.visible');
    })
})

