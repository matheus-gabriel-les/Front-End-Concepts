

function verificarDados(event) {
    let hasError = false;

    const fields = [
        { id: 'nome', message: 'Por favor, preencha o nome.' },
        { id: 'idade', message: 'Por favor, preencha a idade.' },
        { id: 'data_nascimento', message: 'Por favor, preencha a data de nascimento.' },
        { id: 'sexo', message: 'Por favor, selecione o sexo.' },
        { id: 'endereco', message: 'Por favor, preencha o endereço.' },
        { id: 'cidade', message: 'Por favor, preencha a cidade.' },
        { id: 'bairro', message: 'Por favor, preencha o bairro.' },
        { id: 'cep', message: 'Por favor, preencha o CEP.' },
        { id: 'estado', message: 'Por favor, selecione o estado.' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.id + 'Error');
        if (!input.value.trim()) {
            error.textContent = field.message;
            hasError = true;
        } else {
            error.textContent = '';
        }
    });

    if (!hasError) {
        alert("Formulário enviado com sucesso!");
    } else {
        event.preventDefault();
    }
}
