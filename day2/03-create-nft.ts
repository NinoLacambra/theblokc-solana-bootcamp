import { createMetaplexInstance } from "./metaplex";

async function main() {
    const metaplex = createMetaplexInstance()
    const metadataUri = "https://arweave.net/cQWxH4IxJn902LHkV68wwna6zBGUGUMlNG59UJG9bLs"
    const {nft} = await metaplex.nfts().create({
        uri: metadataUri,
        name: 'SolDevBootcamp',
        sellerFeeBasisPoints: 0,
    })

    console.log('nft', nft)

}
/*nft {
  model: 'nft',
  updateAuthorityAddress: PublicKey [PublicKey(DHwaP7ewUeoK4hmAFZB6jDw2eKrPd4FVFD2cy8J4A8jU)] {
    _bn: <BN: b6a33eac9073072bf7bc5af8a43f35dd954063e62e58ae26288de96315d1bc93>
  },
  json: {
    name: 'mochi.sol NFT',
    description: 'My first Solana NFT using Metaplex Token Standard Featuring my Cat',
    image: 'https://arweave.net/03lrOnGibqBMy-RB60JCwYkbl9KfHC1vCnXyFy1UQLg',
    attributes: [ [Object] ]
  },
  jsonLoaded: true,
  name: 'SolDevBootcamp',
  symbol: '',
  uri: 'https://arweave.net/FO_Yt5VLEl6iEIzVBi49BpgW1mXHR1xjDrYE3Mt_7oQ',
  isMutable: true,
  primarySaleHappened: false,
  sellerFeeBasisPoints: 0,
  editionNonce: 254,
  creators: [
    {
      address: [PublicKey [PublicKey(DHwaP7ewUeoK4hmAFZB6jDw2eKrPd4FVFD2cy8J4A8jU)]],
      verified: true,
      share: 100
    }
  ],
  tokenStandard: 0,
  collection: null,
  collectionDetails: null,
  uses: null,
  programmableConfig: null,
  address: PublicKey [PublicKey(CeBDWvT6dsVwGuuJQfAAFu8dXkKDTM762SQNkNVjzjwf)] {
    _bn: <BN: acf698df5193ccd95fed6f26eb6e65c57ddef4b9db05478df6587098d1835712>
  },
  metadataAddress: Pda [PublicKey(FajKb6y2xb6t8H2YofQpDL962pC7JBmybiSFPjGJy9p9)] {
    _bn: <BN: d8a7a2b60e0de42c3374e00f138dd2a75f83e18fe90d6d8ce5f1dcc88701087e>,
    bump: 254
  },
  mint: {
    model: 'mint',
    address: PublicKey [PublicKey(CeBDWvT6dsVwGuuJQfAAFu8dXkKDTM762SQNkNVjzjwf)] {
      _bn: <BN: acf698df5193ccd95fed6f26eb6e65c57ddef4b9db05478df6587098d1835712>
    },
    mintAuthorityAddress: PublicKey [PublicKey(uRKM4wZThNiza6W4KHNqck6FkE8gjdw4cianoKu484H)] {
      _bn: <BN: d6db255240449e1e4eb4eff606bdc65578dcf3cc5a67a1bd49a15b781ff1eb2>
    },
    freezeAuthorityAddress: PublicKey [PublicKey(uRKM4wZThNiza6W4KHNqck6FkE8gjdw4cianoKu484H)] {
      _bn: <BN: d6db255240449e1e4eb4eff606bdc65578dcf3cc5a67a1bd49a15b781ff1eb2>
    },
    decimals: 0,
    supply: { basisPoints: <BN: 1>, currency: [Object] },
    isWrappedSol: false,
    currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
  },
  token: {
    model: 'token',
    address: Pda [PublicKey(7xSD3NsW6qGA8TZphVV58CBLzrGXppUb9mrzqp2khqu5)] {
      _bn: <BN: 67599181ae3a7cc33ea231ac2348f151ca9b1f60ea507e777e8214260aa0c0dc>,
      bump: 255
    },
    isAssociatedToken: true,
    mintAddress: PublicKey [PublicKey(CeBDWvT6dsVwGuuJQfAAFu8dXkKDTM762SQNkNVjzjwf)] {
      _bn: <BN: acf698df5193ccd95fed6f26eb6e65c57ddef4b9db05478df6587098d1835712>
    },
    ownerAddress: PublicKey [PublicKey(DHwaP7ewUeoK4hmAFZB6jDw2eKrPd4FVFD2cy8J4A8jU)] {
      _bn: <BN: b6a33eac9073072bf7bc5af8a43f35dd954063e62e58ae26288de96315d1bc93>
    },
    amount: { basisPoints: <BN: 1>, currency: [Object] },
    closeAuthorityAddress: null,
    delegateAddress: null,
    delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
    state: 1
  },
  edition: {
    model: 'nftEdition',
    isOriginal: true,
    address: Pda [PublicKey(uRKM4wZThNiza6W4KHNqck6FkE8gjdw4cianoKu484H)] {
      _bn: <BN: d6db255240449e1e4eb4eff606bdc65578dcf3cc5a67a1bd49a15b781ff1eb2>,
      bump: 254
    },
    supply: <BN: 0>,
    maxSupply: <BN: 0>
  }
} */

main()