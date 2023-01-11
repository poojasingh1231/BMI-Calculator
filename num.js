function numGenerator(){
    var num=1;
    function checkNum(){
        console.log(num);
    }
    num++;
    return checkNum;
}
var number=numGenerator();
number(); 