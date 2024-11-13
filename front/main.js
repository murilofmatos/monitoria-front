async function todosProdutos () {
    const response = await fetch('https://dummyjson.com/products')
    const produtos = await response.json()
    const main = document.getElementById('main')
    main.innerHTML = "TEXTO"
    console.log(produtos)

}

todosProdutos()