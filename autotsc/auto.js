const exec=require('child_process').exec
console.time('Compile')
execute('tsc index.ts --module commonjs', output=>{
  console.log(output)
})
console.timeEnd('Compile')
setTimeout(()=>{
  execute('node index.js', output=>{
    console.log(output)
  })
}, 500)

function execute(command, callback){
  exec(command, (err, stdout, stderr)=>callback(stdout))
}