/**
 * Array destructuring
 */

const address = ['room no. 78', 'MacDonald Hall', 'IIEST Shibpur', 'Howrah' , 'west bengal','711103'];

const [, , , city, state] = address;

console.log(`you are in ${city} of ${state}`);