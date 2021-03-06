const fs = require('fs')

const file = process.argv[4] || './temp'

const name = process.argv[2] || 'default'

const description = process.argv[3] || 'simplicity itself'

fs.readdir('./template/', (err, data) => {
	if(!err) {
	fs.mkdir(file, err =>
	data.forEach(x =>  {
		fs.readFile(`./template/${x}`, 'utf-8', (err, data) => {
			if(!err)
			fs.writeFile(`${file}/${x}`, data.replace(/{NAME}/g, name).replace(/{DESCRIPTION}/g, description), err => console.log('generated:', x))
	})}))
}})