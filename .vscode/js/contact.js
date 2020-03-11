console.log("it works")

$(document).ready(function(){
$('.submit').click(function(event){
console.log('Clicked button')


var email =$('.email').val()
var subject =$('.subject').val()
var message =$('.message').val()
var statusElm =$('.status')
statusElm.empty()

if(email.length > 5 && email.includes('@') && email.includes('.')){
    statusElm.append('')
 } else {
    statusElm.append('<div style="color:red; text-align:center;">The email you entered is not valid.<br><br></div>')
    event.preventDefault()
    }



   if(message.length != 0){
    statusElm.append('')
} else {
   statusElm.append('<div style="color:red; text-align:center;">Your message is empty.<br><br></div>')
   event.preventDefault()
   }

})

})




function Start(){
   const once = document.getElementById('one');
const twice = document.getElementById('two');
const third = document.getElementById('three');
const four = document.getElementById('four');

   console.log("hey");
   once.classList.remove('hide');
   twice.classList.remove('hide');
   third.classList.remove('hide');
   four.classList.add('hide');
 
    
}
