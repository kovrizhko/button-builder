document.addEventListener("DOMContentLoaded", documentLoaded);

const HTMLConfig = {
    ElementIds: {
        Button: "button",
        TextButton: "textButton",
    }
}

function documentLoaded(){
    let textButton = document.getElementById(HTMLConfig.ElementIds.TextButton);
    let button = document.getElementById(HTMLConfig.ElementIds.Button);

    textButton.addEventListener("input", () => {
        changeTextButton(textButton.value);
        buttonSettingsChanged(button);
    })
}

function buttonSettingsChanged(button){
    button.value = buttonSettings.text;
}





