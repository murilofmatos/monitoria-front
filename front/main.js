async function todosProdutos () {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    const produtos = data.products
    const main = document.getElementById('main')

    produtos.map((produto)=>{
        main.innerHTML += `
        <div class="card">
            <img src="${produto.thumbnail}" alt="kiwi">
            <h4 class="title">${produto.title}</h4>
            <p id="price">$${produto.price}</p>
        </div>
    `
    })
    
}

todosProdutos()


