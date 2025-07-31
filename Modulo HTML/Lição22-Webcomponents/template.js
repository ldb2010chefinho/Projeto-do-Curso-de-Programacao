// Array com os dados dos produtos
const products = [
    {
      name: "Smartphone XYZ",
      description: "Um smartphone incrível com muitos recursos.",
      price: "R$ 1.999,00",
      imageUrl: "https://cdn.pixabay.com/photo/2018/10/10/13/59/huawei-3737335_1280.jpg"
    },
    {
     name:"Camisa do Palmeiras",
     description:"Terceira Camisa do palmeiras de 2024",
     price:"R$649,99",
     imageUrl:"https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/08/23/1399860281-20240823171928.jpg"
    } 
  ];

  // Seleciona o template e o container onde os produtos serão inseridos
  const template = document.getElementById('product-template');
  const productsContainer = document.getElementById('products-container');

  // Função para criar e inserir os cards de produto
  products.forEach(product => {
    // Clona o conteúdo do template
    const productElement = document.importNode(template.content, true);

    // Preenche o conteúdo do card com os dados do produto
    productElement.querySelector('.product-name').textContent = product.name;
    productElement.querySelector('.product-description').textContent = product.description;
    productElement.querySelector('.product-price').textContent = product.price;
    productElement.querySelector('.product-image').src = product.imageUrl;

    // Adiciona o card preenchido no container
    productsContainer.appendChild(productElement);
  });

