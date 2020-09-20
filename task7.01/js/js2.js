function get(){
document.getElementById('d').innerHTML = "Нота ДО"



}
function get2(){

  document.getElementById('re').innerHTML = "РЕ"
  

}
  function get3(){


    document.getElementById('mi').innerHTML = "МИ" 
}

function dye1(){
  var inputValue = document.getElementById("demo").value;
  
  if (inputValue == 'do') {
    get()
  }

}
if (age < 3) {
  message = 'Здравствуй, малыш!';
} else if (age < 18) {
  message = 'Привет!';
} else if (age < 100) {
  message = 'Здравствуйте!';
} else {
  message = 'Какой необычный возраст!';
}