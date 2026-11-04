export function esPinValido(pin) {
  if (typeof pin !== 'string') {
    return false;
  }

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  for (const digito of pin) {
    if (digito < '0' || digito > '9') {
      return false;
    }
  }

  let sonIguales = true;

  for (const digito of pin) {
    if (digito !== pin[0]) {
      sonIguales = false;
    }
  }

  return !sonIguales;
}