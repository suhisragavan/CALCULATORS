function suhis(){
    height=document.getElementById('height').value;
    weight=document.getElementById('weight').value;
    bmi=weight/((height/100)**2)
    document.getElementById('output').innerHTML="your BMI is:"+bmi;
}