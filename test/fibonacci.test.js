import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('Fibonacci', () => {
    it('devuelve 0 para n = 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('devuelve 1 para n = 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('devuelve 5 para n = 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    it('devuelve 55 para n = 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    it('lanza RangeError para números negativos', () => {
        expect(() => fibonacci(-1)).toThrow(RangeError);
    });
});