document.addEventListener('DOMContentLoaded', function () {
    // Pega o id de form, submit button, e um array de 'ids'
    const form = document.getElementById('myForm');
    const submitBtn = document.getElementById('submitBtn');
    const requiredFields = ['name', 'email'];
    //Evento de input checa se todos os campos foram preenchidos
    form.addEventListener('input', function(){
        const AllFieldsRequired = requiredFields.every(fieldName => {
        const element = document.getElementById(fieldName);
        return element.value.trim() !== "";
    })
    //Se os campos forem preenchidos o disabled irá ser falso e vice-versa
    submitBtn.disabled = !AllFieldsRequired;
    })
    //Se o disabled for falso aparecerá um alert falando que o formulário foi enviado
    form.addEventListener('submit', function (event) {
        if(!submitBtn.disabled){
            alert('Formulário enviado!');
        }
        event.preventDefault();
    })

})