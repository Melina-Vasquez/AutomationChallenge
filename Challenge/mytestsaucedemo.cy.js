describe('Test standar_user', {testIsolation:false}, () => {

    it('Visitar la pagina', () =>{
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit('https://www.saucedemo.com/', { timeout: 120000 });
      });


      it('Ingresar usuario y contrasenia', () => {
        cy.get('[placeholder="Username"]').type('standard_user');
        cy.get('[placeholder="Password"]').type('secret_sauce');
        cy.get('input[type="submit"]').click();
    });
    
    it("Validar login y agregar productos al carro de compras", () => {
        cy.get('.app_logo').contains("Swag Labs")
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
        cy.get("#add-to-cart-sauce-labs-bike-light").click()
        
    });

    it("Verificar carro de compras y hacer checkout", () =>{
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('#checkout').click()

        cy.get('[data-test="firstName"]').type('melina');
        cy.get('[data-test="lastName"]').type('vasquez');
        cy.get('[data-test="postalCode"]').type('5000');
        cy.get('[data-test="continue"]').click();
        cy.get("#finish").click();
        cy.get("h2").contains("Thank you for your order!")
        cy.get("#back-to-products").click();
        
        
        //logout
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();
    });
});