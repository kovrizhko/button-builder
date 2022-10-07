import * as buttonBuilder from './button-builder.js';

document.addEventListener('DOMContentLoaded', documentLoaded);

const HTMLConfig = {
  ElementIds: {
    CustomButton: 'custom-button',
    CustomButtonText: 'custom-button-text',
    CustomButtonFontSize: 'custom-button-font-size',
    CustomButtonFontSizeMeasurement: 'custom-button-font-size-measurement',
    CustomButtonBackground: 'custom-button-background',
  },
};

function documentLoaded() {
  const customButton = document.getElementById(HTMLConfig.ElementIds.CustomButton);
  buttonSettingsChanged(customButton);
  setupButtonTextInput(customButton);
  setupButtonFontSize(customButton);
  setupButtonBackground(customButton);
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
  button.value = buttonBuilder.buttonSettings.text;
  button.style.fontSize = `${buttonBuilder.buttonSettings.fontSize}${buttonBuilder.buttonSettings.fontSizeMeasurement}`;
  button.style.background = buttonBuilder.buttonSettings.buttonBackground;
}
