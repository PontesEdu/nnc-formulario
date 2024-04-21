const btnAdicionarForm = document.querySelector(".btnAdicionar")
const formAdd = document.querySelector(".form-add")
const addItem = document.querySelector(".addItem")
const ulLista = document.querySelector(".ulLista")
const inputMovel = document.querySelector(".inputMovel")
const removeItem = document.querySelector(".removeItem")
const nome = document.querySelector("#inputNome")
const endereco = document.querySelector("#inputEndereco")
const bairro = document.querySelector("#inputBairro")
const complemento = document.querySelector("#inputState")
const numero = document.querySelector("#inputNumero")
const cep = document.querySelector("#inputCep")

const endereco2 = document.querySelector("#inputEndereco2")
const bairro2 = document.querySelector("#inputBairro2")
const complemento2 = document.querySelector("#inputState2")
const numero2 = document.querySelector("#inputNumero2")
const cep2 = document.querySelector("#inputCep2")
const inputCheckMontagem = document.querySelector("#inputCheck")
const inputCheckEmbalagem = document.querySelector("#inputCheckEmbalagem")
const inputCheckTermo = document.querySelector("#inputCheckTermo")
const btnFinalizar = document.querySelector(".formulario")


const lista = []
const FormMudanca = {}







function addMovel(movel){
    const li = document.createElement("li")

    const iconCheck = document.createElement("i")
    iconCheck.classList.add("bi")
    iconCheck.classList.add("bi-check-circle")

    const iconLixo = document.createElement("i")
    iconLixo.classList.add("bi")
    iconLixo.classList.add("bi-trash3-fill")

    const h3 = document.createElement("h3")
    h3.innerHTML = movel

    li.append(iconCheck)
    li.append(h3)
    li.append(iconLixo)

    iconLixo.addEventListener("click", e =>{
        e.preventDefault()
        li.remove()
    })
    

    return li
    
}



btnAdicionarForm.addEventListener("click", e =>{
    e.preventDefault()

    formAdd.classList.toggle("hidden")
})


addItem.addEventListener("click", e =>{
    e.preventDefault()

    if(inputMovel.value === "" || inputMovel.value === " "){
        return
    }

    const movel = inputMovel.value

    lista.push(movel)

    ulLista.append(addMovel(movel))


   
    limparInput(inputMovel)
    formAdd.classList.toggle("hidden")
    
})

function limparInput(input){
    input.value = ""
}

removeItem.addEventListener("click", e =>{
    e.preventDefault()
    limparInput(inputMovel)
})

lista.forEach(lista =>{
    addMovel(lista)
})





function whatsapp(form){
    const tel = "+5511977844812"

    const url = "https://wa.me/" + tel + "?text="
    + "Nome: " +form.nome+ "%0a"
    + " " + "%0a"
    + "ENDEREÇO DE ORIGEM" +"%0a"
    + "Endereço: " +form.enderecoOrigem.endereco+ "%0a"
    + "Numero: " +form.enderecoOrigem.numero+ "%0a"
    + "Bairro: " +form.enderecoOrigem.bairro+ "%0a"
    + "Cep: " +form.enderecoOrigem.cep+ "%0a"

    + " " + "%0a"
    + "ENDEREÇO DE DESTINO" +"%0a"
    + "Endereço: " +form.enderecoDestino.endereco+ "%0a"
    + "Numero: " +form.enderecoDestino.numero+ "%0a"
    + "Bairro: " +form.enderecoDestino.bairro+ "%0a"
    + "Cep: " +form.enderecoDestino.cep+ "%0a"

    + " " + "%0a"
    + "LISTA: " +form.lista+ "%0a"

    + " " + "%0a"
    + "EMBALAGEM: " +form.embalagem+ "%0a"

    + " " + "%0a"
    + "MONTAGEM: " +form.montagem+ "%0a"

    + " " + "%0a"
    + "TERMOS DA MUDANÇA: " +form.termo+ "%0a"

    window.open(url, "_black")


}


btnFinalizar.addEventListener("submit", (e) =>{
    e.preventDefault()


    inputCheckMontagem.addEventListener("change", function(){
        if(this.checked){
           FormMudanca.montagem = "Com montagem e desmontagem"  
        } else{
            FormMudanca.montagem = "sem montagem e desmontagem"
        }
    
        
    })
    
    inputCheckEmbalagem.addEventListener("change", function(){
        if(this.checked){
           FormMudanca.embalagem = "Com embalagem"  
        } else{
            FormMudanca.embalagem = "sem Embalagem"
        }
    })
    
    inputCheckTermo.addEventListener("change", function(){
        if(this.checked){
           FormMudanca.termo = "concordou com os termos da mudança"
        } else{
            FormMudanca.termo = "NÃO concordou com os termos da mudança"
        }
    })

    FormMudanca.nome = nome.value
    FormMudanca.enderecoOrigem = {
        endereco: endereco.value,
        bairro: bairro.value,
        complemento: complemento.value,
        numero: numero.value,
        cep: cep.value
    }
    FormMudanca.enderecoDestino = {
        endereco: endereco2.value,
        bairro: bairro2.value,
        complemento: complemento2.value,
        numero: numero2.value,
        cep: cep2.value
    }
    FormMudanca.lista = lista

    console.log(FormMudanca)

    // whatsapp(FormMudanca)
    // window.location.href = './finalizado.html'
    
})