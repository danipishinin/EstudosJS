function tabuada(){
    let numero = document.getElementById('num')
    let tab = document.getElementById('tabuada')
    if(numero.value.length == 0){
        window.alert('Por favor, digite um número')
    }else{
        let n = Number(numero.value)
        tab.innerHTML = ''
        for(o=0; o <=10; o++){
            let item = document.createElement('option')
            item.text = `${n} x ${o} = ${n * o}`
            tab.appendChild(item)
        }
    }
}