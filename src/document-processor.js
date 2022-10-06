// eslint-disable-next-line import/extensions
import * as buttonBuilder from './button-builder.js';

document.addEventListener('DOMContentLoaded', documentLoaded);

const HTMLConfig = {
  ElementIds: {
    CustomButton: 'custom-button',
    CustomButtonText: 'custom-button-text',
  },
};

function documentLoaded() {
  const customButton = document.getElementById(HTMLConfig.ElementIds.CustomButton);
  setupButtonTextInput(customButton);
}

function setupButtonTextInput(button) {
  const buttonTextInput = document.getElementById(HTMLConfig.ElementIds.CustomButtonText);
  buttonTextInput.addEventListener('input', () => {
    buttonBuilder.changeButtonText(buttonTextInput.value);
    buttonSettingsChanged(button);
  });
}

function buttonSettingsChanged(button) {
  button.value = buttonBuilder.buttonSettings.text;
}
