import zod from "zod"

const envSchema = zod.object({
    NEXT_PUBLIC_SEPOLIA_INFURA_NODE: zod.string(),
})

export const env = envSchema.parse({
    NEXT_PUBLIC_SEPOLIA_INFURA_NODE: process.env.NEXT_PUBLIC_SEPOLIA_INFURA_NODE
})