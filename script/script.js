let counter = 0
const numero = [1,2,20,4,5]
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget)
    })
})


