describe('Feedback Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/');
    })


    it('should load feedback form', () => {
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html');
    })

    it('should fill feedback form', () => {
        cy.get('#name').type('Carlitos');
        cy.get('#email').type('Jacinto');
        cy.get('#subject').type('El asunto de carlitos jacinto');
        cy.get('#comment').type('Toy automatizando loco');
        
    })

    it('should submit form', () => {
        cy.get('.btn-signin').click();
    })

    it('should display feedback message', () => {
        cy.get('#feedback-title').contains('Feedback');
    })

})
