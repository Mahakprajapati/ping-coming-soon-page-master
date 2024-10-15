const button=document.querySelector('.button');
const input=document.querySelector('input');


input.addEventListener('focus',()=>{
    input.parentElement.parentElement.classList.remove('error');
})

button.addEventListener('click',()=>{
//   console.log(input.value);
    if(input.value){
    input.parentElement.parentElement.classList.remove('error');
    }else{
    input.parentElement.parentElement.classList.add('error');
    }
});
