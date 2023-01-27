// vai copiar o email para area de tranferencia 

function copiarEmail(htmlelemento) {
    if(!htmlelemento) {
        return
    }

    b.innerText = 'c'
    let elementoTexto = htmlelemento.innerText
    let inputElemento = document.createElement('input')
    inputElemento.setAttribute('value', elementoTexto)
    document.body.appendChild(inputElemento)
    inputElemento.select()
    document.execCommand('copy')
    inputElemento.parentNode.removeChild(inputElemento)
    setTimeout(()=>{
        b.innerText=""
    }, 3000)

}
const b = document.querySelector('#res')
document.querySelector('#copiar').onclick = () => {
    copiarEmail(document.querySelector('#copiado'))
}


// efeito maquina de escrever no nome

function escrever(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML =''
    textoArray.forEach((letra, i) =>{
        setTimeout(()=> elemento.innerHTML +=letra, 150 * i)
    })
}
const nome = document.querySelector('h2')
escrever(nome)

// para aparecer os avatares no scrollar na página

const observer = new IntersectionObserver(entries =>{

    Array.from(entries).forEach( entry => {
        if(entry.intersectionRatio >=1){
            entry.target.classList.add('aparecer-off')
        }
    })
    
    
}, {
    threshold: [0, .5, 1]
})
Array.from(document.querySelectorAll('.aparecer')).forEach (element =>{
    observer.observe(element)
})






