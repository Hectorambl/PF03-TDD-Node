import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('Validación de PIN', () => {
    it('acepta PIN de 4 dígitos', () => {
        expect(esPinValido('1234')).toBe(true);
    });

    it('acepta PIN de 6 dígitos', () => {
        expect(esPinValido('123456')).toBe(true);
    });

    it('acepta ceros iniciales', () => {
        expect(esPinValido('0123')).toBe(true);
        expect(esPinValido('000001')).toBe(true);
    });

    it('rechaza longitudes incorrectas', () => {
        for (const pin of ['', '123', '12345', '1234567']) {
            expect(esPinValido(pin)).toBe(false);
        }
    });

    it('rechaza dígitos todos iguales', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('888888')).toBe(false);
    });

    it('rechaza letras, espacios y símbolos', () => {
        for (const pin of ['12a4', ' 1234', '12 34', '12-4', '１２３４']) {
            expect(esPinValido(pin)).toBe(false);
        }
    });

    it('rechaza tipos incorrectos', () => {
        for (const pin of [null, undefined, 1234, true, ['1', '2', '3', '4']]) {
            expect(esPinValido(pin)).toBe(false);
        }
    });
});