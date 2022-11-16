const { foo } = require('./module')
const { foo: foo2 } = require('./module2')

console.log('foo:', foo, 'foo2:', foo2)