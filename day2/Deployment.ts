import 'dotenv/config';
import * as Web3 from '@solana/web3.js';
import { sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';

async function main() {
  const transaction = new Web3.Transaction();
  const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '')
  const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)

  const publicKey = new Web3.PublicKey('DHwaP7ewUeoK4hmAFZB6jDw2eKrPd4FVFD2cy8J4A8jU')
  const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))

  const instruction = new Web3.TransactionInstruction({
    keys: [
      {
        pubkey: publicKey,
        isSigner: true,
        isWritable: false,
      },
    ],
    data: Buffer.alloc(20),
    programId: new Web3.PublicKey('BaQDk33jCCVMdXLJvGuTqUwrzKCHoVkZ65jwQT7F4pGY'),
  });
  

  const signature = await sendAndConfirmTransaction(
    connection, 
    transaction.add(instruction), 
    [signer]
);

  console.log('SIGNATURE', signature)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
  })
