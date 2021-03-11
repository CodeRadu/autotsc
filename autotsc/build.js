const exec=require('child_process').exec
console.time('Compile')
exec('tsc index.ts --module commonjs')
console.timeEnd('Compile')