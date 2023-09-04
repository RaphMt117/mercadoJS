import {catalogo} from './util'
import { adicionarAoCarrinho } from './menuCarrinho'

export function renderizarCatalogo() {
	for (const produtoCatalogo of catalogo) {
		const cartaoProduto = /*html*/`
            <div
				class="border-solid border-2 border-gray-500 rounded-lg col-span-1 flex flex-col p-2 justify-between group bg-gray-200"
				id="card-produto-${produtoCatalogo.id}">
				<img
					src="./assets/img/${produtoCatalogo.imagem}"
					alt="Produto ${produtoCatalogo.id} do MercadoJS."
					class="rounded-xl shadow-lg z-10 group-hover:scale-[101%] duration-500 cursor-pointer" />
				<div class="rounded-md">
					<div class="text-slate-800 font-medium">
						<p class="text-center font-medium text-slate-950 pb-2">
							Marca:
							<a class="text-lg font-semibold text-slate-950 mb-1">${produtoCatalogo.marca}</a>
						</p>
						<p class="text-lg text-slate-950 font-semibold ">
							${produtoCatalogo.nome}
						</p>
						<p class="pt-2 pb-3">R$${produtoCatalogo.preco}</p>
						<button
                            id='adicionar-${produtoCatalogo.id}'
							class="text-slate-200 bg-slate-950 w-full py-2 pt-3 align-middle rounded-md flex justify-center gap-3 hover:bg-slate-800">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M11 6H9q-.425 0-.713-.288T8 5q0-.425.288-.713T9 4h2V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2h2q.425 0 .713.288T16 5q0 .425-.288.713T15 6h-2v2q0 .425-.288.713T12 9q-.425 0-.713-.288T11 8V6ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7l3.625-6.5q.125-.25.35-.375T20 4q.575 0 .863.488t.012.987L17.3 11.95q-.275.5-.738.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7q-1.125 0-1.713-.975T5.25 14.05L6.6 11.6L3 4Z" />
							</svg>
							<p class="text-sm">Adicionar ao carrinho</p>
						</button>
					</div>
				</div>
			</div>
		`
		document.getElementById('container-produto').innerHTML += cartaoProduto
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
	}

	for (const produtoCatalogo of catalogo) {
		document
			.getElementById(`adicionar-${produtoCatalogo.id}`)
			.addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
	}
}
