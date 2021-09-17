describe('Searchbox Test', () => {
    before(function (){
        cy.visit("http://zero.webappsecurity.com/");
    })

    it('Should type into searchbox and submit with pressing enter', () => {
        cy.get('#searchTerm').type('some text {enter}');
    })

    it('Should show search results page', () => {
        cy.get('h2').contains('Search Results:')
    })
})