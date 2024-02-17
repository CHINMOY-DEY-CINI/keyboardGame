let cli = document.getElementById('clicker')
let firs = document.getElementById('first')
let secon = document.getElementById('second')
let rir = document.getElementById('rir')
let scorehi = document.getElementById('scorehi')
let decrime = document.getElementById('dicrime')
let last = document.getElementById('last')
let mainsco = document.getElementById('mainscore')
let clickeri = document.getElementById('clickeri')
let decrim = 5
let sorre = 0



cli.addEventListener('click',function(){
    firs.classList.add('hidden')
    secon.classList.remove('hidden')
    rando()

})

clickeri.addEventListener('click',function(){
    last.classList.add('hidden')
    secon.classList.remove('hidden')
    decrime.innerText = 5
    scorehi.innerText = 0
    rando()    

})

let word = 'zxcvbnmasdfghjklpoiuytrewq'.split('')



function rando(){
    let randomi = Math.round(Math.random()*25+1)
    let wordran = (word[randomi])
    randomword(wordran)
}



function randomword(wordra) {
    document.getElementById(wordra).classList.add('bg-red-500')
    rir.innerText = wordra
}

document.addEventListener("keyup", myFunction);

function myFunction(e){
    let ekey = e.key.toLowerCase()
    let wood = rir.innerText.toLowerCase()
    if(ekey == wood){
        console.log('milse')
        sorre++
        scorehi.innerText = sorre
        document.getElementById(wood).classList.remove('bg-red-500')
        rando()
    }else{
        decrim--
        decrime.innerText = decrim
        if(decrim == 0){
            secon.classList.add('hidden')
            last.classList.remove('hidden')
            mainsco.innerText = sorre
            decrim = 5
            sorre = 0
            document.getElementById(wood).classList.remove('bg-red-500')
        }
    }
}
















