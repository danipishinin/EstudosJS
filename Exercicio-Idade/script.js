function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('ano')
    var res = document.querySelector('div#res')
    // getElementById == querySelector
    if(formularioAno.value.length == 0 || formularioAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formularioAno.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        if(sexo[0].checked){
            genero = 'Mulher'
        }else{
            genero = 'Homem'
        }
    }
}