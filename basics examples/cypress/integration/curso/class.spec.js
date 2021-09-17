class BasePage {
	static loadHomePage() {
		cy.visit('https://devexpress.github.io/testcafe/example/', {
			timeout: 30000,
		})
	}

	static wait(number) {
		cy.wait(number)
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView()
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView()
	}
}

describe('Abstraction With Classes', () => {
	before(function () {
		//run before all tests inside describe
		//setup test data or test context
		//seed or reset the database
		HomePage.loadHomePage()
	})

	after(function () {
		//run after all tests inside describe block are done
		//test clean up
		//clean cookies or local storage
	})

	beforeEach(function () {
		//run before each test inside describe
	})

	afterEach(function () {
		//run after each test inside describe block are done
	})

	it('1st it', () => {
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(3000)
	})

    it('2nd it', () => {
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(3000)
	})
})
