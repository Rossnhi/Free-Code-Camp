function checkCashRegister(price, cash, cid) {
  let changeNeeded = cash - price;
  console.log(changeNeeded);
  cid = cid.reverse();
  var changeObj = {
    status : "",
    change: []
  };
  let chng;
  let denomination = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  for ( let i = 0; i < cid.length; i++) {
    if ( changeNeeded/ denomination[i] >= 1) {
      if ( changeNeeded < cid[i][1]) {
        chng = parseInt(changeNeeded/denomination[i]) * denomination[i];
        changeObj.change.push([cid[i][0],chng]);
        changeNeeded = (Math.round(changeNeeded * 100) - Math.round(chng * 100))/100;
      }
      else {
        changeObj.change.push([cid[i][0], cid[i][1]]);
        changeNeeded = (Math.round(changeNeeded * 100) - Math.round(cid[i][1] * 100))/100;
      }
    }
    else {
        changeObj.change.push([cid[i][0], 0]);
    }
  }
 if (changeNeeded == 0) {
   if (JSON.stringify(changeObj.change) == JSON.stringify(cid)) {
     changeObj.status = "CLOSED";
     changeObj.change = changeObj.change.reverse();
   }
   else {
     changeObj.status = "OPEN";
     changeObj.change = changeObj.change.filter(ele => ele[1] != 0);
   }
 }
 else {
   changeObj.status = "INSUFFICIENT_FUNDS";
   changeObj.change = [];
 }
  return changeObj;
}
