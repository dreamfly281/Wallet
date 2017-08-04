var config = require('./config');

var DefaultLanguage = config.language;

var language = new Vue({
    el: '#language',
    data: {
        choosenLanguage: 'zh'
    },
    methods: {
        changeLanguage: function () {
        }
    }
});

const headerLocale = {
    en: {
        wallet: 'Wallet',
        send: 'Send',
        advanced: 'Advanced',
        secret: 'Secret',
        settings: 'Settings'
    },
    zh: {
        wallet: '钱包',
        send: '发送',
        advanced: '高级',
        secret: '秘钥',
        settings: '设置'
    }
};

const homeLocale = {
    en: {
        head: 'DNA <small>Welcome to the DNA</small>',
        title: 'DNA Wallet',
        subtitle: 'Take control of your DNA asset!',
        create: 'Create Wallet',
        open: 'Open Wallet'
    },
    zh: {
        head: 'DNA <small>欢迎来到DNA</small>',
        title: 'DNA 钱包',
        subtitle: '掌控你的DNA资产',
        create: '创建钱包',
        open: '打开钱包'
    }
};

const createTitleLocale = {
    en: {
        title: 'Create Wallet <small>create a new wallet to control your asset</small>'
    },
    zh: {
        title: '创建钱包 <small>创建一个新钱包来保管你的资产</small>'
    }
};

const createPasswordLocale = {
    en: {
        inputPassword: 'Enter Password'
    },
    zh: {
        inputPassword: '输入密码'
    }
};

const createUnmatchedLocale = {
    en: {
        unmatched: 'unmatched password'
    },
    zh: {
        unmatched: '密码不匹配'
    }
};

const createButtonLocale = {
    en: {
        button: 'Create'
    },
    zh: {
        button: '创建'
    }
};

const recoverTitleLocale = {
    en: {
        title: 'Wallet Recovery <small> Recover wallet by using private key </small>'
    },
    zh: {
        title: '钱包恢复 <small> 通过私钥恢复钱包 </small>'
    }
};
const recoverWarningLocale = {
    en: {
        warning: '<strong>NOTE: </strong> A new wallet will be recovered to your home directory.'
    },
    zh: {
            warning: '<strong>注意: </strong> 新的钱包将被恢复到系统的home目录。'
    }
};
const recoverKeyLocale = {
    en: {
            enter: 'Enter Private Key'
    },
    zh: {
            enter: '输入私钥'
    }
};
const recoverInvalidLocale = {
    en: {
            invalid: 'invalid private key'
    },
    zh: {
            invalid: '无效的私钥'
    }
};
const recoverPasswordLocale = {
    en: {
            password: 'Enter Password'
    },
    zh: {
            password: '输入密码'
    }
};
const recoverUnmatchedLocale = {
    en: {
            unmatched: 'unmatched password'
    },
    zh: {
            unmatched: '密码不匹配'
    }
};
const recoverButtonLocale = {
    en: {
        button: 'Recover'
    },
    zh: {
        button: '恢复'
    }
};

const openTitleLocale = {
    en: {
        title: 'Open Wallet <small> Open your DNA wallet </small>'
    },
    zh: {
        title: '打开钱包 <small> 打开你的DNA钱包 </small>'
    }
};

const openEnterLocale = {
    en: {
        enter: 'Enter Password'
    },
    zh: {
        enter: '输入密码'
    }
};
const openButtonLocale = {
    en: {
        button: 'Open'
    },
    zh: {
        button: '打开'
    }
};

const secretLocaleTitle = {
    en: {
        title: 'Secret Keys<small> show your secret keys </small>'
    },
    zh: {
        title: '秘钥信息 <small> 显示秘钥信息 </small>'
    }
};

const secretLocaleWarning = {
    en: {
        warning: '<strong>Warning:</strong> <br> All of your asserts are controlled by your secret keys. Please be careful!'
    },
    zh: {
        warning: '<strong>注意:</strong> <br> 你的所有资产都由秘钥持有者控制，请小心保管！'
    }
};

const secretLocaleButton = {
    en: {
        button: 'Show my secret keys'
    },
    zh: {
        button: '显示秘钥'
    }
};

const settingLocaleTitle = {
    en: {
        title: 'Settings <small> Custom your DNA wallet</small>'
    },
    zh: {
        title: '设置 <small> 定制你的DNA钱包</small>'
    }
};

const sendLocaleTitle = {
    en: {
        title: 'Send Asset<small> transfer your DNA assets </small>'
    },
    zh: {
        title: '发送资产 <small> 转移你的资产给他人</small>'
    }
};

const sendLocaleDesc = {
    en: {
        desc: 'Enter the details of asset you wish to transfer.',
        assetID: 'Asset ID',
        amount: 'Amount',
        to: 'To'
    },
    zh: {
        desc: '输入你要转账的详细信息',
        assetID: '资产ID',
        amount: '数量',
        to: '接收者'
    }
};

const sendLocaleInvID = {
    en: {
       invalidID: 'invalid asset ID'
    },
    zh: {
        invalidID: '无效资产ID'
    }
};
const sendLocaleInvAmount = {
    en: {
        invalidAmount: 'invalid asset amount'
    },
    zh: {
        invalidAmount: '无效资产数量'
    }
};
const sendLocaleInvReceiver = {
    en: {
        invalidReceiver: 'invalid asset receiver'
    },
    zh: {
        invalidReceiver: '无效资产接受者'
    }
};
const sendLocaleButton = {
    en: {
        button: 'Create Transaction'
    },
    zh: {
        button: '创建交易'
    }
};

const advancedLocaleTitle = {
    en: {
        title: 'Advanced <small> Regist and issue your new asset </small>'
    },
    zh: {
        title: '高级 <small> 注册和发行新资产 </small>'
    }
};

const advancedLocaleTab = {
    en: {
        registration: 'Registration',
        issuance: 'Issuance'
    },
    zh: {
        registration: '注册',
        issuance: '发行'
    }
};

const advancedLocaleRegtxDesc = {
    en: {
        desc: 'Regist a new asset on DNA chain',
        name: 'Asset Name',
        amount: 'Asset Amount'
    },
    zh: {
        desc: '在DNA区块链上注册新资产',
        name: '资产名字',
        amount: '资产数量'
    }
};

const advancedLocaleRegtxInvname = {
    en: {
        invalidName: 'invalid asset name'
    },
    zh: {
        invalidName: '无效的资产名字'
    }
};

const advancedLocaleRegtxInvamount = {
    en: {
        invalidAmount: 'invalid asset amount'

    },
    zh: {
        invalidAmount: '无效的资产数量'
    }
};

const advancedLocaleRegtxButton = {
    en: {
        button: 'Create Transaction'

    },
    zh: {
        button: '创建交易'
    }
};

const advancedLocaleIssuetxDesc = {
    en: {
        desc: 'Enter the details of asset you wish to issue',
        id: 'Asset ID',
        amount: 'Asset Amount',
        receiver: 'Asset Receiver'
    },
    zh: {
        desc: '输入你要发行资产的详细信息',
        id: '资产ID',
        amount: '资产数量',
        receiver: '资产接收者'
    }
};

const advancedLocaleIssuetxInvID = {
    en: {
        invalidID: 'invalid asset ID'
    },
    zh: {
        invalidID: '无效资产ID'
    }
};
const advancedLocaleIssuetxInvAmount = {
    en: {
        invalidAmount: 'invalid asset amount'
    },
    zh: {
        invalidAmount: '无效资产数量'
    }
};
const advancedLocaleIssuetxInvReceiver = {
    en: {
        invalidReceiver: 'invalid asset receiver'
    },
    zh: {
        invalidReceiver: '无效资产接收者'
    }
};

const advancedLocaleIssuetxButton = {
    en: {
        button: 'Create Transaction'
    },
    zh: {
        button: '创建交易'
    }
};

const walletLocaleTitle = {
    en: {
        title: 'Wallet <small> Manage your digital assets</small>'
    },
    zh: {
        title: '钱包 <small> 管理你的数字资产 </small>'
    }
};

const walletLocaleTab = {
    en: {
        account: 'Account',
        transaction: 'Transaction'
    },
    zh: {
        account: '账户',
        transaction: '交易'
    }
};

const walletLocaleAddress = {
    en: {
        address: 'Address'
    },
    zh: {
        address: '地址'
    }
};

const walletLocaleAsset = {
    en: {
        asset: 'Asset'
    },
    zh: {
        asset: '资产'
    }
};

const walletLocaleValue = {
    en: {
        amount: 'Amount'
    },
    zh: {
        amount: '数量'
    }
};

const walletLocaleTx = {
    en: {
        txid: 'Transaction ID',
        txtype: 'Transaction Type'
    },
    zh: {
        txid: '交易ID',
        txtype: '交易类型'
    }
};

const walletLocaleCopy = {
    en: {
        copy: 'Copy'
    },
    zh: {
        copy: '复制'
    }
};

const broadcastLocaleTitle = {
    en: {
        title: 'Send Transaction <small> send transaction into the DNA network</small>',
        subtitle: 'your raw transaction in hex format'
    },
    zh: {
        title: '发送交易 <small>发送交易到区块链网络</small>',
        subtitle: '你的十六进制原始交易'
    }
};

const broadcastLocaleButton = {
    en: {
        button: 'Send Transaction'
    },
    zh: {
        button: '发送交易'
    }
};

// Create VueI18n instance with options
var i18nHeader = new VueI18n({
    locale: DefaultLanguage,
    messages: headerLocale
});

var i18nHome = new VueI18n({
    locale: DefaultLanguage,
    messages: homeLocale
});

var i18nCreateTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: createTitleLocale
});

var i18nCreatePassword = new VueI18n({
    locale: DefaultLanguage,
    messages: createPasswordLocale
});

var i18nCreateUnmatched = new VueI18n({
    locale: DefaultLanguage,
    messages: createUnmatchedLocale
});
var i18nCreateButton = new VueI18n({
    locale: DefaultLanguage,
    messages: createButtonLocale
});

var i18nRecoverTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: recoverTitleLocale
});
var i18nRecoverWarning = new VueI18n({
    locale: DefaultLanguage,
    messages: recoverWarningLocale
});
var i18nRecoverKey = new VueI18n({
    locale: DefaultLanguage,
    messages: recoverKeyLocale
});
var i18nRecoverInvalid = new VueI18n({
    locale: DefaultLanguage,
    messages: recoverInvalidLocale
});
var i18nRecoverPassword = new VueI18n({
    locale: DefaultLanguage,
    messages: recoverPasswordLocale
});
var i18nRecoverUnmatched = new VueI18n({
    locale: DefaultLanguage,
    messages: recoverUnmatchedLocale
});
var i18nRecoverButton = new VueI18n({
    locale: DefaultLanguage,
    messages: recoverButtonLocale
});

var i18nOpenTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: openTitleLocale
});

var i18nOpenEnter = new VueI18n({
    locale: DefaultLanguage,
    messages: openEnterLocale
});
var i18nOpenButton = new VueI18n({
    locale: DefaultLanguage,
    messages: openButtonLocale
});

var i18nSecretTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: secretLocaleTitle
});
var i18nSecretWarning = new VueI18n({
    locale: DefaultLanguage,
    messages: secretLocaleWarning
});
var i18nSecretButton = new VueI18n({
    locale: DefaultLanguage,
    messages: secretLocaleButton
});
var i18nSettingTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: settingLocaleTitle
});

var i18nSendTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: sendLocaleTitle
});

var i18nSendDesc = new VueI18n({
    locale: DefaultLanguage,
    messages: sendLocaleDesc
});
var i18nSendInvID = new VueI18n({
    locale: DefaultLanguage,
    messages: sendLocaleInvID
});
var i18nSendInvAmount = new VueI18n({
    locale: DefaultLanguage,
    messages: sendLocaleInvAmount
});
var i18nSendInvReceiver = new VueI18n({
    locale: DefaultLanguage,
    messages: sendLocaleInvReceiver
});
var i18nSendButton = new VueI18n({
    locale: DefaultLanguage,
    messages: sendLocaleButton
});

var i18nAdvancedTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleTitle
});

var i18nAdvancedTab = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleTab
});

var i18nAdvancedRegtxDesc = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleRegtxDesc
});

var i18nAdvancedRegtxInvname = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleRegtxInvname
});

var i18nAdvancedRegtxInvamount = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleRegtxInvamount
});
var i18nAdvancedRegtxButton = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleRegtxButton
});

var i18nAdvancedIssuetxDesc = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleIssuetxDesc
});

var i18nAdvancedIssuetxInvID = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleIssuetxInvID
});
var i18nAdvancedIssuetxInvAmount = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleIssuetxInvAmount
});

var i18nAdvancedIssuetxInvReceiver = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleIssuetxInvReceiver
});

var i18nAdvancedIssuetxButton = new VueI18n({
    locale: DefaultLanguage,
    messages: advancedLocaleIssuetxButton
});

var i18nWalletTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: walletLocaleTitle
});

var i18nWalletTab = new VueI18n({
    locale: DefaultLanguage,
    messages: walletLocaleTab
});
var i18nWalletAddress = new VueI18n({
    locale: DefaultLanguage,
    messages: walletLocaleAddress
});
var i18nWalletAsset = new VueI18n({
    locale: DefaultLanguage,
    messages: walletLocaleAsset
});
var i18nWalletValue = new VueI18n({
    locale: DefaultLanguage,
    messages: walletLocaleValue
});

var i18nWalletTx = new VueI18n({
    locale: DefaultLanguage,
    messages: walletLocaleTx
});

var i18nWalletCopy = new VueI18n({
    locale: DefaultLanguage,
    messages: walletLocaleCopy
});

var i18nBroadcastTitle = new VueI18n({
    locale: DefaultLanguage,
    messages: broadcastLocaleTitle
});

var i18nBroadcastButton = new VueI18n({
    locale: DefaultLanguage,
    messages: broadcastLocaleButton
});

// Create a Vue instance with i18n option
// page header
new Vue({ i18n: i18nHeader }).$mount('#header-locale');

// home page
new Vue({ i18n: i18nHome }).$mount('#home');

// create page
new Vue({ i18n: i18nCreateTitle }).$mount('#create-locale-title');
new Vue({ i18n: i18nCreatePassword }).$mount('#create-locale-password');
new Vue({ i18n: i18nCreateUnmatched }).$mount('#create-locale-unmatched');
new Vue({ i18n: i18nCreateButton }).$mount('#create-locate-button');

// recover page
new Vue({ i18n: i18nRecoverTitle }).$mount('#recover-locale-title');
new Vue({ i18n: i18nRecoverWarning}).$mount('#recover-locale-warning');
new Vue({ i18n: i18nRecoverKey }).$mount('#recover-locale-key');
new Vue({ i18n: i18nRecoverInvalid }).$mount('#recover-locale-invalid');
new Vue({ i18n: i18nRecoverPassword }).$mount('#recover-locale-password');
new Vue({ i18n: i18nRecoverUnmatched }).$mount('#recover-locale-unmatched');
new Vue({ i18n: i18nRecoverButton }).$mount('#recover-locale-button');

// open page
new Vue({ i18n: i18nOpenTitle }).$mount('#open-locale-title');
new Vue({ i18n: i18nOpenEnter }).$mount('#open-locale-enter');
new Vue({ i18n: i18nOpenButton }).$mount('#open-locale-button');

// send page
new Vue({ i18n: i18nSendTitle }).$mount('#send-locale-title');
new Vue({ i18n: i18nSendDesc }).$mount('#send-locale-desc');
new Vue({ i18n: i18nSendInvID }).$mount('#send-locale-inv-id');
new Vue({ i18n: i18nSendInvAmount }).$mount('#send-locale-inv-amount');
new Vue({ i18n: i18nSendInvReceiver }).$mount('#send-locale-inv-receiver');
new Vue({ i18n: i18nSendButton }).$mount('#send-locale-button');

// secret page
new Vue({ i18n: i18nSecretTitle }).$mount('#secret-locale-title');
new Vue({ i18n: i18nSecretWarning }).$mount('#secret-locale-warning');
new Vue({ i18n: i18nSecretButton }).$mount('#secret-locale-button');

// setting page
new Vue({ i18n: i18nSettingTitle }).$mount('#setting-locale-title');

// advanced page
new Vue({ i18n: i18nAdvancedTitle }).$mount('#advanced-locale-title');
new Vue({ i18n: i18nAdvancedTab }).$mount('#advanced-locale-tab');
new Vue({ i18n: i18nAdvancedRegtxDesc }).$mount('#advanced-locale-regtx-desc');
new Vue({ i18n: i18nAdvancedRegtxInvname }).$mount('#advanced-locale-regtx-invname');
new Vue({ i18n: i18nAdvancedRegtxInvamount }).$mount('#advanced-locale-regtx-invamount');
new Vue({ i18n: i18nAdvancedRegtxButton }).$mount('#advanced-locale-regtx-button');
new Vue({ i18n: i18nAdvancedIssuetxDesc }).$mount('#advanced-locale-issuetx-desc');
new Vue({ i18n: i18nAdvancedIssuetxInvID }).$mount('#advanced-locale-issuetx-invid');
new Vue({ i18n: i18nAdvancedIssuetxInvAmount }).$mount('#advanced-locale-issuetx-invamount');
new Vue({ i18n: i18nAdvancedIssuetxInvReceiver }).$mount('#advanced-locale-issuetx-invreceiver');
new Vue({ i18n: i18nAdvancedIssuetxButton }).$mount('#advanced-locale-issuetx-button');

// wallet page
new Vue({ i18n: i18nWalletTitle }).$mount('#wallet-locale-title');
new Vue({ i18n: i18nWalletTab }).$mount('#wallet-locale-tab');
new Vue({ i18n: i18nWalletAddress }).$mount('#wallet-locale-address');
new Vue({ i18n: i18nWalletAsset }).$mount('#wallet-locale-asset');
new Vue({ i18n: i18nWalletValue }).$mount('#wallet-locale-value');
new Vue({ i18n: i18nWalletTx }).$mount('#wallet-locale-tx');
new Vue({ i18n: i18nWalletCopy }).$mount('#wallet-locale-txidcopy');
new Vue({ i18n: i18nWalletCopy }).$mount('#wallet-locale-addrcopy');

//broadcast page
new Vue({ i18n: i18nBroadcastTitle }).$mount('#broadcast-locale-title');
new Vue({ i18n: i18nBroadcastButton }).$mount('#broadcast-locale-button');