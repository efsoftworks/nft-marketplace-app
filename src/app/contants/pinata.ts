/**********************************************************
 * Pinata : Pinata provides secure and verifiable files for your NFTs.
 * Docs: https://pinata.cloud/documentation#PinningServicesAPI
 **********************************************************/

const pinata = {
    apiKey : process.env.NEXT_PUBLIC_PINATA_API_KEY,
    secretApiKey : process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
    jwt: process.env.NEXT_PUBLIC_PINATA_JWT,
};

export default pinata;