// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { useWindowSize } from './useWindowSize';

// export default function Orb() {
//     const { width, height } = useWindowSize();

//     const moveOrb = keyframes`
//         0% {
//             transform: translate(0, 0);
//             background-color: #80D4FF; /* Start color */
//         }
//         50% {
//             transform: translate(${width / 2}px, ${height / 2}px);
//             background-color: #3AA0E0; /* Middle color */
//         }
//         100% {
//             transform: translate(0, 0);
//             background-color: #80D4FF; /* End color */
//         }
//     `;

//     const OrbStyled = styled.div`
//         width: 70vh;
//         height: 70vh;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         border-radius: 50%;
//         background: #80D4FF; /* Initial color */
//         filter: blur(100px);
//         animation: ${moveOrb} 15s alternate linear infinite;
//     `;

//     return <OrbStyled />;
// }
