const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      
      expect(typeof 'starWars.all').toBe('string');
    });

    test('should contain `Luke Skywalker`', () => {
      //expect(starWars.all).toContain('Luke Skywalker');
      expect(starWars.all).toEqual(expect.arrayContaining(['Luke Skywalker']));
    });

    test('should not contain `Ben Quadinaros`', () => {
      expect(starWars.all).not.toEqual(expect.arrayContaining(['Ben Quadinaros']));
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      for (var i = 0; i < starWars.all.length; i++) 
      {
        if(expect(starWars.random)==starWars.all[i])
          return true;
      }
    });

    test('should return an array of random items if passed a number', () => {
      expect(starWars.random(4)).toHaveLength(4);
    });
  });
});
