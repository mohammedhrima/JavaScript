const chunkArray = (arr, len) => {
    const chunkedArr = [];

    arr.foreach((val) => {
        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === len) chunkedArr.push([val]);
        else last.push(val);
    });
    return chunkedArr;
};

module.exports = chunkArray;
