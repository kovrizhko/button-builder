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
}

function buttonSettingsChanged(button){
    button.value = buttonSettings.text;
}





