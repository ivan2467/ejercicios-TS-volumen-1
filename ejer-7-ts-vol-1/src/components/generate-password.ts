export interface PasswordRequirements {
  minLength: number;
  maxLength: number;
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
}

export function generatePassword(req: PasswordRequirements): string {
  if (req.minLength > req.maxLength)
    throw new Error("minLength es más grande que maxLength");
  if (
    !req.useLowercase &&
    !req.useNumbers &&
    !req.useSymbols &&
    !req.useUppercase
  ) {
    throw new Error("se debe seleccionar un tipo de caracteres como mínimo");
  }

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbersChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allowedChars = "";
  if (req.useUppercase === true) allowedChars += uppercaseChars;
  if (req.useLowercase === true) allowedChars += lowercaseChars;
  if (req.useNumbers === true) allowedChars += numbersChars;
  if (req.useSymbols === true) allowedChars += symbolsChars;

  const passwordLength =
    Math.floor(Math.random() * (req.maxLength - req.minLength + 1)) +
    req.minLength;

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}
