const button = document.getElementById("button")

button.addEventListener("click", (e) => {
    const name = document.getElementById("name").value
    const surname = document.getElementById("surname").value
    const dateOfBirth = document.getElementById("dateOfBirth").value

    const datos = {
        Nombre: name,
        Apellido: surname,
        FechaDeNacimiento: dateOfBirth,
    }

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(datos => console.log(datos))
    .catch((error) => console.log(error))
    e.preventDefault()
})