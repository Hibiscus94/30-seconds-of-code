const test = require('tape');
const isNull = require('./isNull.js');

test('Testing isNull', (t) => {
	//For more information on all the methods supported by tape
	//Please go to https://github.com/substack/tape
	t.true(typeof isNull === 'function', 'isNull is a Function');
	//t.deepEqual(isNull(args..), 'Expected');
	//t.equal(isNull(args..), 'Expected');
	//t.false(isNull(args..), 'Expected');
	//t.throws(isNull(args..), 'Expected');
	t.end();
});