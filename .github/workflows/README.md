# Actividad TDD PF03

Actividad PF03 de Proyecto Intermodular (2º DAW): implementación de las funciones `fibonacci` y `esPinValido` con TDD (Red, Green, Refactor), Node.js 24, Vitest y GitHub Actions.

## Integrantes

| Alumno | Nombre | Usuario de GitHub |
|---|---|---|
| A | Héctor Ambit Luchoro | [Hectorambl](https://github.com/Hectorambl) |
| B | Vicente Requena Server | [USUARIO_DE_VICENTE](https://github.com/USUARIO_DE_VICENTE) |

## Reparto del trabajo

| Función | Escribe los tests | Implementa y refactoriza |
|---|---|---|
| `fibonacci(n)` | A (Héctor). B revisa e integra su PR. | B (Vicente). A revisa e integra su PR. |
| `esPinValido(pin)` | B (Vicente). A revisa e integra su PR. | A (Héctor). B revisa e integra su PR. |

La preparación inicial del repositorio corresponde a A.

## Instalación

```bash
npm ci
```

## Ejecutar pruebas

```bash
npm test
```

## Ramas

- `main`: versión estable, con todos los tests en verde
- `development`: integración final, con todos los tests en verde
- `feature-tests`: rama compartida para publicar los tests, una función cada vez
- `feature-code`: rama compartida donde se integran tests y código
- `impl-fibonacci` e `impl-pin`: ramas temporales de implementación; se borran tras su merge

## Metodología

Cada función se desarrolla con TDD (Red, Green, Refactor). Los tests se publican en `feature-tests` y se llevan a `feature-code` mediante Pull Request. Después, el compañero implementa la función en su rama `impl-*`. Cada PR lo revisa e integra quien no lo abrió.