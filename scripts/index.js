const navbar = document.querySelector(".navbar");
const menuButton =  document.querySelector(".menu-button");
 
menuButton.addEventListener('click', () =>{
    navbar.classList.toggle("show-menu");
});

const cartImage = document.querySelector(".nav-icon-container img[src='/images/cart.png']");
const buycart = document.querySelector('.cart');

cartImage.addEventListener('click', () => {
    buycart.classList.toggle('show-cart');   
});




        
        const itens = [{
                id: 0,
                nome: 'jogo1',
                img: '../images/bg3.jpg',
                valor:300,
                quantidade: 0
        },
        {
            id: 2,
            nome: 'jogo2',
            img: '../images/bg3.jpg',
            valor:200,
            quantidade: 0
        },
        {
            id: 3,
            nome: 'jogo3',
            img: '../images/bg3.jpg',
            valor: 100,
            quantidade: 0
        }
    
    ]


    const carrinho = []; // Array para rastrear os itens no carrinho

    const inicializarLoja = () => {
        let containerJogos = document.querySelector('.product-catalog');
        let cartItems = document.querySelector('.cart-items');
        let cartTotal = document.querySelector('.cart-total');
    
        let total = 0;
    
        itens.map((val) => {
            const maucapitao = document.createElement('div');
            maucapitao.classList.add('paidefamilia');
            const aipaipara = document.createElement('img');
            aipaipara.src = val.img;
            maucapitao.appendChild(aipaipara);
    
            const falabaixonengue = document.createElement('button');
            falabaixonengue.value = val.id;
            falabaixonengue.textContent = 'Adicionar ao carrinho';
            maucapitao.appendChild(falabaixonengue);
    
            falabaixonengue.addEventListener('click', () => {
                // Adicionar o item ao carrinho
                carrinho.push(val);
                // Atualizar a lista de itens no carrinho
                atualizarCarrinho();
                // Atualizar o total
                total += val.valor;
                cartTotal.textContent = `Total: R$ ${total}`;
            });
    
            containerJogos.appendChild(maucapitao);
        });
    
        // Função para atualizar a lista de itens no carrinho
        function atualizarCarrinho() {
            cartItems.innerHTML = ''; // Limpa a lista de itens no carrinho
            carrinho.forEach((item) => {
                const itemElement = document.createElement('li');
                itemElement.textContent = `${item.nome} - R$ ${item.valor}`;
                
                const removerButton = document.createElement('button');
                removerButton.classList.add('removerbutton')
                removerButton.textContent = 'Remover';
                removerButton.addEventListener('click', () => {
                    // Remover o item do carrinho
                    const itemIndex = carrinho.indexOf(item);
                    if (itemIndex !== -1) {
                        carrinho.splice(itemIndex, 1);
                        // Atualizar a lista de itens no carrinho
                        atualizarCarrinho();
                        // Atualizar o total
                        total -= item.valor;
                        cartTotal.textContent = `Total: R$ ${total}`;
                    }
                });
    
                itemElement.appendChild(removerButton);
                cartItems.appendChild(itemElement);
            });
        }
    }
    

// Quando o usuário clicar no botão "Pagar" na página de carrinho
const prosseguirButton = document.querySelector('.ProsseguirButton');
prosseguirButton.addEventListener('click', () => {
    // Crie uma URL com os dados do carrinho como parâmetros
    const carrinhoQueryString = carrinho.map(item => `item=${encodeURIComponent(item.nome)}`).join('&');
    const totalQueryString = `total=${total}`;

    // Redirecione o usuário para a página de pagamento com os parâmetros
    window.location.href = `payment.html?${carrinhoQueryString}&${totalQueryString}`;
});


        
        
        
        window.onload =()=>inicializarLoja();


