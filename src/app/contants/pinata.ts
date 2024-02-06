/**********************************************************
 * Pinata : Pinata provides secure and verifiable files for your NFTs.
 * Docs: https://pinata.cloud/documentation#PinningServicesAPI
 **********************************************************/
import { env } from "../../../env";
const pinata = {
    apiKey : env.NEXT_PUBLIC_PINATA_API_KEY,
    secretApiKey : env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
    jwt: env.NEXT_PUBLIC_PINATA_JWT,
};

export default pinata;