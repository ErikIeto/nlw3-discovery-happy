//tipos de dados
//String""
//Number01
//Object {}
//Boolean true or false
//array []

// create map
const map = L.map('mapid').setView([-23.5337662, -46.5383525], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [79, 84],

})

let marker;


// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icon 
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})


// photos upload - adicionar o campo de fotos
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
        //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
        // realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verficcar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }
    // limpar o campo antes de adcionar container de imagens
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()

}

// seleção do sim ou não

function toggleSelect(event) {

    // retirar a class .activer (dos botões)
    document.querySelectorAll('.button-select button')
        .forEach(function(button) {
            button.classList.remove('active')
        })

    // colocar a class. active nesse botão clicado

    const button = event.currentTarget
    button.classList.add('active')


    // atualizar o meu input hidden com valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

    alert('Selecione um ponto no mapa')

}