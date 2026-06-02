window.onload = function () {
    fetch('http://localhost:8080/user/listaUsuarios')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários');
            }
            return response.json();
        })
        .then(data => preencherTabela(data))
        .catch(error => {
            console.error('Erro:', error);
            alert('Falha ao carregar os usuários.');
        });
};

function preencherTabela(usuarios) {
    const tbody = document.querySelector('#tabelaUsuarios tbody');
    tbody.innerHTML = '';

    usuarios.forEach(usuario => {
        const linha = document.createElement('tr');

        const id = document.createElement('td');
        id.textContent = usuario.id;
        linha.appendChild(id);

        const nome = document.createElement('td');
        nome.textContent = usuario.nome;
        linha.appendChild(nome);

        const email = document.createElement('td');
        email.textContent = usuario.email;
        linha.appendChild(email);

        tbody.appendChild(linha);
    });
}

function carregarUsuarios() {
    fetch('http://localhost:8080/user/listaUsuarios')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários');
            }
            return response.json();
        })
        .then(data => preencherTabela(data))
        .catch(error => {
            console.error('Erro:', error);
            alert('Falha ao carregar os usuários.');
        });
}

function buscarUsuario() {
    const id = document.getElementById("idBusca").value;

    if (!id) {
        // Campo vazio → mostrar todos os usuários
        carregarUsuarios(); // chama a função de listar todos
        return;
    }

    fetch(`http://localhost:8080/user/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Usuário não encontrado");
            }
            return response.json();
        })
        .then(usuario => {
            const tbody = document.querySelector("#tabelaUsuarios tbody");
            tbody.innerHTML = ''; // limpa tabela
            const linha = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = usuario.id;
            linha.appendChild(idCell);

            const nomeCell = document.createElement('td');
            nomeCell.textContent = usuario.nome;
            linha.appendChild(nomeCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = usuario.email;
            linha.appendChild(emailCell);

            tbody.appendChild(linha);
        })
        .catch(error => {
            alert(error.message);
        });
}

