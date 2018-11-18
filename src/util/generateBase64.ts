export function generateBase64(nodes){
  let a = []
  for (let i of nodes) {
    a.push(i.info)
  }
  let servers = ''
  for (let i in a) {
    if(a[i].obfs == "none" || a[i].obfs == "") {
      a[i].obfs = 'plain'
    } 
    if(a[i].proto == "none" || a[i].obfs == "") {
      a[i].proto = 'plain'
    }
    let remarks = Buffer.from(a[i].title).toString('base64')
    let base64Pw = Buffer.from(a[i].password).toString('base64')
    let group =  Buffer.from("ONEISALL").toString('base64')
    let url = '' + a[i].host + ':' + a[i].port + ':' + a[i].proto + ':' + a[i].method 
    + ':' + a[i].obfs + ':' + base64Pw + '/?' + 'obfsparam=' + a[i].obfsParam + '&' + 'protoparam='
    + a[i].protoParam + '&' + 'remarks=' + remarks + '&' + 'group=' + group + '&udpport=0&uot=0'
    let baseSSR = Buffer.from(url).toString('base64')
    let server = Buffer.from('ssr://' + baseSSR)
    servers = servers + server + '\n'
    console.log(servers)
  }
  return Buffer.from(servers).toString('base64')
}