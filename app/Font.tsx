"use client"

import {Global} from "@emotion/react";

const Font = () => (
    <Global styles={`
        @font-face {
            font-family: 'pretendard';
            font-style: black;
            font-weight: 900;
            font-display: swap;
            src: url('/fonts/Pretendard-Black.otf') format('otf')
        }
        @font-face {
            font-family: 'pretendard';
            font-style: extrabold;
            font-weight: 800;
            font-display: swap;
            src: url('/fonts/Pretendard-ExtraBold.otf') format('otf')
        }
        @font-face {
            font-family: 'pretendard';
            font-style: bold;
            font-weight: 700;
            font-display: swap;
            src: url('/fonts/Pretendard-Bold.otf') format('otf')
        }
        @font-face {
            font-family: 'pretendard';
            font-style: semibold;
            font-weight: 600;
            font-display: swap;
            src: url('/fonts/Pretendard-SemiBold.otf') format('otf')
        }
        @font-face {
            font-family: 'pretendard';
            font-style: medium;
            font-weight: 500;
            font-display: swap;
            src: url('/fonts/Pretendard-Medium.otf') format('otf')
        }
        @font-face {
            font-family: 'pretendard';
            font-style: regular;
            font-weight: 400;
            font-display: swap;
            src: url('/fonts/Pretendard-Regular.otf') format('otf')
        }
        @font-face {
            font-family: 'pretendard';
            font-style: light;
            font-weight: 300;
            font-display: swap;
            src: url('/fonts/Pretendard-Light.otf') format('otf')
        }
        @font-face {
            font-family: 'pretendard';
            font-style: extralight;
            font-weight: 200;
            font-display: swap;
            src: url('/fonts/Pretendard-ExtraLight.otf') format('otf')
        }
        @font-face {
            font-family: 'pretendard';
            font-style: thin;
            font-weight: 100;
            font-display: swap;
            src: url('/fonts/Pretendard-Thin.otf') format('otf')
        }
    `} />
)

export default Font;