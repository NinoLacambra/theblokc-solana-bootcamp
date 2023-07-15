import { createMetaplexInstance } from "./metaplex";

const metaplex = createMetaplexInstance()

const metadata = {
    name: "samgy.sol NFT",
    description: "Favorite Food of The Philippines",
    image: "https://arweave.net/NYRPkBV7QkCNs8dutdREtSvIUKYsjkf43vjfMKiyS0E",
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
// samgy https://arweave.net/NYRPkBV7QkCNs8dutdREtSvIUKYsjkf43vjfMKiyS0E
// pochi https://arweave.net/dz0HSZD4chYo2vZlBQWhTxXeZbyqE26FOanlKKT0ysE
// cat https://arweave.net/Rq_OJxuWp7I1a-4cFfK2DeP6YjJi8GKEfag7KMRIseA
// merlin https://arweave.net/bgtCrrpPQ02pcSK5h8kV1wBRBttZDSaV7RC7SpqdANg