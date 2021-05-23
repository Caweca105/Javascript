let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
console.log(secretMessage.length);

secretMessage['easily'] = 'right';

secretMessage.shift(1);
console.log(secretMessage.length);

secretMessage.unshift('Programming');
console.log(secretMessage.length);

secretMessage.splice(6, 5, 'know');
console.log(secretMessage.length);

console.log(secretMessage.join(' '));