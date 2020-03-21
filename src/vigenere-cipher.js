class VigenereCipheringMachine {
    toSquare () {
        
    }

    encrypt(message, key) {
        let alphabet = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']];   
        for (i=1; i<alphabet[0].length; i++) {
            let arr = [];
            for (k=0; k<alphabet[0].length; k++) {
                arr[k] = alphabet[0][(k+i) % alphabet[0].length];
            }
            alphabet[i] = arr;
        }
        message = message.split('');
        key = key.split('');
        let osX = 0;
        let osY = 0;
        let messageCrypt = [];
        let count = 0;
        messageCrypt = message.map((element, index) => {

            if (/[a-z]/i.test(element)) {
                       
                for (i=0; i<26; i++) {
                    if (key[count % key.length].toUpperCase()===alphabet[0][i].toUpperCase()) {
                             
                        osX = i; 
                    }
                }
                count++;
                for (i=0; i<26; i++) {
                    if (element.toUpperCase()===alphabet[i][0].toUpperCase()) {
                        osY = i; 
                    }
                }
                return alphabet[osY][osX];
            }
            else {
                return element;
            }

        });
        return messageCrypt.join('').toUpperCase();
    }

    decrypt(message, key) {
        let alphabet = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']];   
        for (i=1; i<alphabet[0].length; i++) {
            let arr = [];
            for (k=0; k<alphabet[0].length; k++) {
                arr[k] = alphabet[0][(k+i) % alphabet[0].length];
            }
            alphabet[i] = arr;
        }
        message = message.split('');
        key = key.split('');
        let osX = 0;
        let osY = 0;
        let messageCrypt = [];
        let count = 0;
        messageCrypt = message.map((element, index) => {

            if (/[a-z]/i.test(element)) {
                       
                for (i=0; i<26; i++) {
                    if (key[count % key.length].toUpperCase()===alphabet[0][i].toUpperCase()) {
                             
                        osX = i; 
                    }
                }
                count++;
                for (i=0; i<26; i++) {
                    if (element.toUpperCase()===alphabet[i][osX].toUpperCase()) {
                        osY = i; 
                    }
                }
                return alphabet[osY][0];
            }
            else {
                return element;
            }

        });
        return messageCrypt.join('').toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
