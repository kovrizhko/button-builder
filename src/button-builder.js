export const buttonSettings = {
  text: 'My Button',
  fontSize: '17',
  fontSizeMeasurement: 'px',
};

export function changeButtonText(text) {
  buttonSettings.text = text;
}

export function changeButtonFontSizeAndMeasurement(size, measurement) {
  buttonSettings.fontSize = size;
  buttonSettings.fontSizeMeasurement = measurement;
}
