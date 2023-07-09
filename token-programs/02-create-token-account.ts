import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58';

async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const mintAccount = new Web3.PublicKey('84e1YsEWvEebwsiZ6QsRwmTLN2SUvffzkmJ6HEvK6xf5')
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    const ownerOfTokenAccount = new Web3.PublicKey('DHwaP7ewUeoK4hmAFZB6jDw2eKrPd4FVFD2cy8J4A8jU')

    const tokenAccount = await token.createAccount(
        connection,
        signer,
        mintAccount,
        ownerOfTokenAccount,
    )

    console.log('Token Account', tokenAccount.toBase58())}

    main()
    
