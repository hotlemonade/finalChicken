const revoText = document.querySelector('.revo-text')
const revoText2 = document.querySelector('.revolution-text')

const flyBird1 = document.querySelector('.flyBird1')
const flyBird2 = document.querySelector('.flyBird2')
const flyBird3 = document.querySelector('.flyBird3')
const flyBird4 = document.querySelector('.flyBird4')
const flyBird5 = document.querySelector('.flyBird5')

const backBird = document.querySelector('.back-bird')

const revoText3 = document.querySelector('.chicken-text')
console.log(revoText3)

const gameText = document.querySelector('.game-text')

// const bhcBird1 = document.querySelector('.bird1')

const protest1 = document.querySelector('.bird-nomore')
const protest3 = document.querySelector('.protest-bird1-text')
const protest2 = document.querySelector('.protest-bird1')


// const bhcBird1 = document.querySelector('.bird1')
// const bhcBird2 = document.querySelector('.bird2')
// const bhcBird3 = document.querySelector('.bird3')



// const animationRevoText = window.innerHeight * 0.7;
//         console.log(animationRevoText)

// const animationRevoText2 = window.innerHeight * 0.7;
// console.log(animationRevoText2)

// const animationdFlyBird1 = window.innerHeight * 0.7;
// console.log(animationRevoText2)

const animationLine = window.innerHeight * 0.7;
console.log(animationLine)

const flyBirdLine = window.innerHeight * 0.9;
console.log(animationLine)


window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let revoTextTop = revoText.getBoundingClientRect().top;
    if( revoTextTop < animationLine) {
        revoText.classList.add('showed') 
    } else {
        revoText.classList.remove('showed')
    }
     
})

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let revoText2Top = revoText2.getBoundingClientRect().top;
    if( revoText2Top < animationLine) {
        revoText2.classList.add('showed') 
    } else {
        revoText2.classList.remove('showed')
    }
     
})

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let revoText3Top = revoText3.getBoundingClientRect().top;
    if( revoText3Top < animationLine) {
        revoText3.classList.add('showed') 
    } else {
        revoText3.classList.remove('showed')
    }
     
})

// flyBird
window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let flyBird1Top = flyBird1.getBoundingClientRect().top;
    if( flyBird1Top < flyBirdLine) {
        flyBird1.classList.add('showed') 
    } else {
        flyBird1.classList.remove('showed')
    }
     
})

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let flyBird2Top = flyBird2.getBoundingClientRect().top;
    if( flyBird2Top < flyBirdLine) {
        flyBird2.classList.add('showed') 
    } else {
        flyBird2.classList.remove('showed')
    }
     
})

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let flyBird3Top = flyBird3.getBoundingClientRect().top;
    if( flyBird3Top < flyBirdLine) {
        flyBird3.classList.add('showed') 
    } else {
        flyBird3.classList.remove('showed')
    }
     
})

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let flyBird4Top = flyBird4.getBoundingClientRect().top;
    if( flyBird4Top < flyBirdLine) {
        flyBird4.classList.add('showed') 
    } else {
        flyBird4.classList.remove('showed')
    }
     
})

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let flyBird5Top = flyBird5.getBoundingClientRect().top;
    if( flyBird5Top < flyBirdLine) {
        flyBird5.classList.add('showed') 
    } else {
        flyBird5.classList.remove('showed')
    }
     
})


window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let backBirdTop = backBird.getBoundingClientRect().top;
    if( backBirdTop < flyBirdLine) {
        backBird.classList.add('showed') 
    } else {
        backBird.classList.remove('showed')
    }
     
})

// bhc
// window.addEventListener('scroll', (e) => {
//     // let pos = window.scrollY;
//     let bhcBird1Top = bhcBird1.getBoundingClientRect().top;
//     if( bhcBird1Top < flyBirdLine) {
//         bhcBird1.classList.add('showed') 
//     } else {
//         bhcBird1.classList.remove('showed')
//     }
     
// })

// protest

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let protest1Top = protest1.getBoundingClientRect().top;
    if( protest1Top < flyBirdLine) {
        protest1.classList.add('showed') 
    } else {
        protest1.classList.remove('showed')
    }
     
})

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let protest2Top = protest2.getBoundingClientRect().top;
    if( protest2Top < flyBirdLine) {
        protest2.classList.add('showed') 
    } else {
        protest2.classList.remove('showed')
    }
     
})

window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let protest3Top = protest3.getBoundingClientRect().top;
    if( protest3Top < flyBirdLine) {
        protest3.classList.add('showed') 
    } else {
        protest3.classList.remove('showed')
    }

     
})
// final
window.addEventListener('scroll', (e) => {
    // let pos = window.scrollY;
    let gameTextTop = gameText.getBoundingClientRect().top;
    if( gameTextTop < animationLine) {
        gameText.classList.add('showed') 
    } else {
        gameText.classList.remove('showed')
    }

     
})








