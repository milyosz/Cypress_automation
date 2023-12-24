describe('MyThiTest', () => {
/// Test strony sie pomaga 
    

    it('first', () => 
    {
        cy.viewport(1080, 1080)
        cy.visit("https://www.siepomaga.pl/pah-maroko")
        cy.contains("a", "Wesprzyj").click({force:true})

        cy.contains("label", "50 zł").click()////////////////////

        cy.contains("label", "200").click()///////////////

        cy.contains("label", "Inna kwota").click()///////////////////////

        cy.get("input[name='amountCustom']").type(777)/////////

        cy.contains("label", "Ukryj kwotę").click()//////////

        
        // cy.get('[data-testid="range-input-range-tip-range-tip-box-payment-amount-form"]')
        //     .should('be.enabled')
        //     .invoke('val', 0)
        //     .trigger('input')
        //     .wait(3000);

        // cy.get("[data-testid='step-0-range-tip-range-tip-box-payment-amount-form']").click({force:true})

        cy.get("input[data-testid='range-input-range-tip-range-tip-box-payment-amount-form']").invoke('val', 1).trigger('input'); // po zmianie na 1 zaczęło działać
        // cy.get("input[data-testid='range-input-range-tip-range-tip-box-payment-amount-form']").invoke('val', 100).trigger('input'); // to przesunięcie działa

    


        cy.get("input[name='signature']").type("ADAMOSKI")
        cy.get("textarea[name='comment_text']").type("Pozdrawiam z Katowic")

        cy.contains("button", "Wpłać teraz").click({force:true})


        cy.get('[data-testid="summary-value"]').should('have.text', '777 zł') //niecodzienny odstęp w tekście


        cy.get('[data-testid="email-input-payment-method-form"]').type("AAAAA")
        
        cy.get(':nth-child(1) > :nth-child(2) > .payment-choose-method-box-component > .payment-choose-method-box-component__container').click()

        // sprawdzenie wyświetlania błędnego email
        cy.get('[data-testid="error-email-input-payment-method-form"]').should('be.visible').and('have.text', 'W podanym adresie e-mail brakuje znaku „@”.')

        ///// poprawa emaila
        cy.get('[data-testid="email-input-payment-method-form"]').clear().type("AAAA@gmail.com")

        cy.get('.payment-choose-method-form-container-component__action__button__default > .common-button-component').click().wait(3000)

    })


})
