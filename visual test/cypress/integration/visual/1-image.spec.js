const pages = ['http://example.com']
const sizes = ['iphone-6', 'ipad-2', [1200, 1080]]

/*
describe('Visual Regression', () =>{

    it('First visual regression test', () => {
        cy.visit("http://example.com")
        cy.matchImageSnapshot()
    })
})

describe('Visual Regression part', () => {
	sizes.forEach(size => {
		pages.forEach(page => {
			it(`Should match ${page} in resolution ${size}`, () => {
				let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
				cy.clock(currentTime)
				cy.setResolution(size)
				cy.visit(page)
				cy.matchImageSnapshot()
			})
		})
	})
})
*/

describe('Single Element Snapshot', () => {
	it('Should match single element on the page', () => {
        cy.visit("http://example.com")
        cy.get('h1').matchImageSnapshot()
	})
})

