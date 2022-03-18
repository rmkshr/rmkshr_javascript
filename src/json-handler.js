/**
 * @author ramkishore
 */
const fileSystemModule = require('fs');

const rawData = fileSystemModule.readFileSync('/Users/ramkishoremadheshwaran/WebstormProjects/rmkshr_javascript/template/json/dragonType.json');
const pokemon = JSON.parse(rawData);
console.log(pokemon);