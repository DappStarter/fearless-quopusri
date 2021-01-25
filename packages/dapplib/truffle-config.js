require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind concert hunt lonely fresh top'; 
let testAccounts = [
"0xcd4e28bf64085c46151a5d652da4c1e48a80c240bae44107c3934edbc766ab01",
"0x999a1a70e4f37f0ce5b62b835f6b94d78c21766608b2d655049403764dee9d53",
"0xf94eb48ada922114d31fd715e750875c44387115fda317d73ce890110120a9c4",
"0x46b7b0e2adf0e579fe79cce11b7dfb46e47f42f226447d7cf7aa7c5785e43fab",
"0x7bd35a2d94b2435af689752dfbab430976aae12e2ce6cac3d2198e6ec4364e21",
"0x0e4cad05b7be105b9fa7996370fa0eff723e2eb07de1f50397493c2fda0f2af7",
"0xe75116b056aae267fdb829797d4c7758677d3f419ea6410853b8650a00e8353e",
"0x23e70ca63e15987d28bddad7a6b578608771478b9a8421ca54bd678d7ea09f8a",
"0x5c9b38b5d8ff8841c05ee044c9a6961d1cc9a5545f5d42b5d95f7a2119cc16ba",
"0x3aa83e43f7b4f22b422f8e207b0918bb028efc54475f652271fae1489d83919a"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
