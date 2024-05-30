
import { FeaturedProductPage } from "../pages/FeaturedProducts"

describe('add the items to the cart and verify',()=>{

   it('add items to the basket',()=>{
      var cartquantity
      var productquantity

      /*hhwpzey0f@gmail.com*/
      // cypress real events plug in
      // sleep will halt the execution
      // timeout - 4000 by default -for flaky tests
      //https://the-internet.herokuapp.com/add_remove_elements/ for practise
      cy.visit('/')
      // cy.get('.product-title>a').each((linktxt,index)=>{
      //    cy.log(linktxt.text())
      //     if(linktxt.text().includes('Apple MacBook Pro 13-inch')){         
      //       cy.log(index)
      //       // cy.get('.button-2.product-box-add-to-cart-button').eq(index)shou.ld('contain.text','Add to cart').trigger('click',{force:true})
      //       cy.get('.button-2.product-box-add-to-cart-button').eq(index).should('contain.text','Add to cart')
      //       cy.wait(2000)
      //       cy.get('.button-2.product-box-add-to-cart-button').eq(index).click()
      //     }
      // })   
      // cy.get('#add-to-cart-button-4').should('contain.text','Add to cart')
      // cy.wait(2000)
      // cy.get('#product_enteredQuantity_4').type('4')
      // cy.get('#product_enteredQuantity_4').then(($input)=>{
      //    productquantity = $input.val()
      //    cy.log(productquantity)
      // })
      // cy.get('#add-to-cart-button-4').click()
      // cy.get('.close').click()
      // cy.wait(1000)
      // cy.get('.cart-qty').invoke('text').then(($ctinput)=>{
      //    cartquantity = $ctinput
      //    cy.log(cartquantity)         
      // })

      FeaturedProductPage.addProduct('Apple MacBook Pro 13-inch')
      productquantity = FeaturedProductPage.addQuantity('4')
      cartquantity = FeaturedProductPage.verifyShoppingBasket()

      if(productquantity==cartquantity){
         cy.log('quantity added and shopping cart quantity are the same')
      }else{
          cy.log('quantity added and shopping cart quantity are not the same')  

      }


   })

   // mocking 
   // testing application before the product is developed
   // when we need our own data 
   // cy.intercept
   // database reset
   // login through api and preserving cookies




})
