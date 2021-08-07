const descargasUsuarios = (cantidad) =>  new Promise((resolve, reject) => {
    
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

    const xhr = new XMLHttpRequest()

    // configura el request
    xhr.open('GET', api, true)

    // response handler
    xhr.onload = () => {
      debugger
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results)
      } else {
        reject(Error(xhr.statusText))
      }
    }
    // opcional
    xhr.onerror = (error) => reject(error)
    // envia el request
    xhr.send()
  })

const contenedorApp = document.querySelector("#app")

descargasUsuarios(33)
  .then((users) => {
    // let html = `
    //   <table>
    //     <thead>
    //       <th>Nombre</th>
    //       <th>Apellido</th>
    //     </thead>
    //     <tbody>
    //       ${getUsers(users)}
    //     </tbody>
    //   </table>
    // `
    contenedorApp.innerHTML = imprimirHtml(users)// html
    console.log(users)
  })
  .catch((err) => console.error(err))

function getUsers(users) {
  let html = '';
  users.forEach(user => {  
    html = html + `
        <tr>
          <td>
            ${user.name.first}  
          </td>
          <td>
            ${user.name.last}  
          </td>
          <td>
            <img src="${user.picture.medium}">  
          </td>
        </tr>
      ` 
    })
    return html;
}

function imprimirHtml(users) {
  return `
      <table>
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Foto</th>
        </thead>
        <tbody>
          ${getUsers(users)}
        </tbody>
      </table>
    `
}