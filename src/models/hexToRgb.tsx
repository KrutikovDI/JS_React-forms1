
export const hexToRgb = (hex: string) => {
    const res = hex.match(/\w\w/g)
    if (res == null) {return {
      converter: 'Ошибка!',
      color: 'rgb(255,0,0)'
    }
  } else {
      let [r, g, b] = res.map(x => parseInt(x, 16));
      if (!Number.isNaN(r) && !Number.isNaN(g) && !Number.isNaN(b) && r!=undefined && g!=undefined && b!=undefined) {
        return {
          converter: `rgb(${r},${g},${b})`,
          color: `rgb(${r},${g},${b})`
        }
      } else {return {
          converter: 'Ошибка!',
          color: 'rgb(255,0,0)'
        }
      }
    }
  };