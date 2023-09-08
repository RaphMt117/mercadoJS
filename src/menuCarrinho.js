import {catalogo} from './util'

const idsProdutoCarrinhoComQuantidade = {}

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

function removerDoCarrinho(idProduto) {
	delete idsProdutoCarrinhoComQuantidade[idProduto]
	renderizarProdutosCarrinho()
}

function incrementarQuantidadeProduto(idProduto) {
	idsProdutoCarrinhoComQuantidade[idProduto]++
	atualizarInformacaoQuantidade(idProduto)
}

function decrementarQuantidadeProduto(idProduto) {
	if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
		removerDoCarrinho(idProduto)
		return
	}
	idsProdutoCarrinhoComQuantidade[idProduto]--
	atualizarInformacaoQuantidade(idProduto)
}

function atualizarInformacaoQuantidade(idProduto) {
	document.getElementById(`quantidade-${idProduto}`).innerText =
		idsProdutoCarrinhoComQuantidade[idProduto]
}

function desenharProdutoNoCarrinho(idProduto) {
	const produto = catalogo.find((p) => p.id === idProduto)

	const containerProdutorCarrinho =
		document.getElementById('produtos-carrinho')

	const elementoArticle = document.createElement('article')
	const articleClasses = [
		'flex',
		'rounded-lg',
		'bg-gradient-to-r',
		'from-slate-700',
		'to-slate-900',
		'relative',
	]
	for (const articleClass of articleClasses) {
		elementoArticle.classList.add(articleClass)
	}

	const cardProdutoCarrinho = /*html*/ `
			<button
				id="remover-item-${produto.id}"
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
			<div class="px-2 pt-2 flex flex-col justify-between">
				<p class="text-white text-sm">${produto.nome}</p>
				<p class="text-slate-400 text-xs">Tamanho: M</p>
				<p class="text-slate-400">R$${produto.preco}</p>
			</div>
            <div class="flex text-slate-400 items-end absolute bottom-1 right-2 text-lg">
                <button id="decrementar-produto-${produto.id}">-</button>
                <p id="quantidade-${produto.id}" class= "ml-2 cursor-default">${
		idsProdutoCarrinhoComQuantidade[produto.id]
	}</p>
                <button id="incrementar-produto-${
					produto.id
				}" class="ml-2">+</button>
            </div>
		`

	elementoArticle.innerHTML = cardProdutoCarrinho
	containerProdutorCarrinho.appendChild(elementoArticle)

	document
		.getElementById(`decrementar-produto-${produto.id}`)
		.addEventListener('click', () =>
			decrementarQuantidadeProduto(produto.id)
		)
	document
		.getElementById(`incrementar-produto-${produto.id}`)
		.addEventListener('click', () =>
			incrementarQuantidadeProduto(produto.id)
		)
	document
		.getElementById(`remover-item-${produto.id}`)
		.addEventListener('click', () => removerDoCarrinho(produto.id))
}

function renderizarProdutosCarrinho() {
	const containerProdutorCarrinho =
		document.getElementById('produtos-carrinho')
	containerProdutorCarrinho.innerHTML = ''

	for (const idProduto in idsProdutoCarrinhoComQuantidade) {
		desenharProdutoNoCarrinho(idProduto)
	}
}

// Funções para adicionar e remover produtos do carrinho
export function adicionarAoCarrinho(idProduto) {
	if (idProduto in idsProdutoCarrinhoComQuantidade) {
		incrementarQuantidadeProduto(idProduto)
		return
	} else {
		idsProdutoCarrinhoComQuantidade[idProduto] = 1
	}
	desenharProdutoNoCarrinho(idProduto)
}
