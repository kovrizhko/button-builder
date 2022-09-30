document.addEventListener("DOMContentLoaded", documentLoaded);

const HTMLConfig = {
    ElementIds: {
        CustomButton: "custom-button",
        CustomButtonText: "custom-button-text",
    }
}

function documentLoaded(){
    const customButton = document.getElementById(HTMLConfig.ElementIds.CustomButton);
    setupButtonTextInput(customButton)
}

function setupButtonTextInput(button){
    const buttonText = document.getElementById(HTMLConfig.ElementIds.CustomButtonText);
    buttonText.addEventListener("input", () => {
        hangeButtonText(buttonText.value);
        buttonSettingsChanged(button);
    })
}

function buttonSettingsChanged(button){
    button.value = buttonSettings.text;
}





