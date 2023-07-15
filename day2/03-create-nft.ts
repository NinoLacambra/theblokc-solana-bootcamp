import { createMetaplexInstance } from "./metaplex";

async function main() {
    const metaplex = createMetaplexInstance()
    const metadataUri = "https://arweave.net/C8I4GYnl24tckz1Kf046Je_N1Fdu1tTczfXiplHu0bw"
    const {nft} = await metaplex.nfts().create({
        uri: metadataUri,
        name: 'SolDevBootcamp',
        sellerFeeBasisPoints: 0,
    })

    console.log('nft', nft)

}
/*nft {
  model: 'nft',
  updateAuthorityAddress: PublicKey [PublicKey(4RweyN6mvZuMD8VqQSco5zcAiovGML7fvEErcvPFh5FQ)] {
    _bn: <BN: 32f6cc670bda5a37bb7debe3b037ecc5decd6d90f4fbcb3797b5e54ad8ee1a73>
  },
  json: {
    name: 'samgy.sol NFT',
    description: 'Favorite Food of The Philippines',
    image: 'https://arweave.net/NYRPkBV7QkCNs8dutdREtSvIUKYsjkf43vjfMKiyS0E',
    attributes: [ [Object] ]
  },
  jsonLoaded: true,
  name: 'SolDevBootcamp',
  symbol: '',
  uri: 'https://arweave.net/C8I4GYnl24tckz1Kf046Je_N1Fdu1tTczfXiplHu0bw',
  isMutable: true,
  primarySaleHappened: false,
  sellerFeeBasisPoints: 0,
  editionNonce: 254,
  creators: [
    {
      address: [PublicKey [PublicKey(4RweyN6mvZuMD8VqQSco5zcAiovGML7fvEErcvPFh5FQ)]],
      verified: true,
      share: 100
    }
  ],
  tokenStandard: 0,
  collection: null,
  collectionDetails: null,
  uses: null,
  programmableConfig: null,
  address: PublicKey [PublicKey(3Ua67RYYdYsb83L8GawcnbT34w5c2HD53BBReMxQorJQ)] {
    _bn: <BN: 24c777f2e5f898344edb77077c00620f310c65458042f0639d9e793d7adb0255>
  },
  metadataAddress: Pda [PublicKey(EpqHLn32kGVuxq9p2umnWtAsPsb2NqiQaWQr72sXwCHs)] {
    _bn: <BN: cd68d2063bbaa5bb8b1d93e8689411d7efdf0079e1ceef5537e24cde2c88522e>,
    bump: 255
  },
  mint: {
    model: 'mint',
    address: PublicKey [PublicKey(3Ua67RYYdYsb83L8GawcnbT34w5c2HD53BBReMxQorJQ)] {
      _bn: <BN: 24c777f2e5f898344edb77077c00620f310c65458042f0639d9e793d7adb0255>
    },
    mintAuthorityAddress: PublicKey [PublicKey(HA1Y84t8mJQtvtGhrR4xPy9thJXarXXmZtM14WeTgHhF)] {
      _bn: <BN: f009d3276b03a00aed34adcd7db0bd9b9f45e657c61d1b63da194608d2cc53f6>
    },
    freezeAuthorityAddress: PublicKey [PublicKey(HA1Y84t8mJQtvtGhrR4xPy9thJXarXXmZtM14WeTgHhF)] {
      _bn: <BN: f009d3276b03a00aed34adcd7db0bd9b9f45e657c61d1b63da194608d2cc53f6>
    },
    decimals: 0,
    supply: { basisPoints: <BN: 1>, currency: [Object] },
    isWrappedSol: false,
    currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
  },
  token: {
    model: 'token',
    address: Pda [PublicKey(398bTneMPSRxXU6VRJtFpwfZTtubwR9peRMtpuvg9dsN)] {
      _bn: <BN: 1fcc9b699edc4d9e7e40a558239ffedd4a0929e6885cb0e2baa85ae6505cf2c9>,
      bump: 252
    },
    isAssociatedToken: true,
    mintAddress: PublicKey [PublicKey(3Ua67RYYdYsb83L8GawcnbT34w5c2HD53BBReMxQorJQ)] {
      _bn: <BN: 24c777f2e5f898344edb77077c00620f310c65458042f0639d9e793d7adb0255>
    },
    ownerAddress: PublicKey [PublicKey(4RweyN6mvZuMD8VqQSco5zcAiovGML7fvEErcvPFh5FQ)] {
      _bn: <BN: 32f6cc670bda5a37bb7debe3b037ecc5decd6d90f4fbcb3797b5e54ad8ee1a73>
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
    address: Pda [PublicKey(HA1Y84t8mJQtvtGhrR4xPy9thJXarXXmZtM14WeTgHhF)] {
      _bn: <BN: f009d3276b03a00aed34adcd7db0bd9b9f45e657c61d1b63da194608d2cc53f6>,
      bump: 254
    },
    supply: <BN: 0>,
    maxSupply: <BN: 0>
  }
}*/

main()

//samgy metauri https://arweave.net/C8I4GYnl24tckz1Kf046Je_N1Fdu1tTczfXiplHu0bw