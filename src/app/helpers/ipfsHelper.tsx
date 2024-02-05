import pinata from "../contants/pinata";
import axios from "axios";
import api from "../apiConfig";

export const uploadJSON = async (json: Object) => {
    const url = api.ipfs.uploadjson;

    if (!url) {
        throw new Error('IPFS upload URL is undefined');
    }

    let form = new FormData()
    form.append("json.json", JSON.stringify(json))

    let response = await axios.post(url, form, {
        headers: {
            Authorization: `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_INFURA_NODE}:${process.env.NEXT_PUBLIC_INFURA_SECRET}`).toString("base64")}`,
         }
    })

    pinHash(response.data.Hash, "nftmarketplace")
    return response.data.Hash
}

export const uploadFile = async (file: File) => {
    const url = api.ipfs.uploadfile;

    if (!url) {
        throw new Error("API URL is undefined");
    }
    
    let form = new FormData();
    form.append("json.json", file);

    let response = await axios.post(url, form, {
        headers: {
            Authorization: `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_INFURA_NODE}:${process.env.NEXT_PUBLIC_INFURA_SECRET}`).toString("base64")}`,
         }
    })
    pinHash(response.data.Hash, "nftmarketplace")
    return response.data.Hash
}

export const pinHash =async (hash:string, name:string) => {
    const url = api.ipfs.pinhash;

    if (!url) {
        throw new Error('IPFS pinhash URL is undefined');
    }

    let response = await axios.post(url,{
        hashToPin: hash,
        name:name
    },{
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${pinata.jwt}`
        },
    })
    return response.data.Hash;
}

export const retrieveJSON = async (hash: string) => {
    hash = hash.replace("ipfs://", "")
    const url = api.ipfs.retrievejson + hash
    let response = await axios.post(url, {})
    return response.data
}

export const retrieveFile = async (hash: string) => {
    if(hash == null) return ""
    hash = hash.replace("ipfs://", "")
    return api.ipfs.retrievefile + hash
}

export const isUrlImage = async (url: string) => {
    try {
        let response = (await axios.get(url))['headers']['content-type']
        return response.includes("images")
    }
    catch (e){
        return true
    }
}