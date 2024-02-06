

/**********************************************************
 * Infura
 * Documentation: https://docs.infura.io/
 **********************************************************/
import { env } from "../../env";

const api = {
    infura_node : env.NEXT_PUBLIC_INFURA_NODE,
    ipfs:{
        uploadjson: env.NEXT_PUBLIC_INFURA_UPLOAD_JSON,
        uploadfile: env.NEXT_PUBLIC_INFURA_UPLOAD_FILE,
        retrievejson: env.NEXT_PUBLIC_INFURA_RETRIEVE_JSON,
        retrievefile: env.NEXT_PUBLIC_INFURA_RETRIEVE_FILE,
        pinhash: env.NEXT_PUBLIC_PINATA_PIN_HASH,
    }
};

export default api