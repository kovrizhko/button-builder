import * as buttonBuilder from './button-builder.js';
import buttonSettings from '../data/button-settings-data.js';

document.addEventListener('DOMContentLoaded', documentLoaded);

const HTMLConfig = {
  ElementIds: {
    CustomButton: 'custom-button',
    WindowForDisplayCssSettings: 'styles',
    ButtonForDisplayCssSettings: 'loadStyle',
  },
  buttonInputSettings: [
    {
      elementId: 'custom-button-text',
      handler: buttonBuilder.changeButtonText,
    },
    {
      elementId: 'custom-button-font-size',
      handler: buttonBuilder.changeButtonFontSize,
    },
    {
      elementId: 'custom-button-font-size-measurement',
      handler: buttonBuilder.changeFontSizeMeasurement,
    },
    {
      elementId: 'custom-button-background',
      handler: buttonBuilder.changeButtonBackground,
    },
    {
      elementId: 'custom-text-color',
      handler: buttonBuilder.changeButtonTextColor,
    },
    {
      elementId: 'custom-button-font',
      handler: buttonBuilder.changeButtonFont,
    },
    {
      elementId: 'custom-button-padding-size',
      handler: buttonBuilder.changeButtonPaddingSize,
    },
    {
      elementId: 'custom-button-padding-measurement',
      handler: buttonBuilder.changePaddingSizeMeasurement,
    },
    {
      elementId: 'custom-button-border-size',
      handler: buttonBuilder.changeButtonBorderSize,
    },
    {
      elementId: 'custom-button-border-size-measurement',
      handler: buttonBuilder.changeButtonBorderSizeMeasurement,
    },
    {
      elementId: 'custom-button-border-color',
      handler: buttonBuilder.changeButtonBorderColor,
    },
    {
      elementId: 'custom-button-border-type',
      handler: buttonBuilder.changeButtonBorderType,
    },
  ],
};

function documentLoaded() {
  const customButton = document.getElementById(HTMLConfig.ElementIds.CustomButton);
  buttonSettingsChanged(customButton);
  displayCssSettingsOnClick();

  HTMLConfig.buttonInputSettings.forEach((inputSettings) => {
    const inputElement = document.getElementById(inputSettings.elementId);
    const eventNameToListen = getEventListenerNameByInputType(inputSettings.inputType ?? 'text');
    inputElement.addEventListener(eventNameToListen, () => {
      inputSettings.handler(inputElement.value);
      buttonSettingsChanged(customButton);
    });
  });
}

function getEventListenerNameByInputType(inputType = 'text') {
  switch (inputType) {
    case 'text':
      return 'input';
    default:
      console.error('Not supported input field type');
      return undefined;
  }
}

function buttonSettingsChanged(button) {
  button.value = buttonSettings.buttonValue;
  Object.keys(buttonSettings.style)
    .forEach((settingKey) => {
      const cssElement = buttonSettings.style[settingKey].cssName;
      button.style[cssElement] = `${buttonSettings.style[settingKey].value}${buttonSettings.style[settingKey].additionalValue}`;
    });
}

function getElementToDisplayCssSettings() {
  return document.getElementById(HTMLConfig.ElementIds.WindowForDisplayCssSettings);
}

function displayCssSettings() {
  const windowForDisplayCssSettings = getElementToDisplayCssSettings();
  windowForDisplayCssSettings.innerHTML = '';
  let stringCssSettings = '';
  Object.keys(buttonSettings.style).forEach((settingKey) => {
    stringCssSettings += `${buttonSettings.style[settingKey].cssName} : ${buttonSettings.style[settingKey].value}${buttonSettings.style[settingKey].additionalValue};\r`;
  });
  windowForDisplayCssSettings.innerText = `
    HTML:
    <input type="text" value='${buttonSettings.buttonValue}' id="custom-button-text">
    
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
