describe('MyFouTestME', () => {

    

    it('accept', () => 
    {
        cy.viewport(1080, 1080)
        //stepsssss
        cy.visit("https://www.mediaexpert.pl/lp,instrukcje-obslugi/samsung").wait(6000)

        cy.get('button').contains("ZAAKCEPTUJ WSZYSTKIE").click().wait(4000)

        cy.get('.manuals-producer-header .manuals-producer-pagination .pagination  input').type("2{enter}")
        cy.url().should('eq', 'https://www.mediaexpert.pl/lp,instrukcje-obslugi/samsung?page=12')

        
        



      
    
    })



})


        

      
