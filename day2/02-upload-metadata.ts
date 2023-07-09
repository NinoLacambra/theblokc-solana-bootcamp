import { createMetaplexInstance } from "./metaplex";

const metaplex = createMetaplexInstance()

const metadata = {
    name: "mochi.sol NFT",
    description: "My first Solana NFT using Metaplex Token Standard Featuring my Cat",
    image: "https://arweave.net/03lrOnGibqBMy-RB60JCwYkbl9KfHC1vCnXyFy1UQLg",
    attributes: [
        {
            trait_type: 'Event',
            value: 'Solana Developers Bootcamp'

        }
    ] 
}
async function main() {
    const { uri } = await metaplex.nfts().uploadMetadata(metadata)
    console.log('metadata uri', uri)
    
}

main()