document.addEventListener('DOMContentLoaded', function () {
    // Get form, submit button, and required fields
    const form = document.getElementById('myForm');
    const submitBtn = document.getElementById('submitBtn');
    const requiredFields = ['name', 'email'];

    form.addEventListener('input', function(){
        const AllFieldsRequired = requiredFields.every(fieldName => {
        const element = document.getElementById(fieldName);
        return element.value.trim() !== "";
    })
    submitBtn.disabled = !AllFieldsRequired;
    })
    
    form.addEventListener('submit', function (event) {
        if(!submitBtn.disabled){
            alert('Formulário enviado!');
        }
        event.preventDefault();
    })

})