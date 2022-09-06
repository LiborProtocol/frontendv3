import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { WIDTH, COLORS, FONT } from "./constants";

const {
    neutral: { darkDesaturatedBlue, darkBlue, VeryDarkBlue },
} = COLORS;
export const GlobalStyles = createGlobalStyle`
    ${normalize}
    html {
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@1,700&display=swap');
        
        font-size: ${FONT.size};
        font-family: ${FONT.Family}, sans-serif;
        width: 100%;
        height: 100vh;

        --width-mobile: ${WIDTH.mobile};
        --width-desktop: ${WIDTH.desktop};

        --color-grayish-blue: ${COLORS.primary.grayishBlue};
        --color-soft-red:${COLORS.primary.softRed};

        --color-white: ${COLORS.neutral.white};
        --color-dark-desaturated-blue:${COLORS.neutral.darkDesaturatedBlue};
        --color-very-dark-blue:${COLORS.neutral.VeryDarkBlue};
        
        .Ido {
            background: rgb(25,26,36);
            background: linear-gradient(180deg, ${VeryDarkBlue} 0%, ${darkBlue} 50%, ${darkDesaturatedBlue} 100%);
            height: 100vh;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    

`; 
