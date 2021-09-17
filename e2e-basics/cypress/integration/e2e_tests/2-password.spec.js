describe('Password Test', () => {
    before(function (){
        cy.visit("http://zero.webappsecurity.com/");
    })

    it('Should click sign in button', () => {
        cy.get('#signin_button').click();
    })

    it('Should click on forgotten password', () => {
        cy.get('.offset3 > a').click();
    })

    it('Should fill email form', () => {
        cy.get('#user_email').type("test.email@mail.com")
    })

    it('Should submit email form', () => {
        cy.contains('Send Password').click();
    })
})