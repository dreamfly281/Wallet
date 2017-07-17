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
                    state.Show('alert-warning', 'Warning: lost connection with '+ WorkerServer);
                } else {
                    state.Show('alert-warning', 'Warning: lost connection with ' + config.UtxoServer);
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
        case "searchtransactions":
            SearchTransactionsResponse(resp);
            break;
        case "makeregtxn":
        case "makeissuetxn":
        case "maketransfertxn":
            MakeTxnResponse(resp);
            break;
        case "sendrawtransaction":
            SendRawTxnResponse(resp);
            break;
        case "getrawtransaction":
            GetRawTxnResponse(resp);
            break;
        default:
            InvalidMethod();
    }
}

function CreateWalletResponse(resp) {
    if (resp.result == true) {
        state.Show('alert-success', "New wallet(~/.wallet/wallet.dat) is created for you");
    } else {
        var errMsg = 'Error: ' +  resp.result;
        state.Show('alert-danger', errMsg);
    }
}

function OpenWalletResponse(resp) {
    if (resp.result.success == "true") {
        openWallet.address = resp.result.message;
        openWallet.walletOpen = true;
        header.walletOpen = true;
        state.Show('alert-success', 'wallet opened');
    } else {
        var errMsg = 'Error: ' + resp.result.message;
        state.Show('alert-danger', errMsg);
    }
}

function CloseWalletResponse(resp) {
    state.Show('alert-success', 'logout');
}

function SearchAssetsResponse(resp) {
    openWallet.assets=[];
    for (var key in resp.result) {
        var temp = {
            id: key,
            value: resp.result[key]
        };
        openWallet.assets.push(temp);
    }
    state.Show('alert-success', 'wallet opened');
}

function SearchTransactionsResponse(resp) {
    openWallet.transactions =[];
    for (var key in resp.result) {
        var temp = {
            id: key,
            type: resp.result[key]
        };
        openWallet.transactions.push(temp);
    }
    state.Show('alert-success', 'transactions');
}

function MakeTxnResponse(resp) {
    var txn = resp.result;
    broadcastTx.rawTxn = txn;
    state.Show('alert-success', 'sending transaction ...')
}

function SendRawTxnResponse(resp) {
    if (resp.result.length == 64) {
        var txid = 'Transaction ID: ' + resp.result;
        state.Show('alert-success', txid);
        broadcastTx.rawTxn = '';
    } else {
        state.Show('alert-danger', resp.result);
    }
}

function GetRawTxnResponse(resp) {
    var txn = JSON.stringify(resp.result, null, 2);
    dialog.Display('Transaction', txn);
}

function InvalidMethod(resp) {
    state.Show('alert-danger', "Invaild JSON method");
}