const slider = document.querySelector(".slider");
let sliderValue = document.querySelector('.inputer');
const gridContainer = document.getElementById('gridContainer');
let width = gridContainer.clientHeight;
let sliderInput = document.getElementById("sliderInput").value;
sliderValue.textContent = `${sliderInput} x ${sliderInput}`;




slider.addEventListener('change', createGrid)
createGrid();
function createGrid(){
    gridContainer.textContent='';
    sliderInput = document.getElementById("sliderInput").value;
    sliderValue.textContent = `${sliderInput} x ${sliderInput}`;
    width = gridContainer.clientHeight;
    width = width/sliderInput;
    for (let i = 0; i < (sliderInput * sliderInput); i++){
        
        const box = document.createElement('div');

        
        box.classList.add('box');
        gridContainer.appendChild(box);
        box.setAttribute('style',`width: ${width}px;height: ${width}px`);
    }
}
