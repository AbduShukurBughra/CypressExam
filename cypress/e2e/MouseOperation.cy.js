describe.only('Mouse Operations', ()=>{
          it('MouseHover', ()=>{
                    cy.visit('https://demo.opencart.com/')

                    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
                    .should('not.be.visible');

                    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

                    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
                    .should('be.visible');
                  

          })

          it.only('Right Click', ()=>{
                    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
                    
                    //Approach1
                    // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
                    // cy.get('.context-menu-icon-copy > span').should('be.visible');
                    
                    //Approach2
                    cy.get('.context-menu-one.btn.btn-neutral').rightclick();
                    cy.get('.context-menu-icon-copy > span').should('be.visible');

          })          
          
          it('Double Click', ()=>{
                    
          })

          it('Drag and Drop using plugin', ()=>{
                    
          })

          it('Scrolling Page', ()=>{
                    
          })

})