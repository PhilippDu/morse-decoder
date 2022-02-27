const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    var arr = [];
    var res = '';
    var word = '';
     
    for(let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }

    var arr2 = arr.map(function(elem){
        if(elem === '**********') {
            return (' ');
        }
        word = '';
        for(var i = 0; i < 10; i += 2) {
            if (elem.slice(i, i + 2) === '10') {
                word += '.';
            }
            if(elem.slice(i, i + 2) === '11') {
                word += '-';
            }  
        }
        return word;
    })

    arr2.forEach(function(elem) {
        if( elem === ' ') res += ' ';
        else res += MORSE_TABLE[elem];
    })

    return res;
}

module.exports = {
    decode
}