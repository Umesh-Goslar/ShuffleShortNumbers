var { arryList, arryLength, randomNum, arryresult } = arryElement();

$("#shuffle").click(function () {
    shuffleNum();
});

$("#sort").click(function () {
    arryList.sort();
    var i = 0;
    $('.number').each(function () {
        this.innerHTML = arryList[i];
        i++;
    });
});

function arryElement() {
    var arryList = [];
    $('.number').each(function () {
        arryList.push(this.innerHTML);
    });
    var arryLength = arryList.length - 1, randomNum, arry;
    return { arryList, arryLength, randomNum, arry };
}

function shuffleNum() {
    for (var i = arryLength; i > 0; i--) {
        randomNum = Math.floor(Math.random() * (i + 1));
        arryresult = arryList[i];
        arryList[i] = arryList[randomNum];
        arryList[randomNum] = arryresult;
    }
    $('.number').each(function () {
        this.innerHTML = arryList[i];
        i++;
    });
}
