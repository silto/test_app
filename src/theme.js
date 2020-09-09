import { createGlobalStyle } from "styled-components";

import montserrat200eot from "./fonts/montserrat/montserrat-v14-latin-200.eot";
import montserrat200woff2 from "./fonts/montserrat/montserrat-v14-latin-200.woff2";
import montserrat200woff from "./fonts/montserrat/montserrat-v14-latin-200.woff";
import montserrat200ttf from "./fonts/montserrat/montserrat-v14-latin-200.ttf";
import montserrat400eot from "./fonts/montserrat/montserrat-v14-latin-regular.eot";
import montserrat400woff2 from "./fonts/montserrat/montserrat-v14-latin-regular.woff2";
import montserrat400woff from "./fonts/montserrat/montserrat-v14-latin-regular.woff";
import montserrat400ttf from "./fonts/montserrat/montserrat-v14-latin-regular.ttf";
import montserrat400ieot from "./fonts/montserrat/montserrat-v14-latin-italic.eot";
import montserrat400iwoff2 from "./fonts/montserrat/montserrat-v14-latin-italic.woff2";
import montserrat400iwoff from "./fonts/montserrat/montserrat-v14-latin-italic.woff";
import montserrat400ittf from "./fonts/montserrat/montserrat-v14-latin-italic.ttf";
import montserrat500eot from "./fonts/montserrat/montserrat-v14-latin-500.eot";
import montserrat500woff2 from "./fonts/montserrat/montserrat-v14-latin-500.woff2";
import montserrat500woff from "./fonts/montserrat/montserrat-v14-latin-500.woff";
import montserrat500ttf from "./fonts/montserrat/montserrat-v14-latin-500.ttf";
import montserrat600eot from "./fonts/montserrat/montserrat-v14-latin-600.eot";
import montserrat600woff2 from "./fonts/montserrat/montserrat-v14-latin-600.woff2";
import montserrat600woff from "./fonts/montserrat/montserrat-v14-latin-600.woff";
import montserrat600ttf from "./fonts/montserrat/montserrat-v14-latin-600.ttf";
import montserrat700eot from "./fonts/montserrat/montserrat-v14-latin-700.eot";
import montserrat700woff2 from "./fonts/montserrat/montserrat-v14-latin-700.woff2";
import montserrat700woff from "./fonts/montserrat/montserrat-v14-latin-700.woff";
import montserrat700ttf from "./fonts/montserrat/montserrat-v14-latin-700.ttf";
import montserrat800eot from "./fonts/montserrat/montserrat-v14-latin-800.eot";
import montserrat800woff2 from "./fonts/montserrat/montserrat-v14-latin-800.woff2";
import montserrat800woff from "./fonts/montserrat/montserrat-v14-latin-800.woff";
import montserrat800ttf from "./fonts/montserrat/montserrat-v14-latin-800.ttf";
import montserrat900eot from "./fonts/montserrat/montserrat-v14-latin-900.eot";
import montserrat900woff2 from "./fonts/montserrat/montserrat-v14-latin-900.woff2";
import montserrat900woff from "./fonts/montserrat/montserrat-v14-latin-900.woff";
import montserrat900ttf from "./fonts/montserrat/montserrat-v14-latin-900.ttf";

import opensans300eot from "./fonts/open-sans/open-sans-v17-latin-300.eot";
import opensans300woff2 from "./fonts/open-sans/open-sans-v17-latin-300.woff2";
import opensans300woff from "./fonts/open-sans/open-sans-v17-latin-300.woff";
import opensans300ttf from "./fonts/open-sans/open-sans-v17-latin-300.ttf";
import opensans400ieot from "./fonts/open-sans/open-sans-v17-latin-italic.eot";
import opensans400iwoff2 from "./fonts/open-sans/open-sans-v17-latin-italic.woff2";
import opensans400iwoff from "./fonts/open-sans/open-sans-v17-latin-italic.woff";
import opensans400ittf from "./fonts/open-sans/open-sans-v17-latin-italic.ttf";
import opensans400eot from "./fonts/open-sans/open-sans-v17-latin-regular.eot";
import opensans400woff2 from "./fonts/open-sans/open-sans-v17-latin-regular.woff2";
import opensans400woff from "./fonts/open-sans/open-sans-v17-latin-regular.woff";
import opensans400ttf from "./fonts/open-sans/open-sans-v17-latin-regular.ttf";
import opensans600eot from "./fonts/open-sans/open-sans-v17-latin-600.eot";
import opensans600woff2 from "./fonts/open-sans/open-sans-v17-latin-600.woff2";
import opensans600woff from "./fonts/open-sans/open-sans-v17-latin-600.woff";
import opensans600ttf from "./fonts/open-sans/open-sans-v17-latin-600.ttf";
import opensans700eot from "./fonts/open-sans/open-sans-v17-latin-700.eot";
import opensans700woff2 from "./fonts/open-sans/open-sans-v17-latin-700.woff2";
import opensans700woff from "./fonts/open-sans/open-sans-v17-latin-700.woff";
import opensans700ttf from "./fonts/open-sans/open-sans-v17-latin-700.ttf";
import opensans800eot from "./fonts/open-sans/open-sans-v17-latin-800.eot";
import opensans800woff2 from "./fonts/open-sans/open-sans-v17-latin-800.woff2";
import opensans800woff from "./fonts/open-sans/open-sans-v17-latin-800.woff";
import opensans800ttf from "./fonts/open-sans/open-sans-v17-latin-800.ttf";

export const GlobalStyle = createGlobalStyle`
  /* montserrat-200 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    src: url('${montserrat200eot}'); /* IE9 Compat Modes */
    src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),
         url('${montserrat200eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${montserrat200woff2}') format('woff2'), /* Super Modern Browsers */
         url('${montserrat200woff}') format('woff'), /* Modern Browsers */
         url('${montserrat200ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('${montserrat400eot}'); /* IE9 Compat Modes */
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
         url('${montserrat400eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${montserrat400woff2}') format('woff2'), /* Super Modern Browsers */
         url('${montserrat400woff}') format('woff'), /* Modern Browsers */
         url('${montserrat400ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* montserrat-italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    src: url('${montserrat400ieot}'); /* IE9 Compat Modes */
    src: local('Montserrat Italic'), local('Montserrat-Italic'),
         url('${montserrat400ieot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${montserrat400iwoff2}') format('woff2'), /* Super Modern Browsers */
         url('${montserrat400iwoff}') format('woff'), /* Modern Browsers */
         url('${montserrat400ittf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: url('${montserrat500eot}'); /* IE9 Compat Modes */
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
         url('${montserrat500eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${montserrat500woff2}') format('woff2'), /* Super Modern Browsers */
         url('${montserrat500woff}') format('woff'), /* Modern Browsers */
         url('${montserrat500ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* montserrat-600 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: url('${montserrat600eot}'); /* IE9 Compat Modes */
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
         url('${montserrat600eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${montserrat600woff2}') format('woff2'), /* Super Modern Browsers */
         url('${montserrat600woff}') format('woff'), /* Modern Browsers */
         url('${montserrat600ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('${montserrat700eot}'); /* IE9 Compat Modes */
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
         url('${montserrat700eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${montserrat700woff2}') format('woff2'), /* Super Modern Browsers */
         url('${montserrat700woff}') format('woff'), /* Modern Browsers */
         url('${montserrat700ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* montserrat-800 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: url('${montserrat800eot}'); /* IE9 Compat Modes */
    src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
         url('${montserrat800eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${montserrat800woff2}') format('woff2'), /* Super Modern Browsers */
         url('${montserrat800woff}') format('woff'), /* Modern Browsers */
         url('${montserrat800ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* montserrat-900 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: url('${montserrat900eot}'); /* IE9 Compat Modes */
    src: local('Montserrat Black'), local('Montserrat-Black'),
         url('${montserrat900eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${montserrat900woff2}') format('woff2'), /* Super Modern Browsers */
         url('${montserrat900woff}') format('woff'), /* Modern Browsers */
         url('${montserrat900ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* open-sans-300 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: url('${opensans300eot}'); /* IE9 Compat Modes */
    src: local('Open Sans Light'), local('OpenSans-Light'),
         url('${opensans300eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${opensans300woff2}') format('woff2'), /* Super Modern Browsers */
         url('${opensans300woff}') format('woff'), /* Modern Browsers */
         url('${opensans300ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* open-sans-italic - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: url('${opensans400ieot}'); /* IE9 Compat Modes */
    src: local('Open Sans Italic'), local('OpenSans-Italic'),
         url('${opensans400ieot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${opensans400iwoff2}') format('woff2'), /* Super Modern Browsers */
         url('${opensans400iwoff}') format('woff'), /* Modern Browsers */
         url('${opensans400ittf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('${opensans400eot}'); /* IE9 Compat Modes */
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
         url('${opensans400eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${opensans400woff2}') format('woff2'), /* Super Modern Browsers */
         url('${opensans400woff}') format('woff'), /* Modern Browsers */
         url('${opensans400ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* open-sans-600 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url('${opensans600eot}'); /* IE9 Compat Modes */
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
         url('${opensans600eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${opensans600woff2}') format('woff2'), /* Super Modern Browsers */
         url('${opensans600woff}') format('woff'), /* Modern Browsers */
         url('${opensans600ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url('${opensans700eot}'); /* IE9 Compat Modes */
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
         url('${opensans700eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${opensans700woff2}') format('woff2'), /* Super Modern Browsers */
         url('${opensans700woff}') format('woff'), /* Modern Browsers */
         url('${opensans700ttf}') format('truetype'); /* Safari, Android, iOS */
  }
  /* open-sans-800 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src: url('${opensans800eot}'); /* IE9 Compat Modes */
    src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
         url('${opensans800eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('${opensans800woff2}') format('woff2'), /* Super Modern Browsers */
         url('${opensans800woff}') format('woff'), /* Modern Browsers */
         url('${opensans800ttf}') format('truetype'); /* Safari, Android, iOS */
  }
`;

const theme = {
  backofficePrimary: "#042c54",
  primary: "rgb(16, 128, 240)",
  darkPrimary: "rgb(12, 102, 192)",
  darkerPrimary: "rgb(8, 64, 120)",
  lightPrimary: "rgb(234, 243, 253)",
  mediumPrimary: "rgb(166,205,249)",
  ultralightPrimary: "rgb(245, 250, 255)",
  gigalightPrimary: "rgb(249, 252, 255)",
  secondary: "#f0ad4e",
  lightGrey: "#eaeaea",
  lightGreyHover: "#cccccc",
  lightGreyBorder: "#bbbbbb",
  lightGreyBorderHover: "#909090",
  grey: "#64666b",
  darkGrey: "#646464",
  darkerGrey: "#424242",
  black: "#000000",
  white: "#FFFFFF",
  fadedWhite: "#e3e3e3",
  backgroundBottom: "#e6e9f0",
  backgroundTop: "#eef1f5",
  containerBorder: "#efefef",
  containerShadow: "#32325d",
  green: "#57DA92",
  red: "#DB2626",
};

export default theme;
