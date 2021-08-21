import attack from './attack';

const creatureName = document.getElementById('creatureName');
const damage = document.getElementById('damage');
const resultButton = document.getElementById('resultButton');
const resultTag = document.getElementById('resultTag');

resultButton.addEventListener('click', () => {
  const result = attack(creatureName.value, damage.value);

  resultTag.innerHTML = result;
});
