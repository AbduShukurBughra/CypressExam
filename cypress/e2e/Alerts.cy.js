
describe('Alert', ()=>{
          
          // 1) JavaScript Alert: It will have some text and 'ok' button
          it.skip('Alerts', ()=>{
                  cy.visit('https://the-internet.herokuapp.com/javascript_alerts')  
                  cy.get("button[onclick='jsAlert()']").click();

                  cy.on('window:alert',(t)=>{
                    expect(t).to.contains('I am a JS Alert');
                  })

                  //alert window automatically closesed by cypress

                  cy.xpath("//p[@id='result']").should('have.text','You successfully clicked an alert');
          })

          // 2) JavaScript Confirm Alert

          it('Js Confirm Alerts - OK', ()=>{
                    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')  

                    cy.get("button[onclick='jsConfirm()']").click();

                    cy.on('window:confirm',(t)=>{
                              expect(t).to.contains('I am a JS Confirm');
                    })
  
                    // cypress automatically closesed alert window by using ok button-default
  
                    cy.xpath("//p[@id='result']").should('have.text','You clicked: Ok');
            })

            it('Js Confirm Alerts - Cancle', ()=>{
                    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')  

                    cy.get("button[onclick='jsConfirm()']").click();

                    cy.on('window:confirm',(t)=>{
                              expect(t).to.contains('I am a JS Confirm');
                    })
                    
                    cy.on('window:confirm', ()=>false) //cypress closes alert window using cancle button

                    cy.get("#result").should('have.text','You clicked: Cancel');
            })

          // 3) JavaScript Prompt Alert

          it('Js prompt alert', ()=>{
                    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

                    cy.window().then((win)=>{
                              cy.stub(win,'prompt').returns('Hello, world');
                    })

                    cy.get("button[onclick='jsPrompt()']").click();

                    //cypress will automatically close prompted alert- it will use OK button - by default

                    cy.get('#result').should('have.text','You entered: Hello, world');
          })

          // 4) Authenticated Alert  

          it.only('Authenticated Alert', ()=>{
                    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
                                                                                  {
                                                                                          username:"admin",
                                                                                          password:"admin"
                                                                                  }
                                                                                });

                    cy.get('p').should('have.contain','Congratulations! You must have the proper credentials.')                                                            
          })
})