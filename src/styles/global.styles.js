import { createGlobalStyle } from "styled-components";

import TrendSans from "../fonts/Trend_Sans.ttf";

export default createGlobalStyle`
    
`;

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'TrendSans';
        src: url(${TrendSans}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Helvetica', 'Arial', sans-serif;
    }
    a {
        text-decoration:none;
    }
    ul{
        list-style:none;
    }
    .trend-sans{
        font-family:'TrendSans';
    }
`;
