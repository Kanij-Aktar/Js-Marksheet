function btn1Click(){
var t1 = txt1.value;
var t2 = txt2.value;
var t3 = txt3.value;
var t4 = txt4.value;
var t5 = txt5.value;

if (t1 == "" || t2 == "" ||t3 == "" ||t4 == "" ||t5 == "") {
    lblMsg.innerHTML = "Please Enter All Subject Marks.";
    lblMsg.style.color="red";
}
else{

    lblMsg.innerHTML = "Please Check Your Result.";
    lblMsg.style.color="Green";

lblTotal.innerHTML = parseInt(t1)+parseInt(t2)+parseInt(t3)+parseInt(t4)+parseInt(t5);

if (parseInt(t1) < 33 || parseInt(t2) < 33 || parseInt(t3) < 33 || parseInt(t4) < 33 || parseInt(t5) < 33) {
    lblGrade.innerHTML = "F";
    lblPer.innerHTML ="0";
    
} 
else {
   
lblPer.innerHTML = parseInt(lblTotal.innerHTML) / 5;


if (parseFloat(lblPer.innerHTML) >=80){
    lblGrade.innerHTML = "A+"; 
 }
 else if (parseFloat(lblPer.innerHTML) >=70){
     lblGrade.innerHTML = "A";
 }
 else if (parseFloat(lblPer.innerHTML) >=60){
     lblGrade.innerHTML = "A-";
 }
 else if (parseFloat(lblPer.innerHTML) >=50){
     lblGrade.innerHTML = "B";
 }
 else if (parseFloat(lblPer.innerHTML) >=40){
     lblGrade.innerHTML = "C";
 }
 else if (parseFloat(lblPer.innerHTML) >=33){
     lblGrade.innerHTML = "D";
 }
 else{ 
 lblGrade.innerHTML = "F";
 } 
}

}
}