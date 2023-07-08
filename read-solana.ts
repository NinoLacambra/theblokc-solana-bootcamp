import * as Web3 from '@solana/web3.js'

const publicKey = new Web3.PublicKey('DHwaP7ewUeoK4hmAFZB6jDw2eKrPd4FVFD2cy8J4A8jU')

async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))

    const balance = await connection.getBalance(publicKey)
    console.log('balance', balance)

    const accountInfo = await connection.getAccountInfo(publicKey)
    console.log('accountInfo', accountInfo?.data.toString())
}

main()
