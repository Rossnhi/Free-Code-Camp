function checkCashRegister(price, cash, cid) {
  let changeNeeded = cash - price;
  cid = cid.reverse();
  let currency = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  var changeObj = {
    status: "",
    change: []
  };
  for (let i = 0; i < currency.length; i++) {
    if (changeNeeded/currency[i] >= 1 && cid[i][1] > 0) {
      let temp = (Math.round(changeNeeded * 100) % Math.round(currency[i] * 100))/100;
      let chng = (Math.round(changeNeeded * 100) - Math.round(temp * 100))/100;
      if (chng <= cid[i][1]) {
        changeNeeded = (Math.round(changeNeeded * 100) - Math.round(chng * 100))/100;
      }
      else {
        chng = cid[i][1];
        changeNeeded = (Math.round(changeNeeded * 100) - Math.round(chng * 100))/100;
      }
      changeObj.change.push([cid[i][0], chng]);
    }
    else {
      changeObj.change.push([cid[i][0], 0]);
    }
    
  }
  if ( changeNeeded == 0) {
    if (JSON.stringify(changeObj.change)==JSON.stringify(cid)) {
      changeObj.change.reverse();
      changeObj.status = "CLOSED";
    }
    else {
      changeObj.change = changeObj.change.filter(ele => ele[1] != 0);
      changeObj.status = "OPEN";
    }
  }
  else {
    changeObj.status = "INSUFFICIENT_FUNDS";
    changeObj.change = [];
  }
  return changeObj;
