describe('Keyboard simulation', () => {
	it('Vamos a simular un enter wachi', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 30000 })
		
        cy.fixture('user').then(user =>{
            const username = user.username;
            const password = user.password;
            cy.get('#user_login').type(username, { delay: 50 })
            cy.get('#user_password').type(password + "{enter}", { delay: 100 })
        })

	})



})
