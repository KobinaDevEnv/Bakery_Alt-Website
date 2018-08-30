

var weddingck_form_container,
    other_product_form_container,
    weddingck_div,
    otherproduct_div,
    DatePicker;
   
    
   


// initializing Variables 
weddingck_form_container = document.querySelector('.weddingck_form');
other_product_form_container= document.querySelector('.other_product_form')
weddingck_div = document.querySelector('.wedding_cakes')
otherproduct_div = document.querySelector('.other_products')
DatePicker = document.querySelector('.datepicker')
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
@name: weddingck_div
@desc: show contents of a div 
**/
function weddingck_forms_div() {
    weddingck_div.addEventListener('click', function () {
    $('.info_box').hide();
    $(weddingck_form_container).removeAttr("hidden");
            
 })
    
}

/** 
@name: otherproduct_div
@description: show content of a div
**/
function otherproducts_form_div() {
    otherproduct_div.addEventListener('click', function () {
        $('.info_box').hide();
        $(other_product_form_container).removeAttr("hidden");
    })
    
}
/**
 @name: initializeDatePicker
 @description: intialize the date picker 
 */

 function initializeDatePicker() {
     DatePicker.addEventListener('click', function () {
        $(DatePicker).datepicker();
     })
   
 }
function initialize() {

    weddingck_forms_div();
    otherproducts_form_div();
    initializeDatePicker();    
}