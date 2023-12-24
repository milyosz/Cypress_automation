describe('MySecTest', () => {

    

    it('verify_name_pass', () => 
    {
        //stepsssss
        cy.visit("https://www.mediaexpert.pl/dom-i-ogrod/grille/grille-gazowe/grill-gazowy-3-1-stal-nierdzewna-12-8-kw")


        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, 4000);
          cy.get('button').contains("ZAAKCEPTUJ WSZYSTKIE").click()
          
          setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, 4000);


        cy.get("button").contains('DO KOSZYKA').click()

        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, 3000);



        

        

      
    })

})
