import { createTheme } from "@mui/material/styles";
import "../index.css";

declare module "@mui/material/styles" {
  interface PaletteColor {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  }
  interface CustomPalette {
    semantic: {
      success: {
        100: string;
        500: string;
      };
      warning: {
        100: string;
        300: string;
      };
      error: {
        100: string;
        500: string;
      };
    };
    gray: {
      50: string;
      100: string;
      300: string;
      500: string;
      700: string;
      900: string;
      white: string;
    };
    currency: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
  }

  interface TypeText {
    highemp: string;
    medemp: string;
    lowemp: string;
  }

  interface TypographyVariants {
    h4: TypographyStyle;
    h6: TypographyStyle;
    subtitle1: TypographyStyle;
    subtitle2: TypographyStyle;
    b1: TypographyStyle;
    b2: TypographyStyle;
    c1: TypographyStyle;
    c2: TypographyStyle;
    button: TypographyStyle;
    overline: TypographyStyle;
  }
  interface TypographyVariantsOptions {
    h4: TypographyStyle;
    h6: TypographyStyle;
    subtitle1: TypographyStyle;
    subtitle2: TypographyStyle;
    b1: TypographyStyle;
    b2: TypographyStyle;
    c1: TypographyStyle;
    c2: TypographyStyle;
    button: TypographyStyle;
    overline: TypographyStyle;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h4: true;
    h6: true;
    subtitle1: true;
    subtitle2: true;
    b1: true;
    b2: true;
    c1: true;
    c2: true;
    button: true;
    overline: true;
  }
}

interface TypographyStyle {
  "@media (max-width:1920px)": {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1081,
      lg: 1441,
      xl: 1920,
    },
  },
  spacing: [4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      100: "#FAFCFF",
      300: "#CCE3FF",
      500: "#0052FF",
      700: "#002EB7",
      900: "#00177A",
    },
    semantic: {
      success: {
        100: "#E9F7EC",
        500: "#20B03F",
      },
      warning: {
        100: "#FFF6ED",
        300: "#FFA74F",
      },
      error: {
        100: "#F3E6EB",
        500: "#B71A33",
      },
    },
    gray: {
      50: "#F2F2F7",
      100: "#E8E8F7",
      300: "#B4B4CF",
      500: "#4B4B60",
      700: "#252545",
      900: "#0E0E2E",
      white: "#FFFFFF",
    },
    currency: {
      100: "#F7931A33",
      200: "#22222233",
      300: "#E6007A33",
      400: "#627EEA33",
      500: "#26A17B33",
      600: "#19197133",
      700: "#DBC98433",
    },
    text: {
      highemp: "#343446",
      medemp: "#7D7D89",
      lowemp: "#B2B2B9",
    },
  },

  typography: {
    h4: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Semibold",
        fontSize: "2.5rem",
        fontWeight: "500",
        lineHeight: "3.375rem",
      },
    },
    h6: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Regular",
        fontSize: "1.5rem",
        fontWeight: "400",
        lineHeight: "2.125rem",
      },
    },
    subtitle1: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Semibold",
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: "1.75rem",
      },
    },
    subtitle2: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Regular",
        fontSize: "1.25rem",
        fontWeight: "400",
        lineHeight: "1.75rem",
      },
    },
    b1: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Semibold",
        fontSize: "1rem",
        fontWeight: "500",
        lineHeight: "1.375rem",
      },
    },
    b2: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Regular",
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.375rem",
      },
    },
    c1: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Medium",
        fontSize: "0.875rem",
        fontWeight: "500",
        lineHeight: "1rem",
      },
    },
    c2: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Regular",
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1rem",
      },
    },
    button: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Semibold",
        fontSize: "0.875rem",
        fontWeight: "500",
        lineHeight: "2.625rem",
      },
    },
    overline: {
      "@media (max-width:1920px)": {
        fontFamily: "Graphik-Regular",
        fontSize: "0.75rem",
        fontWeight: "400",
        lineHeight: "0.875rem",
      },
    },
  },
});

export default theme;
