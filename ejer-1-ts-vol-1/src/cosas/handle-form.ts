export function handleForm() {
  let form = document.querySelector<HTMLFormElement>("#form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    createResult(new FormData(form));
  });

  function createResult(formData: FormData) {
    let result = document.getElementById("result");
    result!.innerHTML = "";
    result!.style.visibility = "visible";

    for (const pair of formData) {
      let name = document.createElement("div");
      name.innerText = pair[0];
      let value = document.createElement("div");
      value.innerText = pair[1].toString();
      result?.appendChild(name);
      result?.appendChild(value);
    }
  }
}
