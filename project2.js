const elem = document.getElementById("element");
const code = document.getElementById("code");
const sliders = document.querySelectorAll(".sliders input");

sliders.forEach((slider) => slider.addEventListener("input", generateShadow));

function generateShadow() {
    const shadowParams = getShadowParams();
    
    const boxShadow = createBoxShadow(...shadowParams);
    applyShadow(elem, boxShadow);
    updateCode(boxShadow);
}

function getShadowParams() {
    const hShadow = document.getElementById("h-shadow").value;
    const vShadow = document.getElementById("v-shadow").value;
    const blurRadius = document.getElementById("blur-radius").value;
    const spreadRadius = document.getElementById("spread-radius").value;
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowColorOpacity = document.getElementById("shadow-color-opacity").value;
    const shadowInset = document.getElementById("shadow-inset").checked;

    return [hShadow, vShadow, blurRadius, spreadRadius, shadowColor, shadowColorOpacity, shadowInset];
}

function createBoxShadow(hShadow, vShadow, blurRadius, spreadRadius, color, opacity, inset) {
    const shadowType = inset ? "inset" : "";
    const rgbaColor = hexToRgba(color, opacity);

  
    return `${shadowType} ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${rgbaColor}`.trim();
}

function hexToRgba(color, opacity) {
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);


    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function applyShadow(element, boxShadow) {
    element.style.boxShadow = boxShadow;
}

function updateCode(text) {
    code.value = `box-shadow: ${text};`; 
}

function copyCode() {
    const codeText = code.value;
    navigator.clipboard.writeText(codeText)
        .then(() => {
            alert("Code copied to clipboard!");
        });
}


window.onload = generateShadow;