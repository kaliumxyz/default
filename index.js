const fs = require('fs')

const file = process.argv[4] || './'

const name = process.argv[2] || 'statorium'

const description = process.argv[3] || 'simplicity itself'

fs.write(file)