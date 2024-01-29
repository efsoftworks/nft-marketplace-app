import { pinataApiKey, pinataSecretApiKey } from "../contants/pinata";
import axios from "axios";
import api from "../apiConfig";

export const uploadJSON = async (json: Object) => {
    const url = api.ipfs.uploadjson
    let form = new FormData()
    form.append("json.json", JSON.stringify(json))
    let response = await axios.post(url, form, {})
    pinHash(response.data.Hash)
    return response.data.Hash
}

export const uploadFile = async (file: File) => {
    const url = api.ipfs.uploadfile;
    let form = new FormData();
    form.append("json.json", file);
    let response = await axios.post(url, form, {})
    pinHash(response.data.Hash)
    return response.data.Hash
}

export const pinHash =async (hash:string) => {
    const url = api.ipfs.pinhash
    let response = await axios.post(url,{
        hashtoPin: hash
    },{
        headers:{
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey
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