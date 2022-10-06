export const buttonSettings = {
  text: 'My Button',
  fontSize: '16',
  fontSizeMeasurement: 'px',
};

export function changeButtonText(text) {
  buttonSettings.text = text;
}

export function changeButtonFontSizeAndMeasurement(size, measurement){
  buttonSettings.fontSize = size;
  buttonSettings.fontSizeMeasurement = measurement;
}
