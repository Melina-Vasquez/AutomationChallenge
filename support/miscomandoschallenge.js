Cypress.Commands.add('completeForm', () => {
    cy.fixture('example').then((data) => {
        const formData = data[valid]
    cy.interception('POST', 'https://www.saucedemo.com/message').as('testAPI')

    cy.get('input[placeholder="Username"]').clear().type('formData.username')
    cy.get('input[placeholder="Password"]').clear().type('formData.password')
    cy.get('#login-button').click()
    cy.wait('@testAPI').its('response.statusCode').should('eq, 201')
    })
    

});