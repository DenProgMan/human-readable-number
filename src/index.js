const fraseTable = [
    ['zero',    'ten',          ''],
    ['one',     'eleven',       ''],
    ['two',     'twelve',       'twenty'],
    ['three',   'thirteen',     'thirty'],
    ['four',    'fourteen',     'forty'],
    ['five',    'fifteen',      'fifty'],
    ['six',     'sixteen',      'sixty'],
    ['seven',   'seventeen',    'seventy'],
    ['eight',   'eighteen',     'eighty'],
    ['nine',    'nineteen',     'ninety'],
];

function getDoubleNum(strNumber) {
    if (strNumber[0] == '1') {
        return fraseTable[+strNumber[1]][1];
    } else {
        return fraseTable[+strNumber[0]][2] + (strNumber[1] != 0 ? (' ' + fraseTable[+strNumber[1]][0]) : '');
    }
}

module.exports = function toReadable (number) {
    const strNumber = [... ('' + number)];
    const length = strNumber.length;

    if (length == 1) {
        return fraseTable[number][0];
    } else if (length == 2) {
        return getDoubleNum(strNumber);
    } else {
        return (fraseTable[+strNumber[0]][0] + ' hundred ' + getDoubleNum([strNumber[1], strNumber[2]]).trim()).trim();
    }
}

// console.log(toReadable(100)); //FIXME: Удалить этот console log