// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `cifrado` y `descifrar`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `cifrado` e `descifrar`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.cifrado', () => {

    it('should be a function', () => {
      expect(typeof cipher.cifrado).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.cifrado()).toThrow(TypeError);
      expect(() => cipher.cifrado(0)).toThrow(TypeError);
      expect(() => cipher.cifrado(null, [])).toThrow(TypeError);
      expect(() => cipher.cifrado(0, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.cifrado(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
     expect(cipher.cifrado(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return "456" for "345" with offset 1', () => {
      expect(cipher.cifrado(1, '345')).toBe('456');
     });
     
     it('should return " !@" for " !@"', () => {
       expect(cipher.cifrado(33, ' !@')).toBe(' !@');
     });

  

  });

  describe('cipher.descifrar', () => {

    it('should be a function', () => {
      expect(typeof cipher.descifrar).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.descifrar()).toThrow(TypeError);
      expect(() => cipher.descifrar(0)).toThrow(TypeError);
      expect(() => cipher.descifrar(null, [])).toThrow(TypeError);
      expect(() => cipher.descifrar(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.descifrar(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
     it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
       expect(cipher.descifrar(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
     });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return "345" for "456" with offset 1', () => {
      expect(cipher.descifrar(1, '456')).toBe('345');
     });

     it('should return " !@" para " !@"', () => {
       expect(cipher.descifrar(33, ' !@')).toBe(' !@');
     });
  });
  

});
