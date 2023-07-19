const assert = require("assert");
const anchor = require("@coral-xyz/anchor");
const { SystemProgram } = anchor.web3;

describe("d-app", () => {
  const provider = anchor.AnchorProvider.local();

  anchor.setProvider(provider);

  it("Creates and initializes an account in a single atomic transaction (simplified)", async () => {
    const program = anchor.workspace.Dapp;

    const myAccount = anchor.web3.Keypair.generate();

    await program.methods
      .initialize(new anchor.BN(1234))
      .accounts({
        myAccount: myAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([myAccount])
      .rpc();

    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    assert.ok(account.data.eq(new anchor.BN(1234)));

    _myAccount = myAccount;
  });

  it("Updates a previously created account", async () => {
    const myAccount = _myAccount;

    const program = anchor.workspace.Dapp;

    await program.methods
      .update(new anchor.BN(4321))
      .accounts({
        myAccount: myAccount.publicKey,
      })
      .rpc();

    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    assert.ok(account.data.eq(new anchor.BN(4321)));
  });
});
