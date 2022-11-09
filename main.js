function showDetails(...num) {
    let name;
    let age;
    let msg;
    for(let i=0;i<num.length;i++) {
        
      typeof num[i] == 'string' ? 
        (name = num[i]) : 
        (typeof num[i] == 'number' ? 
        age=num[i] :
        num[i]  ? msg = 'we are hiring' :  msg = 'we not hiring') ;
      
    }
    console.log(`${name} ${age} ${msg}`);
}

//showDetails(true,77,'good'); 


function update() {
    name = 'good';
}
function show() {
    let name= 'd';
    function update() {
        name = 'good';
    }
    update()
    console.log(name);
}

//show();

// ####################//



let mystring = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,Z"
let d = mystring.split(",").filter((el) => isNaN(parseInt(el) && el != 'Z') ).map(function(el) {
    return el[0] != "_" ? el[0] : " " 
});
console.log(d);

 
