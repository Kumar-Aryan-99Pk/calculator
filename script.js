let buttons=document.querySelectorAll("button");
console.log(buttons);

let f='';
let s='';
let ops='';
let firstFlag=false;
let secondFlag=true;

let curr=document.querySelector(".current-equation");
let ans=document.querySelector(".ans");

buttons.forEach(button=>{
    button.addEventListener('click',()=>record(button));
});

function record(button){
    let x=button.textContent;
    if(x=='AC') {clearCalc(); return;}
    if(x=='='){
        let result;
        switch(ops){
                case '+': result = Number(f) + Number(s); break;
                case '-': result = Number(f) - Number(s); break;
                case '*': result = Number(f) * Number(s); break;
                case '/': result = Number(f) / Number(s); break;
            }
            result = Number(result.toPrecision(9));
            ans.textContent = result;
            f = result.toString();
            s = "";
            ops = "";
            enteringSecond = false;
            updatecurr();
            return;
        }
    if(firstFlag==false){
        if(x>='0' && x<='9' || x=='.')
            f=f+x;
        else if(x=='C')
            f=f.substring(0,f.length-1);
        //console.log(f);
        updatecurr();
    }
    if(['+', '-', '*', '/'].includes(x)){
        ops=x;
        firstFlag=true;
        //console.log(ops);
        secondFlag=false;
        updatecurr();
    }
    else if(secondFlag==false){
        if (x>='0' && x<='9' || x=='.')
            s=s+x;
        else if(x=='C')
            s=s.substring(0,s.length-1);
        updatecurr()
    }
        }
function updatecurr(){
    curr.textContent=f+ops+s;
}
function clearCalc(){
    firstFlag=false;
    opsFlag=false;
    secondFlag=true;
    f='';
    s='';
    ops='';
    curr.textContent='';
    ans.textContent='';
}