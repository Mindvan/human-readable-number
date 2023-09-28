module.exports = function toReadable (number) {
    var res = [];

    const words = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
        19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
        100: 'hundred'
    }

    const length = number.toString().length;

    if (number === 0) {
        return 'zero';
    } else {
        for (let i = 0; i < length; i++) {
            if (number !== 0)
                res.push(toWord(number, words, length - i));

            if (length - i === 3) {
                number = number % 100;
            }
            if (length - i === 2) {
                if (number >= 20) {
                    number = number % 10;
                } else {
                    return res.join(' ');
                }
            }
        }
    }

    return res.join(' ');
}

const toWord = (number, words, digit) => {
    if (digit === 3) {
        return words[Math.floor(number / 100)] + ' ' + words[100];
    }
    if (digit === 2) {
        return ((number % 10 !== 0) && (number >= 20)) ? words[number - number % 10] : words[number];
    }
    if (digit === 1) {
        return words[number];
    }
}
