async function getUsers () {
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json()
    console.log(data)
}
getUsers()