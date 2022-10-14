import * as buttonBuilder from './button-builder.js';
import { buttonSettings } from './button-builder.js';

document.addEventListener('DOMContentLoaded', documentLoaded);

const HTMLConfig = {
  ElementIds: {
    CustomButton: 'custom-button',
    CustomButtonText: 'custom-button-text',
    CustomButtonFontSize: 'custom-button-font-size',
    CustomButtonFontSizeMeasurement: 'custom-button-font-size-measurement',
    CustomButtonBackground: 'custom-button-background',
    WindowForDisplayCssSettings: 'styles',
    ButtonForDisplayCssSettings: 'loadStyle',
    CustomButtonTextColor: 'custom-text-color',
    CustomButtonFont: 'custom-button-font',
  },
};

function documentLoaded() {
  const customButton = document.getElementById(HTMLConfig.ElementIds.CustomButton);
  buttonSettingsChanged(customButton);
  setupButtonTextInput(customButton);
  setupButtonFontSize(customButton);
  setupButtonBackground(customButton);
  setupButtonTextColor(customButton);
  setupButtonFont(customButton);
  displayCssSettingsOnClick();
}

function setupButtonTextColor(button) {
  const buttonTextColor = document.getElementById(HTMLConfig.ElementIds.CustomButtonTextColor);
  buttonTextColor.addEventListener('input', () => {
    buttonBuilder.changeButtonTextColor(buttonTextColor.value);
    buttonSettingsChanged(button);
  });
}

function setupButtonFont(button) {
  const buttonFont = document.getElementById(HTMLConfig.ElementIds.CustomButtonFont);
  buttonFont.addEventListener('input', () => {
    buttonBuilder.changeButtonFont(buttonFont.value);
    buttonSettingsChanged(button);
  });
}

function setupButtonTextInput(button) {
  const buttonTextInput = document.getElementById(HTMLConfig.ElementIds.CustomButtonText);
  buttonTextInput.addEventListener('input', () => {
    buttonBuilder.changeButtonText(buttonTextInput.value);
    buttonSettingsChanged(button);
  });
}

function setupButtonFontSize(button) {
  const buttonFontSize = document.getElementById(HTMLConfig.ElementIds.CustomButtonFontSize);
  const buttonFontSizeMeasurement = document.getElementById(HTMLConfig.ElementIds.CustomButtonFontSizeMeasurement);
  const settingsButtonFontSize = () => {
    buttonBuilder.changeButtonFontSize(buttonFontSize.value);
    buttonBuilder.changeMeasurement(buttonFontSizeMeasurement.value);
    buttonSettingsChanged(button);
  };
  buttonFontSize.addEventListener('input', () => {
    settingsButtonFontSize();
  });
  buttonFontSizeMeasurement.addEventListener('change', () => {
    settingsButtonFontSize();
  });
}

function setupButtonBackground(button) {
  const buttonBackground = document.getElementById(HTMLConfig.ElementIds.CustomButtonBackground);
  buttonBackground.addEventListener('input', () => {
    buttonBuilder.changeButtonBackground(buttonBackground.value);
    buttonSettingsChanged(button);
  });
}

function buttonSettingsChanged(button) {
  button.value = buttonBuilder.buttonValue;
  Object.keys(buttonSettings)
    .forEach((settingKey) => {
      const cssElement = buttonBuilder.buttonSettings[settingKey].cssName;
      button.style[cssElement] = `${buttonBuilder.buttonSettings[settingKey].value}${buttonBuilder.buttonSettings[settingKey].additionalValue}`;
    });
}

function getElementToDisplayCssSettings() {
  return document.getElementById(HTMLConfig.ElementIds.WindowForDisplayCssSettings);
}

function displayCssSettings() {
  const windowForDisplayCssSettings = getElementToDisplayCssSettings();
  windowForDisplayCssSettings.innerHTML = '';
  let stringCssSettings = '';
  Object.keys(buttonSettings).forEach((settingKey) => {
    stringCssSettings += `${buttonSettings[settingKey].cssName} : ${buttonSettings[settingKey].value}${buttonSettings[settingKey].additionalValue};\r`;
  });
  windowForDisplayCssSettings.innerText = `
    HTML:
    <input type="text" value='${buttonBuilder.buttonValue}' id="custom-button-text">
    
    CSS: 
    .custom-button-text {
        ${stringCssSettings}
    }
  `;
}

function displayCssSettingsOnClick() {
  const buttonForDisplayCssSettings = document.getElementById(HTMLConfig.ElementIds.ButtonForDisplayCssSettings);
  buttonForDisplayCssSettings.addEventListener('click', displayCssSettings);
}
