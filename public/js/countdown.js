// Constantes de tiempo para realizar las operaciones
const segundo = 1000
const minuto = segundo * 60
const hora = minuto * 60
const dia = hora * 24

// Establecemos la fecha de graduación
const fechaGraduacion = new Date("Dec 15, 2022 15:30:00").getTime()

// Actualizar el conteo cada segundo
setInterval(() => {

    // Obtenemos cuanto tiempo falta de ahorita a la fecha de graduación
    let hoy = new Date().getTime()
    let tiempoFaltante = fechaGraduacion - hoy

    // Tenemos que calcular la fecha por dias horas minutos y segundos
    let dias = Math.floor(tiempoFaltante / (dia))
    let horas = Math.floor((tiempoFaltante % (dia)) / (hora))
    let minutos = Math.floor((tiempoFaltante % (hora)) / (minuto))
    let segundos = Math.floor((tiempoFaltante % (minuto)) / segundo)

    document.getElementById("days").innerText = dias
    document.getElementById("hours").innerText = horas
    document.getElementById("minutes").innerText = minutos
    document.getElementById("seconds").innerText = segundos

    // Si el contador se termina, se mostrará que ya estoy graduado
    if (tiempoFaltante < 0) {
        document.getElementById("countdown").innerHTML = "Graduado"
        clearInterval(x)
    }
}, 1000)