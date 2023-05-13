require('@4tw/cypress-drag-drop')
import 'cypress-iframe'
describe('Mouse Operations', ()=>{
          it('MouseHover', ()=>{
                    cy.visit('https://demo.opencart.com/')

                    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
                    .should('not.be.visible');

                    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

                    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
                    .should('be.visible');
                  

          })

          it('Right Click', ()=>{
                    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
                    
                    //Approach1
                    // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
                    // cy.get('.context-menu-icon-copy > span').should('be.visible');
                    
                    //Approach2
                    cy.get('.context-menu-one.btn.btn-neutral').rightclick();
                    cy.get('.context-menu-icon-copy > span').should('be.visible');

          })          
          
          it('Double Click', ()=>{
                    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
                    cy.frameLoaded("#iframeResult");

                    //Approach1 -trigger()
                    // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
                    // cy.iframe('#iframeResult').find("field2").should('have.value','Hello World!');

                     //Approach1 -dblclick()
                     cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
                     cy.iframe('#iframeResult').find("field2").should('have.value','Hello World!');

          })

          it('Drag and Drop using plugin', ()=>{
                    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

                    cy.wait(3000);
                    cy.get('#box6').drag('#box106',{force: true});         
          })

          it.only('Scrolling Page', ()=>{
                    cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

                    cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img').scrollIntoView({duration:3000});
                    cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img').should('be.visible');
                    
          })

})