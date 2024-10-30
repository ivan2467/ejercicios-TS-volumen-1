import { generatePassword, PasswordRequirements } from "../generate-password";

let req: PasswordRequirements = {
  minLength: 8,
  maxLength: 10,
  useLowercase: true,
  useUppercase: true,
  useNumbers: true,
  useSymbols: true,
};

export function form() {
  const form = document.createElement("form");
  form.id = "form";
  form.innerHTML = `
  <p class="title">Generador de contraseñas</p>
  <label>
    <p>Cantidad mínima de caracteres</p>
    <input name="minLength" type="number" required />
  </label>
  <label>
    <p>Cantidad máxima de caracteres</p>
    <input name="maxLength" type="number" required />
  </label>
  <fieldset name="allowed_chars" required >
    <legend>Caracteres permitidos</legend>

    <label>
      <input type="checkbox" name="useUppercase" id="useUppercase" />
      <span>Letras mayúsculas</span>
    </label>

    <label>
      <input type="checkbox" name="useLowercase" id="useLowercase" />
      <span>Letras minúsculas</span>
    </label>

    <label>
      <input type="checkbox" name="useNumbers" id="useNumbers" />
      <span>Números</span>
    </label>

    <label>
      <input type="checkbox" name="useSymbols" />
      <span>Simbolos</span>
    </label>
  </fieldset>
  <button type="submit">Crear</button>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);

    const req: PasswordRequirements = {
      minLength: Number.parseInt(
        document.querySelector<HTMLInputElement>("[name=minLength]")!.value
      ),
      maxLength: Number.parseInt(
        document.querySelector<HTMLInputElement>("[name=maxLength]")!.value
      ),
      useUppercase: document.querySelector<HTMLInputElement>(
        "[name=useUppercase]"
      )!.checked,
      useLowercase: document.querySelector<HTMLInputElement>(
        "[name=useLowercase]"
      )!.checked,
      useNumbers:
        document.querySelector<HTMLInputElement>("[name=useNumbers]")!.checked,
      useSymbols:
        document.querySelector<HTMLInputElement>("[name=useSymbols]")!.checked,
    };

    const showPwElement = document.getElementById("showGeneratedPassword");
    showPwElement === null
      ? form.append(showPassword(req))
      : showPwElement.replaceWith(showPassword(req));
  });

  return form;
}

export function showPassword(req: PasswordRequirements) {
  const showPassword = document.createElement("p");
  showPassword.id = "showGeneratedPassword";

  showPassword.innerHTML = `
    ${generatePassword(req)}
  `;
  return showPassword;
}
