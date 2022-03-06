import { createGlobalStyle } from "styled-components"
import { colors } from "@/styles/colors";

export const StyleGlobal = createGlobalStyle`
    * {
        font-family: 'Roboto, sans-serif';
        font-size:  14px;
        padding: 0;
        margin: 0;
        box-sizing:  border-box;
        background-color: ${colors.default} ;
    }
    h1 {
        background-color: transparent;
    }
    small {
        background-color: transparent;
    }
`;