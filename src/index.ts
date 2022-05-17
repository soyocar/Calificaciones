import "./styles.css";
let btnEnv = document.getElementById("enviar");
let notaprac, notaprob, notateo, notafinal: number;
let nombre: string;
btnEnv.addEventListener("click", () => {
  nombre = prompt("Ingrese el nombre del alumno: ");
  while (nombre !== "") {
    notaprac = Number(prompt("Ingrese la nota de 'Practicas': "));
    notaprob = Number(prompt("Ingrese la nota de 'Problemas': "));
    notateo = Number(prompt("Ingrese la nota de 'Teoria': "));
    notaprac = Number(notaprac * 10) / 100;
    notaprob = Number(notaprob * 50) / 100;
    notateo = Number(notateo * 40) / 100;
    notafinal = Number(notaprac + notaprob + notateo);
    //console.log("La nota final del alumno " + nombre + "es" + notafinal);
    alert(`La nota final del alumno ${nombre} es ${notafinal}`);
    nombre = prompt("Ingrese el nombre del alumno: ");
  }
});
