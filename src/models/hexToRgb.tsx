
export const hexToRgb = (hex: string) => {
    hex = hex.replace(/^#/, '')
    if (!/^[0-9A-F]{6}$/i.test(hex)) {return {
      converter: 'Ошибка!',
      color: 'rgb(255,0,0)'
    }} else {
      let r = parseInt(hex.substring(0, 2), 16);
      let g = parseInt(hex.substring(2, 4), 16);
      let b = parseInt(hex.substring(4, 6), 16);
      return {
        converter: `rgb(${r},${g},${b})`,
        color: `rgb(${r},${g},${b})`
      }
    }
  };