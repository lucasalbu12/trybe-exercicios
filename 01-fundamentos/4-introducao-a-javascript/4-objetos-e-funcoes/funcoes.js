function verifyPalindrome(word)
{
    const arrayWord = word.split('');
    const reversed = arrayWord.reverse();
    const joined = reversed.join('');

    let verification;

    if(word == joined){
        verification = true;
    } else{
        verification = false;
    }

    return verification;
}

function biggestIndex(array)
{

    let biggest = array[0];

    for(let i = 1; i < array.length; i += 1){

        if(array[i] > biggest){

            biggestIndex = i;
        }

    }

    return biggestIndex;

}

function smallestIndex(array)
{
    let smallest = array[0];
    let smallIndex;

    for(let i = 1; i < array.length; i += 1){

        if(array[i] < smallest){
            
            smallIndex = i;
        }

    }

    return smallIndex;
}

//Por quê o código não funciona se eu tirar o biggest = array[i].length ?
function numberOfCharacters(array)
{

    let biggest = array[0].length;
    let biggestWord;

    for(let i = 1; i < array.length; i += 1){

        if(array[i].length > biggest){

            biggest = array[i].length;

            biggestWord = array[i];
        }

    }

    return biggestWord;

}

function mostRepeatedValue(array)
{
    let repeatedNumberCont = 0;
    let numberCont = 0;
    let indexCont = 0;

    for(let i = 0; i < array.length; i += 1){

        let verification = array[i];
        
        for(let j = 0; j < array.length; j++){
            if(verification === array[j]){
                numberCont +=  1;
            }
        }

        if(numberCont > repeatedNumberCont){
            repeatedNumberCont = numberCont;
            indexCont = i;
        }

        numberCont = 0;

    }

    return array[indexCont];
}

const arrayTeste = [1, 1, 1, 5, 5, 5, 5, 5, 45, 45, 45, 45, 45, 45, 45, 45, 45];

console.log(mostRepeatedValue(arrayTeste));