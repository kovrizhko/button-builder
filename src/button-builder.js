import buttonSettings from '../data/button-settings-data.js';

export function changeButtonText(text) {
  buttonSettings.buttonValue = text;
}

export function changeButtonFontSize(size) {
  buttonSettings.style.fontSize.value = size;
}

export function changeFontSizeMeasurement(measurement) {
  buttonSettings.style.fontSize.additionalValue = measurement;
}

export function changeButtonBackground(color) {
  buttonSettings.style.buttonBackground.value = color;
}

export function changeButtonTextColor(color) {
  buttonSettings.style.textColor.value = color;
}

export function changeButtonFont(fontFamily) {
  buttonSettings.style.fontFamily.value = fontFamily;
}

export function changeButtonPaddingSize(padding) {
  buttonSettings.style.padding.value = padding;
}

export function changePaddingSizeMeasurement(measurement) {
  buttonSettings.style.padding.additionalValue = measurement;
}

export function changeButtonBorderSize(padding) {
  buttonSettings.style.borderSize.value = padding;
}

export function changeButtonBorderSizeMeasurement(measurement) {
  buttonSettings.style.borderSize.additionalValue = measurement;
}

export function changeButtonBorderColor(color) {
  buttonSettings.style.borderColor.value = color;
}

export function changeButtonBorderType(type) {
  buttonSettings.style.borderType.value = type;
}
