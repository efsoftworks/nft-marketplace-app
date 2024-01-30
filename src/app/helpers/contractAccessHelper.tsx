import { ethers, Signer } from 'ethers'
import { nftContractAddress } from '../contants/contractAddresses';
import { nftContractABI } from '../contants/contractABI';


export const getNftContract = async (signer: Signer) => {
    return new ethers.Contract(nftContractAddress, nftContractABI, signer);
}