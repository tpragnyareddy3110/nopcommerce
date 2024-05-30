

class FeaturedProduct {

    addProduct(productname){
        cy.get('.product-title>a').each((linktxt,index)=>{
            if(linktxt.text().includes(productname)){         
               cy.get('.button-2.product-box-add-to-cart-button').eq(index).should('contain.text','Add to cart')
               cy.wait(2000)
               cy.get('.button-2.product-box-add-to-cart-button').eq(index).click()
            }
        })   
    }

    addQuantity(quantity){
        cy.get('#add-to-cart-button-4').should('contain.text','Add to cart')
        cy.wait(2000)
        cy.get('#product_enteredQuantity_4').type(quantity)
        cy.get('#product_enteredQuantity_4').then(($input)=>{
           return $input.val()
        })
        cy.get('#add-to-cart-button-4').click()
        cy.get('.close').click()
        cy.wait(1000)
    }

    verifyShoppingBasket(){
        cy.get('.cart-qty').invoke('text').then(($ctinput)=>{
           return $ctinput     
        })
    }



}


export const FeaturedProductPage = new FeaturedProduct()