"use client"
import { createRef } from 'react';
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers5/react'

import { mintNFT } from "@/app/helpers/nftHelper";
import { ethers } from 'ethers'

const MintPage = () => {
    
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider();

    let nameRef = createRef<HTMLInputElement>();
    let descriptionRef = createRef<HTMLInputElement>();
    let artistRef = createRef<HTMLInputElement>();
    let uploadRef = createRef<HTMLInputElement>();
    let errorRef = createRef<HTMLInputElement>()

    const error = (msg: string) => {
        if (errorRef.current != null){
            errorRef.current.innerText = msg
        }
    }


    const mint = async () => {
     

        if (!walletProvider) {
            throw Error('Wallet provider not available')       
        }


        const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
        const signer = await ethersProvider.getSigner()

        if(nameRef.current != null && descriptionRef.current != null && artistRef.current != null && uploadRef.current != null) {
            if (uploadRef.current.files === null || uploadRef.current.files.length === 0){
                console.log("Please upload a file.")
            }
            else if(nameRef.current.value === "" || descriptionRef.current.value === "" || artistRef.current.value === "") {
                console.log("Please fill out all values.")
            }
            else{
              
               mintNFT({
                name:nameRef.current.value,
                description:descriptionRef.current.value,
                artist:artistRef.current.value,
                file:uploadRef.current.files[0],
                signer:signer,
                walletAddress:address
               })
            }
        }
    }

    return (
        <div className="container mx-auto p-32">
            <div className="flex flex-col h-full w-full gap-2">
                <span className="font-semibold leading-3 text-4xl text-white">
                    Create an NFT
                </span>
                <span className="text-base leading-6 text-white">
                    Once your item is minted you will not be able to change any of its information.
                </span>
            </div>
            <div className="grid grid-cols-2 h-full w-full gap-3 justify-center">
                <div className="flex flex-col h-full w-full">
                    <div className="grid-cols-6 flex flex-col h-full w-full flex-auto">
                        <div className="flex flex-col w-full h-full">
                            <input ref={uploadRef} id="media" name="media" type="file"></input>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full">
                    <div className="flex flex-col">
                        <div className="flex flex-col mb-3">
                            <div className="items-center">
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input ref={nameRef} type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input ref={descriptionRef} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist</label>
                                    <input ref={artistRef} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                    
                                <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={mint}>
                                    Mint
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MintPage