
var weddingck_form_container,
    other_product_form_container,
    weddingck_div,
    otherproduct_div,
   
    
   


// initializing Variables 
weddingck_form_container = document.querySelector('.weddingck_form');
other_product_form_container= document.querySelector('.other_product_form')
weddingck_div = document.querySelector('.wedding_cakes')
otherproduct_div = document.querySelector('.other_products')
createform_wedck = document.createElement('form')

/////// Functions/////////
////////////////////////////
//generateweddingformHTML
//generateotherproductformHTML
//hideweddingck_div
//hideotherproduct_div
//navigateToPage
// initialize

/** 
@name: generateweddingformHTML
@desc: create  wedding form html for user entry 
**/

function generateweddingformHTML() {
    

}

/*
@name: generateotherproductformHTML
@desc: create  wedding form html for user entry 
**/

function generateotherproductformHTML() {

    
}

/** 
@name: hideWeddingck_div
@desc: Hide contents of a div 
**/
function weddingck_forms_div() {
    weddingck_div.addEventListener('click', function () {
    $('.info_box').hide();
    $(weddingck_form_container).removeAttr("hidden")
            
 })
    
}

function initialize() {
    weddingck_forms_div();
}