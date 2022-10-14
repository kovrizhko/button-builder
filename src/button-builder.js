// eslint-disable-next-line import/no-mutable-exports
export let buttonValue = 'My Button';

export const buttonSettings = {
  fontSize: {
    cssName: 'fontSize',
    value: '16',
    additionalValue: 'px',
  },
  buttonBackground: {
    cssName: 'background',
    value: 'orange',
    additionalValue: '',
  },
  textColor: {
    cssName: 'color',
    value: 'pink',
    additionalValue: '',
  },
};

export function changeButtonText(text) {
  buttonValue = text;
}

export function changeButtonFontSize(size) {
  buttonSettings.fontSize.value = size;
}

export function changeMeasurement(measurement) {
  buttonSettings.fontSize.additionalValue = measurement;
}

export function changeButtonBackground(color) {
  buttonSettings.buttonBackground.value = color;
}

export function changeButtonTextColor(color) {
  buttonSettings.textColor.value = color;
}
