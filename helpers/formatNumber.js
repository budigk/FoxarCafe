function formatNumber
(number, formatType){
    if (formatType == "persen") {
        return number.toLocaleString('en-US', {maximumFractionDigits:2}) + "%"
    } else {
        return number.toLocaleString()
    }
}

module.exports = formatNumber;