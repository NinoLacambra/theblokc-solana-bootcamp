import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import * as token from '@solana/spl-token'
import base58 from 'bs58'

async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    const mintAccount = new Web3.PublicKey('84e1YsEWvEebwsiZ6QsRwmTLN2SUvffzkmJ6HEvK6xf5')
    const mintAuthority = new Web3.PublicKey('7JsrEKmsvGauNon2otgXkcDou9NxQ5zeEYiQLQDaK3cM')
    const destination = new Web3.PublicKey('DHwaP7ewUeoK4hmAFZB6jDw2eKrPd4FVFD2cy8J4A8jU')

    const tokenMint = await token.mintTo(
        connection,
        signer,
        mintAccount,
        mintAuthority,
        destination,
        1000000,
    )

    console.log('token mint', tokenMint)
}
//tokenMint 84e1YsEWvEebwsiZ6QsRwmTLN2SUvffzkmJ6HEvK6xf5
//Token Account 7JsrEKmsvGauNon2otgXkcDou9NxQ5zeEYiQLQDaK3cM
main()
// token.mintTo