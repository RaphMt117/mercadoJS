import {catalogo} from './util'

// Funções para abrir e fechar carrinho
function abrirCarrinho() {
	document.getElementById('carrinho').classList.remove('right-[-384px]')
	document.getElementById('carrinho').classList.add('right-0')
}
function fecharCarrinho() {
	document.getElementById('carrinho').classList.remove('right-0')
	document.getElementById('carrinho').classList.add('right-[-384px]')
}

// Separando botões para abrir e fechar carrinho pela tag
export function inicializarCarrinho() {
	const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
	const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')

	botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
	botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
}

// Funções para adicionar e remover produtos do carrinho
export function adicionarAoCarrinho(idProduto) {
	const produto = catalogo.find((p) => p.id === idProduto)
	const containerProdutorCarrinho =
		document.getElementById('produtos-carrinho')
	const cardProdutoCarrinho = /*html*/ `
		<article
			class="flex rounded-lg bg-gradient-to-r from-slate-700 to-slate-900">
			<button
				id="fechar-carrinho"
				class="text-slate-300 hover:text-slate-700 hover:bg-red-400 hover:rounded-l-xl">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="24"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M8 9h8v10H8z"
						opacity=".3" />
					<path
						fill="currentColor"
						d="m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
				</svg>
			</button>
			<img
				src="./assets/img/${produto.imagem}"
				alt="${produto.nome}"
				class="h-24 " />
			<div class="pl-1 pt-2">
				<p class="text-white text-sm">${produto.nome}</p>
				<p class="text-slate-400 text-xs">Tamanho: M</p>
				<p class="text-slate-400">R$${produto.preco}</p>
			</div>
		</article>`

	containerProdutorCarrinho.innerHTML += cardProdutoCarrinho
}
