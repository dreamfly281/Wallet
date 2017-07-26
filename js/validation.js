const TXID_LEN = 64;
const ASSET_RECEVER_LEN = 40;
const PRIVATEKEY_LEN = 64;
const MIN_ASSET_AMOUNT = 1;
const MAX_ASSET_AMOUNT = 100000000;
const MIN_ASSET_NAME_LEN = 1;
const MAX_ASSET_NAME_LEN = 32;

// TODO: use regexp instead
function VerifyAssetName($assetName) {
    if ($assetName === '' || $assetName.length > MAX_ASSET_NAME_LEN || $assetName.length < MIN_ASSET_NAME_LEN) {
        return false;
    }
    return true;
}

function VerifyAssetID($assetID) {
    if ($assetID.length !== TXID_LEN) {
        return false;
    }
    return true;
}

function VerifyAssetAmount($assetAmount) {
    if ($assetAmount.length === 0) {
        return false;
    }
    var amount = parseInt($assetAmount);
    if (amount > MAX_ASSET_AMOUNT || amount < MIN_ASSET_AMOUNT) {
        return false;
    }
    return true;
}

function VerifyAssetReceiver($assetReceiver) {
    if ($assetReceiver.length !== ASSET_RECEVER_LEN) {
        return false;
    }
    return true;
}

function VerifyPrivateKey($privateKey) {
    if ($privateKey.length !== PRIVATEKEY_LEN) {
        return false;
    }
    return true;
}