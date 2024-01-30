
const api = {
    infura_node : "env.REACT_APP_SEPOLIA_INFURA_NODE",
    ipfs:{
        uploadjson: "env.REACT_APP_SEPOLIA_INFURA_NODE",
        uploadfile: process.env.NEXT_PUBLIC_SEPOLIA_INFURA_NODE,
        pinhash: `https://api.pinata.cloud/pinning/pinByHash`,
        retrievejson: `https://ipfs.infura.io:5001/api/v0/cat?arg=`,
        retrievefile: `https://ipfs.infura.io/ipfs/`,
    }
};

export default api