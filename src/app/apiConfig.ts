

/**********************************************************
 * Infura
 * Documentation: https://docs.infura.io/
 **********************************************************/

const api = {
    infura_node : process.env.NEXT_PUBLIC_INFURA_NODE,
    ipfs:{
        uploadjson: process.env.NEXT_PUBLIC_INFURA_UPLOAD_JSON,
        uploadfile: process.env.NEXT_PUBLIC_INFURA_UPLOAD_FILE,
        retrievejson: process.env.NEXT_PUBLIC_INFURA_RETRIEVE_JSON,
        retrievefile: process.env.NEXT_PUBLIC_INFURA_RETRIEVE_FILE,
        pinhash: process.env.NEXT_PUBLIC_PINATA_PIN_HASH,
    }
};

export default api