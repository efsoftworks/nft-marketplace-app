import { getNftContract } from "./contractAccessHelper";
import { uploadJSON, uploadFile, retrieveFile, retrieveJSON } from "./ipfsHelper";
import { ethers, Signer } from 'ethers'


interface IMintNFT {
    name:string,
    description:string, 
    artist:string,
    file:File // NFT resim dosyası (File tipinde),
    signer:Signer, // ethers.Signer tipinde bir nesne,
    walletAddress:string | undefined // Ethereum cüzdan adresi,
}

export const mintNFT = async (props:IMintNFT) => {
    let contract = await getNftContract(props.signer);
    let ipfsImageHash = await uploadFile(props.file);

    let metadata = {
        name: props.name,
        description : props.description,
        image: ipfsImageHash,
        external_url: "https://efsoftworks.github.io/nft-marketplace-app/",
        attributes:[
            {
                trait_type: "artist",
                value:props.artist
            }
        ]
    }

    let ipfsMetadataHash = await uploadJSON(metadata);
    let tokenId = (await getTokenSupply({signer:props.signer}))

    contract.methods.mint(tokenId, ipfsImageHash).send({
        from: props.walletAddress
    })
}

interface IGetTokenSupply {
    signer:Signer
}

export const getTokenSupply = async (props:IGetTokenSupply) => {
    let contract = getNftContract(props.signer)
    //@ts-ignore
    return parseInt(await contract.methods.totalSupply().call())
}