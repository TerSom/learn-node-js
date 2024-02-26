const http = require('http');
const rupiah = require('rupiah-format')
const fs = require("fs")
const host = '127.0.0.1'
const port = 3002

// request adlaah = data masu dari luar
// resnpose adalah = data kelaur dari sistem
const server = http.createServer(function (request, response) {
    const nama = "terry"
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile("sisahuang.txt", sisa,() => {
        console.log("data uang berhasil di simpan")
    })

    const hasil = `halo nama saya umay uang jajan sebanyak ${jajan}, uang sata tadinya ${uang} sekarang menjadi ${sisa}`


    response.statusCode = 200;
    response.end(hasil)
})

server.listen(port, host, "", function(){
    console.log(`server menyala di ${host}:${port}`)
});