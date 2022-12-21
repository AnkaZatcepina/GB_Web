function get_name(){
    let name = prompt("Введите имя: ");
    let helloName = `Привет, ${name}`;
    document.getElementById("helloName").value = helloName;
}


function calculate() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);   
    let operationList = document.getElementById("operationList");     
    let operation = operationList.options[operationList.selectedIndex].text;
    let result = 0;
    switch(operation) {
        case '+': 
            result = number1 + number2;
            break;     
        case '-': 
            result = number1 - number2;
            break;    
        case '*': 
            result = number1 * number2;
            break;    
        case '/': 
            result = (number2 == 0)? "Ошибка. Деление на ноль": number1 / number2;
            break; 
        default:
        result = "Некорректная операция";            
    }      
    document.getElementById("result").value = result; 
}

function getAppleText(){
    let amount = parseInt(document.getElementById("appleAmount").value);
    let appleText = ""
    let rest = amount % 100;
    if (rest >= 11 && rest <= 19){
        appleText = "яблок"
    }
    else {
        let rest = amount % 10;
        switch(rest) {
            case 0: 
                appleText = "яблок";
                break;                 
            case 1: 
                appleText = "яблоко";
                break;
            case 2:
            case 3:
            case 4:
                appleText = "яблока";
                break;             
            case 5: 
            case 6: 
            case 7: 
            case 8:
            case 9:
                appleText = "яблок";
                break;        
            }      

    }    
    document.getElementById("appleText").value = appleText;    
}

get_name()