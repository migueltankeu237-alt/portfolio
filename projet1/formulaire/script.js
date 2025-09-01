document.getElementById("switch-to-register").addEventListener('click',(event)=>{
    event.preventDefault()
document.querySelector('.wraper').classList.add("hidden")
})


document.getElementById("switch-to-login").addEventListener('click',(event)=>{
    event.preventDefault()
document.querySelector('.wraper').classList.remove("hidden")
})