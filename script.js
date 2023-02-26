//parallax
let montanha1 = document.getElementById('montanha1');
let lua = document.getElementById('lua');
let montanhaArvore1 = document.getElementById('montanhaArvore1');
let montanhaArvore2 = document.getElementById('montanhaArvore2');
let text = document.getElementById('text');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    montanha1.style.left = value * 0.25 + 'px';
    lua.style.top = value * 1.05 + 'px';
    montanhaArvore1.style.top = value * 0.5 + 'px';
    montanhaArvore2.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
})
