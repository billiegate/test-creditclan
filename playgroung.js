/**
 * this class is created to answer the test 
 * questions from credit clan in js
 */
class PlayGround {
    /**
     * @method findoccurrance reports the numbers of time a 1 got repeated consecutively 
     * @param string number - e.g 10101101100111
     * @return integer - e.g 3
     */
    findoccurrance = number => {
        // check for input first
        if(!number) {
            return 'please enter a number compressing of 1s and 0s'
        }
        let last_num = null;
        let numbers = number.split('');
        let count = 0;
        let counted = false;

        // find repeating 1 and increament the counter
        numbers.forEach( (num, i) => {
            if(!counted && last_num == 1 && num == 1) {
                count++;
                counted = true;
            } else if(last_num == 0) {
                counted = false;
            }
            last_num = num;
        });

        return count;
    }

    /**
     * @method reverseAndretain reverses all strings and retains numbers in its position
     * @param string str - e.g t4ytgw5ij8huaj0hga6
     * @return string - e.g a4ghja5uh8jiwg0tyt6
     */
    //
    reverseAndretain = str => {
        if(!str) {
            return 'please enter a string'
        }
        let strs = str.split('');
        let newStr = [];
        let numIndex = [];
        // get the numbers in the string and save their corresponding index
        strs.forEach( (s, i) => {
            if(!isNaN(parseInt(s))){
                numIndex.push({
                    'index': i,
                    'value': s
                });
            }else{
                newStr.push(s);
            }
        });

        newStr = newStr.reverse(); // reverses all other strings

        // fill in numbers back in their right position as saved
        numIndex.forEach( nIndex => {
            newStr.splice(nIndex.index, 0, nIndex.value);
        });

        return newStr.join('');

    }

    /**
     * @method replaceArray - finds the zero value in a multidimemnsional array and replaces it row s and col wihth 0s
     * @param array arr - e.g [[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 16]]
     * @return array - e.g [[1, 0, 3, 4], [5, 0, 7, 8], [0, 0, 0, 0], [13, 0, 15, 16]]
     */
    replaceArray = arr => {
        
        // lets do a very basic check on the incoming input
        if( typeof arr != 'object'){
            try {
                arr = JSON.parse(arr);
            } catch ( e ) {
                return 'input is not a valid array'
            } 
        }

        let zoroIndex = {x: 0, y: 0}

        // search for 0 and save it indexes
        arr.forEach( (v1, x) => {
            if(typeof v1 == 'object') {
                v1.forEach( (v2, y) => {
                    if(v2 === 0) {
                        zoroIndex = {x, y};
                    }
                });
            }
        });

        // user the indexes to convert every values in the same row and colomn 0 appeared in
        arr = arr.map( (v, x) => {
            if(typeof v == 'object') {
                v = v.map( (iv, y) => {
                    return (y == zoroIndex.y || x == zoroIndex.x) ? 0 : iv;
                });
            }
            return v;
        });

        //return arr;
        return arr.join('<br>');
        
    }

    /**
     * @method isPalindrome checks if string value when reversed remains the same as the string itself
     * @param string str - e.g OSO
     * @returns boolean - e.g true
     */
    isPalindrome = str => {
        if(!str) {
            return 'please enter a string'
        }
        
        let rStr = str.split('').reverse().join('');

        if(rStr === str) {
            return true;
        }

        return false;
    }
}

let playground = new PlayGround();
let input = document.getElementById('input');

const FindOccurance = () => {
    let res = playground.findoccurrance(input.value);
    showResult(res);
}

const ReverseAndretain = () => {
    let res = playground.reverseAndretain(input.value);
    showResult(res);
}

const ReplaceArray = () => {
    let res = playground.replaceArray(input.value);
    showResult(res);
}

const IsPalindrome = () => {
    let res = playground.isPalindrome(input.value);
    showResult(res);
}

const showResult = res => {
    document.getElementById('result').innerHTML = res;
}
