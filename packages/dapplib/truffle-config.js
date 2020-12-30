require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strategy razor total prosper harvest immense army gift'; 
let testAccounts = [
"0xca32e1b001f2d500a7f7d494a8a38598e167d5b2060d3c51fb387497a82d8238",
"0x1591f4c8774eb99b3fb14aabf8f436dc556bcd4acb864100eea32eca864e184b",
"0x76db2238b56156d8e14cd10c3218a43fa68add60bbe361515ffc5ec0cb04af33",
"0x6d7dcf8afce5d3314d5f5bfc3e9a77b278ec22c54704c5394fef00fc3588c63e",
"0x9f73d394cdfdca3a780568371fceaf3296c5dcc238c963e302aadddaa77a3355",
"0x14b3c450aaab37b3756edc95982b31b147423762b14cf44d12a73306fef2f11e",
"0xadbab0ea289aadfc8abfebc21a00b5cb24612dacc4aa357d0529d128e1f111e2",
"0x479644ac73c1cbcc67301a33a21949273eb732c430bbb1c51a43bddcb7f12fb7",
"0xd422a1e7831cee681c3a5b22d3a4edc3efacbb56519204e73fd5b95d92632228",
"0xe49cded249654d63ef5ad86c16fb8338e4886c04573e5ed2eea53eb6345117bf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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
