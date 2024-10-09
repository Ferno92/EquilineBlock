import { CreateCSSProperties, CSSProperties, PropsFunc } from "@mui/styles"

interface RgbColor {
    r: number
    g: number
    b: number
  }

  export var commonRoot: CSSProperties | CreateCSSProperties<{}> | PropsFunc<{}, CreateCSSProperties<{}>> = {
      height: "100%",
      padding: 16,
      position: 'relative',
  }
  
  class ColorUtils {
    static hexToRgb(hex: string): RgbColor | undefined {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          }
        : undefined
    }
  
    static rgbStringToObject(rgb: string): RgbColor | undefined {
      const match = rgb.match(
        /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
      )
  
      return match
        ? {
            r: parseInt(match[1]),
            g: parseInt(match[2]),
            b: parseInt(match[3])
          }
        : undefined
    }
  
    static hexToRgbString(hex: string, alpha: number): string {
      const hexx = hex == '#fff' ? '#ffffff' : hex == '#000' ? '#000000' : hex
      const rgbObject = this.hexToRgb(hexx)
      console.log('convert ', hexx, alpha, rgbObject)
      if (!rgbObject) {
        return '#0d0d0d'
      }
      return `${alpha ? 'rgba' : 'rgb'}(${rgbObject.r}, ${rgbObject.g}, ${
        rgbObject.b
      }${alpha ? ', ' + alpha : ''})`
    }
  
    static backgroundColorRequiresDarkContent(color: string): boolean {
      const rgb = ColorUtils.hexToRgb(color)
      let result = false
  
      if (rgb) result = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 160
  
      return result
    }
  }
  
  export default ColorUtils
  