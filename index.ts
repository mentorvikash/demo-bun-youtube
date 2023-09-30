import {serve} from 'bun'

const server = serve({
    fetch(){
        return new Response(" enpoint make change")
    },
    port: 4000
}) 


console.log("serve is running at" + server.port)
