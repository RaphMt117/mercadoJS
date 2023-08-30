const catalogo = [
    {
        id: 1,
        marca: 'Zara',
        nome: 'Camisa Larga com Bolsos',
        preco: 70,
        imagem: 'product-1.jpg',
        feminino: false,
    },
    {
        id: 2,
        marca: 'Zara',
        nome: 'Casaco Reto com Lã',
        preco: 85,
        imagem: 'product-2.jpg',
        feminino: true,
    },
    {
        id: 3,
        marca: 'Zara',
        nome: 'Jaqueta com Efeito Camurça',
        preco: 60,
        imagem: 'product-3.jpg',
        feminino: false,
    },
    {
        id: 4,
        marca: 'Zara',
        nome: 'Sobretudo em Mescla de Lã',
        preco: 160,
        imagem: 'product-4.jpg',
        feminino: false,
    },
    {
        id: 5,
        marca: 'Zara',
        nome: 'Camisa Larga Acolchoada de Veludo Cotelê',
        preco: 110,
        imagem: 'product-5.jpg',
        feminino: false,
    },
    {
        id: 6,
        marca: 'Zara',
        nome: 'Casaco de Lã com Botões',
        preco: 170,
        imagem: 'product-6.jpg',
        feminino: true,
    },
    {
        id: 7,
        marca: 'Zara',
        nome: 'Casaco com Botões',
        preco: 75,
        imagem: 'product-7.jpg',
        feminino: true,
    },
    {
        id: 8,
        marca: 'Zara',
        nome: 'Colete Comprido com Cinto',
        preco: 88,
        imagem: 'product-8.jpg',
        feminino: true,
    },
]

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid border-2 border-slate-300 rounded-xl w-48 col-span-1 ' id="card-produto-${produtoCatalogo.id}">
    
    <img
    src="./assets/img/${produtoCatalogo.imagem}"
    alt="Produto ${produtoCatalogo.id} do MercadoJS."
    class="h-[300px] rounded-2xl"
    />
    <div class="h-72 rounded-xl bg-gradient-to-b from-stone-200 to-slate-600 py-5">

            <div class="text-base text-slate-800 font-medium text-center pt-3">
            <p class='text-center font-medium text-slate-950 '>Marca: <a class="text-lg font-semibold text-gray-700" >${produtoCatalogo.marca} </a></p>
            <div class="py-3">
            <p class="text-lg text-slate-950 pb-3 font-semibold">${produtoCatalogo.nome}</p>
            <p>R$${produtoCatalogo.preco}</p>
            </div>
            <button class="relative border-2 border-slate-600 rounded-full px-2 bg-slate-500 hover:scale-[102%]">Adicionar</button>
            </div>
        </div>
        
    </div>
`

    document.getElementById('container-produto').innerHTML += cartaoProduto
}
