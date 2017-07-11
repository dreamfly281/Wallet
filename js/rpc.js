function sendRequest(url, jsonObj) {
    var data = JSON.stringify(jsonObj);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var resp = JSON.parse(xhr.responseText);
                responseHandler(jsonObj.method, resp)
            } else {
                if (url === WorkerServer) {
                    PromptUser('alert-warning', 'Warning: lost connection with '+ WorkerServer);
                } else {
                    PromptUser('alert-warning', 'Warning: lost connection with ' + config.UtxoServer);
                }
            }
        }
    }
}

function responseHandler(method, resp) {
    switch(method){
        case "createwallet":
            CreateWalletResponse(resp);
            break;
        case "openwallet":
            OpenWalletResponse(resp);
            break;
        case "closewallet":
            CloseWalletResponse(resp);
            break;
        case "searchassets":
            SearchAssetsResponse(resp);
            break;
        case "makeregtxn":
        case "makeissuetxn":
        case "maketransfertxn":
            MakeTxnResponse(resp);
            break;
        case "sendrawtransaction":
            SendRawTxnResponse(resp);
            break;
        default:
            InvaildMethod();
    }
}

function CreateWalletResponse(resp) {
    if (resp.result == true) {
        PromptUser('alert-success', "New wallet(~/.wallet/wallet.dat) is created for you");
    } else {
        var errMsg = 'Error: ' +  resp.result;
        PromptUser('alert-danger', errMsg);
    }
}

function OpenWalletResponse(resp) {
    if (resp.result.success == "true") {
        openWallet.address = resp.result.message;
        openWallet.walletOpen = true;
        header.walletOpen = true;
        PromptUser('alert-success', 'wallet opened');
    } else {
        var errMsg = 'Error: ' + resp.result.message;
        PromptUser('alert-danger', errMsg);
    }
}

function CloseWalletResponse(resp) {
    PromptUser('alert-success', 'logout');
}

function SearchAssetsResponse(resp) {
    openWallet.assets=[];
    for (var key in resp.result) {
        var temp = {
            type: key,
            value: resp.result[key]
        };
        openWallet.assets.push(temp);
    }
    PromptUser('alert-success', 'wallet opened');
}

function MakeTxnResponse(resp) {
    var txid = resp.result;
    broadcastTx.rawTxn = txid;
}

function SendRawTxnResponse(resp) {
    if (resp.result.length == 64) {
        var txid = 'Transaction ID: ' + resp.result;
        PromptUser('alert-success', txid);
    } else {
        PromptUser('alert-danger', resp.result);
    }
}

function InvaildMethod(resp) {
    PromptUser('alert-danger', "Invaild JSON method");
}