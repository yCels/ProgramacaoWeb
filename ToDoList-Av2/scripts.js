/* */

function adicionarTarefa() {

    let inputTask = document.querySelector("#task").value
    let inputData = document.querySelector("#data").value

    let li = document.createElement("li")
    li.innerHTML = inputTask + inputData + "<span  onclick='deletarTarefa(this)'>❌</span>"


    document.querySelector("ul").appendChild(li)
x
    inputTask = ""
    inputData = ""


}

function deletarTarefa(li) {
    li.parentElement.remove()

}