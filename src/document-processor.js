document.addEventListener("DOMContentLoaded", documentLoaded);

const HTMLConfig = {
    ElementIds: {
        SettingBlock: "settingBlock",
        ButtonBlock: "panelBlock",
        Button: "button",
        NameButton: "nameBtn",
        loadStyleButton: "loadStyle",
    }
}

function documentLoaded(){
    let nameBtn = document.getElementById(HTMLConfig.ElementIds.NameButton);
    let button = document.getElementById(HTMLConfig.ElementIds.Button);
    let styles = document.getElementById('styles');
    buttonSettingsChanged(button);


    nameBtn.addEventListener("input", () => {
        changeNameButton(nameBtn.value);
        buttonSettingsChanged(button);
    })

    document.getElementById(HTMLConfig.ElementIds.loadStyleButton).addEventListener('click', () => {
        let style = `
            HTML:
            <input id="button" type="button" value="${buttonSettings.text}">
            
            CSS:
            #button {
                color: ${buttonSettings.textColor};
                font-family: ${buttonSettings.textFont};
                font-size: ${buttonSettings.textSize};
                font-weight: ${buttonSettings.textWeight};
                background: ${buttonSettings.backgroundButton};
            }
        `
        styles.innerText = style;
    })
}

function buttonSettingsChanged(button){
    button.value = buttonSettings.text;
    button.style.color = buttonSettings.textColor;
    button.style.fontFamily = buttonSettings.textFont;
    button.style.fontSize = `${buttonSettings.textSize}px`;
    button.style.fontWeight = buttonSettings.textWeight;
    button.style.background = buttonSettings.backgroundButton;
}





