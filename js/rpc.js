function sendRequest(url, jsonObj) {
    var data = JSON.stringify(jsonObj);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        //FIXME: else
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resp = JSON.parse(xhr.responseText);
            responseHandler(jsonObj.method, resp)
        }
    };
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
        alert("New wallet is created for you")
    } else {
        alert("Error: \n\n" + resp.result)
    }
}

function OpenWalletResponse(resp) {
    if (resp.result.success == "true") {
        openWallet.address = resp.result.message;
        openWallet.walletOpen = true;
        header.walletOpen = true;
    } else {
        alert("Error: \n\n" + resp.result.message)
    }
}

function CloseWalletResponse(resp) {
    return true;
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
}

function MakeTxnResponse(resp) {
    broadcast.rawTxn = resp.result
}

function SendRawTxnResponse(resp) {
    alert("txid: " + resp.result)
}

function InvaildMethod(resp) {
    alert("Invaild JSON method")
}