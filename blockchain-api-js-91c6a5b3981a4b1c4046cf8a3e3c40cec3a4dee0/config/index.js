module.exports = {
    livenet: {
        url: 'https://mainnet.infura.io',
        contractAddress: {},
    },
    livenet_private: {
        url: 'https://sidechain.livenet.sonm.com',
        contractAddress: {
            addressRegistry: '0xd1a6f3d1ae33b4b19565a6b283d7a05c5a0decb0',
        },
    },
    rinkeby: {
        url: 'https://rinkeby.infura.io',
        contractAddress: {},
    },
    rinkeby_private: {
        url: 'https://sidechain-dev.sonm.com',
        contractAddress: {
            addressRegistry: '0x79b084653ca2588ed3915159e368db58aef165ee',
        },
    },
    testrpc: {
        url: 'http://server.bensyan.top:8545',
        contractAddress: {},
    },
    testrpc_private: {
        url: 'http://server.bensyan.top:7545',
        contractAddress: {
            addressRegistry: "0xa5c6f21cf4942df4ec6f3be6a4c631937db52099",
        },
    },
};