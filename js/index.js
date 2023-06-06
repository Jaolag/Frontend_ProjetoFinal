document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("botao-formulario");
    const formulario = document.getElementById("form-cadastro");

    botao.addEventListener("click", function() {
      formulario.style.display = "block";
      botao.style.display = "none";
    });
  });
  const baseURL = 'http://127.0.0.1:8000/api/tarefas';
  const token = `Bearer ${localStorage.getItem("token_tarefas")}`;
  
  document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("botao-formulario");
    const formulario = document.getElementById("form-cadastro");

    botao.addEventListener("click", function() {
      formulario.style.display = "block";
      botao.style.display = "none";
    });
  });

  $(document).ready(function() {
    $("#form-cadastro").submit(function(event) {
      event.preventDefault();
      const titulo = $("#titulo").val();
      const descricao = $(".descricao").val();
      
      const data = { titulo, descricao };
      const url = "http://127.0.0.1:8000/api/tarefas";

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
      })
      .then(response => response.json())
      .then(result => {
        const cardHtml = `<div class="card">
                            <div class="card-header">${result.titulo}</div>
                            <div class="card-body">${result.descricao}</div>
                          </div>`;
        $("#tarefas-cadastradas").append(cardHtml);
      })
      .catch(error => {
        console.error(error);
      });

      $("#titulo").val("");
      $(".descricao").val("");
    });
  });