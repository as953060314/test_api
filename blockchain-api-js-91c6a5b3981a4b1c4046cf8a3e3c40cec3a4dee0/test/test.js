const { expect } = require('chai');
const sonmApi = require('../index');
const BN = require('ethereumjs-util').BN;
const getPrivateKey = require('../src/utils/recover-private-key');
const newAccount = require('../src/utils/new-account');
const isERC20 = require('../src/utils/check-token');
const randomBytes = require('randombytes');
const vasyaCfg = require('./data/Vasya_11111111.json');
const { createSonmFactory } = sonmApi;
const URL_PRIVATE_CHAIN = "http://server.bensyan.top:7545"
const vasyaSidechainClient = createSonmFactory(URL_PRIVATE_CHAIN, 'testrpc', true);
let VASYA, PETYA, tokenList, sonmTokenAddress, sideChainSonmToken, sonmToken;
var sidechainVASYA;


// async function init() {
   
// }

var test=async function () {
    // this.timeout(+Infinity);
    var vasyaPrivateKey="4dcfde06f6c12ad57eaeb968ff52dc810678a99e85bc2b2379e25bd4b67d5f65"
    sidechainVASYA = await vasyaSidechainClient.createAccount(vasyaCfg.address);
    vasyaSidechainClient.setPrivateKey(vasyaPrivateKey);
    const res = await sidechainVASYA.createOrder({
        orderType: 1,
        price: '308638888888888',
    });

    // console.log(res);
    // expect(true).equal(true);
}

// init();
test();