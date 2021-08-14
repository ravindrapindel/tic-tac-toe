const cells = document.querySelectorAll(".cell");

let arr=[];
function check(){
  //let flag= false;
  let flag=false;
  for(let i = 0;i<7;){

    if(cells[i].innerHTML==cells[i+1].innerHTML && cells[i+1].innerHTML==cells[i+2].innerHTML){
      if(cells[i].innerHTML==="X"){
        document.querySelector("h3").innerHTML = "Congratulations! Player1 wins.";
        //console.log("win 1");
        flag = true;


    }
    if(cells[i].innerHTML==="O"){
      document.querySelector("h3").innerHTML = "Congratulations! Player2 wins.";
      //console.log("win 2");
      flag = true;
    }

  }
  i=i+3;
}
for(let j=0;j<3;j++){
  if(cells[j].innerHTML==cells[j+3].innerHTML && cells[j+3].innerHTML==cells[j+6].innerHTML){
    if(cells[j].innerHTML==="X"){
      document.querySelector("h3").innerHTML = "Congratulations! Player1 wins.";
      //console.log("win 1");
      flag = true;

  }
  if(cells[j].innerHTML==="O"){
    document.querySelector("h3").innerHTML = "Congratulations! Player2 wins.";
    //console.log("win 2");
    flag = true;
  }

}
}
if((cells[0].innerHTML==cells[4].innerHTML && cells[4].innerHTML==cells[8].innerHTML)|| (cells[2].innerHTML==cells[4].innerHTML && cells[4].innerHTML==cells[6].innerHTML)){
  if(cells[4].innerHTML==="X"){
    document.querySelector("h3").innerHTML = "Congratulations! Player1 wins.";
    //console.log("win 1");
    flag = true;

}
if(cells[4].innerHTML==="O"){
  document.querySelector("h3").innerHTML = "Congratulations! Player2 wins.";
  //console.log("win 2");
  flag = true;
}

}

  if(arr.length>=9 && flag ==false){
    document.querySelector("h3").innerHTML = "Draw!";
    //console.log("Draw");
  }
}
for(let i=0; i< cells.length; i++){
  cells[i].onclick = (event)=>{
    if(cells[i].innerHTML == "X" || cells[i].innerHTML == "O" || document.querySelector("h3").innerHTML!=""){
      return
    }
    else{
       if(arr[arr.length-1]=="X"){
         cells[i].innerHTML = "O";
         arr.push("O");
       }
       else{
         cells[i].innerHTML = "X";
         arr.push("X");
       }
    }

    //console.log("yes");
  check();
  }

}
document.querySelector(".game--restart").onclick = ()=>{
  arr = [];
  for(let i=0; i< cells.length; i++){
    cells[i].innerHTML = "";
    document.querySelector("h3").innerHTML="";
}
}
