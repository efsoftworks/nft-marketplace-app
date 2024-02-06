import zod from "zod"

const envSchema = zod.object({
    NEXT_PUBLIC_INFURA_NODE: zod.string().min(1),
    NEXT_PUBLIC_INFURA_SECRET:  zod.string().min(1),
    NEXT_PUBLIC_INFURA_RETRIEVE_FILE: zod.string().min(1),
    NEXT_PUBLIC_INFURA_RETRIEVE_JSON: zod.string().min(1),
    NEXT_PUBLIC_INFURA_UPLOAD_FILE: zod.string().min(1),
    NEXT_PUBLIC_INFURA_UPLOAD_JSON: zod.string().min(1),
    NEXT_PUBLIC_NFT_CONTRACT_ADDRESS: zod.string().min(1),
    NEXT_PUBLIC_PINATA_PIN_HASH: zod.string().min(1),
    NEXT_PUBLIC_PINATA_API_KEY: zod.string().min(1),
    NEXT_PUBLIC_PINATA_SECRET_API_KEY: zod.string().min(1),
    NEXT_PUBLIC_PINATA_JWT: zod.string().min(1),
})

export const env = envSchema.parse(process.env)