const api = {
    infura_node : '',
    ipfs:{
        uploadjson: `https://ipfs.infura.io:5001/api/v0/add`,
        uploadfile: `https://ipfs.infura.io:5001/api/v0/add`,
        pinhash: `https://api.pinata.cloud/pinning/pinByHash`,
        retrievejson: `https://ipfs.infura.io:5001/api/v0/cat?arg=`,
        retrievefile: `https://ipfs.infura.io/ipfs/`,
    }
};

export default api