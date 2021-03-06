module.exports = {
  mode: "jit",
  theme: {
    screens: {
      sm: { max: "590px" },
      md: { max: "700px" }
    },
    extend: {
      backgroundImage: {
        "image-aw16": "url('https://i.imgur.com/qZTfs49.jpg')",
        "karakol-header": "url('http://i.imgur.com/ymD1KR0.jpg')",
        "hero-wayfair": "url('https://i.imgur.com/Xd0Ul3R.jpg')",
        "cta-wayfair": "url('https://i.imgur.com/qWWntHc.jpg')"
      },
      backgroundPosition: {
        "top-center": "top center"
      },
      colors: {
        beige: "#eee7e7",
        brown: "#3b3b3b",
        "brown-light": "#868686"
      },
      spacing: {
        screen: "100vw",
        full: "100%",
        px: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
        20: "20px",
        24: "24px",
        25: "25px",
        26: "26px",
        30: "30px",
        32: "32px",
        35: "35px",
        36: "36px",
        40: "40px",
        48: "48px",
        56: "56px",
        60: "60px",
        64: "64px",
        96: "96px",
        170: "170px",
        210: "210px",
        240: "240px",
        590: "590px",
        640: "640px",
        700: "700px",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%"
      },
      borderWidth: {
        0: "0",
        3: "3px"
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        lg: "8px"
      },
      fontFamily: {
        "work-sans": [
          '"Work Sans"',
          "-apple-system",
          '"Segoe UI"',
          "sans-serif"
        ],
        "open-sans": [
          '"Open Sans"',
          "-apple-system",
          '"Segoe UI"',
          "sans-serif"
        ],
        "titillium-web": [
          '"Titillium Web"',
          "-apple-system",
          '"Segoe UI"',
          "sans-serif"
        ],
        "source-sans-pro": [
          '"Source Sans Pro"',
          "-apple-system",
          '"Segoe UI"',
          "sans-serif"
        ],
        quicksand: ["Quicksand", "-apple-system", '"Segoe UI"', "sans-serif"],
        raleway: ["Raleway", "-apple-system", '"Segoe UI"', "sans-serif"],
        lato: ["Lato", "-apple-system", '"Segoe UI"', "sans-serif"],
        sans: ["-apple-system", '"Segoe UI"', "sans-serif"],
        serif: ["Constantia", "Georgia", "serif"],
        mono: ["Menlo", "Consolas", "monospace"]
      },
      fontSize: {
        0: "0",
        xxs: "12px",
        xs: "13px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "22px": "22px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px"
      },
      inset: theme => ({
        ...theme("spacing")
      }),
      letterSpacing: theme => ({
        ...theme("spacing")
      }),
      lineHeight: theme => ({
        ...theme("spacing")
      }),
      maxHeight: theme => ({
        ...theme("spacing")
      }),
      maxWidth: theme => ({
        ...theme("spacing")
      }),
      minHeight: theme => ({
        ...theme("spacing")
      }),
      minWidth: theme => ({
        ...theme("spacing")
      })
    }
  },
  corePlugins: {
    animation: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false
  }
};
