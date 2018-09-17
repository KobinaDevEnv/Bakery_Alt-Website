var weddingck_form_container,
    other_product_form_container,
    weddingck_div,
    otherproduct_div,
    DatePicker,
    appointment,
    name,
    email,
    subject,
    message,
    file,
    date,
    config,
    count;
   
    
   
    
   


// initializing Variables 
weddingck_form_container = document.querySelector('.weddingck_form');
other_product_form_container= document.querySelector('.other_product_form')
weddingck_div = document.querySelector('.wedding_cakes')
otherproduct_div = document.querySelector('.other_products')
DatePicker = document.querySelector('.datepicker')
createform_wedck = document.createElement('form')
config = {
    apiKey: "AIzaSyCpDs3mw9AbX3anhNDZWEskGnupUA4pTbA",
    authDomain: "bakery-1e54a.firebaseapp.com",
    databaseURL: "https://bakery-1e54a.firebaseio.com",
    projectId: "bakery-1e54a",
    storageBucket: "bakery-1e54a.appspot.com",
    messagingSenderId: "1004714335837"
  };
  
  firebase.initializeApp(config)

 




/////// Functions/////////
////////////////////////////
//generateweddingformHTML
//generateotherproductformHTML
//hideweddingck_div
//hideotherproduct_div
//navigateToPage
// initialize


/**
 * @name: validateEntry
 * @description: validate all entries 
 */

 function validateEntry(){
     debugger
   if(name == "" || email == "" || subject == ""|| message== ""|| file== "" || date == ""){
       alert("All fields must be filled")
       return false;
    }
    else{
        return true ;
    }
}
/** 
@name: submitAppointment
@desc: create  wedding  form html for user entry 
**/

function submitAppointment() {
    Submit.addEventListener('click', function () {
      
        name = $("#name").val();
        email = $("#email").val();
        subject = $("#subject").val();
        message = $("#message").val();
        file = $("#file").val();
        date = $("#date-picker-example").val();
        if (validateEntry() == true){
            // Set and push entries  
            appointment = firebase.database().ref("appointments/"+ name ).push().set({
                "name": name,
                "email": email,
                "subject": subject,
                "message": message,
                "file " : file,
                "date": date
            })
            
            alert("DONE")
            
        }else{
            return;
        }
        
    })

    
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
        $(DatePicker).pickadate();
     })
   
 }
function initialize() {
    weddingck_forms_div();
    otherproducts_form_div();
    submitAppointment();
    // initializeDatePicker();    
   
}

initialize();
