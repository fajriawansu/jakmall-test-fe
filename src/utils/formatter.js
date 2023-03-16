const CurrencyFormatter = (amount, decimalCount = 2, thousands) => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
        let usedThousands = thousands ? thousands : ","

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + usedThousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + usedThousands)
    } catch (e) {
        console.log(e)
    }
};

function RandomString(length = 5, chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ") {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const Utils = {
    CurrencyFormatter,
    RandomString
}

export default Utils