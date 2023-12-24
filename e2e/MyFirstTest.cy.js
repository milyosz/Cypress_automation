describe('MyFirstTest', () => {

    

    it('verify_name_pass', () => 
    {
        //stepsssss
        cy.visit("https://www.mediaexpert.pl/")


        cy.title().should("eq","Media Expert | Sklep internetowy RTV, AGD, komputery")

        

      
    })

    it('verify_name_fail', () => 
    {
        //stepsssss
        cy.visit("https://www.mediaexpert.pl/")


        cy.title().should("eq","Media Expert")

        

      
    })

})
