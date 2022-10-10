export const buttonSettings = {
  text: 'My Button',
  fontSize: '17',
  fontSizeMeasurement: 'px',
  buttonBackground: 'orange',
};

export function changeButtonText(text) {
  buttonSettings.text = text;
}

export function changeButtonFontSize(size) {
  buttonSettings.fontSize = size;
}

export function changeMeasurement(measurement) {
  buttonSettings.fontSizeMeasurement = measurement;
}

export function changeButtonBackground(color) {
  buttonSettings.buttonBackground = color;
}
