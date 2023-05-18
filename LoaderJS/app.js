let percent = document.querySelector('.percent');
let progress = document.querySelector('.progress')
let text = document.querySelector('.text')

let count = 4;
let per = 16;
let loading = setInterval(animate, 30)

function animate(){
    if(count === 100){
        percent.classList.add('text-blink')
        text.style.display = 'block'
        clearInterval(loading)
    }else{
        per += 4;
        count++ 
        progress.style.width = per + 'px';
        percent.textContent = count + "%";
    }
}