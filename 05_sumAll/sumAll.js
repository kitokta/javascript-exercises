const sumAll = function(startNum, endNum) {
    let endSum = 0;
    let error ="";

    if (startNum < 0 || endNum <0){
        return error='ERROR';
    }

    else if (typeof(startNum)!='number' || typeof(endNum)!='number'){
        return error='ERROR';
}

    else{
        if (startNum<endNum){
            while (startNum<=endNum){
        endSum = endSum +startNum;
        startNum++;
     }
            return endSum;
}
        else if (startNum>endNum){
            while (startNum>=endNum){
            endSum = endSum +startNum;
            startNum--;
         }
            return endSum;
    }
}
    





// for (let i = startNum; i<=endNum; i++){
    //endSum = endSum +i;}



};


sumAll(-10, 4);
// Do not edit below this line
module.exports = sumAll;
