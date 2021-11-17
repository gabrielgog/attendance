import styled from "styled-components";
import {View, Text} from "react-native"

// colors

export const Colors = {
    primary: "#ffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444"
},

// export const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const styledContainer = styled.view`
        flex: 1;
        padding: 5px;
        padding-top: $(StatusBarHeight: + 10)px;
        background-color: ${primary}
`


export const InnerContainer = styled.view`
flex: 1;
width: 100%;
align-items: center;

`

export const PageTitle = styled.Text`
font-size: 30px;
text-align: center;
font-weight: bold;
color: ${brand}
padding:10px;

`
