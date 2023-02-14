let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const FIRST_NAME = document.querySelector("#firstname")
    const LAST_NAME = document.querySelector("#lastname")
    const SCORE = document.querySelector("#score")
    
    if (FIRST_NAME.value && LAST_NAME.value && SCORE.value) {
        addItem(FIRST_NAME.value, LAST_NAME.value, SCORE.value)  // gonderdikten sonra sifirladik
        FIRST_NAME.value = ""
        LAST_NAME.value = "" 
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            "danger"
        )
    }
    
}


let userListDOM = document.querySelector('#userList')


const addItem = (firstName, lastName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        ${firstName} ${lastName}
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM)
}