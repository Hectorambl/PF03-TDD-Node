export function esPinValido(pin) {
  if (typeof pin !== 'string') {
    return false;
  }

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  for (const caracter of pin) {
    if (caracter < '0' || caracter > '9') {
      return false;
    }
  }

  let todosIguales = true;
  for (const caracter of pin) {
    if (caracter !== pin[0]) {
      todosIguales = false;
    }
  }

  return !todosIguales;
}