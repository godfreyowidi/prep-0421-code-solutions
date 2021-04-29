var languageArrays = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log(languageArrays);

var arrayLength = 'array length: ' + languageArrays.length;
console.log(arrayLength);

var arrayAddLast = languageArrays.push('c#', 'php');
console.log(arrayAddLast, languageArrays);

var arrayCutLast = languageArrays.pop();
console.log(arrayCutLast, languageArrays);

var arrayAddFirst = languageArrays.unshift('c++');
console.log(arrayAddFirst, languageArrays);

var arrayCutFirst = languageArrays.shift();
console.log(arrayCutFirst, languageArrays);

var thirdElement = '3rd element in langugaArray: ' + 'javascript';
console.log(thirdElement);

var arrayLength = 'The final length of the array is: ' + languageArrays.length;
console.log(arrayLength);

var lastItem = 'The last item in the array is: ' + 'c#';
console.log(lastItem);
