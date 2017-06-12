import test from 'ava'
const fs = require('fs')

test('generate defaults', t => {
	// whatever.
	t.is(require('child_process').execSync('node ./index.js') instanceof Buffer, true)
})