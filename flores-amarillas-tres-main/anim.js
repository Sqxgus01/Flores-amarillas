// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "TE AMO", time: 8 },
  { text: "TE AMO", time: 8.1 },
  { text: "TE AMO", time: 27 },
  { text: "TE AMO", time: 32 },
  { text: "TE AMO", time: 33 },
  { text: "TE AMO", time: 41 },
  { text: "TE AMO", time: 47 },
  { text: "TE AMO", time: 54 },
  { text: "", time: 59 },
  { text: "", time: 67 },
  { text: "", time: 72 },
  { text: "", time: 78 },
  { text: "", time: 83 },
  { text: "", time: 91 },
  { text: "", time: 97 },
  { text: "", time: 104 },
  { text: "", time: 108 },
  { text: "", time: 144 },
  { text: "", time: 148 },
  { text: "", time: 153 },
  { text: "", time: 158 },
  { text: "", time: 164 },
  { text: "", time: 169 },
  { text: "", time: 176 },
  { text: "", time: 183 },
  { text: "", time: 188 },
  { text: "", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);