function resp(){

let enviar = true;

    if(document.querySelector('.form-control').value = " "){
        document.querySelector('.alert').innerHTML = 'Debe llenar todos los Campos';
        return false
    }
 return enviar;
}

