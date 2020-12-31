var flag;

function add(val) {
    if(flag == true) {
        reset();
        flag = false;
    }
    
    var x = document.querySelector("input").getAttribute("value");
    document.querySelector("input").setAttribute("value", x + "" + val);
    
    
}

function equals() {
    var exp = document.querySelector("input").getAttribute("value");
    var num;

    if(exp.includes("+")) {
        num = exp.split("+");
        document.querySelector("input").setAttribute("value", parseInt(num[0]) + parseInt(num[1]));
    }

    else if(exp.includes("-")) {
        num = exp.split("-");
        document.querySelector("input").setAttribute("value", parseInt(num[0]) - parseInt(num[1]));
    }

    else if(exp.includes("*")) {
        num = exp.split("*");
        document.querySelector("input").setAttribute("value", parseInt(num[0]) * parseInt(num[1]));
    }
    
    else {
        num = exp.split("/");
        document.querySelector("input").setAttribute("value", parseInt(num[0]) / parseInt(num[1]));
    }

    flag = true;
}

function reset() {
    document.querySelector("input").setAttribute("value", "");
}

function clearOne() {
    var y = document.querySelector("input").getAttribute("value");
    document.querySelector("input").setAttribute("value", y.slice(0, y.length - 1));
}