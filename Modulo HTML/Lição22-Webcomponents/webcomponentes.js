const template=document.createElement("template")

template.innerHTML= `
<style>
   .card {
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 16px;
      text-align: center;
      background-color: white;
    }
    .card img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    .card h3 {
      margin: 10px 0 5px 0;
      font-size: 18px;
    }
    .card p {
      font-size: 14px;
      color: #555;
    }
  </style>

  <div class="card">
    <img src="" alt="Profile Image">
    <h3></h3>
    <p></p>
  </div> `
;

// Definindo o Web Component
class ProfileCard extends HTMLElement {
    constructor() {
      super();
  
      // Ativar o Shadow DOM para encapsulamento
      this.attachShadow({ mode: 'open' });
  
      // Clonar o template e anexá-lo ao shadow DOM
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    // Método chamado quando o componente é adicionado ao DOM
    connectedCallback() {
      // Acessa os atributos do elemento e preenche o conteúdo
      this.shadowRoot.querySelector('img').src = this.getAttribute('img');
      this.shadowRoot.querySelector('h3').textContent = this.getAttribute('name');
      this.shadowRoot.querySelector('p').textContent = this.getAttribute('description');
    }
  }
  
  // Registrar o novo elemento customizado
  customElements.define('profile-card', ProfileCard);