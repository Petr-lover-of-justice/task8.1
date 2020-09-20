let phrases = [{
    text:'Отправить другу смешную гифку'},
   { text: 'Определенно'},
  { text: 'Совершенно точно' },
  { text:  'Можно на это смело рассчитывать'},
  { text: 'Не мучай меня своими скучными вопросами, пожалуйста' },
  { text: 'Несомненно' },
  { text: 'Да' },
  ];
  
  function getRandomElement(arr) {
    let x = Math.random() 
    console.log('рандом', x);
    let y = arr.length;
    console.log('arr.length',y);
    let z = (x * y);
    console.log(z);

    let randIndex = Math.floor(z);
    return arr[randIndex];
  }
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  
 
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    phrase.textContent = randomElement.text;
    
   if (randomElement.text.length > 40) {
      advice.style.fontSize = '50px';
    } else {
      advice.style.fontSize = '60px';
    }
  });