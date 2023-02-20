function yt(){
    console.log("updating...");
 nname=document.getElementById('item').value;
 email=document.getElementById('email').value;
 amount=document.getElementById('amt').value;


 if(nname==""||email==""||amount==""){
    alert("Set Target");
 }
 else{
if(localStorage.getItem('itemsJson')==null){//itemsjson----any json present or not
   
    js =[];
    js.push([nname,email,amount]);
    localStorage.setItem('itemsJson',JSON.stringify(js));

}
else{
    jss= localStorage.getItem('itemsJson');
    js=JSON.parse(jss);
    js.push([nname,email,amount]);
    localStorage.setItem('itemsJson',JSON.stringify(js));
}
 }
yyt();
}
function yyt(){
    if(localStorage.getItem('itemsJson')==null){//itemsjson----any json present or not
   
        js =[];
        
        localStorage.setItem('itemsJson',JSON.stringify(js));
    
    }
    else{
        jss= localStorage.getItem('itemsJson');
        js=JSON.parse(jss);
      
    }
let tt=document.getElementById('pp');
let s="";

js.forEach((el ,ind) => {                                                                                                                                                                                                   
 s+=  ` <tr><td>${ind+1}</td>
        <td class="name">${el[0]}</td>
        <td class="eml">${el[1]} </td>
        <td class="bal">${el[2]} </td>
        <td><a href="/transferr">Transfer Money</button></td></tr>`
});
tt.innerHTML=s;
}
function clrr(){
   
    jss= localStorage.getItem('itemsJson');
js=JSON.parse(jss);
   //localStorage.clear();
   if(localStorage.getItem('itemsJson')==null){//itemsjson----any json present or not
   
    js =[];
    
   

}
else{
    
    js=JSON.parse(jss);
    js =[];
  
}
localStorage.setItem('itemsJson',JSON.stringify(js));
yyt();

}
function trans(){
  
}
function trans(iind){
console.log("transfer",iind);
//jss= localStorage.getItem('itemsJson');
//js=JSON.parse(jss);


//localStorage.setItem('itemsJson',JSON.stringify(js));
   yyt(); 
}
window.onload=function(){
    yyt();
}
/*addd.addEventListener('click',function(){
    document.getElementById('item').value="";
    document.getElementById('email').value ="";
    document.getElementById('amt').value ="";
 })*/
///
const All = '<%- JSON.stringify(data) %>';
  const data = JSON.parse(All);
  var a;
  var b;
  function fss(x, id) {
    document.getElementById("input").innerHTML = '<input type="text" name="frm" class="form-control" id="from" value=' +
      x + '>';
    data.forEach(key => {
      if (key.ID == id) {
      } else {
        var a = document.getElementById("select1");
        var option = document.createElement("option");
        option.innerHTML = '<option value=' + key.ID + '>' + key.Name + ' </option>';
        a.add(option);
      }
    });
    document.getElementById("close").addEventListener("click", () => {
      console.log("Event happended");
      const myNode = document.getElementById("select1");
      myNode.innerHTML = '';
    });
  }

//elemem ----->js index for each index
//index----->for number