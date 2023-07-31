
function cartaPersonaje(nombre, altura, peso, colorPunto) {
    let carta = `<div class="carta">
        <div>
          <div class="punto${colorPunto}"></div>
        </div>
        <div>
          <p class="tituloCarta">${nombre}</p>
          <p class="descripcionCarta">
            Estatura: ${altura} cm. Peso: ${peso} kg.
          </p>
        </div>
      </div>`

    return carta
}


const personajesPrincipales = (i) => {
    $.get(`https://swapi.dev/api/people/${i}`, function (data, status) {
        let carta = cartaPersonaje(data.name, data.height, data.mass, 'Rosado')
        $("#p1-5").append(carta)
    })
}

$(function () {
    $("#principales").on("mouseenter", function () {
        generarPrincipales.next()
    })
})

function* generadorPersonajesPrincipales() {
    let i = 1
    yield personajesPrincipales(i);
    i++
    yield personajesPrincipales(i);
    i++
    yield personajesPrincipales(i);
    i++
    yield personajesPrincipales(i);
    i++
    yield personajesPrincipales(i);
    i++
}

let generarPrincipales = generadorPersonajesPrincipales()



function personajesSecundarios(i) {
    $.get(`https://swapi.dev/api/people/${i}`, function (data, status) {
        let carta = cartaPersonaje(data.name, data.height, data.mass, 'Verde')
        $("#p6-11").append(carta)
    })
}

$(function () {
    $("#secundarios").on("mouseenter", function () {
        generarSecundarios.next()
    })
})

function* generadorPersonajesSecundarios() {
    let i = 6
    yield personajesSecundarios(i);
    i++
    yield personajesSecundarios(i);
    i++
    yield personajesSecundarios(i);
    i++
    yield personajesSecundarios(i);
    i++
    yield personajesSecundarios(i);
    i++
}

let generarSecundarios = generadorPersonajesSecundarios()


function extras(i) {
    $.get(`https://swapi.dev/api/people/${i}`, function (data, status) {
        let carta = cartaPersonaje(data.name, data.height, data.mass, 'Azul')
        $("#p12-17").append(carta)
    })
}

$(function () {
    $("#extras").on("mouseenter", function () {
        generarExtras.next()
    })
})

function* generadorPersonajesExtras() {
    let i = 12
    yield extras(i);
    i++
    yield extras(i);
    i++
    yield extras(i);
    i++
    yield extras(i);
    i++
    yield extras(i);
    i++
}

let generarExtras = generadorPersonajesExtras()