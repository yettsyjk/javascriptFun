function calcFunc(){
    //value from first text box
    let a = document.getElementById('input1Id').value;
   //value from first text box
    let b = document.getElementById('input2Id').value;
  //result will be added values from first and second text box
    let result = parseFloat(a) + parseFloat(b);
    document.write(result);
}