import "./styles.css";
let btnEnv = document.getElementById("enviar");
let notaprac, notaprob, notateo, notafinal: number;
let nombre: string;
btnEnv.addEventListener("click", () => {
  nombre = prompt("Ingrese el nombre del alumno: ");
  while (nombre !== "") {
    notaprac = Number(prompt("Ingrese la nota de 'Practicas': "));
    if (notaprac > 0 && notaprac <= 10) {
      notaprac = Number(notaprac * 10) / 100;
      notaprob = Number(prompt("Ingrese la nota de 'Problemas': "));
      if (notaprob > 0 && notaprob <= 10) {
        notaprob = Number(notaprob * 50) / 100;
        notateo = Number(prompt("Ingrese la nota de 'Teoria': "));
      }
      if (notateo > 0 && notateo <= 10) {
        notateo = Number(notateo * 40) / 100;
      }
      notafinal = Number(notaprac + notaprob + notateo);
      alert(`La nota final del alumno ${nombre} es ${notafinal}`);
      nombre = prompt("Ingrese el nombre del alumno: ");
    } else {
      alert("Las notas ingresadas deben estar entre ' 0 y 10 '");
      nombre = prompt("Ingrese el nombre del alumno: ");
    }
  }
  /*  notaprob = Number(prompt("Ingrese la nota de 'Problemas': "));
    notateo = Number(prompt("Ingrese la nota de 'Teoria': "));
    if (notaprac > 0 && notaprac <= 10) {
      notaprac = Number(notaprac * 10) / 100;
      if (notaprob > 0 && notaprob <= 10) {
        notaprob = Number(notaprob * 50) / 100;
        if (notateo > 0 && notateo <= 10) {
          notateo = Number(notateo * 40) / 100;
        }
      }
      notafinal = Number(notaprac + notaprob + notateo);
      //console.log("La nota final del alumno " + nombre + "es" + notafinal);
      alert(`La nota final del alumno ${nombre} es ${notafinal}`);
    }

    nombre = prompt("Ingrese el nombre del alumno: ");
  } */
});
