import { createMetaplexInstance } from "./metaplex";

const metaplex = createMetaplexInstance()

const metadata = {
    name: "samgy.sol NFT",
    description: "Favorite Food of The Philippines",
    image: "https://arweave.net/oKUktaqmCmNSJENwftMOz8eVoiyoQSI9xZHPLepci1E",
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