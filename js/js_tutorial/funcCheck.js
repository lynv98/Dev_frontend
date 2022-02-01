// kỹ thuật flag
// v1
function isPositiveNumber1(n) {
    let flag = false; //gan luon gia tri
    
    if (n < 0) {
        flag = true;
    }
    return flag;
}
//v2
function isPositiveNumber1(n) {
    let flag = false; //gan luon gia tri
    
    if (n < 0) {
        flag = true;
    }
    return flag;
}

//v3 so sanh truc tiep luon
function isPositiveNumber2(n) {
    // let flag = false; //gan luon gia tri
    
    if (n < 0) {
        return true;
    }
    return false;
}
//v4 so sanh truc tiep luon
function isPositiveNumber3(n) {
    return n<0;
}

// check return value
function classifyStudent(val) {
    //validte arguments
    //value should be in range [0, 10]
    if(val < 0 || val > 10) return '';
    let result = 'bad';
    if(val >8) result = 'excellence';
    else if(val>=7) result = 'good';
    else if(val >=4) result = 'not good';
    return result;
}
//v2
function classifyStudent1(val) {
    //validte arguments
    //value should be in range [0, 10]
    if(val < 0 || val > 10) return '';
    
    if(val >8) return 'excellence';
    if(val>=7) return 'good';
    if(val >=4) return 'not good';
    return 'bad';
}
console.log(classifyStudent1(10));

// check number odd/even
function isEven(val) {
    return val % 2 == 0;
};

//check number is divisible 5
function   isDivisible5(val) {
    return val % 5 == 0;
}

// check perject square
function isPerfectSquare(val) {
    if(val <= 0) return false;
    const sqrtN = Math.sqrt(val);
    const sqrtNInit = Math.trunc(sqrtN); // lấy phần nguyên thôi
    return sqrtN * sqrtNInit === val;
}

//v2 không lên sử dụng các ít tầng các tốt, 
function isPerfectSquare2(val) {
    if(val > 0) {
        const sqrtN = Math.sqrt(val);
        const sqrtNInit = Math.trunc(sqrtN); // lấy phần nguyên thôi
        return sqrtN * sqrtNInit === val;
    }
    return false; 
}

console.log(isPerfectSquare2(25));

// check, conver time
function converHourToSeconds(val) {
    if(val <= 0 )
}