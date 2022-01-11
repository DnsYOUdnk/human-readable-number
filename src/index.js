module.exports = function toReadable (number) {
    let strNum = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

  let endResult = '',
      secNum = number%100;

      if (secNum <= 20) {
          secNum = strNum[secNum];
        } else if ( 20 < secNum && secNum < 100) {
          secNum = strNum[(secNum - secNum%10)] + ' ' + strNum[secNum%10];
        }

    if (number == 0) {
        endResult = 'zero';
      } else if (number <= 20) {
        endResult = secNum;
      } else if (20 < number && number < 100) {
        endResult = secNum;
      } else if ( 100 <= number && number < 1000) {
        let firstNum = String(number)
        endResult = strNum[+firstNum[0]] + ' hundred' + ' ' + secNum;
    }

return endResult.trim();
}
