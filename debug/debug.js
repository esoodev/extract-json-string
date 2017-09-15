var extractor = require('../extract-json-string.js')
var sampleAddr = __dirname + '\\snippet.log'
var fixedsampleAddr = __dirname + '\\fixedlog.log'

main()

async function main() {
    var log = await extractor._read(fixedsampleAddr)
    var objs = extractor.extract(log)
    console.log(objs.length)
}

// function fixFormat(str) {
//     var fixed = str.replace(/\n/g, '').replace(/\r|\t|\s/g, '').replace(/elemelts/g, '\"elements\"').replace(/eventID/g, '\"eventID\"').replace(/cnt/g, '\"cnt\"').replace(/noproc/g, '\"noproc\"').replace(/log/g, '\"log\"').replace(/errorTotal/g, '\"errorTotal\"').replace(/total/g, '\"total\"')
//     return fixed
// }