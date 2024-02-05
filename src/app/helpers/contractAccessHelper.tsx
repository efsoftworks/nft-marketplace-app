import { ethers, Signer } from 'ethers'
import { nftContractAddress } from '../contants/contractAddresses';
import { nftContractABI } from '../contants/contractABI';


export const getNftContract = async (signer: Signer) => {
    if (!nftContractAddress) {
        throw new Error('NFT contract address is undefined');
    }
    return new ethers.Contract(nftContractAddress, nftContractABI, signer);
}