
document.getElementById('btn-submit').addEventListener('click',function(){
const emailField =document.getElementById('your mail');
const email=emailField.value ;
console.log(email);
// get password
const passwordFiled =document.getElementById('your pass');
const passw= passwordFiled.value ;
console.log(email,passw);


if(email === 'sontan@email.com' && passw === 'laila'){                   
}
else{
                            alert('toke ami tejjo sontan ');
}
})