export function selectorEdad() {
  let selectorEdad = document.querySelector(
    "#selector_edad"
  ) as HTMLInputElement;
  let mostrar_edad = document.querySelector("#mostrar_edad") as HTMLDivElement;

  mostrar_edad.innerText = selectorEdad.value;

  selectorEdad.addEventListener("input", (e) => {
    mostrar_edad.innerText = e.target.value;
  });
}
