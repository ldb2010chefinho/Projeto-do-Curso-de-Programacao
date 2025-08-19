const inventor = [
    {
      name: "Andreas Pavel",
      invencao:"Tocador de fita k7",
      description: "O filósofo alemão/brasileiro Andreas Pavel criou o tocador de fita K7 quando morava em São Paulo, em 1972. Batizado de stereobelt, o aparelho foi lançado comercialmente pela Sony em 1979 como Walkman. Pavel e a marca japonesa tiveram uma longa batalha jurídica até ela reconhecer a autoria do seu invento.",
      imageUrl:"img/Andreas-Pavel.webp",
      inventorHref:"https://en.wikipedia.org/wiki/Andreas_Pavel",
    },

    {
        name: "Nélio José Nicolai",
        invencao:"Identificador de chamadas",
        description: "Criado em 1980 pelo eletrotécnico Nélio José Nicolai, o identificador de chamadas é praticamente indispensável atualmente. Chamado originalmente de BINA (“B identifica número de A”), se tornou sucesso mundial.",
        imageUrl:"img/Nelio-Jose.webp",
        inventorHref:"https://pt.wikipedia.org/wiki/N%C3%A9lio_Jos%C3%A9_Nicolai",
      },

      {
        name: "Roberto Landell",
        invencao:"Transmissão radiofônica",
        description: "O padre Roberto Landell foi pioneiro no uso das ondas eletromagnéticas para transmitir a voz humana, mas teve seu feito esquecido. A invenção do rádio acabou equivocadamente atribuída ao italiano Guglielmo Marconi.",
        imageUrl:"img/Roberto-Landell.jpg",
        inventorHref:"https://pt.wikipedia.org/wiki/Roberto_Landell_de_Moura",
      },

      {
        name: "Francisco João de Azevedo",
        invencao:"Máquina de escrever",
        description: "O também padre Francisco João de Azevedo é considerado o inventor da máquina de escrever, ao adaptar um piano de 24 teclas para imprimir letras em papel. No entanto, sua ideia teria chegado ao exterior após sabotagem, deixando-o no esquecimento.",
        imageUrl:"img/Franscisco-Joao.png",
        inventorHref:"https://pt.wikipedia.org/wiki/Francisco_Jo%C3%A3o_de_Azevedo",
      },

      {
        name: "José Braz Araripe",
        invencao:"Câmbio automático",
        description: "Geralmente presente em carros mais caros, a transmissão automática foi criada no Brasil, em 1932, pelo engenheiro mecânico José Braz Araripe. O sistema, que funcionava por fluido hidráulico, acabou vendido para a General Motors (GM).",
        imageUrl:"img/Jose-Braz.jpg",
        inventorHref:"https://en.wikipedia.org/wiki/Andreas_Pavel",
      },

      {
        name: "Vital Brazil",
        invencao:"Soro antiofídico",
        description: "Essencial no tratamento das vítimas de picadas de cobras, o soro antiofídico é obra do médico Vital Brazil. O medicamento surgiu em 1903 após o especialista, que também criou o Instituto Butantan, descobrir que cada tipo de veneno exige um antídoto específico.",
        imageUrl:"img/Vital-Brazil.jpg",
        inventorHref:"https://pt.wikipedia.org/wiki/Vital_Brazil",
      },

      {
        name: "Bartolomeu de Gusmão",
        invencao:"Balão de ar quente",
        description: "Ao observar que o ar aquecido é mais leve, o inventor Bartolomeu de Gusmão usou seus conhecimentos para criar o balão de ar quente. O primeiro veículo levitando com base no conceito surgiu em 1709 e foi exibido para a corte portuguesa, depois de vários testes levarem a uma versão capaz de subir e descer de forma segura e eficaz.",
        imageUrl:"img/Bartolomeu.jpg",
        inventorHref:"https://pt.wikipedia.org/wiki/Bartolomeu_de_Gusm%C3%A3o",
      },

      {
        name: "Manuel de Abreu",
        invencao:"Abreugrafia",
        description: "Entre as principais invenções brasileiras, também vale destacar a abreugrafia. Desenvolvida pelo médico Manuel de Abreu, a técnica passou a permitir radiografar os pulmões, contribuindo para tornar o diagnóstico da tuberculose e outras doenças muito mais rápido.",
        imageUrl:"img/Manuel-Dias.jpg",
        inventorHref:"https://pt.wikipedia.org/wiki/Manuel_Dias_de_Abreu",
      },

      {
        name: "Sebastião Comparato",
        invencao:"Cinema 3D",
        description: "O ítalo-brasileiro Sebastião Comparato desenvolveu dois modelos de projetores tridimensionais apresentados em 1934, no Rio de Janeiro. Com possibilidade de adaptação a uma tela especial e aos projetores comuns, o mecanismo que dava a sensação de transmissão da imagem em um espaço vazio deu origem ao cinema 3D.",
        imageUrl:"",
        inventorHref:"https://pt.wikipedia.org/wiki/Manuel_Dias_de_Abreu",
      },

  ];

  // Seleciona o template e o container onde os produtos serão inseridos
  const template = document.getElementById('inventor-template');
  const inventorContainer = document.getElementById('inventor-container');

  // Função para criar e inserir os cards de produto
  inventor.forEach(inventor => {
    // Clona o conteúdo do template
    const inventorElement = document.importNode(template.content, true);

    // Preenche o conteúdo do card com os dados do produto
    inventorElement.querySelector('.inventor-name').textContent = inventor.name;
    inventorElement.querySelector('.inventor-description').textContent = inventor.description;
    inventorElement.querySelector('.inventor-image').src = inventor.imageUrl;
    inventorElement.querySelector('.invencao').textContent = inventor.invencao;
    inventorElement.querySelector('.inventorHref').href = inventor.inventorHref;


    // Adiciona o card preenchido no container
    inventorContainer.appendChild(inventorElement);
  });

