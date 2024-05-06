function pinCreate(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';

    if(pinString.length < 4){
        return pinCreate();
    }
    else{
        return pin;
    }
}


document.getElementById('generate-pin').addEventListener('click',function(){
    const displayPinElement = document.getElementById('display-pin');
    const pin = pinCreate();
    displayPinElement.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(e){
    const clickedNumbers = e.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    const prevNumber = typedNumbers.value;
    
    if(clickedNumbers == 'C'){
        typedNumbers.value = '';
    }
    else if(clickedNumbers == '<'){
        const arrays = prevNumber.split('');
        arrays.pop();
        const remainNumbers = arrays.join('');
        console.log(remainNumbers);
        typedNumbers.value = remainNumbers;
    }
    else{
        const newNumbers = prevNumber + clickedNumbers;
        typedNumbers.value = newNumbers;
    }
    
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const generatePinElement = document.getElementById('display-pin');
    const generatePinNumber = generatePinElement.value;
    const clickedPinElement = document.getElementById('typed-numbers');
    const clickedPin = clickedPinElement.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');

    const leftActionElement = document.getElementById('left-action');
    const leftActionString = leftActionElement.innerText;
    let leftAction = parseInt(leftActionString); 

    const pinElement = document.getElementById('generate-pin');
    
    if(generatePinNumber == clickedPin){
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    }
    else{
        leftAction --;
        if(leftAction <= 0){
            pinElement.setAttribute('disabled',true);
            leftAction = 0;
        }
        leftActionElement.innerText = leftAction;
        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';
        
    }
})