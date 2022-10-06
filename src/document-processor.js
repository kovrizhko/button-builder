import * as buttonBuilder from './button-builder.js';

document.addEventListener('DOMContentLoaded', documentLoaded);

const HTMLConfig = {
  ElementIds: {
    CustomButton: 'custom-button',
    CustomButtonText: 'custom-button-text',
    CustomButtonFontSize: 'custom-button-font-size',
    CustomButtonFontSizeMeasurement: 'custom-button-font-size-measurement',
  },
};

function documentLoaded() {
  const customButton = document.getElementById(HTMLConfig.ElementIds.CustomButton);
  setupButtonTextInput(customButton);
  setupButtonFontSize(customButton);
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
  buttonFontSize.addEventListener('input', () => {
    buttonBuilder.changeButtonFontSizeAndMeasurement(buttonFontSize.value, buttonFontSizeMeasurement.value);
    buttonSettingsChanged(button);
  });
  buttonFontSizeMeasurement.addEventListener('change', () => {
    buttonBuilder.changeButtonFontSizeAndMeasurement(buttonFontSize.value, buttonFontSizeMeasurement.value);
    buttonSettingsChanged(button);
  });
}

function buttonSettingsChanged(button) {
  button.value = buttonBuilder.buttonSettings.text;
  button.style.fontSize = `${buttonBuilder.buttonSettings.fontSize}${buttonBuilder.buttonSettings.fontSizeMeasurement}`;
}
