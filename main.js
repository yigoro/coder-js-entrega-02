document.getElementById("Generar").addEventListener("click", function getUsers() {
  fetch("https://randomuser.me/api?results=10")
    .then((response) => response.json())
    .then((data) => {
      const users = data.results;
      let usersInfo = "";

      console.log(data)

      users.forEach((user) => {
        usersInfo += `
          <div>
            <p><strong>Nombre:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Edad:</strong> ${user.dob.age}</p>
            <img src="${user.picture.large}" alt="User Picture">
            <button class="button" onclick ="agregar(this, '${user.id.value}', '${user.name.first}', '${user.picture.large}', ${user.dob.age})">Agregar</button>
          </div>
        `;
      });

      document.getElementById("user-data").innerHTML = usersInfo;

    })
    .catch((error) => {
      console.error("Error al obtener los datos de los usuarios", error);
      document.getElementById("user-data").innerText = "Falló la carga de usuarios.";
    });

    
  })

  const listaUsuariosAgregados = []


  function agregar(button, id, name, photo, age) {

    const objUser = {id, name, photo, age}

    listaUsuariosAgregados.push(objUser)
    console.log(listaUsuariosAgregados)

    button.disabled = true
    document.getElementById("items").innerHTML = listaUsuariosAgregados.length


  }



