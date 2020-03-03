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
    var arrCode=[];
    var code='';
    var decode='';
    for(var i = 0; i < expr.length; i+=10){
        arrCode.push(expr.slice(i,i+10));
    }
    arrCode.forEach(element => {
        decode = '';
        if(element == '**********'){
            code += ' ';
        }else{
            for(var i = 0; i < element.length; i+=2){
                if(element.slice(i,i+2) == '10'){
                    decode += '.';
                }else if(element.slice(i,i+2) == '11'){
                    decode += '-';
                }
            }
            for(var key in MORSE_TABLE){
                if(decode == key){
                    code += MORSE_TABLE[decode];
                }
            }
        }
    });

    return code;
}

module.exports = {
    decode
}