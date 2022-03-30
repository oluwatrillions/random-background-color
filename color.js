let rgb = document.querySelector('.rgb')


function colorPicker() {
    document.body.style.background =
        'rgb('+ Math.round(Math.random() * 255) + ','
            + Math.round(Math.random() * 255) + ','
        + Math.round(Math.random() * 255) + ')'
    
    rgb.textContent = 'rgb('+ Math.round(Math.random() * 255) + ','
            + Math.round(Math.random() * 255) + ','
        + Math.round(Math.random() * 255) + ')'
}
