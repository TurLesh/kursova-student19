import React, { useState } from 'react';
import './NoiseStyle.css';

const Noise = () => {
    //get matrix data from localstorage
    const getMatrixData = () => {
        //matrix rows
        const matrix1Str = localStorage.getItem('matrix1Arr');
        const matrix2Str = localStorage.getItem('matrix2Arr');
        const matrix3Str = localStorage.getItem('matrix3Arr');
        const matrix4Str = localStorage.getItem('matrix4Arr');
        const matrix5Str = localStorage.getItem('matrix5Arr');
        const matrix6Str = localStorage.getItem('matrix6Arr');
        const matrix7Str = localStorage.getItem('matrix7Arr');
        const matrix8Str = localStorage.getItem('matrix8Arr');
        const matrix9Str = localStorage.getItem('matrix9Arr');

        //horizontal check results
        const horizontalResultRow1Str = localStorage.getItem('horizontalResultRow1');
        const horizontalResultRow2Str = localStorage.getItem('horizontalResultRow2');
        const horizontalResultRow3Str = localStorage.getItem('horizontalResultRow3');
        const horizontalResultRow4Str = localStorage.getItem('horizontalResultRow4');
        const horizontalResultRow5Str = localStorage.getItem('horizontalResultRow5');
        const horizontalResultRow6Str = localStorage.getItem('horizontalResultRow6');
        const horizontalResultRow7Str = localStorage.getItem('horizontalResultRow7');
        const horizontalResultRow8Str = localStorage.getItem('horizontalResultRow8');
        const horizontalResultRow9Str = localStorage.getItem('horizontalResultRow9');

        //vertical check results
        const verticalResultRow10Str = localStorage.getItem('verticalResultRow10');
        const verticalResultRow11Str = localStorage.getItem('verticalResultRow11');
        const verticalResultRow12Str = localStorage.getItem('verticalResultRow12');
        const verticalResultRow13Str = localStorage.getItem('verticalResultRow13');

        if (
            matrix1Str !== null &&
            matrix2Str !== null &&
            matrix3Str !== null &&
            matrix4Str !== null &&
            matrix5Str !== null &&
            matrix6Str !== null &&
            matrix7Str !== null &&
            matrix8Str !== null &&
            matrix9Str !== null &&
            horizontalResultRow1Str !== null &&
            horizontalResultRow2Str !== null &&
            horizontalResultRow3Str !== null &&
            horizontalResultRow4Str !== null &&
            horizontalResultRow5Str !== null &&
            horizontalResultRow6Str !== null &&
            horizontalResultRow7Str !== null &&
            horizontalResultRow8Str !== null &&
            horizontalResultRow9Str !== null &&
            verticalResultRow10Str !== null &&
            verticalResultRow11Str !== null &&
            verticalResultRow12Str !== null &&
            verticalResultRow13Str !== null
        ) {
            //convert matrix rows to array of digits
            const matrixRow1 = Array.from(matrix1Str.replaceAll(',', ''), Number);
            const matrixRow2 = Array.from(matrix2Str.replaceAll(',', ''), Number);
            const matrixRow3 = Array.from(matrix3Str.replaceAll(',', ''), Number);
            const matrixRow4 = Array.from(matrix4Str.replaceAll(',', ''), Number);
            const matrixRow5 = Array.from(matrix5Str.replaceAll(',', ''), Number);
            const matrixRow6 = Array.from(matrix6Str.replaceAll(',', ''), Number);
            const matrixRow7 = Array.from(matrix7Str.replaceAll(',', ''), Number);
            const matrixRow8 = Array.from(matrix8Str.replaceAll(',', ''), Number);
            const matrixRow9 = Array.from(matrix9Str.replaceAll(',', ''), Number);

            //convert hroizontal checks rows to array of digits
            const horizontalResultRow1 = Array.from(horizontalResultRow1Str.replaceAll(',', ''), Number);
            const horizontalResultRow2 = Array.from(horizontalResultRow2Str.replaceAll(',', ''), Number);
            const horizontalResultRow3 = Array.from(horizontalResultRow3Str.replaceAll(',', ''), Number);
            const horizontalResultRow4 = Array.from(horizontalResultRow4Str.replaceAll(',', ''), Number);
            const horizontalResultRow5 = Array.from(horizontalResultRow5Str.replaceAll(',', ''), Number);
            const horizontalResultRow6 = Array.from(horizontalResultRow6Str.replaceAll(',', ''), Number);
            const horizontalResultRow7 = Array.from(horizontalResultRow7Str.replaceAll(',', ''), Number);
            const horizontalResultRow8 = Array.from(horizontalResultRow8Str.replaceAll(',', ''), Number);
            const horizontalResultRow9 = Array.from(horizontalResultRow9Str.replaceAll(',', ''), Number);

            //convert vertical checks rows to array of digits
            const verticalResultRow10 = Array.from(verticalResultRow10Str.replaceAll(',', ''), Number);
            const verticalResultRow11 = Array.from(verticalResultRow11Str.replaceAll(',', ''), Number);
            const verticalResultRow12 = Array.from(verticalResultRow12Str.replaceAll(',', ''), Number);
            const verticalResultRow13 = Array.from(verticalResultRow13Str.replaceAll(',', ''), Number);

            const matrix1x1 = matrixRow1[0];
            const matrix1x2 = matrixRow1[1];
            const matrix1x3 = matrixRow1[2];
            const matrix1x4 = matrixRow1[3];
            const matrix1x5 = matrixRow1[4];
            const matrix1x6 = matrixRow1[5];
            const matrix1x7 = matrixRow1[6];
            const matrix1x8 = matrixRow1[7];
            const matrix1x9 = matrixRow1[8];
            const matrix1x10 = matrixRow1[9];
            const matrix1x11 = matrixRow1[10];
            const matrix1x12 = matrixRow1[11];
            const matrix1x13 = matrixRow1[12];
            const matrix1x14 = matrixRow1[13];
            const matrix1x15 = matrixRow1[14];

            const matrix2x1 = matrixRow2[0];
            const matrix2x2 = matrixRow2[1];
            const matrix2x3 = matrixRow2[2];
            const matrix2x4 = matrixRow2[3];
            const matrix2x5 = matrixRow2[4];
            const matrix2x6 = matrixRow2[5];
            const matrix2x7 = matrixRow2[6];
            const matrix2x8 = matrixRow2[7];
            const matrix2x9 = matrixRow2[8];
            const matrix2x10 = matrixRow2[9];
            const matrix2x11 = matrixRow2[10];
            const matrix2x12 = matrixRow2[11];
            const matrix2x13 = matrixRow2[12];
            const matrix2x14 = matrixRow2[13];
            const matrix2x15 = matrixRow2[14];

            const matrix3x1 = matrixRow3[0];
            const matrix3x2 = matrixRow3[1];
            const matrix3x3 = matrixRow3[2];
            const matrix3x4 = matrixRow3[3];
            const matrix3x5 = matrixRow3[4];
            const matrix3x6 = matrixRow3[5];
            const matrix3x7 = matrixRow3[6];
            const matrix3x8 = matrixRow3[7];
            const matrix3x9 = matrixRow3[8];
            const matrix3x10 = matrixRow3[9];
            const matrix3x11 = matrixRow3[10];
            const matrix3x12 = matrixRow3[11];
            const matrix3x13 = matrixRow3[12];
            const matrix3x14 = matrixRow3[13];
            const matrix3x15 = matrixRow3[14];

            const matrix4x1 = matrixRow4[0];
            const matrix4x2 = matrixRow4[1];
            const matrix4x3 = matrixRow4[2];
            const matrix4x4 = matrixRow4[3];
            const matrix4x5 = matrixRow4[4];
            const matrix4x6 = matrixRow4[5];
            const matrix4x7 = matrixRow4[6];
            const matrix4x8 = matrixRow4[7];
            const matrix4x9 = matrixRow4[8];
            const matrix4x10 = matrixRow4[9];
            const matrix4x11 = matrixRow4[10];
            const matrix4x12 = matrixRow4[11];
            const matrix4x13 = matrixRow4[12];
            const matrix4x14 = matrixRow4[13];
            const matrix4x15 = matrixRow4[14];

            const matrix5x1 = matrixRow5[0];
            const matrix5x2 = matrixRow5[1];
            const matrix5x3 = matrixRow5[2];
            const matrix5x4 = matrixRow5[3];
            const matrix5x5 = matrixRow5[4];
            const matrix5x6 = matrixRow5[5];
            const matrix5x7 = matrixRow5[6];
            const matrix5x8 = matrixRow5[7];
            const matrix5x9 = matrixRow5[8];
            const matrix5x10 = matrixRow5[9];
            const matrix5x11 = matrixRow5[10];
            const matrix5x12 = matrixRow5[11];
            const matrix5x13 = matrixRow5[12];
            const matrix5x14 = matrixRow5[13];
            const matrix5x15 = matrixRow5[14];

            const matrix6x1 = matrixRow6[0];
            const matrix6x2 = matrixRow6[1];
            const matrix6x3 = matrixRow6[2];
            const matrix6x4 = matrixRow6[3];
            const matrix6x5 = matrixRow6[4];
            const matrix6x6 = matrixRow6[5];
            const matrix6x7 = matrixRow6[6];
            const matrix6x8 = matrixRow6[7];
            const matrix6x9 = matrixRow6[8];
            const matrix6x10 = matrixRow6[9];
            const matrix6x11 = matrixRow6[10];
            const matrix6x12 = matrixRow6[11];
            const matrix6x13 = matrixRow6[12];
            const matrix6x14 = matrixRow6[13];
            const matrix6x15 = matrixRow6[14];

            const matrix7x1 = matrixRow7[0];
            const matrix7x2 = matrixRow7[1];
            const matrix7x3 = matrixRow7[2];
            const matrix7x4 = matrixRow7[3];
            const matrix7x5 = matrixRow7[4];
            const matrix7x6 = matrixRow7[5];
            const matrix7x7 = matrixRow7[6];
            const matrix7x8 = matrixRow7[7];
            const matrix7x9 = matrixRow7[8];
            const matrix7x10 = matrixRow7[9];
            const matrix7x11 = matrixRow7[10];
            const matrix7x12 = matrixRow7[11];
            const matrix7x13 = matrixRow7[12];
            const matrix7x14 = matrixRow7[13];
            const matrix7x15 = matrixRow7[14];

            const matrix8x1 = matrixRow8[0];
            const matrix8x2 = matrixRow8[1];
            const matrix8x3 = matrixRow8[2];
            const matrix8x4 = matrixRow8[3];
            const matrix8x5 = matrixRow8[4];
            const matrix8x6 = matrixRow8[5];
            const matrix8x7 = matrixRow8[6];
            const matrix8x8 = matrixRow8[7];
            const matrix8x9 = matrixRow8[8];
            const matrix8x10 = matrixRow8[9];
            const matrix8x11 = matrixRow8[10];
            const matrix8x12 = matrixRow8[11];
            const matrix8x13 = matrixRow8[12];
            const matrix8x14 = matrixRow8[13];
            const matrix8x15 = matrixRow8[14];

            const matrix9x1 = matrixRow9[0];
            const matrix9x2 = matrixRow9[1];
            const matrix9x3 = matrixRow9[2];
            const matrix9x4 = matrixRow9[3];
            const matrix9x5 = matrixRow9[4];
            const matrix9x6 = matrixRow9[5];
            const matrix9x7 = matrixRow9[6];
            const matrix9x8 = matrixRow9[7];
            const matrix9x9 = matrixRow9[8];
            const matrix9x10 = matrixRow9[9];
            const matrix9x11 = matrixRow9[10];
            const matrix9x12 = matrixRow9[11];
            const matrix9x13 = matrixRow9[12];
            const matrix9x14 = matrixRow9[13];
            const matrix9x15 = matrixRow9[14];

            const horizontalResult1x16 = horizontalResultRow1[0];
            const horizontalResult1x17 = horizontalResultRow1[1];
            const horizontalResult1x18 = horizontalResultRow1[2];
            const horizontalResult1x19 = horizontalResultRow1[3];
            const horizontalResult1x20 = horizontalResultRow1[4];

            const horizontalResult2x16 = horizontalResultRow2[0];
            const horizontalResult2x17 = horizontalResultRow2[1];
            const horizontalResult2x18 = horizontalResultRow2[2];
            const horizontalResult2x19 = horizontalResultRow2[3];
            const horizontalResult2x20 = horizontalResultRow2[4];

            const horizontalResult3x16 = horizontalResultRow3[0];
            const horizontalResult3x17 = horizontalResultRow3[1];
            const horizontalResult3x18 = horizontalResultRow3[2];
            const horizontalResult3x19 = horizontalResultRow3[3];
            const horizontalResult3x20 = horizontalResultRow3[4];

            const horizontalResult4x16 = horizontalResultRow4[0];
            const horizontalResult4x17 = horizontalResultRow4[1];
            const horizontalResult4x18 = horizontalResultRow4[2];
            const horizontalResult4x19 = horizontalResultRow4[3];
            const horizontalResult4x20 = horizontalResultRow4[4];

            const horizontalResult5x16 = horizontalResultRow5[0];
            const horizontalResult5x17 = horizontalResultRow5[1];
            const horizontalResult5x18 = horizontalResultRow5[2];
            const horizontalResult5x19 = horizontalResultRow5[3];
            const horizontalResult5x20 = horizontalResultRow5[4];

            const horizontalResult6x16 = horizontalResultRow6[0];
            const horizontalResult6x17 = horizontalResultRow6[1];
            const horizontalResult6x18 = horizontalResultRow6[2];
            const horizontalResult6x19 = horizontalResultRow6[3];
            const horizontalResult6x20 = horizontalResultRow6[4];

            const horizontalResult7x16 = horizontalResultRow7[0];
            const horizontalResult7x17 = horizontalResultRow7[1];
            const horizontalResult7x18 = horizontalResultRow7[2];
            const horizontalResult7x19 = horizontalResultRow7[3];
            const horizontalResult7x20 = horizontalResultRow7[4];

            const horizontalResult8x16 = horizontalResultRow8[0];
            const horizontalResult8x17 = horizontalResultRow8[1];
            const horizontalResult8x18 = horizontalResultRow8[2];
            const horizontalResult8x19 = horizontalResultRow8[3];
            const horizontalResult8x20 = horizontalResultRow8[4];

            const horizontalResult9x16 = horizontalResultRow9[0];
            const horizontalResult9x17 = horizontalResultRow9[1];
            const horizontalResult9x18 = horizontalResultRow9[2];
            const horizontalResult9x19 = horizontalResultRow9[3];
            const horizontalResult9x20 = horizontalResultRow9[4];

            const verticalResultRow10x1 = verticalResultRow10[0];
            const verticalResultRow10x2 = verticalResultRow10[1];
            const verticalResultRow10x3 = verticalResultRow10[2];
            const verticalResultRow10x4 = verticalResultRow10[3];
            const verticalResultRow10x5 = verticalResultRow10[4];
            const verticalResultRow10x6 = verticalResultRow10[5];
            const verticalResultRow10x7 = verticalResultRow10[6];
            const verticalResultRow10x8 = verticalResultRow10[7];
            const verticalResultRow10x9 = verticalResultRow10[8];
            const verticalResultRow10x10 = verticalResultRow10[9];
            const verticalResultRow10x11 = verticalResultRow10[10];
            const verticalResultRow10x12 = verticalResultRow10[11];
            const verticalResultRow10x13 = verticalResultRow10[12];
            const verticalResultRow10x14 = verticalResultRow10[13];
            const verticalResultRow10x15 = verticalResultRow10[14];
            const verticalResultRow10x16 = verticalResultRow10[15];
            const verticalResultRow10x17 = verticalResultRow10[16];
            const verticalResultRow10x18 = verticalResultRow10[17];
            const verticalResultRow10x19 = verticalResultRow10[18];
            const verticalResultRow10x20 = verticalResultRow10[19];

            const verticalResultRow11x1 = verticalResultRow11[0];
            const verticalResultRow11x2 = verticalResultRow11[1];
            const verticalResultRow11x3 = verticalResultRow11[2];
            const verticalResultRow11x4 = verticalResultRow11[3];
            const verticalResultRow11x5 = verticalResultRow11[4];
            const verticalResultRow11x6 = verticalResultRow11[5];
            const verticalResultRow11x7 = verticalResultRow11[6];
            const verticalResultRow11x8 = verticalResultRow11[7];
            const verticalResultRow11x9 = verticalResultRow11[8];
            const verticalResultRow11x10 = verticalResultRow11[9];
            const verticalResultRow11x11 = verticalResultRow11[10];
            const verticalResultRow11x12 = verticalResultRow11[11];
            const verticalResultRow11x13 = verticalResultRow11[12];
            const verticalResultRow11x14 = verticalResultRow11[13];
            const verticalResultRow11x15 = verticalResultRow11[14];
            const verticalResultRow11x16 = verticalResultRow11[15];
            const verticalResultRow11x17 = verticalResultRow11[16];
            const verticalResultRow11x18 = verticalResultRow11[17];
            const verticalResultRow11x19 = verticalResultRow11[18];
            const verticalResultRow11x20 = verticalResultRow11[19];

            const verticalResultRow12x1 = verticalResultRow12[0];
            const verticalResultRow12x2 = verticalResultRow12[1];
            const verticalResultRow12x3 = verticalResultRow12[2];
            const verticalResultRow12x4 = verticalResultRow12[3];
            const verticalResultRow12x5 = verticalResultRow12[4];
            const verticalResultRow12x6 = verticalResultRow12[5];
            const verticalResultRow12x7 = verticalResultRow12[6];
            const verticalResultRow12x8 = verticalResultRow12[7];
            const verticalResultRow12x9 = verticalResultRow12[8];
            const verticalResultRow12x10 = verticalResultRow12[9];
            const verticalResultRow12x11 = verticalResultRow12[10];
            const verticalResultRow12x12 = verticalResultRow12[11];
            const verticalResultRow12x13 = verticalResultRow12[12];
            const verticalResultRow12x14 = verticalResultRow12[13];
            const verticalResultRow12x15 = verticalResultRow12[14];
            const verticalResultRow12x16 = verticalResultRow12[15];
            const verticalResultRow12x17 = verticalResultRow12[16];
            const verticalResultRow12x18 = verticalResultRow12[17];
            const verticalResultRow12x19 = verticalResultRow12[18];
            const verticalResultRow12x20 = verticalResultRow12[19];

            const verticalResultRow13x1 = verticalResultRow13[0];
            const verticalResultRow13x2 = verticalResultRow13[1];
            const verticalResultRow13x3 = verticalResultRow13[2];
            const verticalResultRow13x4 = verticalResultRow13[3];
            const verticalResultRow13x5 = verticalResultRow13[4];
            const verticalResultRow13x6 = verticalResultRow13[5];
            const verticalResultRow13x7 = verticalResultRow13[6];
            const verticalResultRow13x8 = verticalResultRow13[7];
            const verticalResultRow13x9 = verticalResultRow13[8];
            const verticalResultRow13x10 = verticalResultRow13[9];
            const verticalResultRow13x11 = verticalResultRow13[10];
            const verticalResultRow13x12 = verticalResultRow13[11];
            const verticalResultRow13x13 = verticalResultRow13[12];
            const verticalResultRow13x14 = verticalResultRow13[13];
            const verticalResultRow13x15 = verticalResultRow13[14];
            const verticalResultRow13x16 = verticalResultRow13[15];
            const verticalResultRow13x17 = verticalResultRow13[16];
            const verticalResultRow13x18 = verticalResultRow13[17];
            const verticalResultRow13x19 = verticalResultRow13[18];
            const verticalResultRow13x20 = verticalResultRow13[19];

            const matrixColumns = {
                column1Arr: [
                    matrix1x1,
                    matrix2x1,
                    matrix3x1,
                    matrix4x1,
                    matrix5x1,
                    matrix6x1,
                    matrix7x1,
                    matrix8x1,
                    matrix9x1,
                    verticalResultRow10x1,
                    verticalResultRow11x1,
                    verticalResultRow12x1,
                    verticalResultRow13x1
                ],
                column2Arr: [
                    matrix1x2,
                    matrix2x2,
                    matrix3x2,
                    matrix4x2,
                    matrix5x2,
                    matrix6x2,
                    matrix7x2,
                    matrix8x2,
                    matrix9x2,
                    verticalResultRow10x2,
                    verticalResultRow11x2,
                    verticalResultRow12x2,
                    verticalResultRow13x2
                ],
                column3Arr: [
                    matrix1x3,
                    matrix2x3,
                    matrix3x3,
                    matrix4x3,
                    matrix5x3,
                    matrix6x3,
                    matrix7x3,
                    matrix8x3,
                    matrix9x3,
                    verticalResultRow10x3,
                    verticalResultRow11x3,
                    verticalResultRow12x3,
                    verticalResultRow13x3
                ],
                column4Arr: [
                    matrix1x4,
                    matrix2x4,
                    matrix3x4,
                    matrix4x4,
                    matrix5x4,
                    matrix6x4,
                    matrix7x4,
                    matrix8x4,
                    matrix9x4,
                    verticalResultRow10x4,
                    verticalResultRow11x4,
                    verticalResultRow12x4,
                    verticalResultRow13x4
                ],
                column5Arr: [
                    matrix1x5,
                    matrix2x5,
                    matrix3x5,
                    matrix4x5,
                    matrix5x5,
                    matrix6x5,
                    matrix7x5,
                    matrix8x5,
                    matrix9x5,
                    verticalResultRow10x5,
                    verticalResultRow11x5,
                    verticalResultRow12x5,
                    verticalResultRow13x5
                ],
                column6Arr: [
                    matrix1x6,
                    matrix2x6,
                    matrix3x6,
                    matrix4x6,
                    matrix5x6,
                    matrix6x6,
                    matrix7x6,
                    matrix8x6,
                    matrix9x6,
                    verticalResultRow10x6,
                    verticalResultRow11x6,
                    verticalResultRow12x6,
                    verticalResultRow13x6
                ],
                column7Arr: [
                    matrix1x7,
                    matrix2x7,
                    matrix3x7,
                    matrix4x7,
                    matrix5x7,
                    matrix6x7,
                    matrix7x7,
                    matrix8x7,
                    matrix9x7,
                    verticalResultRow10x7,
                    verticalResultRow11x7,
                    verticalResultRow12x7,
                    verticalResultRow13x7
                ],
                column8Arr: [
                    matrix1x8,
                    matrix2x8,
                    matrix3x8,
                    matrix4x8,
                    matrix5x8,
                    matrix6x8,
                    matrix7x8,
                    matrix8x8,
                    matrix9x8,
                    verticalResultRow10x8,
                    verticalResultRow11x8,
                    verticalResultRow12x8,
                    verticalResultRow13x8
                ],
                column9Arr: [
                    matrix1x9,
                    matrix2x9,
                    matrix3x9,
                    matrix4x9,
                    matrix5x9,
                    matrix6x9,
                    matrix7x9,
                    matrix8x9,
                    matrix9x9,
                    verticalResultRow10x9,
                    verticalResultRow11x9,
                    verticalResultRow12x9,
                    verticalResultRow13x9
                ],
                column10Arr: [
                    matrix1x10,
                    matrix2x10,
                    matrix3x10,
                    matrix4x10,
                    matrix5x10,
                    matrix6x10,
                    matrix7x10,
                    matrix8x10,
                    matrix9x10,
                    verticalResultRow10x10,
                    verticalResultRow11x10,
                    verticalResultRow12x10,
                    verticalResultRow13x10
                ],
                column11Arr: [
                    matrix1x11,
                    matrix2x11,
                    matrix3x11,
                    matrix4x11,
                    matrix5x11,
                    matrix6x11,
                    matrix7x11,
                    matrix8x11,
                    matrix9x11,
                    verticalResultRow10x11,
                    verticalResultRow11x11,
                    verticalResultRow12x11,
                    verticalResultRow13x11
                ],
                column12Arr: [
                    matrix1x12,
                    matrix2x12,
                    matrix3x12,
                    matrix4x12,
                    matrix5x12,
                    matrix6x12,
                    matrix7x12,
                    matrix8x12,
                    matrix9x12,
                    verticalResultRow10x12,
                    verticalResultRow11x12,
                    verticalResultRow12x12,
                    verticalResultRow13x12
                ],
                column13Arr: [
                    matrix1x13,
                    matrix2x13,
                    matrix3x13,
                    matrix4x13,
                    matrix5x13,
                    matrix6x13,
                    matrix7x13,
                    matrix8x13,
                    matrix9x13,
                    verticalResultRow10x13,
                    verticalResultRow11x13,
                    verticalResultRow12x13,
                    verticalResultRow13x13
                ],
                column14Arr: [
                    matrix1x14,
                    matrix2x14,
                    matrix3x14,
                    matrix4x14,
                    matrix5x14,
                    matrix6x14,
                    matrix7x14,
                    matrix8x14,
                    matrix9x14,
                    verticalResultRow10x14,
                    verticalResultRow11x14,
                    verticalResultRow12x14,
                    verticalResultRow13x14
                ],
                column15Arr: [
                    matrix1x15,
                    matrix2x15,
                    matrix3x15,
                    matrix4x15,
                    matrix5x15,
                    matrix6x15,
                    matrix7x15,
                    matrix8x15,
                    matrix9x15,
                    verticalResultRow10x15,
                    verticalResultRow11x15,
                    verticalResultRow12x15,
                    verticalResultRow13x15
                ],
                column16Arr: [
                    horizontalResult1x16,
                    horizontalResult2x16,
                    horizontalResult3x16,
                    horizontalResult4x16,
                    horizontalResult5x16,
                    horizontalResult6x16,
                    horizontalResult7x16,
                    horizontalResult8x16,
                    horizontalResult9x16,
                    verticalResultRow10x16,
                    verticalResultRow11x16,
                    verticalResultRow12x16,
                    verticalResultRow13x16
                ],
                column17Arr: [
                    horizontalResult1x17,
                    horizontalResult2x17,
                    horizontalResult3x17,
                    horizontalResult4x17,
                    horizontalResult5x17,
                    horizontalResult6x17,
                    horizontalResult7x17,
                    horizontalResult8x17,
                    horizontalResult9x17,
                    verticalResultRow10x17,
                    verticalResultRow11x17,
                    verticalResultRow12x17,
                    verticalResultRow13x17
                ],
                column18Arr: [
                    horizontalResult1x18,
                    horizontalResult2x18,
                    horizontalResult3x18,
                    horizontalResult4x18,
                    horizontalResult5x18,
                    horizontalResult6x18,
                    horizontalResult7x18,
                    horizontalResult8x18,
                    horizontalResult9x18,
                    verticalResultRow10x18,
                    verticalResultRow11x18,
                    verticalResultRow12x18,
                    verticalResultRow13x18
                ],
                column19Arr: [
                    horizontalResult1x19,
                    horizontalResult2x19,
                    horizontalResult3x19,
                    horizontalResult4x19,
                    horizontalResult5x19,
                    horizontalResult6x19,
                    horizontalResult7x19,
                    horizontalResult8x19,
                    horizontalResult9x19,
                    verticalResultRow10x19,
                    verticalResultRow11x19,
                    verticalResultRow12x19,
                    verticalResultRow13x19
                ],
                column20Arr: [
                    horizontalResult1x20,
                    horizontalResult2x20,
                    horizontalResult3x20,
                    horizontalResult4x20,
                    horizontalResult5x20,
                    horizontalResult6x20,
                    horizontalResult7x20,
                    horizontalResult8x20,
                    horizontalResult9x20,
                    verticalResultRow10x20,
                    verticalResultRow11x20,
                    verticalResultRow12x20,
                    verticalResultRow13x20
                ]
            };
            return matrixColumns;
        }
    };

    const [random1x1, setRandom1x1] = useState<number>(0);
    const [random1x2, setRandom1x2] = useState<number>(0);
    const [random1x3, setRandom1x3] = useState<number>(0);
    const [random1x4, setRandom1x4] = useState<number>(0);
    const [random1x5, setRandom1x5] = useState<number>(0);
    const [random1x6, setRandom1x6] = useState<number>(0);
    const [random1x7, setRandom1x7] = useState<number>(0);
    const [random1x8, setRandom1x8] = useState<number>(0);
    const [random1x9, setRandom1x9] = useState<number>(0);
    const [random1x10, setRandom1x10] = useState<number>(0);
    const [random1x11, setRandom1x11] = useState<number>(0);
    const [random1x12, setRandom1x12] = useState<number>(0);
    const [random1x13, setRandom1x13] = useState<number>(0);
    const [random1x14, setRandom1x14] = useState<number>(0);
    const [random1x15, setRandom1x15] = useState<number>(0);
    const [random1x16, setRandom1x16] = useState<number>(0);
    const [random1x17, setRandom1x17] = useState<number>(0);
    const [random1x18, setRandom1x18] = useState<number>(0);
    const [random1x19, setRandom1x19] = useState<number>(0);
    const [random1x20, setRandom1x20] = useState<number>(0);

    const [random2x1, setRandom2x1] = useState<number>(0);
    const [random2x2, setRandom2x2] = useState<number>(0);
    const [random2x3, setRandom2x3] = useState<number>(0);
    const [random2x4, setRandom2x4] = useState<number>(0);
    const [random2x5, setRandom2x5] = useState<number>(0);
    const [random2x6, setRandom2x6] = useState<number>(0);
    const [random2x7, setRandom2x7] = useState<number>(0);
    const [random2x8, setRandom2x8] = useState<number>(0);
    const [random2x9, setRandom2x9] = useState<number>(0);
    const [random2x10, setRandom2x10] = useState<number>(0);
    const [random2x11, setRandom2x11] = useState<number>(0);
    const [random2x12, setRandom2x12] = useState<number>(0);
    const [random2x13, setRandom2x13] = useState<number>(0);
    const [random2x14, setRandom2x14] = useState<number>(0);
    const [random2x15, setRandom2x15] = useState<number>(0);
    const [random2x16, setRandom2x16] = useState<number>(0);
    const [random2x17, setRandom2x17] = useState<number>(0);
    const [random2x18, setRandom2x18] = useState<number>(0);
    const [random2x19, setRandom2x19] = useState<number>(0);
    const [random2x20, setRandom2x20] = useState<number>(0);

    const [random3x1, setRandom3x1] = useState<number>(0);
    const [random3x2, setRandom3x2] = useState<number>(0);
    const [random3x3, setRandom3x3] = useState<number>(0);
    const [random3x4, setRandom3x4] = useState<number>(0);
    const [random3x5, setRandom3x5] = useState<number>(0);
    const [random3x6, setRandom3x6] = useState<number>(0);
    const [random3x7, setRandom3x7] = useState<number>(0);
    const [random3x8, setRandom3x8] = useState<number>(0);
    const [random3x9, setRandom3x9] = useState<number>(0);
    const [random3x10, setRandom3x10] = useState<number>(0);
    const [random3x11, setRandom3x11] = useState<number>(0);
    const [random3x12, setRandom3x12] = useState<number>(0);
    const [random3x13, setRandom3x13] = useState<number>(0);
    const [random3x14, setRandom3x14] = useState<number>(0);
    const [random3x15, setRandom3x15] = useState<number>(0);
    const [random3x16, setRandom3x16] = useState<number>(0);
    const [random3x17, setRandom3x17] = useState<number>(0);
    const [random3x18, setRandom3x18] = useState<number>(0);
    const [random3x19, setRandom3x19] = useState<number>(0);
    const [random3x20, setRandom3x20] = useState<number>(0);

    const [random4x1, setRandom4x1] = useState<number>(0);
    const [random4x2, setRandom4x2] = useState<number>(0);
    const [random4x3, setRandom4x3] = useState<number>(0);
    const [random4x4, setRandom4x4] = useState<number>(0);
    const [random4x5, setRandom4x5] = useState<number>(0);
    const [random4x6, setRandom4x6] = useState<number>(0);
    const [random4x7, setRandom4x7] = useState<number>(0);
    const [random4x8, setRandom4x8] = useState<number>(0);
    const [random4x9, setRandom4x9] = useState<number>(0);
    const [random4x10, setRandom4x10] = useState<number>(0);
    const [random4x11, setRandom4x11] = useState<number>(0);
    const [random4x12, setRandom4x12] = useState<number>(0);
    const [random4x13, setRandom4x13] = useState<number>(0);
    const [random4x14, setRandom4x14] = useState<number>(0);
    const [random4x15, setRandom4x15] = useState<number>(0);
    const [random4x16, setRandom4x16] = useState<number>(0);
    const [random4x17, setRandom4x17] = useState<number>(0);
    const [random4x18, setRandom4x18] = useState<number>(0);
    const [random4x19, setRandom4x19] = useState<number>(0);
    const [random4x20, setRandom4x20] = useState<number>(0);

    const [random5x1, setRandom5x1] = useState<number>(0);
    const [random5x2, setRandom5x2] = useState<number>(0);
    const [random5x3, setRandom5x3] = useState<number>(0);
    const [random5x4, setRandom5x4] = useState<number>(0);
    const [random5x5, setRandom5x5] = useState<number>(0);
    const [random5x6, setRandom5x6] = useState<number>(0);
    const [random5x7, setRandom5x7] = useState<number>(0);
    const [random5x8, setRandom5x8] = useState<number>(0);
    const [random5x9, setRandom5x9] = useState<number>(0);
    const [random5x10, setRandom5x10] = useState<number>(0);
    const [random5x11, setRandom5x11] = useState<number>(0);
    const [random5x12, setRandom5x12] = useState<number>(0);
    const [random5x13, setRandom5x13] = useState<number>(0);
    const [random5x14, setRandom5x14] = useState<number>(0);
    const [random5x15, setRandom5x15] = useState<number>(0);
    const [random5x16, setRandom5x16] = useState<number>(0);
    const [random5x17, setRandom5x17] = useState<number>(0);
    const [random5x18, setRandom5x18] = useState<number>(0);
    const [random5x19, setRandom5x19] = useState<number>(0);
    const [random5x20, setRandom5x20] = useState<number>(0);

    const [random6x1, setRandom6x1] = useState<number>(0);
    const [random6x2, setRandom6x2] = useState<number>(0);
    const [random6x3, setRandom6x3] = useState<number>(0);
    const [random6x4, setRandom6x4] = useState<number>(0);
    const [random6x5, setRandom6x5] = useState<number>(0);
    const [random6x6, setRandom6x6] = useState<number>(0);
    const [random6x7, setRandom6x7] = useState<number>(0);
    const [random6x8, setRandom6x8] = useState<number>(0);
    const [random6x9, setRandom6x9] = useState<number>(0);
    const [random6x10, setRandom6x10] = useState<number>(0);
    const [random6x11, setRandom6x11] = useState<number>(0);
    const [random6x12, setRandom6x12] = useState<number>(0);
    const [random6x13, setRandom6x13] = useState<number>(0);
    const [random6x14, setRandom6x14] = useState<number>(0);
    const [random6x15, setRandom6x15] = useState<number>(0);
    const [random6x16, setRandom6x16] = useState<number>(0);
    const [random6x17, setRandom6x17] = useState<number>(0);
    const [random6x18, setRandom6x18] = useState<number>(0);
    const [random6x19, setRandom6x19] = useState<number>(0);
    const [random6x20, setRandom6x20] = useState<number>(0);

    const [random7x1, setRandom7x1] = useState<number>(0);
    const [random7x2, setRandom7x2] = useState<number>(0);
    const [random7x3, setRandom7x3] = useState<number>(0);
    const [random7x4, setRandom7x4] = useState<number>(0);
    const [random7x5, setRandom7x5] = useState<number>(0);
    const [random7x6, setRandom7x6] = useState<number>(0);
    const [random7x7, setRandom7x7] = useState<number>(0);
    const [random7x8, setRandom7x8] = useState<number>(0);
    const [random7x9, setRandom7x9] = useState<number>(0);
    const [random7x10, setRandom7x10] = useState<number>(0);
    const [random7x11, setRandom7x11] = useState<number>(0);
    const [random7x12, setRandom7x12] = useState<number>(0);
    const [random7x13, setRandom7x13] = useState<number>(0);
    const [random7x14, setRandom7x14] = useState<number>(0);
    const [random7x15, setRandom7x15] = useState<number>(0);
    const [random7x16, setRandom7x16] = useState<number>(0);
    const [random7x17, setRandom7x17] = useState<number>(0);
    const [random7x18, setRandom7x18] = useState<number>(0);
    const [random7x19, setRandom7x19] = useState<number>(0);
    const [random7x20, setRandom7x20] = useState<number>(0);

    const [random8x1, setRandom8x1] = useState<number>(0);
    const [random8x2, setRandom8x2] = useState<number>(0);
    const [random8x3, setRandom8x3] = useState<number>(0);
    const [random8x4, setRandom8x4] = useState<number>(0);
    const [random8x5, setRandom8x5] = useState<number>(0);
    const [random8x6, setRandom8x6] = useState<number>(0);
    const [random8x7, setRandom8x7] = useState<number>(0);
    const [random8x8, setRandom8x8] = useState<number>(0);
    const [random8x9, setRandom8x9] = useState<number>(0);
    const [random8x10, setRandom8x10] = useState<number>(0);
    const [random8x11, setRandom8x11] = useState<number>(0);
    const [random8x12, setRandom8x12] = useState<number>(0);
    const [random8x13, setRandom8x13] = useState<number>(0);
    const [random8x14, setRandom8x14] = useState<number>(0);
    const [random8x15, setRandom8x15] = useState<number>(0);
    const [random8x16, setRandom8x16] = useState<number>(0);
    const [random8x17, setRandom8x17] = useState<number>(0);
    const [random8x18, setRandom8x18] = useState<number>(0);
    const [random8x19, setRandom8x19] = useState<number>(0);
    const [random8x20, setRandom8x20] = useState<number>(0);

    const [random9x1, setRandom9x1] = useState<number>(0);
    const [random9x2, setRandom9x2] = useState<number>(0);
    const [random9x3, setRandom9x3] = useState<number>(0);
    const [random9x4, setRandom9x4] = useState<number>(0);
    const [random9x5, setRandom9x5] = useState<number>(0);
    const [random9x6, setRandom9x6] = useState<number>(0);
    const [random9x7, setRandom9x7] = useState<number>(0);
    const [random9x8, setRandom9x8] = useState<number>(0);
    const [random9x9, setRandom9x9] = useState<number>(0);
    const [random9x10, setRandom9x10] = useState<number>(0);
    const [random9x11, setRandom9x11] = useState<number>(0);
    const [random9x12, setRandom9x12] = useState<number>(0);
    const [random9x13, setRandom9x13] = useState<number>(0);
    const [random9x14, setRandom9x14] = useState<number>(0);
    const [random9x15, setRandom9x15] = useState<number>(0);
    const [random9x16, setRandom9x16] = useState<number>(0);
    const [random9x17, setRandom9x17] = useState<number>(0);
    const [random9x18, setRandom9x18] = useState<number>(0);
    const [random9x19, setRandom9x19] = useState<number>(0);
    const [random9x20, setRandom9x20] = useState<number>(0);

    const [random10x1, setRandom10x1] = useState<number>(0);
    const [random10x2, setRandom10x2] = useState<number>(0);
    const [random10x3, setRandom10x3] = useState<number>(0);
    const [random10x4, setRandom10x4] = useState<number>(0);
    const [random10x5, setRandom10x5] = useState<number>(0);
    const [random10x6, setRandom10x6] = useState<number>(0);
    const [random10x7, setRandom10x7] = useState<number>(0);
    const [random10x8, setRandom10x8] = useState<number>(0);
    const [random10x9, setRandom10x9] = useState<number>(0);
    const [random10x10, setRandom10x10] = useState<number>(0);
    const [random10x11, setRandom10x11] = useState<number>(0);
    const [random10x12, setRandom10x12] = useState<number>(0);
    const [random10x13, setRandom10x13] = useState<number>(0);
    const [random10x14, setRandom10x14] = useState<number>(0);
    const [random10x15, setRandom10x15] = useState<number>(0);
    const [random10x16, setRandom10x16] = useState<number>(0);
    const [random10x17, setRandom10x17] = useState<number>(0);
    const [random10x18, setRandom10x18] = useState<number>(0);
    const [random10x19, setRandom10x19] = useState<number>(0);
    const [random10x20, setRandom10x20] = useState<number>(0);

    const [random11x1, setRandom11x1] = useState<number>(0);
    const [random11x2, setRandom11x2] = useState<number>(0);
    const [random11x3, setRandom11x3] = useState<number>(0);
    const [random11x4, setRandom11x4] = useState<number>(0);
    const [random11x5, setRandom11x5] = useState<number>(0);
    const [random11x6, setRandom11x6] = useState<number>(0);
    const [random11x7, setRandom11x7] = useState<number>(0);
    const [random11x8, setRandom11x8] = useState<number>(0);
    const [random11x9, setRandom11x9] = useState<number>(0);
    const [random11x10, setRandom11x10] = useState<number>(0);
    const [random11x11, setRandom11x11] = useState<number>(0);
    const [random11x12, setRandom11x12] = useState<number>(0);
    const [random11x13, setRandom11x13] = useState<number>(0);
    const [random11x14, setRandom11x14] = useState<number>(0);
    const [random11x15, setRandom11x15] = useState<number>(0);
    const [random11x16, setRandom11x16] = useState<number>(0);
    const [random11x17, setRandom11x17] = useState<number>(0);
    const [random11x18, setRandom11x18] = useState<number>(0);
    const [random11x19, setRandom11x19] = useState<number>(0);
    const [random11x20, setRandom11x20] = useState<number>(0);

    const [random12x1, setRandom12x1] = useState<number>(0);
    const [random12x2, setRandom12x2] = useState<number>(0);
    const [random12x3, setRandom12x3] = useState<number>(0);
    const [random12x4, setRandom12x4] = useState<number>(0);
    const [random12x5, setRandom12x5] = useState<number>(0);
    const [random12x6, setRandom12x6] = useState<number>(0);
    const [random12x7, setRandom12x7] = useState<number>(0);
    const [random12x8, setRandom12x8] = useState<number>(0);
    const [random12x9, setRandom12x9] = useState<number>(0);
    const [random12x10, setRandom12x10] = useState<number>(0);
    const [random12x11, setRandom12x11] = useState<number>(0);
    const [random12x12, setRandom12x12] = useState<number>(0);
    const [random12x13, setRandom12x13] = useState<number>(0);
    const [random12x14, setRandom12x14] = useState<number>(0);
    const [random12x15, setRandom12x15] = useState<number>(0);
    const [random12x16, setRandom12x16] = useState<number>(0);
    const [random12x17, setRandom12x17] = useState<number>(0);
    const [random12x18, setRandom12x18] = useState<number>(0);
    const [random12x19, setRandom12x19] = useState<number>(0);
    const [random12x20, setRandom12x20] = useState<number>(0);

    const [random13x1, setRandom13x1] = useState<number>(0);
    const [random13x2, setRandom13x2] = useState<number>(0);
    const [random13x3, setRandom13x3] = useState<number>(0);
    const [random13x4, setRandom13x4] = useState<number>(0);
    const [random13x5, setRandom13x5] = useState<number>(0);
    const [random13x6, setRandom13x6] = useState<number>(0);
    const [random13x7, setRandom13x7] = useState<number>(0);
    const [random13x8, setRandom13x8] = useState<number>(0);
    const [random13x9, setRandom13x9] = useState<number>(0);
    const [random13x10, setRandom13x10] = useState<number>(0);
    const [random13x11, setRandom13x11] = useState<number>(0);
    const [random13x12, setRandom13x12] = useState<number>(0);
    const [random13x13, setRandom13x13] = useState<number>(0);
    const [random13x14, setRandom13x14] = useState<number>(0);
    const [random13x15, setRandom13x15] = useState<number>(0);
    const [random13x16, setRandom13x16] = useState<number>(0);
    const [random13x17, setRandom13x17] = useState<number>(0);
    const [random13x18, setRandom13x18] = useState<number>(0);
    const [random13x19, setRandom13x19] = useState<number>(0);
    const [random13x20, setRandom13x20] = useState<number>(0);

    const createRandoms = () => {
        // random row 1
        setRandom1x1(parseFloat(Math.random().toFixed(3)));
        setRandom1x2(parseFloat(Math.random().toFixed(3)));
        setRandom1x3(parseFloat(Math.random().toFixed(3)));
        setRandom1x4(parseFloat(Math.random().toFixed(3)));
        setRandom1x5(parseFloat(Math.random().toFixed(3)));
        setRandom1x6(parseFloat(Math.random().toFixed(3)));
        setRandom1x7(parseFloat(Math.random().toFixed(3)));
        setRandom1x8(parseFloat(Math.random().toFixed(3)));
        setRandom1x9(parseFloat(Math.random().toFixed(3)));
        setRandom1x10(parseFloat(Math.random().toFixed(3)));
        setRandom1x11(parseFloat(Math.random().toFixed(3)));
        setRandom1x12(parseFloat(Math.random().toFixed(3)));
        setRandom1x13(parseFloat(Math.random().toFixed(3)));
        setRandom1x14(parseFloat(Math.random().toFixed(3)));
        setRandom1x15(parseFloat(Math.random().toFixed(3)));
        setRandom1x16(parseFloat(Math.random().toFixed(3)));
        setRandom1x17(parseFloat(Math.random().toFixed(3)));
        setRandom1x18(parseFloat(Math.random().toFixed(3)));
        setRandom1x19(parseFloat(Math.random().toFixed(3)));
        setRandom1x20(parseFloat(Math.random().toFixed(3)));

        // random row 2
        setRandom2x1(parseFloat(Math.random().toFixed(3)));
        setRandom2x2(parseFloat(Math.random().toFixed(3)));
        setRandom2x3(parseFloat(Math.random().toFixed(3)));
        setRandom2x4(parseFloat(Math.random().toFixed(3)));
        setRandom2x5(parseFloat(Math.random().toFixed(3)));
        setRandom2x6(parseFloat(Math.random().toFixed(3)));
        setRandom2x7(parseFloat(Math.random().toFixed(3)));
        setRandom2x8(parseFloat(Math.random().toFixed(3)));
        setRandom2x9(parseFloat(Math.random().toFixed(3)));
        setRandom2x10(parseFloat(Math.random().toFixed(3)));
        setRandom2x11(parseFloat(Math.random().toFixed(3)));
        setRandom2x12(parseFloat(Math.random().toFixed(3)));
        setRandom2x13(parseFloat(Math.random().toFixed(3)));
        setRandom2x14(parseFloat(Math.random().toFixed(3)));
        setRandom2x15(parseFloat(Math.random().toFixed(3)));
        setRandom2x16(parseFloat(Math.random().toFixed(3)));
        setRandom2x17(parseFloat(Math.random().toFixed(3)));
        setRandom2x18(parseFloat(Math.random().toFixed(3)));
        setRandom2x19(parseFloat(Math.random().toFixed(3)));
        setRandom2x20(parseFloat(Math.random().toFixed(3)));

        // random row 3
        setRandom3x1(parseFloat(Math.random().toFixed(3)));
        setRandom3x2(parseFloat(Math.random().toFixed(3)));
        setRandom3x3(parseFloat(Math.random().toFixed(3)));
        setRandom3x4(parseFloat(Math.random().toFixed(3)));
        setRandom3x5(parseFloat(Math.random().toFixed(3)));
        setRandom3x6(parseFloat(Math.random().toFixed(3)));
        setRandom3x7(parseFloat(Math.random().toFixed(3)));
        setRandom3x8(parseFloat(Math.random().toFixed(3)));
        setRandom3x9(parseFloat(Math.random().toFixed(3)));
        setRandom3x10(parseFloat(Math.random().toFixed(3)));
        setRandom3x11(parseFloat(Math.random().toFixed(3)));
        setRandom3x12(parseFloat(Math.random().toFixed(3)));
        setRandom3x13(parseFloat(Math.random().toFixed(3)));
        setRandom3x14(parseFloat(Math.random().toFixed(3)));
        setRandom3x15(parseFloat(Math.random().toFixed(3)));
        setRandom3x16(parseFloat(Math.random().toFixed(3)));
        setRandom3x17(parseFloat(Math.random().toFixed(3)));
        setRandom3x18(parseFloat(Math.random().toFixed(3)));
        setRandom3x19(parseFloat(Math.random().toFixed(3)));
        setRandom3x20(parseFloat(Math.random().toFixed(3)));

        // random row 4
        setRandom4x1(parseFloat(Math.random().toFixed(3)));
        setRandom4x2(parseFloat(Math.random().toFixed(3)));
        setRandom4x3(parseFloat(Math.random().toFixed(3)));
        setRandom4x4(parseFloat(Math.random().toFixed(3)));
        setRandom4x5(parseFloat(Math.random().toFixed(3)));
        setRandom4x6(parseFloat(Math.random().toFixed(3)));
        setRandom4x7(parseFloat(Math.random().toFixed(3)));
        setRandom4x8(parseFloat(Math.random().toFixed(3)));
        setRandom4x9(parseFloat(Math.random().toFixed(3)));
        setRandom4x10(parseFloat(Math.random().toFixed(3)));
        setRandom4x11(parseFloat(Math.random().toFixed(3)));
        setRandom4x12(parseFloat(Math.random().toFixed(3)));
        setRandom4x13(parseFloat(Math.random().toFixed(3)));
        setRandom4x14(parseFloat(Math.random().toFixed(3)));
        setRandom4x15(parseFloat(Math.random().toFixed(3)));
        setRandom4x16(parseFloat(Math.random().toFixed(3)));
        setRandom4x17(parseFloat(Math.random().toFixed(3)));
        setRandom4x18(parseFloat(Math.random().toFixed(3)));
        setRandom4x19(parseFloat(Math.random().toFixed(3)));
        setRandom4x20(parseFloat(Math.random().toFixed(3)));

        // random row 5
        setRandom5x1(parseFloat(Math.random().toFixed(3)));
        setRandom5x2(parseFloat(Math.random().toFixed(3)));
        setRandom5x3(parseFloat(Math.random().toFixed(3)));
        setRandom5x4(parseFloat(Math.random().toFixed(3)));
        setRandom5x5(parseFloat(Math.random().toFixed(3)));
        setRandom5x6(parseFloat(Math.random().toFixed(3)));
        setRandom5x7(parseFloat(Math.random().toFixed(3)));
        setRandom5x8(parseFloat(Math.random().toFixed(3)));
        setRandom5x9(parseFloat(Math.random().toFixed(3)));
        setRandom5x10(parseFloat(Math.random().toFixed(3)));
        setRandom5x11(parseFloat(Math.random().toFixed(3)));
        setRandom5x12(parseFloat(Math.random().toFixed(3)));
        setRandom5x13(parseFloat(Math.random().toFixed(3)));
        setRandom5x14(parseFloat(Math.random().toFixed(3)));
        setRandom5x15(parseFloat(Math.random().toFixed(3)));
        setRandom5x16(parseFloat(Math.random().toFixed(3)));
        setRandom5x17(parseFloat(Math.random().toFixed(3)));
        setRandom5x18(parseFloat(Math.random().toFixed(3)));
        setRandom5x19(parseFloat(Math.random().toFixed(3)));
        setRandom5x20(parseFloat(Math.random().toFixed(3)));

        // random row 6
        setRandom6x1(parseFloat(Math.random().toFixed(3)));
        setRandom6x2(parseFloat(Math.random().toFixed(3)));
        setRandom6x3(parseFloat(Math.random().toFixed(3)));
        setRandom6x4(parseFloat(Math.random().toFixed(3)));
        setRandom6x5(parseFloat(Math.random().toFixed(3)));
        setRandom6x6(parseFloat(Math.random().toFixed(3)));
        setRandom6x7(parseFloat(Math.random().toFixed(3)));
        setRandom6x8(parseFloat(Math.random().toFixed(3)));
        setRandom6x9(parseFloat(Math.random().toFixed(3)));
        setRandom6x10(parseFloat(Math.random().toFixed(3)));
        setRandom6x11(parseFloat(Math.random().toFixed(3)));
        setRandom6x12(parseFloat(Math.random().toFixed(3)));
        setRandom6x13(parseFloat(Math.random().toFixed(3)));
        setRandom6x14(parseFloat(Math.random().toFixed(3)));
        setRandom6x15(parseFloat(Math.random().toFixed(3)));
        setRandom6x16(parseFloat(Math.random().toFixed(3)));
        setRandom6x17(parseFloat(Math.random().toFixed(3)));
        setRandom6x18(parseFloat(Math.random().toFixed(3)));
        setRandom6x19(parseFloat(Math.random().toFixed(3)));
        setRandom6x20(parseFloat(Math.random().toFixed(3)));

        // random row 7
        setRandom7x1(parseFloat(Math.random().toFixed(3)));
        setRandom7x2(parseFloat(Math.random().toFixed(3)));
        setRandom7x3(parseFloat(Math.random().toFixed(3)));
        setRandom7x4(parseFloat(Math.random().toFixed(3)));
        setRandom7x5(parseFloat(Math.random().toFixed(3)));
        setRandom7x6(parseFloat(Math.random().toFixed(3)));
        setRandom7x7(parseFloat(Math.random().toFixed(3)));
        setRandom7x8(parseFloat(Math.random().toFixed(3)));
        setRandom7x9(parseFloat(Math.random().toFixed(3)));
        setRandom7x10(parseFloat(Math.random().toFixed(3)));
        setRandom7x11(parseFloat(Math.random().toFixed(3)));
        setRandom7x12(parseFloat(Math.random().toFixed(3)));
        setRandom7x13(parseFloat(Math.random().toFixed(3)));
        setRandom7x14(parseFloat(Math.random().toFixed(3)));
        setRandom7x15(parseFloat(Math.random().toFixed(3)));
        setRandom7x16(parseFloat(Math.random().toFixed(3)));
        setRandom7x17(parseFloat(Math.random().toFixed(3)));
        setRandom7x18(parseFloat(Math.random().toFixed(3)));
        setRandom7x19(parseFloat(Math.random().toFixed(3)));
        setRandom7x20(parseFloat(Math.random().toFixed(3)));

        // random row 8
        setRandom8x1(parseFloat(Math.random().toFixed(3)));
        setRandom8x2(parseFloat(Math.random().toFixed(3)));
        setRandom8x3(parseFloat(Math.random().toFixed(3)));
        setRandom8x4(parseFloat(Math.random().toFixed(3)));
        setRandom8x5(parseFloat(Math.random().toFixed(3)));
        setRandom8x6(parseFloat(Math.random().toFixed(3)));
        setRandom8x7(parseFloat(Math.random().toFixed(3)));
        setRandom8x8(parseFloat(Math.random().toFixed(3)));
        setRandom8x9(parseFloat(Math.random().toFixed(3)));
        setRandom8x10(parseFloat(Math.random().toFixed(3)));
        setRandom8x11(parseFloat(Math.random().toFixed(3)));
        setRandom8x12(parseFloat(Math.random().toFixed(3)));
        setRandom8x13(parseFloat(Math.random().toFixed(3)));
        setRandom8x14(parseFloat(Math.random().toFixed(3)));
        setRandom8x15(parseFloat(Math.random().toFixed(3)));
        setRandom8x16(parseFloat(Math.random().toFixed(3)));
        setRandom8x17(parseFloat(Math.random().toFixed(3)));
        setRandom8x18(parseFloat(Math.random().toFixed(3)));
        setRandom8x19(parseFloat(Math.random().toFixed(3)));
        setRandom8x20(parseFloat(Math.random().toFixed(3)));

        // random row 9
        setRandom9x1(parseFloat(Math.random().toFixed(3)));
        setRandom9x2(parseFloat(Math.random().toFixed(3)));
        setRandom9x3(parseFloat(Math.random().toFixed(3)));
        setRandom9x4(parseFloat(Math.random().toFixed(3)));
        setRandom9x5(parseFloat(Math.random().toFixed(3)));
        setRandom9x6(parseFloat(Math.random().toFixed(3)));
        setRandom9x7(parseFloat(Math.random().toFixed(3)));
        setRandom9x8(parseFloat(Math.random().toFixed(3)));
        setRandom9x9(parseFloat(Math.random().toFixed(3)));
        setRandom9x10(parseFloat(Math.random().toFixed(3)));
        setRandom9x11(parseFloat(Math.random().toFixed(3)));
        setRandom9x12(parseFloat(Math.random().toFixed(3)));
        setRandom9x13(parseFloat(Math.random().toFixed(3)));
        setRandom9x14(parseFloat(Math.random().toFixed(3)));
        setRandom9x15(parseFloat(Math.random().toFixed(3)));
        setRandom9x16(parseFloat(Math.random().toFixed(3)));
        setRandom9x17(parseFloat(Math.random().toFixed(3)));
        setRandom9x18(parseFloat(Math.random().toFixed(3)));
        setRandom9x19(parseFloat(Math.random().toFixed(3)));
        setRandom9x20(parseFloat(Math.random().toFixed(3)));

        // random row 10
        setRandom10x1(parseFloat(Math.random().toFixed(3)));
        setRandom10x2(parseFloat(Math.random().toFixed(3)));
        setRandom10x3(parseFloat(Math.random().toFixed(3)));
        setRandom10x4(parseFloat(Math.random().toFixed(3)));
        setRandom10x5(parseFloat(Math.random().toFixed(3)));
        setRandom10x6(parseFloat(Math.random().toFixed(3)));
        setRandom10x7(parseFloat(Math.random().toFixed(3)));
        setRandom10x8(parseFloat(Math.random().toFixed(3)));
        setRandom10x9(parseFloat(Math.random().toFixed(3)));
        setRandom10x10(parseFloat(Math.random().toFixed(3)));
        setRandom10x11(parseFloat(Math.random().toFixed(3)));
        setRandom10x12(parseFloat(Math.random().toFixed(3)));
        setRandom10x13(parseFloat(Math.random().toFixed(3)));
        setRandom10x14(parseFloat(Math.random().toFixed(3)));
        setRandom10x15(parseFloat(Math.random().toFixed(3)));
        setRandom10x16(parseFloat(Math.random().toFixed(3)));
        setRandom10x17(parseFloat(Math.random().toFixed(3)));
        setRandom10x18(parseFloat(Math.random().toFixed(3)));
        setRandom10x19(parseFloat(Math.random().toFixed(3)));
        setRandom10x20(parseFloat(Math.random().toFixed(3)));

        // random row 11
        setRandom11x1(parseFloat(Math.random().toFixed(3)));
        setRandom11x2(parseFloat(Math.random().toFixed(3)));
        setRandom11x3(parseFloat(Math.random().toFixed(3)));
        setRandom11x4(parseFloat(Math.random().toFixed(3)));
        setRandom11x5(parseFloat(Math.random().toFixed(3)));
        setRandom11x6(parseFloat(Math.random().toFixed(3)));
        setRandom11x7(parseFloat(Math.random().toFixed(3)));
        setRandom11x8(parseFloat(Math.random().toFixed(3)));
        setRandom11x9(parseFloat(Math.random().toFixed(3)));
        setRandom11x10(parseFloat(Math.random().toFixed(3)));
        setRandom11x11(parseFloat(Math.random().toFixed(3)));
        setRandom11x12(parseFloat(Math.random().toFixed(3)));
        setRandom11x13(parseFloat(Math.random().toFixed(3)));
        setRandom11x14(parseFloat(Math.random().toFixed(3)));
        setRandom11x15(parseFloat(Math.random().toFixed(3)));
        setRandom11x16(parseFloat(Math.random().toFixed(3)));
        setRandom11x17(parseFloat(Math.random().toFixed(3)));
        setRandom11x18(parseFloat(Math.random().toFixed(3)));
        setRandom11x19(parseFloat(Math.random().toFixed(3)));
        setRandom11x20(parseFloat(Math.random().toFixed(3)));

        // random row 12
        setRandom12x1(parseFloat(Math.random().toFixed(3)));
        setRandom12x2(parseFloat(Math.random().toFixed(3)));
        setRandom12x3(parseFloat(Math.random().toFixed(3)));
        setRandom12x4(parseFloat(Math.random().toFixed(3)));
        setRandom12x5(parseFloat(Math.random().toFixed(3)));
        setRandom12x6(parseFloat(Math.random().toFixed(3)));
        setRandom12x7(parseFloat(Math.random().toFixed(3)));
        setRandom12x8(parseFloat(Math.random().toFixed(3)));
        setRandom12x9(parseFloat(Math.random().toFixed(3)));
        setRandom12x10(parseFloat(Math.random().toFixed(3)));
        setRandom12x11(parseFloat(Math.random().toFixed(3)));
        setRandom12x12(parseFloat(Math.random().toFixed(3)));
        setRandom12x13(parseFloat(Math.random().toFixed(3)));
        setRandom12x14(parseFloat(Math.random().toFixed(3)));
        setRandom12x15(parseFloat(Math.random().toFixed(3)));
        setRandom12x16(parseFloat(Math.random().toFixed(3)));
        setRandom12x17(parseFloat(Math.random().toFixed(3)));
        setRandom12x18(parseFloat(Math.random().toFixed(3)));
        setRandom12x19(parseFloat(Math.random().toFixed(3)));
        setRandom12x20(parseFloat(Math.random().toFixed(3)));

        // random row 13
        setRandom13x1(parseFloat(Math.random().toFixed(3)));
        setRandom13x2(parseFloat(Math.random().toFixed(3)));
        setRandom13x3(parseFloat(Math.random().toFixed(3)));
        setRandom13x4(parseFloat(Math.random().toFixed(3)));
        setRandom13x5(parseFloat(Math.random().toFixed(3)));
        setRandom13x6(parseFloat(Math.random().toFixed(3)));
        setRandom13x7(parseFloat(Math.random().toFixed(3)));
        setRandom13x8(parseFloat(Math.random().toFixed(3)));
        setRandom13x9(parseFloat(Math.random().toFixed(3)));
        setRandom13x10(parseFloat(Math.random().toFixed(3)));
        setRandom13x11(parseFloat(Math.random().toFixed(3)));
        setRandom13x12(parseFloat(Math.random().toFixed(3)));
        setRandom13x13(parseFloat(Math.random().toFixed(3)));
        setRandom13x14(parseFloat(Math.random().toFixed(3)));
        setRandom13x15(parseFloat(Math.random().toFixed(3)));
        setRandom13x16(parseFloat(Math.random().toFixed(3)));
        setRandom13x17(parseFloat(Math.random().toFixed(3)));
        setRandom13x18(parseFloat(Math.random().toFixed(3)));
        setRandom13x19(parseFloat(Math.random().toFixed(3)));
        setRandom13x20(parseFloat(Math.random().toFixed(3)));
    };

    // noise level const
    const noiseLevel = 0.024;

    //noise row 1
    const [noise1x1, setNoise1x1] = useState<number>();
    const [noise1x2, setNoise1x2] = useState<number>();
    const [noise1x3, setNoise1x3] = useState<number>();
    const [noise1x4, setNoise1x4] = useState<number>();
    const [noise1x5, setNoise1x5] = useState<number>();
    const [noise1x6, setNoise1x6] = useState<number>();
    const [noise1x7, setNoise1x7] = useState<number>();
    const [noise1x8, setNoise1x8] = useState<number>();
    const [noise1x9, setNoise1x9] = useState<number>();
    const [noise1x10, setNoise1x10] = useState<number>();
    const [noise1x11, setNoise1x11] = useState<number>();
    const [noise1x12, setNoise1x12] = useState<number>();
    const [noise1x13, setNoise1x13] = useState<number>();
    const [noise1x14, setNoise1x14] = useState<number>();
    const [noise1x15, setNoise1x15] = useState<number>();
    const [noise1x16, setNoise1x16] = useState<number>();
    const [noise1x17, setNoise1x17] = useState<number>();
    const [noise1x18, setNoise1x18] = useState<number>();
    const [noise1x19, setNoise1x19] = useState<number>();
    const [noise1x20, setNoise1x20] = useState<number>();

    //noise row 2
    const [noise2x1, setNoise2x1] = useState<number>();
    const [noise2x2, setNoise2x2] = useState<number>();
    const [noise2x3, setNoise2x3] = useState<number>();
    const [noise2x4, setNoise2x4] = useState<number>();
    const [noise2x5, setNoise2x5] = useState<number>();
    const [noise2x6, setNoise2x6] = useState<number>();
    const [noise2x7, setNoise2x7] = useState<number>();
    const [noise2x8, setNoise2x8] = useState<number>();
    const [noise2x9, setNoise2x9] = useState<number>();
    const [noise2x10, setNoise2x10] = useState<number>();
    const [noise2x11, setNoise2x11] = useState<number>();
    const [noise2x12, setNoise2x12] = useState<number>();
    const [noise2x13, setNoise2x13] = useState<number>();
    const [noise2x14, setNoise2x14] = useState<number>();
    const [noise2x15, setNoise2x15] = useState<number>();
    const [noise2x16, setNoise2x16] = useState<number>();
    const [noise2x17, setNoise2x17] = useState<number>();
    const [noise2x18, setNoise2x18] = useState<number>();
    const [noise2x19, setNoise2x19] = useState<number>();
    const [noise2x20, setNoise2x20] = useState<number>();

    //noise row 3
    const [noise3x1, setNoise3x1] = useState<number>();
    const [noise3x2, setNoise3x2] = useState<number>();
    const [noise3x3, setNoise3x3] = useState<number>();
    const [noise3x4, setNoise3x4] = useState<number>();
    const [noise3x5, setNoise3x5] = useState<number>();
    const [noise3x6, setNoise3x6] = useState<number>();
    const [noise3x7, setNoise3x7] = useState<number>();
    const [noise3x8, setNoise3x8] = useState<number>();
    const [noise3x9, setNoise3x9] = useState<number>();
    const [noise3x10, setNoise3x10] = useState<number>();
    const [noise3x11, setNoise3x11] = useState<number>();
    const [noise3x12, setNoise3x12] = useState<number>();
    const [noise3x13, setNoise3x13] = useState<number>();
    const [noise3x14, setNoise3x14] = useState<number>();
    const [noise3x15, setNoise3x15] = useState<number>();
    const [noise3x16, setNoise3x16] = useState<number>();
    const [noise3x17, setNoise3x17] = useState<number>();
    const [noise3x18, setNoise3x18] = useState<number>();
    const [noise3x19, setNoise3x19] = useState<number>();
    const [noise3x20, setNoise3x20] = useState<number>();

    //noise row 4
    const [noise4x1, setNoise4x1] = useState<number>();
    const [noise4x2, setNoise4x2] = useState<number>();
    const [noise4x3, setNoise4x3] = useState<number>();
    const [noise4x4, setNoise4x4] = useState<number>();
    const [noise4x5, setNoise4x5] = useState<number>();
    const [noise4x6, setNoise4x6] = useState<number>();
    const [noise4x7, setNoise4x7] = useState<number>();
    const [noise4x8, setNoise4x8] = useState<number>();
    const [noise4x9, setNoise4x9] = useState<number>();
    const [noise4x10, setNoise4x10] = useState<number>();
    const [noise4x11, setNoise4x11] = useState<number>();
    const [noise4x12, setNoise4x12] = useState<number>();
    const [noise4x13, setNoise4x13] = useState<number>();
    const [noise4x14, setNoise4x14] = useState<number>();
    const [noise4x15, setNoise4x15] = useState<number>();
    const [noise4x16, setNoise4x16] = useState<number>();
    const [noise4x17, setNoise4x17] = useState<number>();
    const [noise4x18, setNoise4x18] = useState<number>();
    const [noise4x19, setNoise4x19] = useState<number>();
    const [noise4x20, setNoise4x20] = useState<number>();

    //noise row 5
    const [noise5x1, setNoise5x1] = useState<number>();
    const [noise5x2, setNoise5x2] = useState<number>();
    const [noise5x3, setNoise5x3] = useState<number>();
    const [noise5x4, setNoise5x4] = useState<number>();
    const [noise5x5, setNoise5x5] = useState<number>();
    const [noise5x6, setNoise5x6] = useState<number>();
    const [noise5x7, setNoise5x7] = useState<number>();
    const [noise5x8, setNoise5x8] = useState<number>();
    const [noise5x9, setNoise5x9] = useState<number>();
    const [noise5x10, setNoise5x10] = useState<number>();
    const [noise5x11, setNoise5x11] = useState<number>();
    const [noise5x12, setNoise5x12] = useState<number>();
    const [noise5x13, setNoise5x13] = useState<number>();
    const [noise5x14, setNoise5x14] = useState<number>();
    const [noise5x15, setNoise5x15] = useState<number>();
    const [noise5x16, setNoise5x16] = useState<number>();
    const [noise5x17, setNoise5x17] = useState<number>();
    const [noise5x18, setNoise5x18] = useState<number>();
    const [noise5x19, setNoise5x19] = useState<number>();
    const [noise5x20, setNoise5x20] = useState<number>();

    //noise row 6
    const [noise6x1, setNoise6x1] = useState<number>();
    const [noise6x2, setNoise6x2] = useState<number>();
    const [noise6x3, setNoise6x3] = useState<number>();
    const [noise6x4, setNoise6x4] = useState<number>();
    const [noise6x5, setNoise6x5] = useState<number>();
    const [noise6x6, setNoise6x6] = useState<number>();
    const [noise6x7, setNoise6x7] = useState<number>();
    const [noise6x8, setNoise6x8] = useState<number>();
    const [noise6x9, setNoise6x9] = useState<number>();
    const [noise6x10, setNoise6x10] = useState<number>();
    const [noise6x11, setNoise6x11] = useState<number>();
    const [noise6x12, setNoise6x12] = useState<number>();
    const [noise6x13, setNoise6x13] = useState<number>();
    const [noise6x14, setNoise6x14] = useState<number>();
    const [noise6x15, setNoise6x15] = useState<number>();
    const [noise6x16, setNoise6x16] = useState<number>();
    const [noise6x17, setNoise6x17] = useState<number>();
    const [noise6x18, setNoise6x18] = useState<number>();
    const [noise6x19, setNoise6x19] = useState<number>();
    const [noise6x20, setNoise6x20] = useState<number>();

    //noise row 7
    const [noise7x1, setNoise7x1] = useState<number>();
    const [noise7x2, setNoise7x2] = useState<number>();
    const [noise7x3, setNoise7x3] = useState<number>();
    const [noise7x4, setNoise7x4] = useState<number>();
    const [noise7x5, setNoise7x5] = useState<number>();
    const [noise7x6, setNoise7x6] = useState<number>();
    const [noise7x7, setNoise7x7] = useState<number>();
    const [noise7x8, setNoise7x8] = useState<number>();
    const [noise7x9, setNoise7x9] = useState<number>();
    const [noise7x10, setNoise7x10] = useState<number>();
    const [noise7x11, setNoise7x11] = useState<number>();
    const [noise7x12, setNoise7x12] = useState<number>();
    const [noise7x13, setNoise7x13] = useState<number>();
    const [noise7x14, setNoise7x14] = useState<number>();
    const [noise7x15, setNoise7x15] = useState<number>();
    const [noise7x16, setNoise7x16] = useState<number>();
    const [noise7x17, setNoise7x17] = useState<number>();
    const [noise7x18, setNoise7x18] = useState<number>();
    const [noise7x19, setNoise7x19] = useState<number>();
    const [noise7x20, setNoise7x20] = useState<number>();

    //noise row 8
    const [noise8x1, setNoise8x1] = useState<number>();
    const [noise8x2, setNoise8x2] = useState<number>();
    const [noise8x3, setNoise8x3] = useState<number>();
    const [noise8x4, setNoise8x4] = useState<number>();
    const [noise8x5, setNoise8x5] = useState<number>();
    const [noise8x6, setNoise8x6] = useState<number>();
    const [noise8x7, setNoise8x7] = useState<number>();
    const [noise8x8, setNoise8x8] = useState<number>();
    const [noise8x9, setNoise8x9] = useState<number>();
    const [noise8x10, setNoise8x10] = useState<number>();
    const [noise8x11, setNoise8x11] = useState<number>();
    const [noise8x12, setNoise8x12] = useState<number>();
    const [noise8x13, setNoise8x13] = useState<number>();
    const [noise8x14, setNoise8x14] = useState<number>();
    const [noise8x15, setNoise8x15] = useState<number>();
    const [noise8x16, setNoise8x16] = useState<number>();
    const [noise8x17, setNoise8x17] = useState<number>();
    const [noise8x18, setNoise8x18] = useState<number>();
    const [noise8x19, setNoise8x19] = useState<number>();
    const [noise8x20, setNoise8x20] = useState<number>();

    //noise row 9
    const [noise9x1, setNoise9x1] = useState<number>();
    const [noise9x2, setNoise9x2] = useState<number>();
    const [noise9x3, setNoise9x3] = useState<number>();
    const [noise9x4, setNoise9x4] = useState<number>();
    const [noise9x5, setNoise9x5] = useState<number>();
    const [noise9x6, setNoise9x6] = useState<number>();
    const [noise9x7, setNoise9x7] = useState<number>();
    const [noise9x8, setNoise9x8] = useState<number>();
    const [noise9x9, setNoise9x9] = useState<number>();
    const [noise9x10, setNoise9x10] = useState<number>();
    const [noise9x11, setNoise9x11] = useState<number>();
    const [noise9x12, setNoise9x12] = useState<number>();
    const [noise9x13, setNoise9x13] = useState<number>();
    const [noise9x14, setNoise9x14] = useState<number>();
    const [noise9x15, setNoise9x15] = useState<number>();
    const [noise9x16, setNoise9x16] = useState<number>();
    const [noise9x17, setNoise9x17] = useState<number>();
    const [noise9x18, setNoise9x18] = useState<number>();
    const [noise9x19, setNoise9x19] = useState<number>();
    const [noise9x20, setNoise9x20] = useState<number>();

    //noise row 10
    const [noise10x1, setNoise10x1] = useState<number>();
    const [noise10x2, setNoise10x2] = useState<number>();
    const [noise10x3, setNoise10x3] = useState<number>();
    const [noise10x4, setNoise10x4] = useState<number>();
    const [noise10x5, setNoise10x5] = useState<number>();
    const [noise10x6, setNoise10x6] = useState<number>();
    const [noise10x7, setNoise10x7] = useState<number>();
    const [noise10x8, setNoise10x8] = useState<number>();
    const [noise10x9, setNoise10x9] = useState<number>();
    const [noise10x10, setNoise10x10] = useState<number>();
    const [noise10x11, setNoise10x11] = useState<number>();
    const [noise10x12, setNoise10x12] = useState<number>();
    const [noise10x13, setNoise10x13] = useState<number>();
    const [noise10x14, setNoise10x14] = useState<number>();
    const [noise10x15, setNoise10x15] = useState<number>();
    const [noise10x16, setNoise10x16] = useState<number>();
    const [noise10x17, setNoise10x17] = useState<number>();
    const [noise10x18, setNoise10x18] = useState<number>();
    const [noise10x19, setNoise10x19] = useState<number>();
    const [noise10x20, setNoise10x20] = useState<number>();

    //noise row 11
    const [noise11x1, setNoise11x1] = useState<number>();
    const [noise11x2, setNoise11x2] = useState<number>();
    const [noise11x3, setNoise11x3] = useState<number>();
    const [noise11x4, setNoise11x4] = useState<number>();
    const [noise11x5, setNoise11x5] = useState<number>();
    const [noise11x6, setNoise11x6] = useState<number>();
    const [noise11x7, setNoise11x7] = useState<number>();
    const [noise11x8, setNoise11x8] = useState<number>();
    const [noise11x9, setNoise11x9] = useState<number>();
    const [noise11x10, setNoise11x10] = useState<number>();
    const [noise11x11, setNoise11x11] = useState<number>();
    const [noise11x12, setNoise11x12] = useState<number>();
    const [noise11x13, setNoise11x13] = useState<number>();
    const [noise11x14, setNoise11x14] = useState<number>();
    const [noise11x15, setNoise11x15] = useState<number>();
    const [noise11x16, setNoise11x16] = useState<number>();
    const [noise11x17, setNoise11x17] = useState<number>();
    const [noise11x18, setNoise11x18] = useState<number>();
    const [noise11x19, setNoise11x19] = useState<number>();
    const [noise11x20, setNoise11x20] = useState<number>();

    //noise row 12
    const [noise12x1, setNoise12x1] = useState<number>();
    const [noise12x2, setNoise12x2] = useState<number>();
    const [noise12x3, setNoise12x3] = useState<number>();
    const [noise12x4, setNoise12x4] = useState<number>();
    const [noise12x5, setNoise12x5] = useState<number>();
    const [noise12x6, setNoise12x6] = useState<number>();
    const [noise12x7, setNoise12x7] = useState<number>();
    const [noise12x8, setNoise12x8] = useState<number>();
    const [noise12x9, setNoise12x9] = useState<number>();
    const [noise12x10, setNoise12x10] = useState<number>();
    const [noise12x11, setNoise12x11] = useState<number>();
    const [noise12x12, setNoise12x12] = useState<number>();
    const [noise12x13, setNoise12x13] = useState<number>();
    const [noise12x14, setNoise12x14] = useState<number>();
    const [noise12x15, setNoise12x15] = useState<number>();
    const [noise12x16, setNoise12x16] = useState<number>();
    const [noise12x17, setNoise12x17] = useState<number>();
    const [noise12x18, setNoise12x18] = useState<number>();
    const [noise12x19, setNoise12x19] = useState<number>();
    const [noise12x20, setNoise12x20] = useState<number>();

    //noise row 13
    const [noise13x1, setNoise13x1] = useState<number>();
    const [noise13x2, setNoise13x2] = useState<number>();
    const [noise13x3, setNoise13x3] = useState<number>();
    const [noise13x4, setNoise13x4] = useState<number>();
    const [noise13x5, setNoise13x5] = useState<number>();
    const [noise13x6, setNoise13x6] = useState<number>();
    const [noise13x7, setNoise13x7] = useState<number>();
    const [noise13x8, setNoise13x8] = useState<number>();
    const [noise13x9, setNoise13x9] = useState<number>();
    const [noise13x10, setNoise13x10] = useState<number>();
    const [noise13x11, setNoise13x11] = useState<number>();
    const [noise13x12, setNoise13x12] = useState<number>();
    const [noise13x13, setNoise13x13] = useState<number>();
    const [noise13x14, setNoise13x14] = useState<number>();
    const [noise13x15, setNoise13x15] = useState<number>();
    const [noise13x16, setNoise13x16] = useState<number>();
    const [noise13x17, setNoise13x17] = useState<number>();
    const [noise13x18, setNoise13x18] = useState<number>();
    const [noise13x19, setNoise13x19] = useState<number>();
    const [noise13x20, setNoise13x20] = useState<number>();

    const passNoiseToLocal = () => {
        const noiseRow1 = [
            noise1x1,
            noise1x2,
            noise1x3,
            noise1x4,
            noise1x5,
            noise1x6,
            noise1x7,
            noise1x8,
            noise1x9,
            noise1x10,
            noise1x11,
            noise1x12,
            noise1x13,
            noise1x14,
            noise1x15,
            noise1x16,
            noise1x17,
            noise1x18,
            noise1x19,
            noise1x20
        ];
        const noiseRow2 = [
            noise2x1,
            noise2x2,
            noise2x3,
            noise2x4,
            noise2x5,
            noise2x6,
            noise2x7,
            noise2x8,
            noise2x9,
            noise2x10,
            noise2x11,
            noise2x12,
            noise2x13,
            noise2x14,
            noise2x15,
            noise2x16,
            noise2x17,
            noise2x18,
            noise2x19,
            noise2x20
        ];
        const noiseRow3 = [
            noise3x1,
            noise3x2,
            noise3x3,
            noise3x4,
            noise3x5,
            noise3x6,
            noise3x7,
            noise3x8,
            noise3x9,
            noise3x10,
            noise3x11,
            noise3x12,
            noise3x13,
            noise3x14,
            noise3x15,
            noise3x16,
            noise3x17,
            noise3x18,
            noise3x19,
            noise3x20
        ];
        const noiseRow4 = [
            noise4x1,
            noise4x2,
            noise4x3,
            noise4x4,
            noise4x5,
            noise4x6,
            noise4x7,
            noise4x8,
            noise4x9,
            noise4x10,
            noise4x11,
            noise4x12,
            noise4x13,
            noise4x14,
            noise4x15,
            noise4x16,
            noise4x17,
            noise4x18,
            noise4x19,
            noise4x20
        ];
        const noiseRow5 = [
            noise5x1,
            noise5x2,
            noise5x3,
            noise5x4,
            noise5x5,
            noise5x6,
            noise5x7,
            noise5x8,
            noise5x9,
            noise5x10,
            noise5x11,
            noise5x12,
            noise5x13,
            noise5x14,
            noise5x15,
            noise5x16,
            noise5x17,
            noise5x18,
            noise5x19,
            noise5x20
        ];
        const noiseRow6 = [
            noise6x1,
            noise6x2,
            noise6x3,
            noise6x4,
            noise6x5,
            noise6x6,
            noise6x7,
            noise6x8,
            noise6x9,
            noise6x10,
            noise6x11,
            noise6x12,
            noise6x13,
            noise6x14,
            noise6x15,
            noise6x16,
            noise6x17,
            noise6x18,
            noise6x19,
            noise6x20
        ];
        const noiseRow7 = [
            noise7x1,
            noise7x2,
            noise7x3,
            noise7x4,
            noise7x5,
            noise7x6,
            noise7x7,
            noise7x8,
            noise7x9,
            noise7x10,
            noise7x11,
            noise7x12,
            noise7x13,
            noise7x14,
            noise7x15,
            noise7x16,
            noise7x17,
            noise7x18,
            noise7x19,
            noise7x20
        ];
        const noiseRow8 = [
            noise8x1,
            noise8x2,
            noise8x3,
            noise8x4,
            noise8x5,
            noise8x6,
            noise8x7,
            noise8x8,
            noise8x9,
            noise8x10,
            noise8x11,
            noise8x12,
            noise8x13,
            noise8x14,
            noise8x15,
            noise8x16,
            noise8x17,
            noise8x18,
            noise8x19,
            noise8x20
        ];
        const noiseRow9 = [
            noise9x1,
            noise9x2,
            noise9x3,
            noise9x4,
            noise9x5,
            noise9x6,
            noise9x7,
            noise9x8,
            noise9x9,
            noise9x10,
            noise9x11,
            noise9x12,
            noise9x13,
            noise9x14,
            noise9x15,
            noise9x16,
            noise9x17,
            noise9x18,
            noise9x19,
            noise9x20
        ];
        const noiseRow10 = [
            noise10x1,
            noise10x2,
            noise10x3,
            noise10x4,
            noise10x5,
            noise10x6,
            noise10x7,
            noise10x8,
            noise10x9,
            noise10x10,
            noise10x11,
            noise10x12,
            noise10x13,
            noise10x14,
            noise10x15,
            noise10x16,
            noise10x17,
            noise10x18,
            noise10x19,
            noise10x20
        ];
        const noiseRow11 = [
            noise11x1,
            noise11x2,
            noise11x3,
            noise11x4,
            noise11x5,
            noise11x6,
            noise11x7,
            noise11x8,
            noise11x9,
            noise11x10,
            noise11x11,
            noise11x12,
            noise11x13,
            noise11x14,
            noise11x15,
            noise11x16,
            noise11x17,
            noise11x18,
            noise11x19,
            noise11x20
        ];
        const noiseRow12 = [
            noise12x1,
            noise12x2,
            noise12x3,
            noise12x4,
            noise12x5,
            noise12x6,
            noise12x7,
            noise12x8,
            noise12x9,
            noise12x10,
            noise12x11,
            noise12x12,
            noise12x13,
            noise12x14,
            noise12x15,
            noise12x16,
            noise12x17,
            noise12x18,
            noise12x19,
            noise12x20
        ];
        const noiseRow13 = [
            noise13x1,
            noise13x2,
            noise13x3,
            noise13x4,
            noise13x5,
            noise13x6,
            noise13x7,
            noise13x8,
            noise13x9,
            noise13x10,
            noise13x11,
            noise13x12,
            noise13x13,
            noise13x14,
            noise13x15,
            noise13x16,
            noise13x17,
            noise13x18,
            noise13x19,
            noise13x20
        ];

        localStorage.setItem('noiseRow1', noiseRow1.join());
        localStorage.setItem('noiseRow2', noiseRow2.join());
        localStorage.setItem('noiseRow3', noiseRow3.join());
        localStorage.setItem('noiseRow4', noiseRow4.join());
        localStorage.setItem('noiseRow5', noiseRow5.join());
        localStorage.setItem('noiseRow6', noiseRow6.join());
        localStorage.setItem('noiseRow7', noiseRow7.join());
        localStorage.setItem('noiseRow8', noiseRow8.join());
        localStorage.setItem('noiseRow9', noiseRow9.join());
        localStorage.setItem('noiseRow10', noiseRow10.join());
        localStorage.setItem('noiseRow11', noiseRow11.join());
        localStorage.setItem('noiseRow12', noiseRow12.join());
        localStorage.setItem('noiseRow13', noiseRow13.join());
    };

    const simulateNoisePart1 = () => {
        const matrixData = getMatrixData();

        //noise 1x1
        if (matrixData?.column1Arr[0] !== undefined && noiseLevel > random1x1) {
            if (matrixData?.column1Arr[0] === 0) {
                setNoise1x1(1);
            } else {
                setNoise1x1(0);
            }
        } else {
            setNoise1x1(matrixData?.column1Arr[0]);
        }

        //noise 1x2
        if (matrixData?.column2Arr[0] !== undefined && noiseLevel > random1x2) {
            if (matrixData?.column2Arr[0] === 0) {
                setNoise1x2(1);
            } else {
                setNoise1x2(0);
            }
        } else {
            setNoise1x2(matrixData?.column2Arr[0]);
        }
        //noise 1x3
        if (matrixData?.column3Arr[0] !== undefined && noiseLevel > random1x3) {
            if (matrixData?.column3Arr[0] === 0) {
                setNoise1x3(1);
            } else {
                setNoise1x3(0);
            }
        } else {
            setNoise1x3(matrixData?.column3Arr[0]);
        }
        //noise 1x4
        if (matrixData?.column4Arr[0] !== undefined && noiseLevel > random1x4) {
            if (matrixData?.column4Arr[0] === 0) {
                setNoise1x4(1);
            } else {
                setNoise1x4(0);
            }
        } else {
            setNoise1x4(matrixData?.column4Arr[0]);
        }
        //noise 1x5
        if (matrixData?.column5Arr[0] !== undefined && noiseLevel > random1x5) {
            if (matrixData?.column5Arr[0] === 0) {
                setNoise1x5(1);
            } else {
                setNoise1x5(0);
            }
        } else {
            setNoise1x5(matrixData?.column5Arr[0]);
        }
        //noise 1x6
        if (matrixData?.column6Arr[0] !== undefined && noiseLevel > random1x6) {
            if (matrixData?.column6Arr[0] === 0) {
                setNoise1x6(1);
            } else {
                setNoise1x6(0);
            }
        } else {
            setNoise1x6(matrixData?.column6Arr[0]);
        }
        //noise 1x7
        if (matrixData?.column7Arr[0] !== undefined && noiseLevel > random1x7) {
            if (matrixData?.column7Arr[0] === 0) {
                setNoise1x7(1);
            } else {
                setNoise1x7(0);
            }
        } else {
            setNoise1x7(matrixData?.column7Arr[0]);
        }
        //noise 1x8
        if (matrixData?.column8Arr[0] !== undefined && noiseLevel > random1x8) {
            if (matrixData?.column8Arr[0] === 0) {
                setNoise1x8(1);
            } else {
                setNoise1x8(0);
            }
        } else {
            setNoise1x8(matrixData?.column8Arr[0]);
        }
        //noise 1x9
        if (matrixData?.column9Arr[0] !== undefined && noiseLevel > random1x9) {
            if (matrixData?.column9Arr[0] === 0) {
                setNoise1x9(1);
            } else {
                setNoise1x9(0);
            }
        } else {
            setNoise1x9(matrixData?.column9Arr[0]);
        }
        //noise 1x10
        if (matrixData?.column10Arr[0] !== undefined && noiseLevel > random1x10) {
            if (matrixData?.column10Arr[0] === 0) {
                setNoise1x10(1);
            } else {
                setNoise1x10(0);
            }
        } else {
            setNoise1x10(matrixData?.column10Arr[0]);
        }
        //noise 1x11
        if (matrixData?.column11Arr[0] !== undefined && noiseLevel > random1x11) {
            if (matrixData?.column11Arr[0] === 0) {
                setNoise1x11(1);
            } else {
                setNoise1x11(0);
            }
        } else {
            setNoise1x11(matrixData?.column11Arr[0]);
        }
        //noise 1x12
        if (matrixData?.column12Arr[0] !== undefined && noiseLevel > random1x12) {
            if (matrixData?.column12Arr[0] === 0) {
                setNoise1x12(1);
            } else {
                setNoise1x12(0);
            }
        } else {
            setNoise1x12(matrixData?.column12Arr[0]);
        }
        //noise 1x13
        if (matrixData?.column13Arr[0] !== undefined && noiseLevel > random1x13) {
            if (matrixData?.column13Arr[0] === 0) {
                setNoise1x13(1);
            } else {
                setNoise1x13(0);
            }
        } else {
            setNoise1x13(matrixData?.column13Arr[0]);
        }
        //noise 1x14
        if (matrixData?.column14Arr[0] !== undefined && noiseLevel > random1x14) {
            if (matrixData?.column14Arr[0] === 0) {
                setNoise1x14(1);
            } else {
                setNoise1x14(0);
            }
        } else {
            setNoise1x14(matrixData?.column14Arr[0]);
        }
        //noise 1x15
        if (matrixData?.column15Arr[0] !== undefined && noiseLevel > random1x15) {
            if (matrixData?.column15Arr[0] === 0) {
                setNoise1x15(1);
            } else {
                setNoise1x15(0);
            }
        } else {
            setNoise1x15(matrixData?.column15Arr[0]);
        }
        //noise 1x16
        if (matrixData?.column16Arr[0] !== undefined && noiseLevel > random1x16) {
            if (matrixData?.column16Arr[0] === 0) {
                setNoise1x16(1);
            } else {
                setNoise1x16(0);
            }
        } else {
            setNoise1x16(matrixData?.column16Arr[0]);
        }
        //noise 1x17
        if (matrixData?.column17Arr[0] !== undefined && noiseLevel > random1x17) {
            if (matrixData?.column17Arr[0] === 0) {
                setNoise1x17(1);
            } else {
                setNoise1x17(0);
            }
        } else {
            setNoise1x17(matrixData?.column17Arr[0]);
        }
        //noise 1x18
        if (matrixData?.column18Arr[0] !== undefined && noiseLevel > random1x18) {
            if (matrixData?.column18Arr[0] === 0) {
                setNoise1x18(1);
            } else {
                setNoise1x18(0);
            }
        } else {
            setNoise1x18(matrixData?.column18Arr[0]);
        }
        //noise 1x19
        if (matrixData?.column19Arr[0] !== undefined && noiseLevel > random1x19) {
            if (matrixData?.column19Arr[0] === 0) {
                setNoise1x19(1);
            } else {
                setNoise1x19(0);
            }
        } else {
            setNoise1x19(matrixData?.column19Arr[0]);
        }
        //noise 1x20
        if (matrixData?.column20Arr[0] !== undefined && noiseLevel > random1x20) {
            if (matrixData?.column20Arr[0] === 0) {
                setNoise1x20(1);
            } else {
                setNoise1x20(0);
            }
        } else {
            setNoise1x20(matrixData?.column20Arr[0]);
        }

        //noise 2x1
        if (matrixData?.column1Arr[1] !== undefined && noiseLevel > random2x1) {
            if (matrixData?.column1Arr[1] === 0) {
                setNoise2x1(1);
            } else {
                setNoise2x1(0);
            }
        } else {
            setNoise2x1(matrixData?.column1Arr[1]);
        }

        //noise 2x2
        if (matrixData?.column2Arr[1] !== undefined && noiseLevel > random2x2) {
            if (matrixData?.column2Arr[1] === 0) {
                setNoise2x2(1);
            } else {
                setNoise2x2(0);
            }
        } else {
            setNoise2x2(matrixData?.column2Arr[1]);
        }

        //noise 2x3
        if (matrixData?.column3Arr[1] !== undefined && noiseLevel > random2x3) {
            if (matrixData?.column3Arr[1] === 0) {
                setNoise2x3(1);
            } else {
                setNoise2x3(0);
            }
        } else {
            setNoise2x3(matrixData?.column3Arr[1]);
        }

        //noise 2x4
        if (matrixData?.column4Arr[1] !== undefined && noiseLevel > random2x4) {
            if (matrixData?.column4Arr[1] === 0) {
                setNoise2x4(1);
            } else {
                setNoise2x4(0);
            }
        } else {
            setNoise2x4(matrixData?.column4Arr[1]);
        }

        //noise 2x5
        if (matrixData?.column5Arr[1] !== undefined && noiseLevel > random2x5) {
            if (matrixData?.column5Arr[1] === 0) {
                setNoise2x5(1);
            } else {
                setNoise2x5(0);
            }
        } else {
            setNoise2x5(matrixData?.column5Arr[1]);
        }

        //noise 2x6
        if (matrixData?.column6Arr[1] !== undefined && noiseLevel > random2x6) {
            if (matrixData?.column6Arr[1] === 0) {
                setNoise2x6(1);
            } else {
                setNoise2x6(0);
            }
        } else {
            setNoise2x6(matrixData?.column6Arr[1]);
        }

        //noise 2x7
        if (matrixData?.column7Arr[1] !== undefined && noiseLevel > random2x7) {
            if (matrixData?.column7Arr[1] === 0) {
                setNoise2x7(1);
            } else {
                setNoise2x7(0);
            }
        } else {
            setNoise2x7(matrixData?.column7Arr[1]);
        }

        //noise 2x8
        if (matrixData?.column8Arr[1] !== undefined && noiseLevel > random2x8) {
            if (matrixData?.column8Arr[1] === 0) {
                setNoise2x8(1);
            } else {
                setNoise2x8(0);
            }
        } else {
            setNoise2x8(matrixData?.column8Arr[1]);
        }

        //noise 2x9
        if (matrixData?.column9Arr[1] !== undefined && noiseLevel > random2x9) {
            if (matrixData?.column9Arr[1] === 0) {
                setNoise2x9(1);
            } else {
                setNoise2x9(0);
            }
        } else {
            setNoise2x9(matrixData?.column9Arr[1]);
        }

        //noise 2x10
        if (matrixData?.column10Arr[1] !== undefined && noiseLevel > random2x10) {
            if (matrixData?.column10Arr[1] === 0) {
                setNoise2x10(1);
            } else {
                setNoise2x10(0);
            }
        } else {
            setNoise2x10(matrixData?.column10Arr[1]);
        }

        //noise 2x11
        if (matrixData?.column11Arr[1] !== undefined && noiseLevel > random2x11) {
            if (matrixData?.column11Arr[1] === 0) {
                setNoise2x11(1);
            } else {
                setNoise2x11(0);
            }
        } else {
            setNoise2x11(matrixData?.column11Arr[1]);
        }

        //noise 2x12
        if (matrixData?.column12Arr[1] !== undefined && noiseLevel > random2x12) {
            if (matrixData?.column12Arr[1] === 0) {
                setNoise2x12(1);
            } else {
                setNoise2x12(0);
            }
        } else {
            setNoise2x12(matrixData?.column12Arr[1]);
        }

        //noise 2x13
        if (matrixData?.column13Arr[1] !== undefined && noiseLevel > random2x13) {
            if (matrixData?.column13Arr[1] === 0) {
                setNoise2x13(1);
            } else {
                setNoise2x13(0);
            }
        } else {
            setNoise2x13(matrixData?.column13Arr[1]);
        }

        //noise 2x14
        if (matrixData?.column14Arr[1] !== undefined && noiseLevel > random2x14) {
            if (matrixData?.column14Arr[1] === 0) {
                setNoise2x14(1);
            } else {
                setNoise2x14(0);
            }
        } else {
            setNoise2x14(matrixData?.column14Arr[1]);
        }

        //noise 2x15
        if (matrixData?.column15Arr[1] !== undefined && noiseLevel > random2x15) {
            if (matrixData?.column15Arr[1] === 0) {
                setNoise2x15(1);
            } else {
                setNoise2x15(0);
            }
        } else {
            setNoise2x15(matrixData?.column15Arr[1]);
        }

        //noise 2x16
        if (matrixData?.column16Arr[1] !== undefined && noiseLevel > random2x16) {
            if (matrixData?.column16Arr[1] === 0) {
                setNoise2x16(1);
            } else {
                setNoise2x16(0);
            }
        } else {
            setNoise2x16(matrixData?.column16Arr[1]);
        }

        //noise 2x17
        if (matrixData?.column17Arr[1] !== undefined && noiseLevel > random2x17) {
            if (matrixData?.column17Arr[1] === 0) {
                setNoise2x17(1);
            } else {
                setNoise2x17(0);
            }
        } else {
            setNoise2x17(matrixData?.column17Arr[1]);
        }

        //noise 2x18
        if (matrixData?.column18Arr[1] !== undefined && noiseLevel > random2x18) {
            if (matrixData?.column18Arr[1] === 0) {
                setNoise2x18(1);
            } else {
                setNoise2x18(0);
            }
        } else {
            setNoise2x18(matrixData?.column18Arr[1]);
        }

        //noise 2x19
        if (matrixData?.column19Arr[1] !== undefined && noiseLevel > random2x19) {
            if (matrixData?.column19Arr[1] === 0) {
                setNoise2x19(1);
            } else {
                setNoise2x19(0);
            }
        } else {
            setNoise2x19(matrixData?.column19Arr[1]);
        }

        //noise 2x20
        if (matrixData?.column20Arr[1] !== undefined && noiseLevel > random2x20) {
            if (matrixData?.column20Arr[1] === 0) {
                setNoise2x20(1);
            } else {
                setNoise2x20(0);
            }
        } else {
            setNoise2x20(matrixData?.column20Arr[1]);
        }

        //noise 3x1
        if (matrixData?.column1Arr[2] !== undefined && noiseLevel > random3x1) {
            if (matrixData?.column1Arr[2] === 0) {
                setNoise3x1(1);
            } else {
                setNoise3x1(0);
            }
        } else {
            setNoise3x1(matrixData?.column1Arr[2]);
        }

        //noise 3x2
        if (matrixData?.column2Arr[2] !== undefined && noiseLevel > random3x2) {
            if (matrixData?.column2Arr[2] === 0) {
                setNoise3x2(1);
            } else {
                setNoise3x2(0);
            }
        } else {
            setNoise3x2(matrixData?.column2Arr[2]);
        }

        //noise 3x3
        if (matrixData?.column3Arr[2] !== undefined && noiseLevel > random3x3) {
            if (matrixData?.column3Arr[2] === 0) {
                setNoise3x3(1);
            } else {
                setNoise3x3(0);
            }
        } else {
            setNoise3x3(matrixData?.column3Arr[2]);
        }

        //noise 3x4
        if (matrixData?.column4Arr[2] !== undefined && noiseLevel > random3x4) {
            if (matrixData?.column4Arr[2] === 0) {
                setNoise3x4(1);
            } else {
                setNoise3x4(0);
            }
        } else {
            setNoise3x4(matrixData?.column4Arr[2]);
        }

        //noise 3x5
        if (matrixData?.column5Arr[2] !== undefined && noiseLevel > random3x5) {
            if (matrixData?.column5Arr[2] === 0) {
                setNoise3x5(1);
            } else {
                setNoise3x5(0);
            }
        } else {
            setNoise3x5(matrixData?.column5Arr[2]);
        }

        //noise 3x6
        if (matrixData?.column6Arr[2] !== undefined && noiseLevel > random3x6) {
            if (matrixData?.column6Arr[2] === 0) {
                setNoise3x6(1);
            } else {
                setNoise3x6(0);
            }
        } else {
            setNoise3x6(matrixData?.column6Arr[2]);
        }

        //noise 3x7
        if (matrixData?.column7Arr[2] !== undefined && noiseLevel > random3x7) {
            if (matrixData?.column7Arr[2] === 0) {
                setNoise3x7(1);
            } else {
                setNoise3x7(0);
            }
        } else {
            setNoise3x7(matrixData?.column7Arr[2]);
        }

        //noise 3x8
        if (matrixData?.column8Arr[2] !== undefined && noiseLevel > random3x8) {
            if (matrixData?.column8Arr[2] === 0) {
                setNoise3x8(1);
            } else {
                setNoise3x8(0);
            }
        } else {
            setNoise3x8(matrixData?.column8Arr[2]);
        }

        //noise 3x8
        if (matrixData?.column8Arr[2] !== undefined && noiseLevel > random3x8) {
            if (matrixData?.column8Arr[2] === 0) {
                setNoise3x8(1);
            } else {
                setNoise3x8(0);
            }
        } else {
            setNoise3x8(matrixData?.column8Arr[2]);
        }

        //noise 3x9
        if (matrixData?.column9Arr[2] !== undefined && noiseLevel > random3x9) {
            if (matrixData?.column9Arr[2] === 0) {
                setNoise3x9(1);
            } else {
                setNoise3x9(0);
            }
        } else {
            setNoise3x9(matrixData?.column9Arr[2]);
        }

        //noise 3x10
        if (matrixData?.column10Arr[2] !== undefined && noiseLevel > random3x10) {
            if (matrixData?.column10Arr[2] === 0) {
                setNoise3x10(1);
            } else {
                setNoise3x10(0);
            }
        } else {
            setNoise3x10(matrixData?.column10Arr[2]);
        }

        //noise 3x11
        if (matrixData?.column11Arr[2] !== undefined && noiseLevel > random3x11) {
            if (matrixData?.column11Arr[2] === 0) {
                setNoise3x11(1);
            } else {
                setNoise3x11(0);
            }
        } else {
            setNoise3x11(matrixData?.column11Arr[2]);
        }

        //noise 3x12
        if (matrixData?.column12Arr[2] !== undefined && noiseLevel > random3x12) {
            if (matrixData?.column12Arr[2] === 0) {
                setNoise3x12(1);
            } else {
                setNoise3x12(0);
            }
        } else {
            setNoise3x12(matrixData?.column12Arr[2]);
        }

        //noise 3x13
        if (matrixData?.column13Arr[2] !== undefined && noiseLevel > random3x13) {
            if (matrixData?.column13Arr[2] === 0) {
                setNoise3x13(1);
            } else {
                setNoise3x13(0);
            }
        } else {
            setNoise3x13(matrixData?.column13Arr[2]);
        }

        //noise 3x14
        if (matrixData?.column14Arr[2] !== undefined && noiseLevel > random3x14) {
            if (matrixData?.column14Arr[2] === 0) {
                setNoise3x14(1);
            } else {
                setNoise3x14(0);
            }
        } else {
            setNoise3x14(matrixData?.column14Arr[2]);
        }

        //noise 3x15
        if (matrixData?.column15Arr[2] !== undefined && noiseLevel > random3x15) {
            if (matrixData?.column15Arr[2] === 0) {
                setNoise3x15(1);
            } else {
                setNoise3x15(0);
            }
        } else {
            setNoise3x15(matrixData?.column15Arr[2]);
        }

        //noise 3x16
        if (matrixData?.column16Arr[2] !== undefined && noiseLevel > random3x16) {
            if (matrixData?.column16Arr[2] === 0) {
                setNoise3x16(1);
            } else {
                setNoise3x16(0);
            }
        } else {
            setNoise3x16(matrixData?.column16Arr[2]);
        }

        //noise 3x17
        if (matrixData?.column17Arr[2] !== undefined && noiseLevel > random3x17) {
            if (matrixData?.column17Arr[2] === 0) {
                setNoise3x17(1);
            } else {
                setNoise3x17(0);
            }
        } else {
            setNoise3x17(matrixData?.column17Arr[2]);
        }

        //noise 3x18
        if (matrixData?.column18Arr[2] !== undefined && noiseLevel > random3x18) {
            if (matrixData?.column18Arr[2] === 0) {
                setNoise3x18(1);
            } else {
                setNoise3x18(0);
            }
        } else {
            setNoise3x18(matrixData?.column18Arr[2]);
        }

        //noise 3x19
        if (matrixData?.column19Arr[2] !== undefined && noiseLevel > random3x19) {
            if (matrixData?.column19Arr[2] === 0) {
                setNoise3x19(1);
            } else {
                setNoise3x19(0);
            }
        } else {
            setNoise3x19(matrixData?.column19Arr[2]);
        }

        //noise 3x20
        if (matrixData?.column20Arr[2] !== undefined && noiseLevel > random3x20) {
            if (matrixData?.column20Arr[2] === 0) {
                setNoise3x20(1);
            } else {
                setNoise3x20(0);
            }
        } else {
            setNoise3x20(matrixData?.column20Arr[2]);
        }

        //noise 4x1
        if (matrixData?.column1Arr[3] !== undefined && noiseLevel > random4x1) {
            if (matrixData?.column1Arr[3] === 0) {
                setNoise4x1(1);
            } else {
                setNoise4x1(0);
            }
        } else {
            setNoise4x1(matrixData?.column1Arr[3]);
        }

        //noise 4x2
        if (matrixData?.column2Arr[3] !== undefined && noiseLevel > random4x2) {
            if (matrixData?.column2Arr[3] === 0) {
                setNoise4x2(1);
            } else {
                setNoise4x2(0);
            }
        } else {
            setNoise4x2(matrixData?.column2Arr[3]);
        }

        //noise 4x3
        if (matrixData?.column3Arr[3] !== undefined && noiseLevel > random4x3) {
            if (matrixData?.column3Arr[3] === 0) {
                setNoise4x3(1);
            } else {
                setNoise4x3(0);
            }
        } else {
            setNoise4x3(matrixData?.column3Arr[3]);
        }

        //noise 4x4
        if (matrixData?.column4Arr[3] !== undefined && noiseLevel > random4x4) {
            if (matrixData?.column4Arr[3] === 0) {
                setNoise4x4(1);
            } else {
                setNoise4x4(0);
            }
        } else {
            setNoise4x4(matrixData?.column4Arr[3]);
        }

        //noise 4x5
        if (matrixData?.column5Arr[3] !== undefined && noiseLevel > random4x5) {
            if (matrixData?.column5Arr[3] === 0) {
                setNoise4x5(1);
            } else {
                setNoise4x5(0);
            }
        } else {
            setNoise4x5(matrixData?.column5Arr[3]);
        }

        //noise 4x6
        if (matrixData?.column6Arr[3] !== undefined && noiseLevel > random4x6) {
            if (matrixData?.column6Arr[3] === 0) {
                setNoise4x6(1);
            } else {
                setNoise4x6(0);
            }
        } else {
            setNoise4x6(matrixData?.column6Arr[3]);
        }

        //noise 4x7
        if (matrixData?.column7Arr[3] !== undefined && noiseLevel > random4x7) {
            if (matrixData?.column7Arr[3] === 0) {
                setNoise4x7(1);
            } else {
                setNoise4x7(0);
            }
        } else {
            setNoise4x7(matrixData?.column7Arr[3]);
        }

        //noise 4x8
        if (matrixData?.column8Arr[3] !== undefined && noiseLevel > random4x8) {
            if (matrixData?.column8Arr[3] === 0) {
                setNoise4x8(1);
            } else {
                setNoise4x8(0);
            }
        } else {
            setNoise4x8(matrixData?.column8Arr[3]);
        }

        //noise 4x9
        if (matrixData?.column9Arr[3] !== undefined && noiseLevel > random4x9) {
            if (matrixData?.column9Arr[3] === 0) {
                setNoise4x9(1);
            } else {
                setNoise4x9(0);
            }
        } else {
            setNoise4x9(matrixData?.column9Arr[3]);
        }

        //noise 4x10
        if (matrixData?.column10Arr[3] !== undefined && noiseLevel > random4x10) {
            if (matrixData?.column10Arr[3] === 0) {
                setNoise4x10(1);
            } else {
                setNoise4x10(0);
            }
        } else {
            setNoise4x10(matrixData?.column10Arr[3]);
        }

        //noise 4x11
        if (matrixData?.column11Arr[3] !== undefined && noiseLevel > random4x11) {
            if (matrixData?.column11Arr[3] === 0) {
                setNoise4x11(1);
            } else {
                setNoise4x11(0);
            }
        } else {
            setNoise4x11(matrixData?.column11Arr[3]);
        }

        //noise 4x12
        if (matrixData?.column12Arr[3] !== undefined && noiseLevel > random4x12) {
            if (matrixData?.column12Arr[3] === 0) {
                setNoise4x12(1);
            } else {
                setNoise4x12(0);
            }
        } else {
            setNoise4x12(matrixData?.column12Arr[3]);
        }

        //noise 4x13
        if (matrixData?.column13Arr[3] !== undefined && noiseLevel > random4x13) {
            if (matrixData?.column13Arr[3] === 0) {
                setNoise4x13(1);
            } else {
                setNoise4x13(0);
            }
        } else {
            setNoise4x13(matrixData?.column13Arr[3]);
        }

        //noise 4x14
        if (matrixData?.column14Arr[3] !== undefined && noiseLevel > random4x14) {
            if (matrixData?.column14Arr[3] === 0) {
                setNoise4x14(1);
            } else {
                setNoise4x14(0);
            }
        } else {
            setNoise4x14(matrixData?.column14Arr[3]);
        }

        //noise 4x15
        if (matrixData?.column15Arr[3] !== undefined && noiseLevel > random4x15) {
            if (matrixData?.column15Arr[3] === 0) {
                setNoise4x15(1);
            } else {
                setNoise4x15(0);
            }
        } else {
            setNoise4x15(matrixData?.column15Arr[3]);
        }

        //noise 4x16
        if (matrixData?.column16Arr[3] !== undefined && noiseLevel > random4x16) {
            if (matrixData?.column16Arr[3] === 0) {
                setNoise4x16(1);
            } else {
                setNoise4x16(0);
            }
        } else {
            setNoise4x16(matrixData?.column16Arr[3]);
        }

        //noise 4x17
        if (matrixData?.column17Arr[3] !== undefined && noiseLevel > random4x17) {
            if (matrixData?.column17Arr[3] === 0) {
                setNoise4x17(1);
            } else {
                setNoise4x17(0);
            }
        } else {
            setNoise4x17(matrixData?.column17Arr[3]);
        }

        //noise 4x18
        if (matrixData?.column18Arr[3] !== undefined && noiseLevel > random4x18) {
            if (matrixData?.column18Arr[3] === 0) {
                setNoise4x18(1);
            } else {
                setNoise4x18(0);
            }
        } else {
            setNoise4x18(matrixData?.column18Arr[3]);
        }

        //noise 4x19
        if (matrixData?.column19Arr[3] !== undefined && noiseLevel > random4x19) {
            if (matrixData?.column19Arr[3] === 0) {
                setNoise4x19(1);
            } else {
                setNoise4x19(0);
            }
        } else {
            setNoise4x19(matrixData?.column19Arr[3]);
        }

        //noise 4x20
        if (matrixData?.column20Arr[3] !== undefined && noiseLevel > random4x20) {
            if (matrixData?.column20Arr[3] === 0) {
                setNoise4x20(1);
            } else {
                setNoise4x20(0);
            }
        } else {
            setNoise4x20(matrixData?.column20Arr[3]);
        }

        //noise 5x1
        if (matrixData?.column1Arr[4] !== undefined && noiseLevel > random5x1) {
            if (matrixData?.column1Arr[4] === 0) {
                setNoise5x1(1);
            } else {
                setNoise5x1(0);
            }
        } else {
            setNoise5x1(matrixData?.column1Arr[4]);
        }

        //noise 5x2
        if (matrixData?.column2Arr[4] !== undefined && noiseLevel > random5x2) {
            if (matrixData?.column2Arr[4] === 0) {
                setNoise5x2(1);
            } else {
                setNoise5x2(0);
            }
        } else {
            setNoise5x2(matrixData?.column2Arr[4]);
        }

        //noise 5x3
        if (matrixData?.column3Arr[4] !== undefined && noiseLevel > random5x3) {
            if (matrixData?.column3Arr[4] === 0) {
                setNoise5x3(1);
            } else {
                setNoise5x3(0);
            }
        } else {
            setNoise5x3(matrixData?.column3Arr[4]);
        }

        //noise 5x4
        if (matrixData?.column4Arr[4] !== undefined && noiseLevel > random5x4) {
            if (matrixData?.column4Arr[4] === 0) {
                setNoise5x4(1);
            } else {
                setNoise5x4(0);
            }
        } else {
            setNoise5x4(matrixData?.column4Arr[4]);
        }

        //noise 5x5
        if (matrixData?.column5Arr[4] !== undefined && noiseLevel > random5x5) {
            if (matrixData?.column5Arr[4] === 0) {
                setNoise5x5(1);
            } else {
                setNoise5x5(0);
            }
        } else {
            setNoise5x5(matrixData?.column5Arr[4]);
        }

        //noise 5x6
        if (matrixData?.column6Arr[4] !== undefined && noiseLevel > random5x6) {
            if (matrixData?.column6Arr[4] === 0) {
                setNoise5x6(1);
            } else {
                setNoise5x6(0);
            }
        } else {
            setNoise5x6(matrixData?.column6Arr[4]);
        }

        //noise 5x7
        if (matrixData?.column7Arr[4] !== undefined && noiseLevel > random5x7) {
            if (matrixData?.column7Arr[4] === 0) {
                setNoise5x7(1);
            } else {
                setNoise5x7(0);
            }
        } else {
            setNoise5x7(matrixData?.column7Arr[4]);
        }

        //noise 5x8
        if (matrixData?.column8Arr[4] !== undefined && noiseLevel > random5x8) {
            if (matrixData?.column8Arr[4] === 0) {
                setNoise5x8(1);
            } else {
                setNoise5x8(0);
            }
        } else {
            setNoise5x8(matrixData?.column8Arr[4]);
        }

        //noise 5x9
        if (matrixData?.column9Arr[4] !== undefined && noiseLevel > random5x9) {
            if (matrixData?.column9Arr[4] === 0) {
                setNoise5x9(1);
            } else {
                setNoise5x9(0);
            }
        } else {
            setNoise5x9(matrixData?.column9Arr[4]);
        }

        //noise 5x10
        if (matrixData?.column10Arr[4] !== undefined && noiseLevel > random5x10) {
            if (matrixData?.column10Arr[4] === 0) {
                setNoise5x10(1);
            } else {
                setNoise5x10(0);
            }
        } else {
            setNoise5x10(matrixData?.column10Arr[4]);
        }

        //noise 5x11
        if (matrixData?.column11Arr[4] !== undefined && noiseLevel > random5x11) {
            if (matrixData?.column11Arr[4] === 0) {
                setNoise5x11(1);
            } else {
                setNoise5x11(0);
            }
        } else {
            setNoise5x11(matrixData?.column11Arr[4]);
        }

        //noise 5x12
        if (matrixData?.column12Arr[4] !== undefined && noiseLevel > random5x12) {
            if (matrixData?.column12Arr[4] === 0) {
                setNoise5x12(1);
            } else {
                setNoise5x12(0);
            }
        } else {
            setNoise5x12(matrixData?.column12Arr[4]);
        }

        //noise 5x13
        if (matrixData?.column13Arr[4] !== undefined && noiseLevel > random5x13) {
            if (matrixData?.column13Arr[4] === 0) {
                setNoise5x13(1);
            } else {
                setNoise5x13(0);
            }
        } else {
            setNoise5x13(matrixData?.column13Arr[4]);
        }

        //noise 5x14
        if (matrixData?.column14Arr[4] !== undefined && noiseLevel > random5x14) {
            if (matrixData?.column14Arr[4] === 0) {
                setNoise5x14(1);
            } else {
                setNoise5x14(0);
            }
        } else {
            setNoise5x14(matrixData?.column14Arr[4]);
        }

        //noise 5x15
        if (matrixData?.column15Arr[4] !== undefined && noiseLevel > random5x15) {
            if (matrixData?.column15Arr[4] === 0) {
                setNoise5x15(1);
            } else {
                setNoise5x15(0);
            }
        } else {
            setNoise5x15(matrixData?.column15Arr[4]);
        }

        //noise 5x16
        if (matrixData?.column16Arr[4] !== undefined && noiseLevel > random5x16) {
            if (matrixData?.column16Arr[4] === 0) {
                setNoise5x16(1);
            } else {
                setNoise5x16(0);
            }
        } else {
            setNoise5x16(matrixData?.column16Arr[4]);
        }

        //noise 5x17
        if (matrixData?.column17Arr[4] !== undefined && noiseLevel > random5x17) {
            if (matrixData?.column17Arr[4] === 0) {
                setNoise5x17(1);
            } else {
                setNoise5x17(0);
            }
        } else {
            setNoise5x17(matrixData?.column17Arr[4]);
        }

        //noise 5x18
        if (matrixData?.column18Arr[4] !== undefined && noiseLevel > random5x18) {
            if (matrixData?.column18Arr[4] === 0) {
                setNoise5x18(1);
            } else {
                setNoise5x18(0);
            }
        } else {
            setNoise5x18(matrixData?.column18Arr[4]);
        }

        //noise 5x19
        if (matrixData?.column19Arr[4] !== undefined && noiseLevel > random5x19) {
            if (matrixData?.column19Arr[4] === 0) {
                setNoise5x19(1);
            } else {
                setNoise5x19(0);
            }
        } else {
            setNoise5x19(matrixData?.column19Arr[4]);
        }

        //noise 5x20
        if (matrixData?.column20Arr[4] !== undefined && noiseLevel > random5x20) {
            if (matrixData?.column20Arr[4] === 0) {
                setNoise5x20(1);
            } else {
                setNoise5x20(0);
            }
        } else {
            setNoise5x20(matrixData?.column20Arr[4]);
        }

        //noise 6x1
        if (matrixData?.column1Arr[5] !== undefined && noiseLevel > random6x1) {
            if (matrixData?.column1Arr[5] === 0) {
                setNoise6x1(1);
            } else {
                setNoise6x1(0);
            }
        } else {
            setNoise6x1(matrixData?.column1Arr[5]);
        }

        //noise 6x2
        if (matrixData?.column2Arr[5] !== undefined && noiseLevel > random6x2) {
            if (matrixData?.column2Arr[5] === 0) {
                setNoise6x2(1);
            } else {
                setNoise6x2(0);
            }
        } else {
            setNoise6x2(matrixData?.column2Arr[5]);
        }

        //noise 6x3
        if (matrixData?.column3Arr[5] !== undefined && noiseLevel > random6x3) {
            if (matrixData?.column3Arr[5] === 0) {
                setNoise6x3(1);
            } else {
                setNoise6x3(0);
            }
        } else {
            setNoise6x3(matrixData?.column3Arr[5]);
        }

        //noise 6x4
        if (matrixData?.column4Arr[5] !== undefined && noiseLevel > random6x4) {
            if (matrixData?.column4Arr[5] === 0) {
                setNoise6x4(1);
            } else {
                setNoise6x4(0);
            }
        } else {
            setNoise6x4(matrixData?.column4Arr[5]);
        }

        //noise 6x5
        if (matrixData?.column5Arr[5] !== undefined && noiseLevel > random6x5) {
            if (matrixData?.column5Arr[5] === 0) {
                setNoise6x5(1);
            } else {
                setNoise6x5(0);
            }
        } else {
            setNoise6x5(matrixData?.column5Arr[5]);
        }

        //noise 6x6
        if (matrixData?.column6Arr[5] !== undefined && noiseLevel > random6x6) {
            if (matrixData?.column6Arr[5] === 0) {
                setNoise6x6(1);
            } else {
                setNoise6x6(0);
            }
        } else {
            setNoise6x6(matrixData?.column6Arr[5]);
        }

        //noise 6x7
        if (matrixData?.column7Arr[5] !== undefined && noiseLevel > random6x7) {
            if (matrixData?.column7Arr[5] === 0) {
                setNoise6x7(1);
            } else {
                setNoise6x7(0);
            }
        } else {
            setNoise6x7(matrixData?.column7Arr[5]);
        }

        //noise 6x8
        if (matrixData?.column8Arr[5] !== undefined && noiseLevel > random6x8) {
            if (matrixData?.column8Arr[5] === 0) {
                setNoise6x8(1);
            } else {
                setNoise6x8(0);
            }
        } else {
            setNoise6x8(matrixData?.column8Arr[5]);
        }

        //noise 6x9
        if (matrixData?.column9Arr[5] !== undefined && noiseLevel > random6x9) {
            if (matrixData?.column9Arr[5] === 0) {
                setNoise6x9(1);
            } else {
                setNoise6x9(0);
            }
        } else {
            setNoise6x9(matrixData?.column9Arr[5]);
        }

        //noise 6x10
        if (matrixData?.column10Arr[5] !== undefined && noiseLevel > random6x10) {
            if (matrixData?.column10Arr[5] === 0) {
                setNoise6x10(1);
            } else {
                setNoise6x10(0);
            }
        } else {
            setNoise6x10(matrixData?.column10Arr[5]);
        }

        //noise 6x11
        if (matrixData?.column11Arr[5] !== undefined && noiseLevel > random6x11) {
            if (matrixData?.column11Arr[5] === 0) {
                setNoise6x11(1);
            } else {
                setNoise6x11(0);
            }
        } else {
            setNoise6x11(matrixData?.column11Arr[5]);
        }

        //noise 6x12
        if (matrixData?.column12Arr[5] !== undefined && noiseLevel > random6x12) {
            if (matrixData?.column12Arr[5] === 0) {
                setNoise6x12(1);
            } else {
                setNoise6x12(0);
            }
        } else {
            setNoise6x12(matrixData?.column12Arr[5]);
        }

        //noise 6x13
        if (matrixData?.column13Arr[5] !== undefined && noiseLevel > random6x13) {
            if (matrixData?.column13Arr[5] === 0) {
                setNoise6x13(1);
            } else {
                setNoise6x13(0);
            }
        } else {
            setNoise6x13(matrixData?.column13Arr[5]);
        }

        //noise 6x14
        if (matrixData?.column14Arr[5] !== undefined && noiseLevel > random6x14) {
            if (matrixData?.column14Arr[5] === 0) {
                setNoise6x14(1);
            } else {
                setNoise6x14(0);
            }
        } else {
            setNoise6x14(matrixData?.column14Arr[5]);
        }

        //noise 6x15
        if (matrixData?.column15Arr[5] !== undefined && noiseLevel > random6x15) {
            if (matrixData?.column15Arr[5] === 0) {
                setNoise6x15(1);
            } else {
                setNoise6x15(0);
            }
        } else {
            setNoise6x15(matrixData?.column15Arr[5]);
        }

        //noise 6x15
        if (matrixData?.column15Arr[5] !== undefined && noiseLevel > random6x15) {
            if (matrixData?.column15Arr[5] === 0) {
                setNoise6x15(1);
            } else {
                setNoise6x15(0);
            }
        } else {
            setNoise6x15(matrixData?.column15Arr[5]);
        }

        //noise 6x16
        if (matrixData?.column16Arr[5] !== undefined && noiseLevel > random6x16) {
            if (matrixData?.column16Arr[5] === 0) {
                setNoise6x16(1);
            } else {
                setNoise6x16(0);
            }
        } else {
            setNoise6x16(matrixData?.column16Arr[5]);
        }

        //noise 6x17
        if (matrixData?.column17Arr[5] !== undefined && noiseLevel > random6x17) {
            if (matrixData?.column17Arr[5] === 0) {
                setNoise6x17(1);
            } else {
                setNoise6x17(0);
            }
        } else {
            setNoise6x17(matrixData?.column17Arr[5]);
        }

        //noise 6x18
        if (matrixData?.column18Arr[5] !== undefined && noiseLevel > random6x18) {
            if (matrixData?.column18Arr[5] === 0) {
                setNoise6x18(1);
            } else {
                setNoise6x18(0);
            }
        } else {
            setNoise6x18(matrixData?.column18Arr[5]);
        }

        //noise 6x19
        if (matrixData?.column19Arr[5] !== undefined && noiseLevel > random6x19) {
            if (matrixData?.column19Arr[5] === 0) {
                setNoise6x19(1);
            } else {
                setNoise6x19(0);
            }
        } else {
            setNoise6x19(matrixData?.column19Arr[5]);
        }

        //noise 6x20
        if (matrixData?.column20Arr[5] !== undefined && noiseLevel > random6x20) {
            if (matrixData?.column20Arr[5] === 0) {
                setNoise6x20(1);
            } else {
                setNoise6x20(0);
            }
        } else {
            setNoise6x20(matrixData?.column20Arr[5]);
        }
    };

    const simulateNoisePart2 = () => {
        const matrixData = getMatrixData();

        //noise 7x1
        if (matrixData?.column1Arr[6] !== undefined && noiseLevel > random7x1) {
            if (matrixData?.column1Arr[6] === 0) {
                setNoise7x1(1);
            } else {
                setNoise7x1(0);
            }
        } else {
            setNoise7x1(matrixData?.column1Arr[6]);
        }

        //noise 7x2
        if (matrixData?.column2Arr[6] !== undefined && noiseLevel > random7x2) {
            if (matrixData?.column2Arr[6] === 0) {
                setNoise7x2(1);
            } else {
                setNoise7x2(0);
            }
        } else {
            setNoise7x2(matrixData?.column2Arr[6]);
        }

        //noise 7x3
        if (matrixData?.column3Arr[6] !== undefined && noiseLevel > random7x3) {
            if (matrixData?.column3Arr[6] === 0) {
                setNoise7x3(1);
            } else {
                setNoise7x3(0);
            }
        } else {
            setNoise7x3(matrixData?.column3Arr[6]);
        }

        //noise 7x4
        if (matrixData?.column4Arr[6] !== undefined && noiseLevel > random7x4) {
            if (matrixData?.column4Arr[6] === 0) {
                setNoise7x4(1);
            } else {
                setNoise7x4(0);
            }
        } else {
            setNoise7x4(matrixData?.column4Arr[6]);
        }

        //noise 7x5
        if (matrixData?.column5Arr[6] !== undefined && noiseLevel > random7x5) {
            if (matrixData?.column5Arr[6] === 0) {
                setNoise7x5(1);
            } else {
                setNoise7x5(0);
            }
        } else {
            setNoise7x5(matrixData?.column5Arr[6]);
        }

        //noise 7x6
        if (matrixData?.column6Arr[6] !== undefined && noiseLevel > random7x6) {
            if (matrixData?.column6Arr[6] === 0) {
                setNoise7x6(1);
            } else {
                setNoise7x6(0);
            }
        } else {
            setNoise7x6(matrixData?.column6Arr[6]);
        }

        //noise 7x7
        if (matrixData?.column7Arr[6] !== undefined && noiseLevel > random7x7) {
            if (matrixData?.column7Arr[6] === 0) {
                setNoise7x7(1);
            } else {
                setNoise7x7(0);
            }
        } else {
            setNoise7x7(matrixData?.column7Arr[6]);
        }

        //noise 7x8
        if (matrixData?.column8Arr[6] !== undefined && noiseLevel > random7x8) {
            if (matrixData?.column8Arr[6] === 0) {
                setNoise7x8(1);
            } else {
                setNoise7x8(0);
            }
        } else {
            setNoise7x8(matrixData?.column8Arr[6]);
        }

        //noise 7x9
        if (matrixData?.column9Arr[6] !== undefined && noiseLevel > random7x9) {
            if (matrixData?.column9Arr[6] === 0) {
                setNoise7x9(1);
            } else {
                setNoise7x9(0);
            }
        } else {
            setNoise7x9(matrixData?.column9Arr[6]);
        }

        //noise 7x10
        if (matrixData?.column10Arr[6] !== undefined && noiseLevel > random7x10) {
            if (matrixData?.column10Arr[6] === 0) {
                setNoise7x10(1);
            } else {
                setNoise7x10(0);
            }
        } else {
            setNoise7x10(matrixData?.column10Arr[6]);
        }

        //noise 7x11
        if (matrixData?.column11Arr[6] !== undefined && noiseLevel > random7x11) {
            if (matrixData?.column11Arr[6] === 0) {
                setNoise7x11(1);
            } else {
                setNoise7x11(0);
            }
        } else {
            setNoise7x11(matrixData?.column11Arr[6]);
        }

        //noise 7x12
        if (matrixData?.column12Arr[6] !== undefined && noiseLevel > random7x12) {
            if (matrixData?.column12Arr[6] === 0) {
                setNoise7x12(1);
            } else {
                setNoise7x12(0);
            }
        } else {
            setNoise7x12(matrixData?.column12Arr[6]);
        }

        //noise 7x13
        if (matrixData?.column13Arr[6] !== undefined && noiseLevel > random7x13) {
            if (matrixData?.column13Arr[6] === 0) {
                setNoise7x13(1);
            } else {
                setNoise7x13(0);
            }
        } else {
            setNoise7x13(matrixData?.column13Arr[6]);
        }

        //noise 7x14
        if (matrixData?.column14Arr[6] !== undefined && noiseLevel > random7x14) {
            if (matrixData?.column14Arr[6] === 0) {
                setNoise7x14(1);
            } else {
                setNoise7x14(0);
            }
        } else {
            setNoise7x14(matrixData?.column14Arr[6]);
        }

        //noise 7x15
        if (matrixData?.column15Arr[6] !== undefined && noiseLevel > random7x15) {
            if (matrixData?.column15Arr[6] === 0) {
                setNoise7x15(1);
            } else {
                setNoise7x15(0);
            }
        } else {
            setNoise7x15(matrixData?.column15Arr[6]);
        }

        //noise 7x16
        if (matrixData?.column16Arr[6] !== undefined && noiseLevel > random7x16) {
            if (matrixData?.column16Arr[6] === 0) {
                setNoise7x16(1);
            } else {
                setNoise7x16(0);
            }
        } else {
            setNoise7x16(matrixData?.column16Arr[6]);
        }

        //noise 7x17
        if (matrixData?.column17Arr[6] !== undefined && noiseLevel > random7x17) {
            if (matrixData?.column17Arr[6] === 0) {
                setNoise7x17(1);
            } else {
                setNoise7x17(0);
            }
        } else {
            setNoise7x17(matrixData?.column17Arr[6]);
        }

        //noise 7x18
        if (matrixData?.column18Arr[6] !== undefined && noiseLevel > random7x18) {
            if (matrixData?.column18Arr[6] === 0) {
                setNoise7x18(1);
            } else {
                setNoise7x18(0);
            }
        } else {
            setNoise7x18(matrixData?.column18Arr[6]);
        }

        //noise 7x19
        if (matrixData?.column19Arr[6] !== undefined && noiseLevel > random7x19) {
            if (matrixData?.column19Arr[6] === 0) {
                setNoise7x19(1);
            } else {
                setNoise7x19(0);
            }
        } else {
            setNoise7x19(matrixData?.column19Arr[6]);
        }

        //noise 7x20
        if (matrixData?.column20Arr[6] !== undefined && noiseLevel > random7x20) {
            if (matrixData?.column20Arr[6] === 0) {
                setNoise7x20(1);
            } else {
                setNoise7x20(0);
            }
        } else {
            setNoise7x20(matrixData?.column20Arr[6]);
        }

        //noise 8x1
        if (matrixData?.column1Arr[7] !== undefined && noiseLevel > random8x1) {
            if (matrixData?.column1Arr[7] === 0) {
                setNoise8x1(1);
            } else {
                setNoise8x1(0);
            }
        } else {
            setNoise8x1(matrixData?.column1Arr[7]);
        }

        //noise 8x2
        if (matrixData?.column2Arr[7] !== undefined && noiseLevel > random8x2) {
            if (matrixData?.column2Arr[7] === 0) {
                setNoise8x2(1);
            } else {
                setNoise8x2(0);
            }
        } else {
            setNoise8x2(matrixData?.column2Arr[7]);
        }

        //noise 8x3
        if (matrixData?.column3Arr[7] !== undefined && noiseLevel > random8x3) {
            if (matrixData?.column3Arr[7] === 0) {
                setNoise8x3(1);
            } else {
                setNoise8x3(0);
            }
        } else {
            setNoise8x3(matrixData?.column3Arr[7]);
        }

        //noise 8x4
        if (matrixData?.column4Arr[7] !== undefined && noiseLevel > random8x4) {
            if (matrixData?.column4Arr[7] === 0) {
                setNoise8x4(1);
            } else {
                setNoise8x4(0);
            }
        } else {
            setNoise8x4(matrixData?.column4Arr[7]);
        }

        //noise 8x5
        if (matrixData?.column5Arr[7] !== undefined && noiseLevel > random8x5) {
            if (matrixData?.column5Arr[7] === 0) {
                setNoise8x5(1);
            } else {
                setNoise8x5(0);
            }
        } else {
            setNoise8x5(matrixData?.column5Arr[7]);
        }

        //noise 8x6
        if (matrixData?.column6Arr[7] !== undefined && noiseLevel > random8x6) {
            if (matrixData?.column6Arr[7] === 0) {
                setNoise8x6(1);
            } else {
                setNoise8x6(0);
            }
        } else {
            setNoise8x6(matrixData?.column6Arr[7]);
        }

        //noise 8x7
        if (matrixData?.column7Arr[7] !== undefined && noiseLevel > random8x7) {
            if (matrixData?.column7Arr[7] === 0) {
                setNoise8x7(1);
            } else {
                setNoise8x7(0);
            }
        } else {
            setNoise8x7(matrixData?.column7Arr[7]);
        }

        //noise 8x8
        if (matrixData?.column8Arr[7] !== undefined && noiseLevel > random8x8) {
            if (matrixData?.column8Arr[7] === 0) {
                setNoise8x8(1);
            } else {
                setNoise8x8(0);
            }
        } else {
            setNoise8x8(matrixData?.column8Arr[7]);
        }

        //noise 8x9
        if (matrixData?.column9Arr[7] !== undefined && noiseLevel > random8x9) {
            if (matrixData?.column9Arr[7] === 0) {
                setNoise8x9(1);
            } else {
                setNoise8x9(0);
            }
        } else {
            setNoise8x9(matrixData?.column9Arr[7]);
        }

        //noise 8x10
        if (matrixData?.column10Arr[7] !== undefined && noiseLevel > random8x10) {
            if (matrixData?.column10Arr[7] === 0) {
                setNoise8x10(1);
            } else {
                setNoise8x10(0);
            }
        } else {
            setNoise8x10(matrixData?.column10Arr[7]);
        }

        //noise 8x11
        if (matrixData?.column11Arr[7] !== undefined && noiseLevel > random8x11) {
            if (matrixData?.column11Arr[7] === 0) {
                setNoise8x11(1);
            } else {
                setNoise8x11(0);
            }
        } else {
            setNoise8x11(matrixData?.column11Arr[7]);
        }

        //noise 8x12
        if (matrixData?.column12Arr[7] !== undefined && noiseLevel > random8x12) {
            if (matrixData?.column12Arr[7] === 0) {
                setNoise8x12(1);
            } else {
                setNoise8x12(0);
            }
        } else {
            setNoise8x12(matrixData?.column12Arr[7]);
        }

        //noise 8x13
        if (matrixData?.column13Arr[7] !== undefined && noiseLevel > random8x13) {
            if (matrixData?.column13Arr[7] === 0) {
                setNoise8x13(1);
            } else {
                setNoise8x13(0);
            }
        } else {
            setNoise8x13(matrixData?.column13Arr[7]);
        }

        //noise 8x14
        if (matrixData?.column14Arr[7] !== undefined && noiseLevel > random8x14) {
            if (matrixData?.column14Arr[7] === 0) {
                setNoise8x14(1);
            } else {
                setNoise8x14(0);
            }
        } else {
            setNoise8x14(matrixData?.column14Arr[7]);
        }

        //noise 8x15
        if (matrixData?.column15Arr[7] !== undefined && noiseLevel > random8x15) {
            if (matrixData?.column15Arr[7] === 0) {
                setNoise8x15(1);
            } else {
                setNoise8x15(0);
            }
        } else {
            setNoise8x15(matrixData?.column15Arr[7]);
        }

        //noise 8x16
        if (matrixData?.column16Arr[7] !== undefined && noiseLevel > random8x16) {
            if (matrixData?.column16Arr[7] === 0) {
                setNoise8x16(1);
            } else {
                setNoise8x16(0);
            }
        } else {
            setNoise8x16(matrixData?.column16Arr[7]);
        }

        //noise 8x17
        if (matrixData?.column17Arr[7] !== undefined && noiseLevel > random8x17) {
            if (matrixData?.column17Arr[7] === 0) {
                setNoise8x17(1);
            } else {
                setNoise8x17(0);
            }
        } else {
            setNoise8x17(matrixData?.column17Arr[7]);
        }

        //noise 8x18
        if (matrixData?.column18Arr[7] !== undefined && noiseLevel > random8x18) {
            if (matrixData?.column18Arr[7] === 0) {
                setNoise8x18(1);
            } else {
                setNoise8x18(0);
            }
        } else {
            setNoise8x18(matrixData?.column18Arr[7]);
        }

        //noise 8x19
        if (matrixData?.column19Arr[7] !== undefined && noiseLevel > random8x19) {
            if (matrixData?.column19Arr[7] === 0) {
                setNoise8x19(1);
            } else {
                setNoise8x19(0);
            }
        } else {
            setNoise8x19(matrixData?.column19Arr[7]);
        }

        //noise 8x20
        if (matrixData?.column20Arr[7] !== undefined && noiseLevel > random8x20) {
            if (matrixData?.column20Arr[7] === 0) {
                setNoise8x20(1);
            } else {
                setNoise8x20(0);
            }
        } else {
            setNoise8x20(matrixData?.column20Arr[7]);
        }

        //noise 9x1
        if (matrixData?.column1Arr[8] !== undefined && noiseLevel > random9x1) {
            if (matrixData?.column1Arr[8] === 0) {
                setNoise9x1(1);
            } else {
                setNoise9x1(0);
            }
        } else {
            setNoise9x1(matrixData?.column1Arr[8]);
        }

        //noise 9x2
        if (matrixData?.column2Arr[8] !== undefined && noiseLevel > random9x2) {
            if (matrixData?.column2Arr[8] === 0) {
                setNoise9x2(1);
            } else {
                setNoise9x2(0);
            }
        } else {
            setNoise9x2(matrixData?.column2Arr[8]);
        }

        //noise 9x3
        if (matrixData?.column3Arr[8] !== undefined && noiseLevel > random9x3) {
            if (matrixData?.column3Arr[8] === 0) {
                setNoise9x3(1);
            } else {
                setNoise9x3(0);
            }
        } else {
            setNoise9x3(matrixData?.column3Arr[8]);
        }

        //noise 9x4
        if (matrixData?.column4Arr[8] !== undefined && noiseLevel > random9x4) {
            if (matrixData?.column4Arr[8] === 0) {
                setNoise9x4(1);
            } else {
                setNoise9x4(0);
            }
        } else {
            setNoise9x4(matrixData?.column4Arr[8]);
        }

        //noise 9x5
        if (matrixData?.column5Arr[8] !== undefined && noiseLevel > random9x5) {
            if (matrixData?.column5Arr[8] === 0) {
                setNoise9x5(1);
            } else {
                setNoise9x5(0);
            }
        } else {
            setNoise9x5(matrixData?.column5Arr[8]);
        }

        //noise 9x6
        if (matrixData?.column6Arr[8] !== undefined && noiseLevel > random9x6) {
            if (matrixData?.column6Arr[8] === 0) {
                setNoise9x6(1);
            } else {
                setNoise9x6(0);
            }
        } else {
            setNoise9x6(matrixData?.column6Arr[8]);
        }

        //noise 9x7
        if (matrixData?.column7Arr[8] !== undefined && noiseLevel > random9x7) {
            if (matrixData?.column7Arr[8] === 0) {
                setNoise9x7(1);
            } else {
                setNoise9x7(0);
            }
        } else {
            setNoise9x7(matrixData?.column7Arr[8]);
        }

        //noise 9x8
        if (matrixData?.column8Arr[8] !== undefined && noiseLevel > random9x8) {
            if (matrixData?.column8Arr[8] === 0) {
                setNoise9x8(1);
            } else {
                setNoise9x8(0);
            }
        } else {
            setNoise9x8(matrixData?.column8Arr[8]);
        }

        //noise 9x9
        if (matrixData?.column9Arr[8] !== undefined && noiseLevel > random9x9) {
            if (matrixData?.column9Arr[8] === 0) {
                setNoise9x9(1);
            } else {
                setNoise9x9(0);
            }
        } else {
            setNoise9x9(matrixData?.column9Arr[8]);
        }

        //noise 9x10
        if (matrixData?.column10Arr[8] !== undefined && noiseLevel > random9x10) {
            if (matrixData?.column10Arr[8] === 0) {
                setNoise9x10(1);
            } else {
                setNoise9x10(0);
            }
        } else {
            setNoise9x10(matrixData?.column10Arr[8]);
        }

        //noise 9x11
        if (matrixData?.column11Arr[8] !== undefined && noiseLevel > random9x11) {
            if (matrixData?.column11Arr[8] === 0) {
                setNoise9x11(1);
            } else {
                setNoise9x11(0);
            }
        } else {
            setNoise9x11(matrixData?.column11Arr[8]);
        }

        //noise 9x12
        if (matrixData?.column12Arr[8] !== undefined && noiseLevel > random9x12) {
            if (matrixData?.column12Arr[8] === 0) {
                setNoise9x12(1);
            } else {
                setNoise9x12(0);
            }
        } else {
            setNoise9x12(matrixData?.column12Arr[8]);
        }

        //noise 9x13
        if (matrixData?.column13Arr[8] !== undefined && noiseLevel > random9x13) {
            if (matrixData?.column13Arr[8] === 0) {
                setNoise9x13(1);
            } else {
                setNoise9x13(0);
            }
        } else {
            setNoise9x13(matrixData?.column13Arr[8]);
        }

        //noise 9x14
        if (matrixData?.column14Arr[8] !== undefined && noiseLevel > random9x14) {
            if (matrixData?.column14Arr[8] === 0) {
                setNoise9x14(1);
            } else {
                setNoise9x14(0);
            }
        } else {
            setNoise9x14(matrixData?.column14Arr[8]);
        }

        //noise 9x15
        if (matrixData?.column15Arr[8] !== undefined && noiseLevel > random9x15) {
            if (matrixData?.column15Arr[8] === 0) {
                setNoise9x15(1);
            } else {
                setNoise9x15(0);
            }
        } else {
            setNoise9x15(matrixData?.column15Arr[8]);
        }

        //noise 9x16
        if (matrixData?.column16Arr[8] !== undefined && noiseLevel > random9x16) {
            if (matrixData?.column16Arr[8] === 0) {
                setNoise9x16(1);
            } else {
                setNoise9x16(0);
            }
        } else {
            setNoise9x16(matrixData?.column16Arr[8]);
        }

        //noise 9x17
        if (matrixData?.column17Arr[8] !== undefined && noiseLevel > random9x17) {
            if (matrixData?.column17Arr[8] === 0) {
                setNoise9x17(1);
            } else {
                setNoise9x17(0);
            }
        } else {
            setNoise9x17(matrixData?.column17Arr[8]);
        }

        //noise 9x18
        if (matrixData?.column18Arr[8] !== undefined && noiseLevel > random9x18) {
            if (matrixData?.column18Arr[8] === 0) {
                setNoise9x18(1);
            } else {
                setNoise9x18(0);
            }
        } else {
            setNoise9x18(matrixData?.column18Arr[8]);
        }

        //noise 9x19
        if (matrixData?.column19Arr[8] !== undefined && noiseLevel > random9x19) {
            if (matrixData?.column19Arr[8] === 0) {
                setNoise9x19(1);
            } else {
                setNoise9x19(0);
            }
        } else {
            setNoise9x19(matrixData?.column19Arr[8]);
        }

        //noise 9x20
        if (matrixData?.column20Arr[8] !== undefined && noiseLevel > random9x20) {
            if (matrixData?.column20Arr[8] === 0) {
                setNoise9x20(1);
            } else {
                setNoise9x20(0);
            }
        } else {
            setNoise9x20(matrixData?.column20Arr[8]);
        }

        //noise 10x1
        if (matrixData?.column1Arr[9] !== undefined && noiseLevel > random10x1) {
            if (matrixData?.column1Arr[9] === 0) {
                setNoise10x1(1);
            } else {
                setNoise10x1(0);
            }
        } else {
            setNoise10x1(matrixData?.column1Arr[9]);
        }

        //noise 10x2
        if (matrixData?.column2Arr[9] !== undefined && noiseLevel > random10x2) {
            if (matrixData?.column2Arr[9] === 0) {
                setNoise10x2(1);
            } else {
                setNoise10x2(0);
            }
        } else {
            setNoise10x2(matrixData?.column2Arr[9]);
        }

        //noise 10x3
        if (matrixData?.column3Arr[9] !== undefined && noiseLevel > random10x3) {
            if (matrixData?.column3Arr[9] === 0) {
                setNoise10x3(1);
            } else {
                setNoise10x3(0);
            }
        } else {
            setNoise10x3(matrixData?.column3Arr[9]);
        }

        //noise 10x4
        if (matrixData?.column4Arr[9] !== undefined && noiseLevel > random10x4) {
            if (matrixData?.column4Arr[9] === 0) {
                setNoise10x4(1);
            } else {
                setNoise10x4(0);
            }
        } else {
            setNoise10x4(matrixData?.column4Arr[9]);
        }

        //noise 10x5
        if (matrixData?.column5Arr[9] !== undefined && noiseLevel > random10x5) {
            if (matrixData?.column5Arr[9] === 0) {
                setNoise10x5(1);
            } else {
                setNoise10x5(0);
            }
        } else {
            setNoise10x5(matrixData?.column5Arr[9]);
        }

        //noise 10x6
        if (matrixData?.column6Arr[9] !== undefined && noiseLevel > random10x6) {
            if (matrixData?.column6Arr[9] === 0) {
                setNoise10x6(1);
            } else {
                setNoise10x6(0);
            }
        } else {
            setNoise10x6(matrixData?.column6Arr[9]);
        }

        //noise 10x7
        if (matrixData?.column7Arr[9] !== undefined && noiseLevel > random10x7) {
            if (matrixData?.column7Arr[9] === 0) {
                setNoise10x7(1);
            } else {
                setNoise10x7(0);
            }
        } else {
            setNoise10x7(matrixData?.column7Arr[9]);
        }

        //noise 10x8
        if (matrixData?.column8Arr[9] !== undefined && noiseLevel > random10x8) {
            if (matrixData?.column8Arr[9] === 0) {
                setNoise10x8(1);
            } else {
                setNoise10x8(0);
            }
        } else {
            setNoise10x8(matrixData?.column8Arr[9]);
        }

        //noise 10x9
        if (matrixData?.column9Arr[9] !== undefined && noiseLevel > random10x9) {
            if (matrixData?.column9Arr[9] === 0) {
                setNoise10x9(1);
            } else {
                setNoise10x9(0);
            }
        } else {
            setNoise10x9(matrixData?.column9Arr[9]);
        }

        //noise 10x10
        if (matrixData?.column10Arr[9] !== undefined && noiseLevel > random10x10) {
            if (matrixData?.column10Arr[9] === 0) {
                setNoise10x10(1);
            } else {
                setNoise10x10(0);
            }
        } else {
            setNoise10x10(matrixData?.column10Arr[9]);
        }

        //noise 10x11
        if (matrixData?.column11Arr[9] !== undefined && noiseLevel > random10x11) {
            if (matrixData?.column11Arr[9] === 0) {
                setNoise10x11(1);
            } else {
                setNoise10x11(0);
            }
        } else {
            setNoise10x11(matrixData?.column11Arr[9]);
        }

        //noise 10x12
        if (matrixData?.column12Arr[9] !== undefined && noiseLevel > random10x12) {
            if (matrixData?.column12Arr[9] === 0) {
                setNoise10x12(1);
            } else {
                setNoise10x12(0);
            }
        } else {
            setNoise10x12(matrixData?.column12Arr[9]);
        }

        //noise 10x13
        if (matrixData?.column13Arr[9] !== undefined && noiseLevel > random10x13) {
            if (matrixData?.column13Arr[9] === 0) {
                setNoise10x13(1);
            } else {
                setNoise10x13(0);
            }
        } else {
            setNoise10x13(matrixData?.column13Arr[9]);
        }

        //noise 10x14
        if (matrixData?.column14Arr[9] !== undefined && noiseLevel > random10x14) {
            if (matrixData?.column14Arr[9] === 0) {
                setNoise10x14(1);
            } else {
                setNoise10x14(0);
            }
        } else {
            setNoise10x14(matrixData?.column14Arr[9]);
        }

        //noise 10x15
        if (matrixData?.column15Arr[9] !== undefined && noiseLevel > random10x15) {
            if (matrixData?.column15Arr[9] === 0) {
                setNoise10x15(1);
            } else {
                setNoise10x15(0);
            }
        } else {
            setNoise10x15(matrixData?.column15Arr[9]);
        }

        //noise 10x16
        if (matrixData?.column16Arr[9] !== undefined && noiseLevel > random10x16) {
            if (matrixData?.column16Arr[9] === 0) {
                setNoise10x16(1);
            } else {
                setNoise10x16(0);
            }
        } else {
            setNoise10x16(matrixData?.column16Arr[9]);
        }

        //noise 10x17
        if (matrixData?.column17Arr[9] !== undefined && noiseLevel > random10x17) {
            if (matrixData?.column17Arr[9] === 0) {
                setNoise10x17(1);
            } else {
                setNoise10x17(0);
            }
        } else {
            setNoise10x17(matrixData?.column17Arr[9]);
        }

        //noise 10x18
        if (matrixData?.column18Arr[9] !== undefined && noiseLevel > random10x18) {
            if (matrixData?.column18Arr[9] === 0) {
                setNoise10x18(1);
            } else {
                setNoise10x18(0);
            }
        } else {
            setNoise10x18(matrixData?.column18Arr[9]);
        }

        //noise 10x19
        if (matrixData?.column19Arr[9] !== undefined && noiseLevel > random10x19) {
            if (matrixData?.column19Arr[9] === 0) {
                setNoise10x19(1);
            } else {
                setNoise10x19(0);
            }
        } else {
            setNoise10x19(matrixData?.column19Arr[9]);
        }

        //noise 10x20
        if (matrixData?.column20Arr[9] !== undefined && noiseLevel > random10x20) {
            if (matrixData?.column20Arr[9] === 0) {
                setNoise10x20(1);
            } else {
                setNoise10x20(0);
            }
        } else {
            setNoise10x20(matrixData?.column20Arr[9]);
        }

        //noise 11x1
        if (matrixData?.column1Arr[10] !== undefined && noiseLevel > random11x1) {
            if (matrixData?.column1Arr[10] === 0) {
                setNoise11x1(1);
            } else {
                setNoise11x1(0);
            }
        } else {
            setNoise11x1(matrixData?.column1Arr[10]);
        }

        //noise 11x2
        if (matrixData?.column2Arr[10] !== undefined && noiseLevel > random11x2) {
            if (matrixData?.column2Arr[10] === 0) {
                setNoise11x2(1);
            } else {
                setNoise11x2(0);
            }
        } else {
            setNoise11x2(matrixData?.column2Arr[10]);
        }

        //noise 11x3
        if (matrixData?.column3Arr[10] !== undefined && noiseLevel > random11x3) {
            if (matrixData?.column3Arr[10] === 0) {
                setNoise11x3(1);
            } else {
                setNoise11x3(0);
            }
        } else {
            setNoise11x3(matrixData?.column3Arr[10]);
        }

        //noise 11x4
        if (matrixData?.column4Arr[10] !== undefined && noiseLevel > random11x4) {
            if (matrixData?.column4Arr[10] === 0) {
                setNoise11x4(1);
            } else {
                setNoise11x4(0);
            }
        } else {
            setNoise11x4(matrixData?.column4Arr[10]);
        }

        //noise 11x5
        if (matrixData?.column5Arr[10] !== undefined && noiseLevel > random11x5) {
            if (matrixData?.column5Arr[10] === 0) {
                setNoise11x5(1);
            } else {
                setNoise11x5(0);
            }
        } else {
            setNoise11x5(matrixData?.column5Arr[10]);
        }

        //noise 11x6
        if (matrixData?.column6Arr[10] !== undefined && noiseLevel > random11x6) {
            if (matrixData?.column6Arr[10] === 0) {
                setNoise11x6(1);
            } else {
                setNoise11x6(0);
            }
        } else {
            setNoise11x6(matrixData?.column6Arr[10]);
        }

        //noise 11x7
        if (matrixData?.column7Arr[10] !== undefined && noiseLevel > random11x7) {
            if (matrixData?.column7Arr[10] === 0) {
                setNoise11x7(1);
            } else {
                setNoise11x7(0);
            }
        } else {
            setNoise11x7(matrixData?.column7Arr[10]);
        }

        //noise 11x8
        if (matrixData?.column8Arr[10] !== undefined && noiseLevel > random11x8) {
            if (matrixData?.column8Arr[10] === 0) {
                setNoise11x8(1);
            } else {
                setNoise11x8(0);
            }
        } else {
            setNoise11x8(matrixData?.column8Arr[10]);
        }

        //noise 11x9
        if (matrixData?.column9Arr[10] !== undefined && noiseLevel > random11x9) {
            if (matrixData?.column9Arr[10] === 0) {
                setNoise11x9(1);
            } else {
                setNoise11x9(0);
            }
        } else {
            setNoise11x9(matrixData?.column9Arr[10]);
        }

        //noise 11x10
        if (matrixData?.column10Arr[10] !== undefined && noiseLevel > random11x10) {
            if (matrixData?.column10Arr[10] === 0) {
                setNoise11x10(1);
            } else {
                setNoise11x10(0);
            }
        } else {
            setNoise11x10(matrixData?.column10Arr[10]);
        }

        //noise 11x11
        if (matrixData?.column11Arr[10] !== undefined && noiseLevel > random11x11) {
            if (matrixData?.column11Arr[10] === 0) {
                setNoise11x11(1);
            } else {
                setNoise11x11(0);
            }
        } else {
            setNoise11x11(matrixData?.column11Arr[10]);
        }

        //noise 11x12
        if (matrixData?.column12Arr[10] !== undefined && noiseLevel > random11x12) {
            if (matrixData?.column12Arr[10] === 0) {
                setNoise11x12(1);
            } else {
                setNoise11x12(0);
            }
        } else {
            setNoise11x12(matrixData?.column12Arr[10]);
        }

        //noise 11x13
        if (matrixData?.column13Arr[10] !== undefined && noiseLevel > random11x13) {
            if (matrixData?.column13Arr[10] === 0) {
                setNoise11x13(1);
            } else {
                setNoise11x13(0);
            }
        } else {
            setNoise11x13(matrixData?.column13Arr[10]);
        }

        //noise 11x14
        if (matrixData?.column14Arr[10] !== undefined && noiseLevel > random11x14) {
            if (matrixData?.column14Arr[10] === 0) {
                setNoise11x14(1);
            } else {
                setNoise11x14(0);
            }
        } else {
            setNoise11x14(matrixData?.column14Arr[10]);
        }

        //noise 11x15
        if (matrixData?.column15Arr[10] !== undefined && noiseLevel > random11x15) {
            if (matrixData?.column15Arr[10] === 0) {
                setNoise11x15(1);
            } else {
                setNoise11x15(0);
            }
        } else {
            setNoise11x15(matrixData?.column15Arr[10]);
        }

        //noise 11x16
        if (matrixData?.column16Arr[10] !== undefined && noiseLevel > random11x16) {
            if (matrixData?.column16Arr[10] === 0) {
                setNoise11x16(1);
            } else {
                setNoise11x16(0);
            }
        } else {
            setNoise11x16(matrixData?.column16Arr[10]);
        }

        //noise 11x17
        if (matrixData?.column17Arr[10] !== undefined && noiseLevel > random11x17) {
            if (matrixData?.column17Arr[10] === 0) {
                setNoise11x17(1);
            } else {
                setNoise11x17(0);
            }
        } else {
            setNoise11x17(matrixData?.column17Arr[10]);
        }

        //noise 11x18
        if (matrixData?.column18Arr[10] !== undefined && noiseLevel > random11x18) {
            if (matrixData?.column18Arr[10] === 0) {
                setNoise11x18(1);
            } else {
                setNoise11x18(0);
            }
        } else {
            setNoise11x18(matrixData?.column18Arr[10]);
        }

        //noise 11x19
        if (matrixData?.column19Arr[10] !== undefined && noiseLevel > random11x19) {
            if (matrixData?.column19Arr[10] === 0) {
                setNoise11x19(1);
            } else {
                setNoise11x19(0);
            }
        } else {
            setNoise11x19(matrixData?.column19Arr[10]);
        }

        //noise 11x20
        if (matrixData?.column20Arr[10] !== undefined && noiseLevel > random11x20) {
            if (matrixData?.column20Arr[10] === 0) {
                setNoise11x20(1);
            } else {
                setNoise11x20(0);
            }
        } else {
            setNoise11x20(matrixData?.column20Arr[10]);
        }

        //noise 12x1
        if (matrixData?.column1Arr[11] !== undefined && noiseLevel > random12x1) {
            if (matrixData?.column1Arr[11] === 0) {
                setNoise12x1(1);
            } else {
                setNoise12x1(0);
            }
        } else {
            setNoise12x1(matrixData?.column1Arr[11]);
        }

        //noise 12x2
        if (matrixData?.column2Arr[11] !== undefined && noiseLevel > random12x2) {
            if (matrixData?.column2Arr[11] === 0) {
                setNoise12x2(1);
            } else {
                setNoise12x2(0);
            }
        } else {
            setNoise12x2(matrixData?.column2Arr[11]);
        }

        //noise 12x3
        if (matrixData?.column3Arr[11] !== undefined && noiseLevel > random12x3) {
            if (matrixData?.column3Arr[11] === 0) {
                setNoise12x3(1);
            } else {
                setNoise12x3(0);
            }
        } else {
            setNoise12x3(matrixData?.column3Arr[11]);
        }

        //noise 12x4
        if (matrixData?.column4Arr[11] !== undefined && noiseLevel > random12x4) {
            if (matrixData?.column4Arr[11] === 0) {
                setNoise12x4(1);
            } else {
                setNoise12x4(0);
            }
        } else {
            setNoise12x4(matrixData?.column4Arr[11]);
        }

        //noise 12x5
        if (matrixData?.column5Arr[11] !== undefined && noiseLevel > random12x5) {
            if (matrixData?.column5Arr[11] === 0) {
                setNoise12x5(1);
            } else {
                setNoise12x5(0);
            }
        } else {
            setNoise12x5(matrixData?.column5Arr[11]);
        }

        //noise 12x6
        if (matrixData?.column6Arr[11] !== undefined && noiseLevel > random12x6) {
            if (matrixData?.column6Arr[11] === 0) {
                setNoise12x6(1);
            } else {
                setNoise12x6(0);
            }
        } else {
            setNoise12x6(matrixData?.column6Arr[11]);
        }

        //noise 12x7
        if (matrixData?.column7Arr[11] !== undefined && noiseLevel > random12x7) {
            if (matrixData?.column7Arr[11] === 0) {
                setNoise12x7(1);
            } else {
                setNoise12x7(0);
            }
        } else {
            setNoise12x7(matrixData?.column7Arr[11]);
        }

        //noise 12x8
        if (matrixData?.column8Arr[11] !== undefined && noiseLevel > random12x8) {
            if (matrixData?.column8Arr[11] === 0) {
                setNoise12x8(1);
            } else {
                setNoise12x8(0);
            }
        } else {
            setNoise12x8(matrixData?.column8Arr[11]);
        }

        //noise 12x9
        if (matrixData?.column9Arr[11] !== undefined && noiseLevel > random12x9) {
            if (matrixData?.column9Arr[11] === 0) {
                setNoise12x9(1);
            } else {
                setNoise12x9(0);
            }
        } else {
            setNoise12x9(matrixData?.column9Arr[11]);
        }

        //noise 12x10
        if (matrixData?.column10Arr[11] !== undefined && noiseLevel > random12x10) {
            if (matrixData?.column10Arr[11] === 0) {
                setNoise12x10(1);
            } else {
                setNoise12x10(0);
            }
        } else {
            setNoise12x10(matrixData?.column10Arr[11]);
        }

        //noise 12x11
        if (matrixData?.column11Arr[11] !== undefined && noiseLevel > random12x11) {
            if (matrixData?.column11Arr[11] === 0) {
                setNoise12x11(1);
            } else {
                setNoise12x11(0);
            }
        } else {
            setNoise12x11(matrixData?.column11Arr[11]);
        }

        //noise 12x12
        if (matrixData?.column12Arr[11] !== undefined && noiseLevel > random12x12) {
            if (matrixData?.column12Arr[11] === 0) {
                setNoise12x12(1);
            } else {
                setNoise12x12(0);
            }
        } else {
            setNoise12x12(matrixData?.column12Arr[11]);
        }

        //noise 12x13
        if (matrixData?.column13Arr[11] !== undefined && noiseLevel > random12x13) {
            if (matrixData?.column13Arr[11] === 0) {
                setNoise12x13(1);
            } else {
                setNoise12x13(0);
            }
        } else {
            setNoise12x13(matrixData?.column13Arr[11]);
        }

        //noise 12x14
        if (matrixData?.column14Arr[11] !== undefined && noiseLevel > random12x14) {
            if (matrixData?.column14Arr[11] === 0) {
                setNoise12x14(1);
            } else {
                setNoise12x14(0);
            }
        } else {
            setNoise12x14(matrixData?.column14Arr[11]);
        }

        //noise 12x15
        if (matrixData?.column15Arr[11] !== undefined && noiseLevel > random12x15) {
            if (matrixData?.column15Arr[11] === 0) {
                setNoise12x15(1);
            } else {
                setNoise12x15(0);
            }
        } else {
            setNoise12x15(matrixData?.column15Arr[11]);
        }

        //noise 12x16
        if (matrixData?.column16Arr[11] !== undefined && noiseLevel > random12x16) {
            if (matrixData?.column16Arr[11] === 0) {
                setNoise12x16(1);
            } else {
                setNoise12x16(0);
            }
        } else {
            setNoise12x16(matrixData?.column16Arr[11]);
        }

        //noise 12x17
        if (matrixData?.column17Arr[11] !== undefined && noiseLevel > random12x17) {
            if (matrixData?.column17Arr[11] === 0) {
                setNoise12x17(1);
            } else {
                setNoise12x17(0);
            }
        } else {
            setNoise12x17(matrixData?.column17Arr[11]);
        }

        //noise 12x18
        if (matrixData?.column18Arr[11] !== undefined && noiseLevel > random12x18) {
            if (matrixData?.column18Arr[11] === 0) {
                setNoise12x18(1);
            } else {
                setNoise12x18(0);
            }
        } else {
            setNoise12x18(matrixData?.column18Arr[11]);
        }

        //noise 12x19
        if (matrixData?.column19Arr[11] !== undefined && noiseLevel > random12x19) {
            if (matrixData?.column19Arr[11] === 0) {
                setNoise12x19(1);
            } else {
                setNoise12x19(0);
            }
        } else {
            setNoise12x19(matrixData?.column19Arr[11]);
        }

        //noise 12x20
        if (matrixData?.column20Arr[11] !== undefined && noiseLevel > random12x20) {
            if (matrixData?.column20Arr[11] === 0) {
                setNoise12x20(1);
            } else {
                setNoise12x20(0);
            }
        } else {
            setNoise12x20(matrixData?.column20Arr[11]);
        }

        //noise 13x1
        if (matrixData?.column1Arr[12] !== undefined && noiseLevel > random13x1) {
            if (matrixData?.column1Arr[12] === 0) {
                setNoise13x1(1);
            } else {
                setNoise13x1(0);
            }
        } else {
            setNoise13x1(matrixData?.column1Arr[12]);
        }

        //noise 13x2
        if (matrixData?.column2Arr[12] !== undefined && noiseLevel > random13x2) {
            if (matrixData?.column2Arr[12] === 0) {
                setNoise13x2(1);
            } else {
                setNoise13x2(0);
            }
        } else {
            setNoise13x2(matrixData?.column2Arr[12]);
        }

        //noise 13x3
        if (matrixData?.column3Arr[12] !== undefined && noiseLevel > random13x3) {
            if (matrixData?.column3Arr[12] === 0) {
                setNoise13x3(1);
            } else {
                setNoise13x3(0);
            }
        } else {
            setNoise13x3(matrixData?.column3Arr[12]);
        }

        //noise 13x4
        if (matrixData?.column4Arr[12] !== undefined && noiseLevel > random13x4) {
            if (matrixData?.column4Arr[12] === 0) {
                setNoise13x4(1);
            } else {
                setNoise13x4(0);
            }
        } else {
            setNoise13x4(matrixData?.column4Arr[12]);
        }

        //noise 13x5
        if (matrixData?.column5Arr[12] !== undefined && noiseLevel > random13x5) {
            if (matrixData?.column5Arr[12] === 0) {
                setNoise13x5(1);
            } else {
                setNoise13x5(0);
            }
        } else {
            setNoise13x5(matrixData?.column5Arr[12]);
        }

        //noise 13x6
        if (matrixData?.column6Arr[12] !== undefined && noiseLevel > random13x6) {
            if (matrixData?.column6Arr[12] === 0) {
                setNoise13x6(1);
            } else {
                setNoise13x6(0);
            }
        } else {
            setNoise13x6(matrixData?.column6Arr[12]);
        }

        //noise 13x7
        if (matrixData?.column7Arr[12] !== undefined && noiseLevel > random13x7) {
            if (matrixData?.column7Arr[12] === 0) {
                setNoise13x7(1);
            } else {
                setNoise13x7(0);
            }
        } else {
            setNoise13x7(matrixData?.column7Arr[12]);
        }

        //noise 13x8
        if (matrixData?.column8Arr[12] !== undefined && noiseLevel > random13x8) {
            if (matrixData?.column8Arr[12] === 0) {
                setNoise13x8(1);
            } else {
                setNoise13x8(0);
            }
        } else {
            setNoise13x8(matrixData?.column8Arr[12]);
        }

        //noise 13x9
        if (matrixData?.column9Arr[12] !== undefined && noiseLevel > random13x9) {
            if (matrixData?.column9Arr[12] === 0) {
                setNoise13x9(1);
            } else {
                setNoise13x9(0);
            }
        } else {
            setNoise13x9(matrixData?.column9Arr[12]);
        }

        //noise 13x10
        if (matrixData?.column10Arr[12] !== undefined && noiseLevel > random13x10) {
            if (matrixData?.column10Arr[12] === 0) {
                setNoise13x10(1);
            } else {
                setNoise13x10(0);
            }
        } else {
            setNoise13x10(matrixData?.column10Arr[12]);
        }

        //noise 13x11
        if (matrixData?.column11Arr[12] !== undefined && noiseLevel > random13x11) {
            if (matrixData?.column11Arr[12] === 0) {
                setNoise13x11(1);
            } else {
                setNoise13x11(0);
            }
        } else {
            setNoise13x11(matrixData?.column11Arr[12]);
        }

        //noise 13x12
        if (matrixData?.column12Arr[12] !== undefined && noiseLevel > random13x12) {
            if (matrixData?.column12Arr[12] === 0) {
                setNoise13x12(1);
            } else {
                setNoise13x12(0);
            }
        } else {
            setNoise13x12(matrixData?.column12Arr[12]);
        }

        //noise 13x13
        if (matrixData?.column13Arr[12] !== undefined && noiseLevel > random13x13) {
            if (matrixData?.column13Arr[12] === 0) {
                setNoise13x13(1);
            } else {
                setNoise13x13(0);
            }
        } else {
            setNoise13x13(matrixData?.column13Arr[12]);
        }

        //noise 13x14
        if (matrixData?.column14Arr[12] !== undefined && noiseLevel > random13x14) {
            if (matrixData?.column14Arr[12] === 0) {
                setNoise13x14(1);
            } else {
                setNoise13x14(0);
            }
        } else {
            setNoise13x14(matrixData?.column14Arr[12]);
        }

        //noise 13x15
        if (matrixData?.column15Arr[12] !== undefined && noiseLevel > random13x15) {
            if (matrixData?.column15Arr[12] === 0) {
                setNoise13x15(1);
            } else {
                setNoise13x15(0);
            }
        } else {
            setNoise13x15(matrixData?.column15Arr[12]);
        }

        //noise 13x16
        if (matrixData?.column16Arr[12] !== undefined && noiseLevel > random13x16) {
            if (matrixData?.column16Arr[12] === 0) {
                setNoise13x16(1);
            } else {
                setNoise13x16(0);
            }
        } else {
            setNoise13x16(matrixData?.column16Arr[12]);
        }

        //noise 13x17
        if (matrixData?.column17Arr[12] !== undefined && noiseLevel > random13x17) {
            if (matrixData?.column17Arr[12] === 0) {
                setNoise13x17(1);
            } else {
                setNoise13x17(0);
            }
        } else {
            setNoise13x17(matrixData?.column17Arr[12]);
        }

        //noise 13x18
        if (matrixData?.column18Arr[12] !== undefined && noiseLevel > random13x18) {
            if (matrixData?.column18Arr[12] === 0) {
                setNoise13x18(1);
            } else {
                setNoise13x18(0);
            }
        } else {
            setNoise13x18(matrixData?.column18Arr[12]);
        }

        //noise 13x19
        if (matrixData?.column19Arr[12] !== undefined && noiseLevel > random13x19) {
            if (matrixData?.column19Arr[12] === 0) {
                setNoise13x19(1);
            } else {
                setNoise13x19(0);
            }
        } else {
            setNoise13x19(matrixData?.column19Arr[12]);
        }

        //noise 13x20
        if (matrixData?.column20Arr[12] !== undefined && noiseLevel > random13x20) {
            if (matrixData?.column20Arr[12] === 0) {
                setNoise13x20(1);
            } else {
                setNoise13x20(0);
            }
        } else {
            setNoise13x20(matrixData?.column20Arr[12]);
        }
    };

    const simulateNoise = () => {
        simulateNoisePart1();
        simulateNoisePart2();
    };

    // row 1 classNames
    const [className1x1, setClassName1x1] = useState<string>('flip-number');
    const [className1x2, setClassName1x2] = useState<string>('flip-number');
    const [className1x3, setClassName1x3] = useState<string>('flip-number');
    const [className1x4, setClassName1x4] = useState<string>('flip-number');
    const [className1x5, setClassName1x5] = useState<string>('flip-number');
    const [className1x6, setClassName1x6] = useState<string>('flip-number');
    const [className1x7, setClassName1x7] = useState<string>('flip-number');
    const [className1x8, setClassName1x8] = useState<string>('flip-number');
    const [className1x9, setClassName1x9] = useState<string>('flip-number');
    const [className1x10, setClassName1x10] = useState<string>('flip-number');
    const [className1x11, setClassName1x11] = useState<string>('flip-number');
    const [className1x12, setClassName1x12] = useState<string>('flip-number');
    const [className1x13, setClassName1x13] = useState<string>('flip-number');
    const [className1x14, setClassName1x14] = useState<string>('flip-number');
    const [className1x15, setClassName1x15] = useState<string>('flip-number');
    const [className1x16, setClassName1x16] = useState<string>('flip-number flip-external');
    const [className1x17, setClassName1x17] = useState<string>('flip-number flip-external');
    const [className1x18, setClassName1x18] = useState<string>('flip-number flip-external');
    const [className1x19, setClassName1x19] = useState<string>('flip-number flip-external');
    const [className1x20, setClassName1x20] = useState<string>('flip-number flip-external');

    // row 2 classNames
    const [className2x1, setClassName2x1] = useState<string>('flip-number');
    const [className2x2, setClassName2x2] = useState<string>('flip-number');
    const [className2x3, setClassName2x3] = useState<string>('flip-number');
    const [className2x4, setClassName2x4] = useState<string>('flip-number');
    const [className2x5, setClassName2x5] = useState<string>('flip-number');
    const [className2x6, setClassName2x6] = useState<string>('flip-number');
    const [className2x7, setClassName2x7] = useState<string>('flip-number');
    const [className2x8, setClassName2x8] = useState<string>('flip-number');
    const [className2x9, setClassName2x9] = useState<string>('flip-number');
    const [className2x10, setClassName2x10] = useState<string>('flip-number');
    const [className2x11, setClassName2x11] = useState<string>('flip-number');
    const [className2x12, setClassName2x12] = useState<string>('flip-number');
    const [className2x13, setClassName2x13] = useState<string>('flip-number');
    const [className2x14, setClassName2x14] = useState<string>('flip-number');
    const [className2x15, setClassName2x15] = useState<string>('flip-number');
    const [className2x16, setClassName2x16] = useState<string>('flip-number flip-external');
    const [className2x17, setClassName2x17] = useState<string>('flip-number flip-external');
    const [className2x18, setClassName2x18] = useState<string>('flip-number flip-external');
    const [className2x19, setClassName2x19] = useState<string>('flip-number flip-external');
    const [className2x20, setClassName2x20] = useState<string>('flip-number flip-external');

    // row 3 classNames
    const [className3x1, setClassName3x1] = useState<string>('flip-number');
    const [className3x2, setClassName3x2] = useState<string>('flip-number');
    const [className3x3, setClassName3x3] = useState<string>('flip-number');
    const [className3x4, setClassName3x4] = useState<string>('flip-number');
    const [className3x5, setClassName3x5] = useState<string>('flip-number');
    const [className3x6, setClassName3x6] = useState<string>('flip-number');
    const [className3x7, setClassName3x7] = useState<string>('flip-number');
    const [className3x8, setClassName3x8] = useState<string>('flip-number');
    const [className3x9, setClassName3x9] = useState<string>('flip-number');
    const [className3x10, setClassName3x10] = useState<string>('flip-number');
    const [className3x11, setClassName3x11] = useState<string>('flip-number');
    const [className3x12, setClassName3x12] = useState<string>('flip-number');
    const [className3x13, setClassName3x13] = useState<string>('flip-number');
    const [className3x14, setClassName3x14] = useState<string>('flip-number');
    const [className3x15, setClassName3x15] = useState<string>('flip-number');
    const [className3x16, setClassName3x16] = useState<string>('flip-number flip-external');
    const [className3x17, setClassName3x17] = useState<string>('flip-number flip-external');
    const [className3x18, setClassName3x18] = useState<string>('flip-number flip-external');
    const [className3x19, setClassName3x19] = useState<string>('flip-number flip-external');
    const [className3x20, setClassName3x20] = useState<string>('flip-number flip-external');

    // row 4 classNames
    const [className4x1, setClassName4x1] = useState<string>('flip-number');
    const [className4x2, setClassName4x2] = useState<string>('flip-number');
    const [className4x3, setClassName4x3] = useState<string>('flip-number');
    const [className4x4, setClassName4x4] = useState<string>('flip-number');
    const [className4x5, setClassName4x5] = useState<string>('flip-number');
    const [className4x6, setClassName4x6] = useState<string>('flip-number');
    const [className4x7, setClassName4x7] = useState<string>('flip-number');
    const [className4x8, setClassName4x8] = useState<string>('flip-number');
    const [className4x9, setClassName4x9] = useState<string>('flip-number');
    const [className4x10, setClassName4x10] = useState<string>('flip-number');
    const [className4x11, setClassName4x11] = useState<string>('flip-number');
    const [className4x12, setClassName4x12] = useState<string>('flip-number');
    const [className4x13, setClassName4x13] = useState<string>('flip-number');
    const [className4x14, setClassName4x14] = useState<string>('flip-number');
    const [className4x15, setClassName4x15] = useState<string>('flip-number');
    const [className4x16, setClassName4x16] = useState<string>('flip-number flip-external');
    const [className4x17, setClassName4x17] = useState<string>('flip-number flip-external');
    const [className4x18, setClassName4x18] = useState<string>('flip-number flip-external');
    const [className4x19, setClassName4x19] = useState<string>('flip-number flip-external');
    const [className4x20, setClassName4x20] = useState<string>('flip-number flip-external');

    // row 5 classNames
    const [className5x1, setClassName5x1] = useState<string>('flip-number');
    const [className5x2, setClassName5x2] = useState<string>('flip-number');
    const [className5x3, setClassName5x3] = useState<string>('flip-number');
    const [className5x4, setClassName5x4] = useState<string>('flip-number');
    const [className5x5, setClassName5x5] = useState<string>('flip-number');
    const [className5x6, setClassName5x6] = useState<string>('flip-number');
    const [className5x7, setClassName5x7] = useState<string>('flip-number');
    const [className5x8, setClassName5x8] = useState<string>('flip-number');
    const [className5x9, setClassName5x9] = useState<string>('flip-number');
    const [className5x10, setClassName5x10] = useState<string>('flip-number');
    const [className5x11, setClassName5x11] = useState<string>('flip-number');
    const [className5x12, setClassName5x12] = useState<string>('flip-number');
    const [className5x13, setClassName5x13] = useState<string>('flip-number');
    const [className5x14, setClassName5x14] = useState<string>('flip-number');
    const [className5x15, setClassName5x15] = useState<string>('flip-number');
    const [className5x16, setClassName5x16] = useState<string>('flip-number flip-external');
    const [className5x17, setClassName5x17] = useState<string>('flip-number flip-external');
    const [className5x18, setClassName5x18] = useState<string>('flip-number flip-external');
    const [className5x19, setClassName5x19] = useState<string>('flip-number flip-external');
    const [className5x20, setClassName5x20] = useState<string>('flip-number flip-external');

    // row 6 classNames
    const [className6x1, setClassName6x1] = useState<string>('flip-number');
    const [className6x2, setClassName6x2] = useState<string>('flip-number');
    const [className6x3, setClassName6x3] = useState<string>('flip-number');
    const [className6x4, setClassName6x4] = useState<string>('flip-number');
    const [className6x5, setClassName6x5] = useState<string>('flip-number');
    const [className6x6, setClassName6x6] = useState<string>('flip-number');
    const [className6x7, setClassName6x7] = useState<string>('flip-number');
    const [className6x8, setClassName6x8] = useState<string>('flip-number');
    const [className6x9, setClassName6x9] = useState<string>('flip-number');
    const [className6x10, setClassName6x10] = useState<string>('flip-number');
    const [className6x11, setClassName6x11] = useState<string>('flip-number');
    const [className6x12, setClassName6x12] = useState<string>('flip-number');
    const [className6x13, setClassName6x13] = useState<string>('flip-number');
    const [className6x14, setClassName6x14] = useState<string>('flip-number');
    const [className6x15, setClassName6x15] = useState<string>('flip-number');
    const [className6x16, setClassName6x16] = useState<string>('flip-number flip-external');
    const [className6x17, setClassName6x17] = useState<string>('flip-number flip-external');
    const [className6x18, setClassName6x18] = useState<string>('flip-number flip-external');
    const [className6x19, setClassName6x19] = useState<string>('flip-number flip-external');
    const [className6x20, setClassName6x20] = useState<string>('flip-number flip-external');

    // row 7 classNames
    const [className7x1, setClassName7x1] = useState<string>('flip-number');
    const [className7x2, setClassName7x2] = useState<string>('flip-number');
    const [className7x3, setClassName7x3] = useState<string>('flip-number');
    const [className7x4, setClassName7x4] = useState<string>('flip-number');
    const [className7x5, setClassName7x5] = useState<string>('flip-number');
    const [className7x6, setClassName7x6] = useState<string>('flip-number');
    const [className7x7, setClassName7x7] = useState<string>('flip-number');
    const [className7x8, setClassName7x8] = useState<string>('flip-number');
    const [className7x9, setClassName7x9] = useState<string>('flip-number');
    const [className7x10, setClassName7x10] = useState<string>('flip-number');
    const [className7x11, setClassName7x11] = useState<string>('flip-number');
    const [className7x12, setClassName7x12] = useState<string>('flip-number');
    const [className7x13, setClassName7x13] = useState<string>('flip-number');
    const [className7x14, setClassName7x14] = useState<string>('flip-number');
    const [className7x15, setClassName7x15] = useState<string>('flip-number');
    const [className7x16, setClassName7x16] = useState<string>('flip-number flip-external');
    const [className7x17, setClassName7x17] = useState<string>('flip-number flip-external');
    const [className7x18, setClassName7x18] = useState<string>('flip-number flip-external');
    const [className7x19, setClassName7x19] = useState<string>('flip-number flip-external');
    const [className7x20, setClassName7x20] = useState<string>('flip-number flip-external');

    // row 8 classNames
    const [className8x1, setClassName8x1] = useState<string>('flip-number');
    const [className8x2, setClassName8x2] = useState<string>('flip-number');
    const [className8x3, setClassName8x3] = useState<string>('flip-number');
    const [className8x4, setClassName8x4] = useState<string>('flip-number');
    const [className8x5, setClassName8x5] = useState<string>('flip-number');
    const [className8x6, setClassName8x6] = useState<string>('flip-number');
    const [className8x7, setClassName8x7] = useState<string>('flip-number');
    const [className8x8, setClassName8x8] = useState<string>('flip-number');
    const [className8x9, setClassName8x9] = useState<string>('flip-number');
    const [className8x10, setClassName8x10] = useState<string>('flip-number');
    const [className8x11, setClassName8x11] = useState<string>('flip-number');
    const [className8x12, setClassName8x12] = useState<string>('flip-number');
    const [className8x13, setClassName8x13] = useState<string>('flip-number');
    const [className8x14, setClassName8x14] = useState<string>('flip-number');
    const [className8x15, setClassName8x15] = useState<string>('flip-number');
    const [className8x16, setClassName8x16] = useState<string>('flip-number flip-external');
    const [className8x17, setClassName8x17] = useState<string>('flip-number flip-external');
    const [className8x18, setClassName8x18] = useState<string>('flip-number flip-external');
    const [className8x19, setClassName8x19] = useState<string>('flip-number flip-external');
    const [className8x20, setClassName8x20] = useState<string>('flip-number flip-external');

    // row 9 classNames
    const [className9x1, setClassName9x1] = useState<string>('flip-number');
    const [className9x2, setClassName9x2] = useState<string>('flip-number');
    const [className9x3, setClassName9x3] = useState<string>('flip-number');
    const [className9x4, setClassName9x4] = useState<string>('flip-number');
    const [className9x5, setClassName9x5] = useState<string>('flip-number');
    const [className9x6, setClassName9x6] = useState<string>('flip-number');
    const [className9x7, setClassName9x7] = useState<string>('flip-number');
    const [className9x8, setClassName9x8] = useState<string>('flip-number');
    const [className9x9, setClassName9x9] = useState<string>('flip-number');
    const [className9x10, setClassName9x10] = useState<string>('flip-number');
    const [className9x11, setClassName9x11] = useState<string>('flip-number');
    const [className9x12, setClassName9x12] = useState<string>('flip-number');
    const [className9x13, setClassName9x13] = useState<string>('flip-number');
    const [className9x14, setClassName9x14] = useState<string>('flip-number');
    const [className9x15, setClassName9x15] = useState<string>('flip-number');
    const [className9x16, setClassName9x16] = useState<string>('flip-number flip-external');
    const [className9x17, setClassName9x17] = useState<string>('flip-number flip-external');
    const [className9x18, setClassName9x18] = useState<string>('flip-number flip-external');
    const [className9x19, setClassName9x19] = useState<string>('flip-number flip-external');
    const [className9x20, setClassName9x20] = useState<string>('flip-number flip-external');

    // row 10 classNames
    const [className10x1, setClassName10x1] = useState<string>('flip-number flip-v');
    const [className10x2, setClassName10x2] = useState<string>('flip-number flip-v');
    const [className10x3, setClassName10x3] = useState<string>('flip-number flip-v');
    const [className10x4, setClassName10x4] = useState<string>('flip-number flip-v');
    const [className10x5, setClassName10x5] = useState<string>('flip-number flip-v');
    const [className10x6, setClassName10x6] = useState<string>('flip-number flip-v');
    const [className10x7, setClassName10x7] = useState<string>('flip-number flip-v');
    const [className10x8, setClassName10x8] = useState<string>('flip-number flip-v');
    const [className10x9, setClassName10x9] = useState<string>('flip-number flip-v');
    const [className10x10, setClassName10x10] = useState<string>('flip-number flip-v');
    const [className10x11, setClassName10x11] = useState<string>('flip-number flip-v');
    const [className10x12, setClassName10x12] = useState<string>('flip-number flip-v');
    const [className10x13, setClassName10x13] = useState<string>('flip-number flip-v');
    const [className10x14, setClassName10x14] = useState<string>('flip-number flip-v');
    const [className10x15, setClassName10x15] = useState<string>('flip-number flip-v');
    const [className10x16, setClassName10x16] = useState<string>('flip-number flip-v');
    const [className10x17, setClassName10x17] = useState<string>('flip-number flip-v');
    const [className10x18, setClassName10x18] = useState<string>('flip-number flip-v');
    const [className10x19, setClassName10x19] = useState<string>('flip-number flip-v');
    const [className10x20, setClassName10x20] = useState<string>('flip-number flip-v');

    // row 11 classNames
    const [className11x1, setClassName11x1] = useState<string>('flip-number flip-v');
    const [className11x2, setClassName11x2] = useState<string>('flip-number flip-v');
    const [className11x3, setClassName11x3] = useState<string>('flip-number flip-v');
    const [className11x4, setClassName11x4] = useState<string>('flip-number flip-v');
    const [className11x5, setClassName11x5] = useState<string>('flip-number flip-v');
    const [className11x6, setClassName11x6] = useState<string>('flip-number flip-v');
    const [className11x7, setClassName11x7] = useState<string>('flip-number flip-v');
    const [className11x8, setClassName11x8] = useState<string>('flip-number flip-v');
    const [className11x9, setClassName11x9] = useState<string>('flip-number flip-v');
    const [className11x10, setClassName11x10] = useState<string>('flip-number flip-v');
    const [className11x11, setClassName11x11] = useState<string>('flip-number flip-v');
    const [className11x12, setClassName11x12] = useState<string>('flip-number flip-v');
    const [className11x13, setClassName11x13] = useState<string>('flip-number flip-v');
    const [className11x14, setClassName11x14] = useState<string>('flip-number flip-v');
    const [className11x15, setClassName11x15] = useState<string>('flip-number flip-v');
    const [className11x16, setClassName11x16] = useState<string>('flip-number flip-v');
    const [className11x17, setClassName11x17] = useState<string>('flip-number flip-v');
    const [className11x18, setClassName11x18] = useState<string>('flip-number flip-v');
    const [className11x19, setClassName11x19] = useState<string>('flip-number flip-v');
    const [className11x20, setClassName11x20] = useState<string>('flip-number flip-v');

    // row 12 classNames
    const [className12x1, setClassName12x1] = useState<string>('flip-number flip-v');
    const [className12x2, setClassName12x2] = useState<string>('flip-number flip-v');
    const [className12x3, setClassName12x3] = useState<string>('flip-number flip-v');
    const [className12x4, setClassName12x4] = useState<string>('flip-number flip-v');
    const [className12x5, setClassName12x5] = useState<string>('flip-number flip-v');
    const [className12x6, setClassName12x6] = useState<string>('flip-number flip-v');
    const [className12x7, setClassName12x7] = useState<string>('flip-number flip-v');
    const [className12x8, setClassName12x8] = useState<string>('flip-number flip-v');
    const [className12x9, setClassName12x9] = useState<string>('flip-number flip-v');
    const [className12x10, setClassName12x10] = useState<string>('flip-number flip-v');
    const [className12x11, setClassName12x11] = useState<string>('flip-number flip-v');
    const [className12x12, setClassName12x12] = useState<string>('flip-number flip-v');
    const [className12x13, setClassName12x13] = useState<string>('flip-number flip-v');
    const [className12x14, setClassName12x14] = useState<string>('flip-number flip-v');
    const [className12x15, setClassName12x15] = useState<string>('flip-number flip-v');
    const [className12x16, setClassName12x16] = useState<string>('flip-number flip-v');
    const [className12x17, setClassName12x17] = useState<string>('flip-number flip-v');
    const [className12x18, setClassName12x18] = useState<string>('flip-number flip-v');
    const [className12x19, setClassName12x19] = useState<string>('flip-number flip-v');
    const [className12x20, setClassName12x20] = useState<string>('flip-number flip-v');

    // row 13 classNames
    const [className13x1, setClassName13x1] = useState<string>('flip-number flip-v');
    const [className13x2, setClassName13x2] = useState<string>('flip-number flip-v');
    const [className13x3, setClassName13x3] = useState<string>('flip-number flip-v');
    const [className13x4, setClassName13x4] = useState<string>('flip-number flip-v');
    const [className13x5, setClassName13x5] = useState<string>('flip-number flip-v');
    const [className13x6, setClassName13x6] = useState<string>('flip-number flip-v');
    const [className13x7, setClassName13x7] = useState<string>('flip-number flip-v');
    const [className13x8, setClassName13x8] = useState<string>('flip-number flip-v');
    const [className13x9, setClassName13x9] = useState<string>('flip-number flip-v');
    const [className13x10, setClassName13x10] = useState<string>('flip-number flip-v');
    const [className13x11, setClassName13x11] = useState<string>('flip-number flip-v');
    const [className13x12, setClassName13x12] = useState<string>('flip-number flip-v');
    const [className13x13, setClassName13x13] = useState<string>('flip-number flip-v');
    const [className13x14, setClassName13x14] = useState<string>('flip-number flip-v');
    const [className13x15, setClassName13x15] = useState<string>('flip-number flip-v');
    const [className13x16, setClassName13x16] = useState<string>('flip-number flip-v');
    const [className13x17, setClassName13x17] = useState<string>('flip-number flip-v');
    const [className13x18, setClassName13x18] = useState<string>('flip-number flip-v');
    const [className13x19, setClassName13x19] = useState<string>('flip-number flip-v');
    const [className13x20, setClassName13x20] = useState<string>('flip-number flip-v');

    const [numberOfWrongBits, setNumberOfWrongBits] = useState<number>(0);

    const showFliped = () => {
        setNumberOfWrongBits(0);
        //row 1 show fliped
        if (noiseLevel > random1x1) {
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
            setClassName1x1('flip-number fliped');
        } else {
            setClassName1x1('flip-number');
        }

        if (noiseLevel > random1x2) {
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
            setClassName1x2('flip-number fliped');
        } else {
            setClassName1x2('flip-number');
        }

        if (noiseLevel > random1x3) {
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
            setClassName1x3('flip-number fliped');
        } else {
            setClassName1x3('flip-number');
        }

        if (noiseLevel > random1x4) {
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
            setClassName1x4('flip-number fliped');
        } else {
            setClassName1x4('flip-number');
        }

        if (noiseLevel > random1x5) {
            setClassName1x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x5('flip-number');
        }

        if (noiseLevel > random1x6) {
            setClassName1x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x6('flip-number');
        }

        if (noiseLevel > random1x7) {
            setClassName1x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x7('flip-number');
        }

        if (noiseLevel > random1x8) {
            setClassName1x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x8('flip-number');
        }

        if (noiseLevel > random1x9) {
            setClassName1x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x9('flip-number');
        }

        if (noiseLevel > random1x10) {
            setClassName1x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x10('flip-number');
        }

        if (noiseLevel > random1x11) {
            setClassName1x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x11('flip-number');
        }

        if (noiseLevel > random1x12) {
            setClassName1x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x12('flip-number');
        }

        if (noiseLevel > random1x13) {
            setClassName1x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x13('flip-number');
        }

        if (noiseLevel > random1x14) {
            setClassName1x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x14('flip-number');
        }

        if (noiseLevel > random1x15) {
            setClassName1x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x15('flip-number');
        }

        if (noiseLevel > random1x16) {
            setClassName1x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x16('flip-number flip-external');
        }

        if (noiseLevel > random1x17) {
            setClassName1x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x17('flip-number flip-external');
        }

        if (noiseLevel > random1x18) {
            setClassName1x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x18('flip-number flip-external');
        }

        if (noiseLevel > random1x19) {
            setClassName1x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x19('flip-number flip-external');
        }

        if (noiseLevel > random1x20) {
            setClassName1x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x20('flip-number flip-external');
        }

        //row 2 show fliped
        if (noiseLevel > random2x1) {
            setClassName2x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x1('flip-number');
        }

        if (noiseLevel > random2x2) {
            setClassName2x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x2('flip-number');
        }

        if (noiseLevel > random2x3) {
            setClassName2x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x3('flip-number');
        }

        if (noiseLevel > random2x4) {
            setClassName2x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x4('flip-number');
        }

        if (noiseLevel > random2x5) {
            setClassName2x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x5('flip-number');
        }

        if (noiseLevel > random2x6) {
            setClassName2x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x6('flip-number');
        }

        if (noiseLevel > random2x7) {
            setClassName2x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x7('flip-number');
        }

        if (noiseLevel > random2x8) {
            setClassName2x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x8('flip-number');
        }

        if (noiseLevel > random2x9) {
            setClassName2x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x9('flip-number');
        }

        if (noiseLevel > random2x10) {
            setClassName2x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x10('flip-number');
        }

        if (noiseLevel > random2x11) {
            setClassName2x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x11('flip-number');
        }

        if (noiseLevel > random2x12) {
            setClassName2x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x12('flip-number');
        }

        if (noiseLevel > random2x13) {
            setClassName2x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x13('flip-number');
        }

        if (noiseLevel > random2x14) {
            setClassName2x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x14('flip-number');
        }

        if (noiseLevel > random2x15) {
            setClassName2x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x15('flip-number');
        }

        if (noiseLevel > random2x16) {
            setClassName2x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x16('flip-number flip-external');
        }

        if (noiseLevel > random2x17) {
            setClassName2x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x17('flip-number flip-external');
        }

        if (noiseLevel > random2x18) {
            setClassName2x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x18('flip-number flip-external');
        }

        if (noiseLevel > random2x19) {
            setClassName2x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x19('flip-number flip-external');
        }

        if (noiseLevel > random2x20) {
            setClassName2x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x20('flip-number flip-external');
        }

        //row 3 show fliped
        if (noiseLevel > random3x1) {
            setClassName3x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x1('flip-number');
        }

        if (noiseLevel > random3x2) {
            setClassName3x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x2('flip-number');
        }

        if (noiseLevel > random3x3) {
            setClassName3x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x3('flip-number');
        }

        if (noiseLevel > random3x4) {
            setClassName3x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x4('flip-number');
        }

        if (noiseLevel > random3x5) {
            setClassName3x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x5('flip-number');
        }

        if (noiseLevel > random3x6) {
            setClassName3x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x6('flip-number');
        }

        if (noiseLevel > random3x7) {
            setClassName3x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x7('flip-number');
        }

        if (noiseLevel > random3x8) {
            setClassName3x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x8('flip-number');
        }

        if (noiseLevel > random3x9) {
            setClassName3x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x9('flip-number');
        }

        if (noiseLevel > random3x10) {
            setClassName3x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x10('flip-number');
        }

        if (noiseLevel > random3x11) {
            setClassName3x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x11('flip-number');
        }

        if (noiseLevel > random3x12) {
            setClassName3x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x12('flip-number');
        }

        if (noiseLevel > random3x13) {
            setClassName3x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x13('flip-number');
        }

        if (noiseLevel > random3x14) {
            setClassName3x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x14('flip-number');
        }

        if (noiseLevel > random3x15) {
            setClassName3x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x15('flip-number');
        }

        if (noiseLevel > random3x16) {
            setClassName3x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x16('flip-number flip-external');
        }

        if (noiseLevel > random3x17) {
            setClassName3x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x17('flip-number flip-external');
        }

        if (noiseLevel > random3x18) {
            setClassName3x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x18('flip-number flip-external');
        }

        if (noiseLevel > random3x19) {
            setClassName3x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x19('flip-number flip-external');
        }

        if (noiseLevel > random3x20) {
            setClassName3x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x20('flip-number flip-external');
        }

        //row 4 show fliped
        if (noiseLevel > random4x1) {
            setClassName4x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x1('flip-number');
        }

        if (noiseLevel > random4x2) {
            setClassName4x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x2('flip-number');
        }

        if (noiseLevel > random4x3) {
            setClassName4x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x3('flip-number');
        }

        if (noiseLevel > random4x4) {
            setClassName4x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x4('flip-number');
        }

        if (noiseLevel > random4x5) {
            setClassName4x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x5('flip-number');
        }

        if (noiseLevel > random4x6) {
            setClassName4x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x6('flip-number');
        }

        if (noiseLevel > random4x7) {
            setClassName4x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x7('flip-number');
        }

        if (noiseLevel > random4x8) {
            setClassName4x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x8('flip-number');
        }

        if (noiseLevel > random4x9) {
            setClassName4x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x9('flip-number');
        }

        if (noiseLevel > random4x10) {
            setClassName4x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x10('flip-number');
        }

        if (noiseLevel > random4x11) {
            setClassName4x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x11('flip-number');
        }

        if (noiseLevel > random4x12) {
            setClassName4x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x12('flip-number');
        }

        if (noiseLevel > random4x13) {
            setClassName4x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x13('flip-number');
        }

        if (noiseLevel > random4x14) {
            setClassName4x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x14('flip-number');
        }

        if (noiseLevel > random4x15) {
            setClassName4x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x15('flip-number');
        }

        if (noiseLevel > random4x16) {
            setClassName4x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x16('flip-number flip-external');
        }

        if (noiseLevel > random4x17) {
            setClassName4x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x17('flip-number flip-external');
        }

        if (noiseLevel > random4x18) {
            setClassName4x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x18('flip-number flip-external');
        }

        if (noiseLevel > random4x19) {
            setClassName4x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x19('flip-number flip-external');
        }

        if (noiseLevel > random4x20) {
            setClassName4x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x20('flip-number flip-external');
        }

        //row 5 show fliped
        if (noiseLevel > random5x1) {
            setClassName5x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x1('flip-number');
        }

        if (noiseLevel > random5x2) {
            setClassName5x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x2('flip-number');
        }

        if (noiseLevel > random5x3) {
            setClassName5x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x3('flip-number');
        }

        if (noiseLevel > random5x4) {
            setClassName5x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x4('flip-number');
        }

        if (noiseLevel > random5x5) {
            setClassName5x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x5('flip-number');
        }

        if (noiseLevel > random5x6) {
            setClassName5x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x6('flip-number');
        }

        if (noiseLevel > random5x7) {
            setClassName5x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x7('flip-number');
        }

        if (noiseLevel > random5x8) {
            setClassName5x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x8('flip-number');
        }

        if (noiseLevel > random5x9) {
            setClassName5x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x9('flip-number');
        }

        if (noiseLevel > random5x10) {
            setClassName5x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x10('flip-number');
        }

        if (noiseLevel > random5x11) {
            setClassName5x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x11('flip-number');
        }

        if (noiseLevel > random5x12) {
            setClassName5x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x12('flip-number');
        }

        if (noiseLevel > random5x13) {
            setClassName5x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x13('flip-number');
        }

        if (noiseLevel > random5x14) {
            setClassName5x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x14('flip-number');
        }

        if (noiseLevel > random5x15) {
            setClassName5x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x15('flip-number');
        }

        if (noiseLevel > random5x16) {
            setClassName5x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x16('flip-number flip-external');
        }

        if (noiseLevel > random5x17) {
            setClassName5x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x17('flip-number flip-external');
        }

        if (noiseLevel > random5x18) {
            setClassName5x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x18('flip-number flip-external');
        }

        if (noiseLevel > random5x19) {
            setClassName5x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x19('flip-number flip-external');
        }

        if (noiseLevel > random5x20) {
            setClassName5x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x20('flip-number flip-external');
        }

        //row 6 show fliped
        if (noiseLevel > random6x1) {
            setClassName6x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x1('flip-number');
        }

        if (noiseLevel > random6x2) {
            setClassName6x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x2('flip-number');
        }

        if (noiseLevel > random6x3) {
            setClassName6x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x3('flip-number');
        }

        if (noiseLevel > random6x4) {
            setClassName6x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x4('flip-number');
        }

        if (noiseLevel > random6x5) {
            setClassName6x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x5('flip-number');
        }

        if (noiseLevel > random6x6) {
            setClassName6x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x6('flip-number');
        }

        if (noiseLevel > random6x7) {
            setClassName6x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x7('flip-number');
        }

        if (noiseLevel > random6x8) {
            setClassName6x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x8('flip-number');
        }

        if (noiseLevel > random6x9) {
            setClassName6x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x9('flip-number');
        }

        if (noiseLevel > random6x10) {
            setClassName6x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x10('flip-number');
        }

        if (noiseLevel > random6x11) {
            setClassName6x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x11('flip-number');
        }

        if (noiseLevel > random6x12) {
            setClassName6x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x12('flip-number');
        }

        if (noiseLevel > random6x13) {
            setClassName6x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x13('flip-number');
        }

        if (noiseLevel > random6x14) {
            setClassName6x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x14('flip-number');
        }

        if (noiseLevel > random6x15) {
            setClassName6x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x15('flip-number');
        }

        if (noiseLevel > random6x16) {
            setClassName6x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x16('flip-number flip-external');
        }

        if (noiseLevel > random6x17) {
            setClassName6x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x17('flip-number flip-external');
        }

        if (noiseLevel > random6x18) {
            setClassName6x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x18('flip-number flip-external');
        }

        if (noiseLevel > random6x19) {
            setClassName6x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x19('flip-number flip-external');
        }

        if (noiseLevel > random6x20) {
            setClassName6x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x20('flip-number flip-external');
        }

        //row 7 show fliped
        if (noiseLevel > random7x1) {
            setClassName7x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x1('flip-number');
        }

        if (noiseLevel > random7x2) {
            setClassName7x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x2('flip-number');
        }

        if (noiseLevel > random7x3) {
            setClassName7x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x3('flip-number');
        }

        if (noiseLevel > random7x4) {
            setClassName7x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x4('flip-number');
        }

        if (noiseLevel > random7x5) {
            setClassName7x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x5('flip-number');
        }

        if (noiseLevel > random7x6) {
            setClassName7x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x6('flip-number');
        }

        if (noiseLevel > random7x7) {
            setClassName7x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x7('flip-number');
        }

        if (noiseLevel > random7x8) {
            setClassName7x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x8('flip-number');
        }

        if (noiseLevel > random7x9) {
            setClassName7x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x9('flip-number');
        }

        if (noiseLevel > random7x10) {
            setClassName7x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x10('flip-number');
        }

        if (noiseLevel > random7x11) {
            setClassName7x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x11('flip-number');
        }

        if (noiseLevel > random7x12) {
            setClassName7x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x12('flip-number');
        }

        if (noiseLevel > random7x13) {
            setClassName7x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x13('flip-number');
        }

        if (noiseLevel > random7x14) {
            setClassName7x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x14('flip-number');
        }

        if (noiseLevel > random7x15) {
            setClassName7x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x15('flip-number');
        }

        if (noiseLevel > random7x16) {
            setClassName7x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x16('flip-number flip-external');
        }

        if (noiseLevel > random7x17) {
            setClassName7x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x17('flip-number flip-external');
        }

        if (noiseLevel > random7x18) {
            setClassName7x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x18('flip-number flip-external');
        }

        if (noiseLevel > random7x19) {
            setClassName7x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x19('flip-number flip-external');
        }

        if (noiseLevel > random7x20) {
            setClassName7x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x20('flip-number flip-external');
        }

        //row 8 show fliped
        if (noiseLevel > random8x1) {
            setClassName8x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x1('flip-number');
        }

        if (noiseLevel > random8x2) {
            setClassName8x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x2('flip-number');
        }

        if (noiseLevel > random8x3) {
            setClassName8x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x3('flip-number');
        }

        if (noiseLevel > random8x4) {
            setClassName8x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x4('flip-number');
        }

        if (noiseLevel > random8x5) {
            setClassName8x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x5('flip-number');
        }

        if (noiseLevel > random8x6) {
            setClassName8x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x6('flip-number');
        }

        if (noiseLevel > random8x7) {
            setClassName8x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x7('flip-number');
        }

        if (noiseLevel > random8x8) {
            setClassName8x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x8('flip-number');
        }

        if (noiseLevel > random8x9) {
            setClassName8x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x9('flip-number');
        }

        if (noiseLevel > random8x10) {
            setClassName8x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x10('flip-number');
        }

        if (noiseLevel > random8x11) {
            setClassName8x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x11('flip-number');
        }

        if (noiseLevel > random8x12) {
            setClassName8x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x12('flip-number');
        }

        if (noiseLevel > random8x13) {
            setClassName8x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x13('flip-number');
        }

        if (noiseLevel > random8x14) {
            setClassName8x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x14('flip-number');
        }

        if (noiseLevel > random8x15) {
            setClassName8x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x15('flip-number');
        }

        if (noiseLevel > random8x16) {
            setClassName8x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x16('flip-number flip-external');
        }

        if (noiseLevel > random8x17) {
            setClassName8x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x17('flip-number flip-external');
        }

        if (noiseLevel > random8x18) {
            setClassName8x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x18('flip-number flip-external');
        }

        if (noiseLevel > random8x19) {
            setClassName8x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x19('flip-number flip-external');
        }

        if (noiseLevel > random8x20) {
            setClassName8x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x20('flip-number flip-external');
        }

        //row 9 show fliped
        if (noiseLevel > random9x1) {
            setClassName9x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x1('flip-number');
        }

        if (noiseLevel > random9x2) {
            setClassName9x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x2('flip-number');
        }

        if (noiseLevel > random9x3) {
            setClassName9x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x3('flip-number');
        }

        if (noiseLevel > random9x4) {
            setClassName9x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x4('flip-number');
        }

        if (noiseLevel > random9x5) {
            setClassName9x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x5('flip-number');
        }

        if (noiseLevel > random9x6) {
            setClassName9x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x6('flip-number');
        }

        if (noiseLevel > random9x7) {
            setClassName9x7('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x7('flip-number');
        }

        if (noiseLevel > random9x8) {
            setClassName9x8('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x8('flip-number');
        }

        if (noiseLevel > random9x9) {
            setClassName9x9('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x9('flip-number');
        }

        if (noiseLevel > random9x10) {
            setClassName9x10('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x10('flip-number');
        }

        if (noiseLevel > random9x11) {
            setClassName9x11('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x11('flip-number');
        }

        if (noiseLevel > random9x12) {
            setClassName9x12('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x12('flip-number');
        }

        if (noiseLevel > random9x13) {
            setClassName9x13('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x13('flip-number');
        }

        if (noiseLevel > random9x14) {
            setClassName9x14('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x14('flip-number');
        }

        if (noiseLevel > random9x15) {
            setClassName9x15('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x15('flip-number');
        }

        if (noiseLevel > random9x16) {
            setClassName9x16('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x16('flip-number flip-external');
        }

        if (noiseLevel > random9x17) {
            setClassName9x17('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x17('flip-number flip-external');
        }

        if (noiseLevel > random9x18) {
            setClassName9x18('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x18('flip-number flip-external');
        }

        if (noiseLevel > random9x19) {
            setClassName9x19('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x19('flip-number flip-external');
        }

        if (noiseLevel > random9x20) {
            setClassName9x20('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x20('flip-number flip-external');
        }

        //row 10 show fliped
        if (noiseLevel > random10x1) {
            setClassName10x1('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x1('flip-number flip-v');
        }

        if (noiseLevel > random10x2) {
            setClassName10x2('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x2('flip-number flip-v');
        }

        if (noiseLevel > random10x3) {
            setClassName10x3('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x3('flip-number flip-v');
        }

        if (noiseLevel > random10x4) {
            setClassName10x4('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x4('flip-number flip-v');
        }

        if (noiseLevel > random10x5) {
            setClassName10x5('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x5('flip-number flip-v');
        }

        if (noiseLevel > random10x6) {
            setClassName10x6('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x6('flip-number flip-v');
        }

        if (noiseLevel > random10x7) {
            setClassName10x7('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x7('flip-number flip-v');
        }

        if (noiseLevel > random10x8) {
            setClassName10x8('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x8('flip-number flip-v');
        }

        if (noiseLevel > random10x9) {
            setClassName10x9('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x9('flip-number flip-v');
        }

        if (noiseLevel > random10x10) {
            setClassName10x10('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x10('flip-number flip-v');
        }

        if (noiseLevel > random10x11) {
            setClassName10x11('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x11('flip-number flip-v');
        }

        if (noiseLevel > random10x12) {
            setClassName10x12('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x12('flip-number flip-v');
        }

        if (noiseLevel > random10x13) {
            setClassName10x13('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x13('flip-number flip-v');
        }

        if (noiseLevel > random10x14) {
            setClassName10x14('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x14('flip-number flip-v');
        }

        if (noiseLevel > random10x15) {
            setClassName10x15('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x15('flip-number flip-v');
        }

        if (noiseLevel > random10x16) {
            setClassName10x16('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x16('flip-number flip-v');
        }

        if (noiseLevel > random10x17) {
            setClassName10x17('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x17('flip-number flip-v');
        }

        if (noiseLevel > random10x18) {
            setClassName10x18('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x18('flip-number flip-v');
        }

        if (noiseLevel > random10x19) {
            setClassName10x19('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x19('flip-number flip-v');
        }

        if (noiseLevel > random10x20) {
            setClassName10x20('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x20('flip-number flip-v');
        }

        //row 11 show fliped
        if (noiseLevel > random11x1) {
            setClassName11x1('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x1('flip-number flip-v');
        }

        if (noiseLevel > random11x2) {
            setClassName11x2('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x2('flip-number flip-v');
        }

        if (noiseLevel > random11x3) {
            setClassName11x3('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x3('flip-number flip-v');
        }

        if (noiseLevel > random11x4) {
            setClassName11x4('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x4('flip-number flip-v');
        }

        if (noiseLevel > random11x5) {
            setClassName11x5('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x5('flip-number flip-v');
        }

        if (noiseLevel > random11x6) {
            setClassName11x6('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x6('flip-number flip-v');
        }

        if (noiseLevel > random11x7) {
            setClassName11x7('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x7('flip-number flip-v');
        }

        if (noiseLevel > random11x8) {
            setClassName11x8('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x8('flip-number flip-v');
        }

        if (noiseLevel > random11x9) {
            setClassName11x9('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x9('flip-number flip-v');
        }

        if (noiseLevel > random11x10) {
            setClassName11x10('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x10('flip-number flip-v');
        }

        if (noiseLevel > random11x11) {
            setClassName11x11('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x11('flip-number flip-v');
        }

        if (noiseLevel > random11x12) {
            setClassName11x12('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x12('flip-number flip-v');
        }

        if (noiseLevel > random11x13) {
            setClassName11x13('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x13('flip-number flip-v');
        }

        if (noiseLevel > random11x14) {
            setClassName11x14('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x14('flip-number flip-v');
        }

        if (noiseLevel > random11x15) {
            setClassName11x15('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x15('flip-number flip-v');
        }

        if (noiseLevel > random11x16) {
            setClassName11x16('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x16('flip-number flip-v');
        }

        if (noiseLevel > random11x17) {
            setClassName11x17('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x17('flip-number flip-v');
        }

        if (noiseLevel > random11x18) {
            setClassName11x18('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x18('flip-number flip-v');
        }

        if (noiseLevel > random11x19) {
            setClassName11x19('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x19('flip-number flip-v');
        }

        if (noiseLevel > random11x20) {
            setClassName11x20('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x20('flip-number flip-v');
        }

        //row 12 show fliped flip-v
        if (noiseLevel > random12x1) {
            setClassName12x1('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x1('flip-number flip-v');
        }

        if (noiseLevel > random12x2) {
            setClassName12x2('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x2('flip-number flip-v');
        }

        if (noiseLevel > random12x3) {
            setClassName12x3('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x3('flip-number flip-v');
        }

        if (noiseLevel > random12x4) {
            setClassName12x4('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x4('flip-number flip-v');
        }

        if (noiseLevel > random12x5) {
            setClassName12x5('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x5('flip-number flip-v');
        }

        if (noiseLevel > random12x6) {
            setClassName12x6('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x6('flip-number flip-v');
        }

        if (noiseLevel > random12x7) {
            setClassName12x7('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x7('flip-number flip-v');
        }

        if (noiseLevel > random12x8) {
            setClassName12x8('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x8('flip-number flip-v');
        }

        if (noiseLevel > random12x9) {
            setClassName12x9('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x9('flip-number flip-v');
        }

        if (noiseLevel > random12x10) {
            setClassName12x10('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x10('flip-number flip-v');
        }

        if (noiseLevel > random12x11) {
            setClassName12x11('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x11('flip-number flip-v');
        }

        if (noiseLevel > random12x12) {
            setClassName12x12('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x12('flip-number flip-v');
        }

        if (noiseLevel > random12x13) {
            setClassName12x13('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x13('flip-number flip-v');
        }

        if (noiseLevel > random12x14) {
            setClassName12x14('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x14('flip-number flip-v');
        }

        if (noiseLevel > random12x15) {
            setClassName12x15('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x15('flip-number flip-v');
        }

        if (noiseLevel > random12x16) {
            setClassName12x16('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x16('flip-number flip-v');
        }

        if (noiseLevel > random12x17) {
            setClassName12x17('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x17('flip-number flip-v');
        }

        if (noiseLevel > random12x18) {
            setClassName12x18('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x18('flip-number flip-v');
        }

        if (noiseLevel > random12x19) {
            setClassName12x19('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x19('flip-number flip-v');
        }

        if (noiseLevel > random12x20) {
            setClassName12x20('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x20('flip-number flip-v');
        }

        //row 13 show fliped flip-v
        if (noiseLevel > random13x1) {
            setClassName13x1('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x1('flip-number flip-v');
        }

        if (noiseLevel > random13x2) {
            setClassName13x2('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x2('flip-number flip-v');
        }

        if (noiseLevel > random13x3) {
            setClassName13x3('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x3('flip-number flip-v');
        }

        if (noiseLevel > random13x4) {
            setClassName13x4('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x4('flip-number flip-v');
        }

        if (noiseLevel > random13x5) {
            setClassName13x5('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x5('flip-number flip-v');
        }

        if (noiseLevel > random13x6) {
            setClassName13x6('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x6('flip-number flip-v');
        }

        if (noiseLevel > random13x7) {
            setClassName13x7('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x7('flip-number flip-v');
        }

        if (noiseLevel > random13x8) {
            setClassName13x8('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x8('flip-number flip-v');
        }

        if (noiseLevel > random13x9) {
            setClassName13x9('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x9('flip-number flip-v');
        }

        if (noiseLevel > random13x10) {
            setClassName13x10('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x10('flip-number flip-v');
        }

        if (noiseLevel > random13x11) {
            setClassName13x11('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x11('flip-number flip-v');
        }

        if (noiseLevel > random13x12) {
            setClassName13x12('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x12('flip-number flip-v');
        }

        if (noiseLevel > random13x13) {
            setClassName13x13('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x13('flip-number flip-v');
        }

        if (noiseLevel > random13x14) {
            setClassName13x14('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x14('flip-number flip-v');
        }

        if (noiseLevel > random13x15) {
            setClassName13x15('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x15('flip-number flip-v');
        }

        if (noiseLevel > random13x16) {
            setClassName13x16('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x16('flip-number flip-v');
        }

        if (noiseLevel > random13x17) {
            setClassName13x17('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x17('flip-number flip-v');
        }

        if (noiseLevel > random13x18) {
            setClassName13x18('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x18('flip-number flip-v');
        }

        if (noiseLevel > random13x19) {
            setClassName13x19('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x19('flip-number flip-v');
        }

        if (noiseLevel > random13x20) {
            setClassName13x20('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x20('flip-number flip-v');
        }
    };

    return (
        <div className="noise-wrapper">
            <p>Noise</p>
            <div className="random-wrapper">
                <div className="random-row column-numbers">
                    <div className="random-number column-number">Pos</div>
                    <div className="random-number column-number">1</div>
                    <div className="random-number column-number">2</div>
                    <div className="random-number column-number">3</div>
                    <div className="random-number column-number">4</div>
                    <div className="random-number column-number">5</div>
                    <div className="random-number column-number">6</div>
                    <div className="random-number column-number">7</div>
                    <div className="random-number column-number">8</div>
                    <div className="random-number column-number">9</div>
                    <div className="random-number column-number">10</div>
                    <div className="random-number column-number">11</div>
                    <div className="random-number column-number">12</div>
                    <div className="random-number column-number">13</div>
                    <div className="random-number column-number">14</div>
                    <div className="random-number column-number">15</div>
                    <div className="random-number column-number">16</div>
                    <div className="random-number column-number">17</div>
                    <div className="random-number column-number">18</div>
                    <div className="random-number column-number">19</div>
                    <div className="random-number column-number">20</div>
                </div>
                <div className="random-row row-1">
                    <div className="random-number row-number">1</div>
                    <div className="random-number">{random1x1}</div>
                    <div className="random-number">{random1x2}</div>
                    <div className="random-number">{random1x3}</div>
                    <div className="random-number">{random1x4}</div>
                    <div className="random-number">{random1x5}</div>
                    <div className="random-number">{random1x6}</div>
                    <div className="random-number">{random1x7}</div>
                    <div className="random-number">{random1x8}</div>
                    <div className="random-number">{random1x9}</div>
                    <div className="random-number">{random1x10}</div>
                    <div className="random-number">{random1x11}</div>
                    <div className="random-number">{random1x12}</div>
                    <div className="random-number">{random1x13}</div>
                    <div className="random-number">{random1x14}</div>
                    <div className="random-number">{random1x15}</div>
                    <div className="random-number">{random1x16}</div>
                    <div className="random-number">{random1x17}</div>
                    <div className="random-number">{random1x18}</div>
                    <div className="random-number">{random1x19}</div>
                    <div className="random-number">{random1x20}</div>
                </div>
                <div className="random-row row-2">
                    <div className="random-number row-number">2</div>
                    <div className="random-number">{random2x1}</div>
                    <div className="random-number">{random2x2}</div>
                    <div className="random-number">{random2x3}</div>
                    <div className="random-number">{random2x4}</div>
                    <div className="random-number">{random2x5}</div>
                    <div className="random-number">{random2x6}</div>
                    <div className="random-number">{random2x7}</div>
                    <div className="random-number">{random2x8}</div>
                    <div className="random-number">{random2x9}</div>
                    <div className="random-number">{random2x10}</div>
                    <div className="random-number">{random2x11}</div>
                    <div className="random-number">{random2x12}</div>
                    <div className="random-number">{random2x13}</div>
                    <div className="random-number">{random2x14}</div>
                    <div className="random-number">{random2x15}</div>
                    <div className="random-number">{random2x16}</div>
                    <div className="random-number">{random2x17}</div>
                    <div className="random-number">{random2x18}</div>
                    <div className="random-number">{random2x19}</div>
                    <div className="random-number">{random2x20}</div>
                </div>
                <div className="random-row row-3">
                    <div className="random-number row-number">3</div>
                    <div className="random-number">{random3x1}</div>
                    <div className="random-number">{random3x2}</div>
                    <div className="random-number">{random3x3}</div>
                    <div className="random-number">{random3x4}</div>
                    <div className="random-number">{random3x5}</div>
                    <div className="random-number">{random3x6}</div>
                    <div className="random-number">{random3x7}</div>
                    <div className="random-number">{random3x8}</div>
                    <div className="random-number">{random3x9}</div>
                    <div className="random-number">{random3x10}</div>
                    <div className="random-number">{random3x11}</div>
                    <div className="random-number">{random3x12}</div>
                    <div className="random-number">{random3x13}</div>
                    <div className="random-number">{random3x14}</div>
                    <div className="random-number">{random3x15}</div>
                    <div className="random-number">{random3x16}</div>
                    <div className="random-number">{random3x17}</div>
                    <div className="random-number">{random3x18}</div>
                    <div className="random-number">{random3x19}</div>
                    <div className="random-number">{random3x20}</div>
                </div>
                <div className="random-row row-4">
                    <div className="random-number row-number">4</div>
                    <div className="random-number">{random4x1}</div>
                    <div className="random-number">{random4x2}</div>
                    <div className="random-number">{random4x3}</div>
                    <div className="random-number">{random4x4}</div>
                    <div className="random-number">{random4x5}</div>
                    <div className="random-number">{random4x6}</div>
                    <div className="random-number">{random4x7}</div>
                    <div className="random-number">{random4x8}</div>
                    <div className="random-number">{random4x9}</div>
                    <div className="random-number">{random4x10}</div>
                    <div className="random-number">{random4x11}</div>
                    <div className="random-number">{random4x12}</div>
                    <div className="random-number">{random4x13}</div>
                    <div className="random-number">{random4x14}</div>
                    <div className="random-number">{random4x15}</div>
                    <div className="random-number">{random4x16}</div>
                    <div className="random-number">{random4x17}</div>
                    <div className="random-number">{random4x18}</div>
                    <div className="random-number">{random4x19}</div>
                    <div className="random-number">{random4x20}</div>
                </div>
                <div className="random-row row-5">
                    <div className="random-number row-number">5</div>
                    <div className="random-number">{random5x1}</div>
                    <div className="random-number">{random5x2}</div>
                    <div className="random-number">{random5x3}</div>
                    <div className="random-number">{random5x4}</div>
                    <div className="random-number">{random5x5}</div>
                    <div className="random-number">{random5x6}</div>
                    <div className="random-number">{random5x7}</div>
                    <div className="random-number">{random5x8}</div>
                    <div className="random-number">{random5x9}</div>
                    <div className="random-number">{random5x10}</div>
                    <div className="random-number">{random5x11}</div>
                    <div className="random-number">{random5x12}</div>
                    <div className="random-number">{random5x13}</div>
                    <div className="random-number">{random5x14}</div>
                    <div className="random-number">{random5x15}</div>
                    <div className="random-number">{random5x16}</div>
                    <div className="random-number">{random5x17}</div>
                    <div className="random-number">{random5x18}</div>
                    <div className="random-number">{random5x19}</div>
                    <div className="random-number">{random5x20}</div>
                </div>
                <div className="random-row row-6">
                    <div className="random-number row-number">6</div>
                    <div className="random-number">{random6x1}</div>
                    <div className="random-number">{random6x2}</div>
                    <div className="random-number">{random6x3}</div>
                    <div className="random-number">{random6x4}</div>
                    <div className="random-number">{random6x5}</div>
                    <div className="random-number">{random6x6}</div>
                    <div className="random-number">{random6x7}</div>
                    <div className="random-number">{random6x8}</div>
                    <div className="random-number">{random6x9}</div>
                    <div className="random-number">{random6x10}</div>
                    <div className="random-number">{random6x11}</div>
                    <div className="random-number">{random6x12}</div>
                    <div className="random-number">{random6x13}</div>
                    <div className="random-number">{random6x14}</div>
                    <div className="random-number">{random6x15}</div>
                    <div className="random-number">{random6x16}</div>
                    <div className="random-number">{random6x17}</div>
                    <div className="random-number">{random6x18}</div>
                    <div className="random-number">{random6x19}</div>
                    <div className="random-number">{random6x20}</div>
                </div>
                <div className="random-row row-7">
                    <div className="random-number row-number">7</div>
                    <div className="random-number">{random7x1}</div>
                    <div className="random-number">{random7x2}</div>
                    <div className="random-number">{random7x3}</div>
                    <div className="random-number">{random7x4}</div>
                    <div className="random-number">{random7x5}</div>
                    <div className="random-number">{random7x6}</div>
                    <div className="random-number">{random7x7}</div>
                    <div className="random-number">{random7x8}</div>
                    <div className="random-number">{random7x9}</div>
                    <div className="random-number">{random7x10}</div>
                    <div className="random-number">{random7x11}</div>
                    <div className="random-number">{random7x12}</div>
                    <div className="random-number">{random7x13}</div>
                    <div className="random-number">{random7x14}</div>
                    <div className="random-number">{random7x15}</div>
                    <div className="random-number">{random7x16}</div>
                    <div className="random-number">{random7x17}</div>
                    <div className="random-number">{random7x18}</div>
                    <div className="random-number">{random7x19}</div>
                    <div className="random-number">{random7x20}</div>
                </div>
                <div className="random-row row-8">
                    <div className="random-number row-number">8</div>
                    <div className="random-number">{random8x1}</div>
                    <div className="random-number">{random8x2}</div>
                    <div className="random-number">{random8x3}</div>
                    <div className="random-number">{random8x4}</div>
                    <div className="random-number">{random8x5}</div>
                    <div className="random-number">{random8x6}</div>
                    <div className="random-number">{random8x7}</div>
                    <div className="random-number">{random8x8}</div>
                    <div className="random-number">{random8x9}</div>
                    <div className="random-number">{random8x10}</div>
                    <div className="random-number">{random8x11}</div>
                    <div className="random-number">{random8x12}</div>
                    <div className="random-number">{random8x13}</div>
                    <div className="random-number">{random8x14}</div>
                    <div className="random-number">{random8x15}</div>
                    <div className="random-number">{random8x16}</div>
                    <div className="random-number">{random8x17}</div>
                    <div className="random-number">{random8x18}</div>
                    <div className="random-number">{random8x19}</div>
                    <div className="random-number">{random8x20}</div>
                </div>
                <div className="random-row row-9">
                    <div className="random-number row-number">9</div>
                    <div className="random-number">{random9x1}</div>
                    <div className="random-number">{random9x2}</div>
                    <div className="random-number">{random9x3}</div>
                    <div className="random-number">{random9x4}</div>
                    <div className="random-number">{random9x5}</div>
                    <div className="random-number">{random9x6}</div>
                    <div className="random-number">{random9x7}</div>
                    <div className="random-number">{random9x8}</div>
                    <div className="random-number">{random9x9}</div>
                    <div className="random-number">{random9x10}</div>
                    <div className="random-number">{random9x11}</div>
                    <div className="random-number">{random9x12}</div>
                    <div className="random-number">{random9x13}</div>
                    <div className="random-number">{random9x14}</div>
                    <div className="random-number">{random9x15}</div>
                    <div className="random-number">{random9x16}</div>
                    <div className="random-number">{random9x17}</div>
                    <div className="random-number">{random9x18}</div>
                    <div className="random-number">{random9x19}</div>
                    <div className="random-number">{random9x20}</div>
                </div>
                <div className="random-row row-10">
                    <div className="random-number row-number">10</div>
                    <div className="random-number">{random10x1}</div>
                    <div className="random-number">{random10x2}</div>
                    <div className="random-number">{random10x3}</div>
                    <div className="random-number">{random10x4}</div>
                    <div className="random-number">{random10x5}</div>
                    <div className="random-number">{random10x6}</div>
                    <div className="random-number">{random10x7}</div>
                    <div className="random-number">{random10x8}</div>
                    <div className="random-number">{random10x9}</div>
                    <div className="random-number">{random10x10}</div>
                    <div className="random-number">{random10x11}</div>
                    <div className="random-number">{random10x12}</div>
                    <div className="random-number">{random10x13}</div>
                    <div className="random-number">{random10x14}</div>
                    <div className="random-number">{random10x15}</div>
                    <div className="random-number">{random10x16}</div>
                    <div className="random-number">{random10x17}</div>
                    <div className="random-number">{random10x18}</div>
                    <div className="random-number">{random10x19}</div>
                    <div className="random-number">{random10x20}</div>
                </div>
                <div className="random-row row-11">
                    <div className="random-number row-number">11</div>
                    <div className="random-number">{random11x1}</div>
                    <div className="random-number">{random11x2}</div>
                    <div className="random-number">{random11x3}</div>
                    <div className="random-number">{random11x4}</div>
                    <div className="random-number">{random11x5}</div>
                    <div className="random-number">{random11x6}</div>
                    <div className="random-number">{random11x7}</div>
                    <div className="random-number">{random11x8}</div>
                    <div className="random-number">{random11x9}</div>
                    <div className="random-number">{random11x10}</div>
                    <div className="random-number">{random11x11}</div>
                    <div className="random-number">{random11x12}</div>
                    <div className="random-number">{random11x13}</div>
                    <div className="random-number">{random11x14}</div>
                    <div className="random-number">{random11x15}</div>
                    <div className="random-number">{random11x16}</div>
                    <div className="random-number">{random11x17}</div>
                    <div className="random-number">{random11x18}</div>
                    <div className="random-number">{random11x19}</div>
                    <div className="random-number">{random11x20}</div>
                </div>
                <div className="random-row row-12">
                    <div className="random-number row-number">12</div>
                    <div className="random-number">{random12x1}</div>
                    <div className="random-number">{random12x2}</div>
                    <div className="random-number">{random12x3}</div>
                    <div className="random-number">{random12x4}</div>
                    <div className="random-number">{random12x5}</div>
                    <div className="random-number">{random12x6}</div>
                    <div className="random-number">{random12x7}</div>
                    <div className="random-number">{random12x8}</div>
                    <div className="random-number">{random12x9}</div>
                    <div className="random-number">{random12x10}</div>
                    <div className="random-number">{random12x11}</div>
                    <div className="random-number">{random12x12}</div>
                    <div className="random-number">{random12x13}</div>
                    <div className="random-number">{random12x14}</div>
                    <div className="random-number">{random12x15}</div>
                    <div className="random-number">{random12x16}</div>
                    <div className="random-number">{random12x17}</div>
                    <div className="random-number">{random12x18}</div>
                    <div className="random-number">{random12x19}</div>
                    <div className="random-number">{random12x20}</div>
                </div>
                <div className="random-row row-13">
                    <div className="random-number row-number">13</div>
                    <div className="random-number">{random13x1}</div>
                    <div className="random-number">{random13x2}</div>
                    <div className="random-number">{random13x3}</div>
                    <div className="random-number">{random13x4}</div>
                    <div className="random-number">{random13x5}</div>
                    <div className="random-number">{random13x6}</div>
                    <div className="random-number">{random13x7}</div>
                    <div className="random-number">{random13x8}</div>
                    <div className="random-number">{random13x9}</div>
                    <div className="random-number">{random13x10}</div>
                    <div className="random-number">{random13x11}</div>
                    <div className="random-number">{random13x12}</div>
                    <div className="random-number">{random13x13}</div>
                    <div className="random-number">{random13x14}</div>
                    <div className="random-number">{random13x15}</div>
                    <div className="random-number">{random13x16}</div>
                    <div className="random-number">{random13x17}</div>
                    <div className="random-number">{random13x18}</div>
                    <div className="random-number">{random13x19}</div>
                    <div className="random-number">{random13x20}</div>
                </div>
                <button onClick={createRandoms}>Create random noise matrix</button>
            </div>
            <p>Flip matrix</p>
            <div className="flip-wrapper">
                <div className="flip-row column-numbers">
                    <div className="flip-number column-number">Pos</div>
                    <div className="flip-number column-number">1</div>
                    <div className="flip-number column-number">2</div>
                    <div className="flip-number column-number">3</div>
                    <div className="flip-number column-number">4</div>
                    <div className="flip-number column-number">5</div>
                    <div className="flip-number column-number">6</div>
                    <div className="flip-number column-number">7</div>
                    <div className="flip-number column-number">8</div>
                    <div className="flip-number column-number">9</div>
                    <div className="flip-number column-number">10</div>
                    <div className="flip-number column-number">11</div>
                    <div className="flip-number column-number">12</div>
                    <div className="flip-number column-number">13</div>
                    <div className="flip-number column-number">14</div>
                    <div className="flip-number column-number">15</div>
                    <div className="flip-number column-number">16</div>
                    <div className="flip-number column-number">17</div>
                    <div className="flip-number column-number">18</div>
                    <div className="flip-number column-number">19</div>
                    <div className="flip-number column-number">20</div>
                </div>
                <div className="flip-row row-1">
                    <div className="flip-number row-number">1</div>
                    <div className={className1x1}>{noise1x1}</div>
                    <div className={className1x2}>{noise1x2}</div>
                    <div className={className1x3}>{noise1x3}</div>
                    <div className={className1x4}>{noise1x4}</div>
                    <div className={className1x5}>{noise1x5}</div>
                    <div className={className1x6}>{noise1x6}</div>
                    <div className={className1x7}>{noise1x7}</div>
                    <div className={className1x8}>{noise1x8}</div>
                    <div className={className1x9}>{noise1x9}</div>
                    <div className={className1x10}>{noise1x10}</div>
                    <div className={className1x11}>{noise1x11}</div>
                    <div className={className1x12}>{noise1x12}</div>
                    <div className={className1x13}>{noise1x13}</div>
                    <div className={className1x14}>{noise1x14}</div>
                    <div className={className1x15}>{noise1x15}</div>
                    <div className={className1x16}>{noise1x16}</div>
                    <div className={className1x17}>{noise1x17}</div>
                    <div className={className1x18}>{noise1x18}</div>
                    <div className={className1x19}>{noise1x19}</div>
                    <div className={className1x20}>{noise1x20}</div>
                </div>
                <div className="flip-row row-2">
                    <div className="flip-number row-number">2</div>
                    <div className={className2x1}>{noise2x1}</div>
                    <div className={className2x2}>{noise2x2}</div>
                    <div className={className2x3}>{noise2x3}</div>
                    <div className={className2x4}>{noise2x4}</div>
                    <div className={className2x5}>{noise2x5}</div>
                    <div className={className2x6}>{noise2x6}</div>
                    <div className={className2x7}>{noise2x7}</div>
                    <div className={className2x8}>{noise2x8}</div>
                    <div className={className2x9}>{noise2x9}</div>
                    <div className={className2x10}>{noise2x10}</div>
                    <div className={className2x11}>{noise2x11}</div>
                    <div className={className2x12}>{noise2x12}</div>
                    <div className={className2x13}>{noise2x13}</div>
                    <div className={className2x14}>{noise2x14}</div>
                    <div className={className2x15}>{noise2x15}</div>
                    <div className={className2x16}>{noise2x16}</div>
                    <div className={className2x17}>{noise2x17}</div>
                    <div className={className2x18}>{noise2x18}</div>
                    <div className={className2x19}>{noise2x19}</div>
                    <div className={className2x20}>{noise2x20}</div>
                </div>
                <div className="flip-row row-3">
                    <div className="flip-number row-number">3</div>
                    <div className={className3x1}>{noise3x1}</div>
                    <div className={className3x2}>{noise3x2}</div>
                    <div className={className3x3}>{noise3x3}</div>
                    <div className={className3x4}>{noise3x4}</div>
                    <div className={className3x5}>{noise3x5}</div>
                    <div className={className3x6}>{noise3x6}</div>
                    <div className={className3x7}>{noise3x7}</div>
                    <div className={className3x8}>{noise3x8}</div>
                    <div className={className3x9}>{noise3x9}</div>
                    <div className={className3x10}>{noise3x10}</div>
                    <div className={className3x11}>{noise3x11}</div>
                    <div className={className3x12}>{noise3x12}</div>
                    <div className={className3x13}>{noise3x13}</div>
                    <div className={className3x14}>{noise3x14}</div>
                    <div className={className3x15}>{noise3x15}</div>
                    <div className={className3x16}>{noise3x16}</div>
                    <div className={className3x17}>{noise3x17}</div>
                    <div className={className3x18}>{noise3x18}</div>
                    <div className={className3x19}>{noise3x19}</div>
                    <div className={className3x20}>{noise3x20}</div>
                </div>
                <div className="flip-row row-4">
                    <div className="flip-number row-number">4</div>
                    <div className={className4x1}>{noise4x1}</div>
                    <div className={className4x2}>{noise4x2}</div>
                    <div className={className4x3}>{noise4x3}</div>
                    <div className={className4x4}>{noise4x4}</div>
                    <div className={className4x5}>{noise4x5}</div>
                    <div className={className4x6}>{noise4x6}</div>
                    <div className={className4x7}>{noise4x7}</div>
                    <div className={className4x8}>{noise4x8}</div>
                    <div className={className4x9}>{noise4x9}</div>
                    <div className={className4x10}>{noise4x10}</div>
                    <div className={className4x11}>{noise4x11}</div>
                    <div className={className4x12}>{noise4x12}</div>
                    <div className={className4x13}>{noise4x13}</div>
                    <div className={className4x14}>{noise4x14}</div>
                    <div className={className4x15}>{noise4x15}</div>
                    <div className={className4x16}>{noise4x16}</div>
                    <div className={className4x17}>{noise4x17}</div>
                    <div className={className4x18}>{noise4x18}</div>
                    <div className={className4x19}>{noise4x19}</div>
                    <div className={className4x20}>{noise4x20}</div>
                </div>
                <div className="flip-row row-5">
                    <div className="flip-number row-number">5</div>
                    <div className={className5x1}>{noise5x1}</div>
                    <div className={className5x2}>{noise5x2}</div>
                    <div className={className5x3}>{noise5x3}</div>
                    <div className={className5x4}>{noise5x4}</div>
                    <div className={className5x5}>{noise5x5}</div>
                    <div className={className5x6}>{noise5x6}</div>
                    <div className={className5x7}>{noise5x7}</div>
                    <div className={className5x8}>{noise5x8}</div>
                    <div className={className5x9}>{noise5x9}</div>
                    <div className={className5x10}>{noise5x10}</div>
                    <div className={className5x11}>{noise5x11}</div>
                    <div className={className5x12}>{noise5x12}</div>
                    <div className={className5x13}>{noise5x13}</div>
                    <div className={className5x14}>{noise5x14}</div>
                    <div className={className5x15}>{noise5x15}</div>
                    <div className={className5x16}>{noise5x16}</div>
                    <div className={className5x17}>{noise5x17}</div>
                    <div className={className5x18}>{noise5x18}</div>
                    <div className={className5x19}>{noise5x19}</div>
                    <div className={className5x20}>{noise5x20}</div>
                </div>
                <div className="flip-row row-6">
                    <div className="flip-number row-number">6</div>
                    <div className={className6x1}>{noise6x1}</div>
                    <div className={className6x2}>{noise6x2}</div>
                    <div className={className6x3}>{noise6x3}</div>
                    <div className={className6x4}>{noise6x4}</div>
                    <div className={className6x5}>{noise6x5}</div>
                    <div className={className6x6}>{noise6x6}</div>
                    <div className={className6x7}>{noise6x7}</div>
                    <div className={className6x8}>{noise6x8}</div>
                    <div className={className6x9}>{noise6x9}</div>
                    <div className={className6x10}>{noise6x10}</div>
                    <div className={className6x11}>{noise6x11}</div>
                    <div className={className6x12}>{noise6x12}</div>
                    <div className={className6x13}>{noise6x13}</div>
                    <div className={className6x14}>{noise6x14}</div>
                    <div className={className6x15}>{noise6x15}</div>
                    <div className={className6x16}>{noise6x16}</div>
                    <div className={className6x17}>{noise6x17}</div>
                    <div className={className6x18}>{noise6x18}</div>
                    <div className={className6x19}>{noise6x19}</div>
                    <div className={className6x20}>{noise6x20}</div>
                </div>
                <div className="flip-row row-7">
                    <div className="flip-number row-number">7</div>
                    <div className={className7x1}>{noise7x1}</div>
                    <div className={className7x2}>{noise7x2}</div>
                    <div className={className7x3}>{noise7x3}</div>
                    <div className={className7x4}>{noise7x4}</div>
                    <div className={className7x5}>{noise7x5}</div>
                    <div className={className7x6}>{noise7x6}</div>
                    <div className={className7x7}>{noise7x7}</div>
                    <div className={className7x8}>{noise7x8}</div>
                    <div className={className7x9}>{noise7x9}</div>
                    <div className={className7x10}>{noise7x10}</div>
                    <div className={className7x11}>{noise7x11}</div>
                    <div className={className7x12}>{noise7x12}</div>
                    <div className={className7x13}>{noise7x13}</div>
                    <div className={className7x14}>{noise7x14}</div>
                    <div className={className7x15}>{noise7x15}</div>
                    <div className={className7x16}>{noise7x16}</div>
                    <div className={className7x17}>{noise7x17}</div>
                    <div className={className7x18}>{noise7x18}</div>
                    <div className={className7x19}>{noise7x19}</div>
                    <div className={className7x20}>{noise7x20}</div>
                </div>
                <div className="flip-row row-8">
                    <div className="flip-number row-number">8</div>
                    <div className={className8x1}>{noise8x1}</div>
                    <div className={className8x2}>{noise8x2}</div>
                    <div className={className8x3}>{noise8x3}</div>
                    <div className={className8x4}>{noise8x4}</div>
                    <div className={className8x5}>{noise8x5}</div>
                    <div className={className8x6}>{noise8x6}</div>
                    <div className={className8x7}>{noise8x7}</div>
                    <div className={className8x8}>{noise8x8}</div>
                    <div className={className8x9}>{noise8x9}</div>
                    <div className={className8x10}>{noise8x10}</div>
                    <div className={className8x11}>{noise8x11}</div>
                    <div className={className8x12}>{noise8x12}</div>
                    <div className={className8x13}>{noise8x13}</div>
                    <div className={className8x14}>{noise8x14}</div>
                    <div className={className8x15}>{noise8x15}</div>
                    <div className={className8x16}>{noise8x16}</div>
                    <div className={className8x17}>{noise8x17}</div>
                    <div className={className8x18}>{noise8x18}</div>
                    <div className={className8x19}>{noise8x19}</div>
                    <div className={className8x20}>{noise8x20}</div>
                </div>
                <div className="flip-row row-9">
                    <div className="flip-number row-number">9</div>
                    <div className={className9x1}>{noise9x1}</div>
                    <div className={className9x2}>{noise9x2}</div>
                    <div className={className9x3}>{noise9x3}</div>
                    <div className={className9x4}>{noise9x4}</div>
                    <div className={className9x5}>{noise9x5}</div>
                    <div className={className9x6}>{noise9x6}</div>
                    <div className={className9x7}>{noise9x7}</div>
                    <div className={className9x8}>{noise9x8}</div>
                    <div className={className9x9}>{noise9x9}</div>
                    <div className={className9x10}>{noise9x10}</div>
                    <div className={className9x11}>{noise9x11}</div>
                    <div className={className9x12}>{noise9x12}</div>
                    <div className={className9x13}>{noise9x13}</div>
                    <div className={className9x14}>{noise9x14}</div>
                    <div className={className9x15}>{noise9x15}</div>
                    <div className={className9x16}>{noise9x16}</div>
                    <div className={className9x17}>{noise9x17}</div>
                    <div className={className9x18}>{noise9x18}</div>
                    <div className={className9x19}>{noise9x19}</div>
                    <div className={className9x20}>{noise9x20}</div>
                </div>
                <div className="flip-row row-10">
                    <div className="flip-number row-number">10</div>
                    <div className={className10x1}>{noise10x1}</div>
                    <div className={className10x2}>{noise10x2}</div>
                    <div className={className10x3}>{noise10x3}</div>
                    <div className={className10x4}>{noise10x4}</div>
                    <div className={className10x5}>{noise10x5}</div>
                    <div className={className10x6}>{noise10x6}</div>
                    <div className={className10x7}>{noise10x7}</div>
                    <div className={className10x8}>{noise10x8}</div>
                    <div className={className10x9}>{noise10x9}</div>
                    <div className={className10x10}>{noise10x10}</div>
                    <div className={className10x11}>{noise10x11}</div>
                    <div className={className10x12}>{noise10x12}</div>
                    <div className={className10x13}>{noise10x13}</div>
                    <div className={className10x14}>{noise10x14}</div>
                    <div className={className10x15}>{noise10x15}</div>
                    <div className={className10x16}>{noise10x16}</div>
                    <div className={className10x17}>{noise10x17}</div>
                    <div className={className10x18}>{noise10x18}</div>
                    <div className={className10x19}>{noise10x19}</div>
                    <div className={className10x20}>{noise10x20}</div>
                </div>
                <div className="flip-row row-11">
                    <div className="flip-number row-number">11</div>
                    <div className={className11x1}>{noise11x1}</div>
                    <div className={className11x2}>{noise11x2}</div>
                    <div className={className11x3}>{noise11x3}</div>
                    <div className={className11x4}>{noise11x4}</div>
                    <div className={className11x5}>{noise11x5}</div>
                    <div className={className11x6}>{noise11x6}</div>
                    <div className={className11x7}>{noise11x7}</div>
                    <div className={className11x8}>{noise11x8}</div>
                    <div className={className11x9}>{noise11x9}</div>
                    <div className={className11x10}>{noise11x10}</div>
                    <div className={className11x11}>{noise11x11}</div>
                    <div className={className11x12}>{noise11x12}</div>
                    <div className={className11x13}>{noise11x13}</div>
                    <div className={className11x14}>{noise11x14}</div>
                    <div className={className11x15}>{noise11x15}</div>
                    <div className={className11x16}>{noise11x16}</div>
                    <div className={className11x17}>{noise11x17}</div>
                    <div className={className11x18}>{noise11x18}</div>
                    <div className={className11x19}>{noise11x19}</div>
                    <div className={className11x20}>{noise11x20}</div>
                </div>
                <div className="flip-row row-12">
                    <div className="flip-number row-number">12</div>
                    <div className={className12x1}>{noise12x1}</div>
                    <div className={className12x2}>{noise12x2}</div>
                    <div className={className12x3}>{noise12x3}</div>
                    <div className={className12x4}>{noise12x4}</div>
                    <div className={className12x5}>{noise12x5}</div>
                    <div className={className12x6}>{noise12x6}</div>
                    <div className={className12x7}>{noise12x7}</div>
                    <div className={className12x8}>{noise12x8}</div>
                    <div className={className12x9}>{noise12x9}</div>
                    <div className={className12x10}>{noise12x10}</div>
                    <div className={className12x11}>{noise12x11}</div>
                    <div className={className12x12}>{noise12x12}</div>
                    <div className={className12x13}>{noise12x13}</div>
                    <div className={className12x14}>{noise12x14}</div>
                    <div className={className12x15}>{noise12x15}</div>
                    <div className={className12x16}>{noise12x16}</div>
                    <div className={className12x17}>{noise12x17}</div>
                    <div className={className12x18}>{noise12x18}</div>
                    <div className={className12x19}>{noise12x19}</div>
                    <div className={className12x20}>{noise12x20}</div>
                </div>
                <div className="flip-row row-13">
                    <div className="flip-number row-number">13</div>
                    <div className={className13x1}>{noise13x1}</div>
                    <div className={className13x2}>{noise13x2}</div>
                    <div className={className13x3}>{noise13x3}</div>
                    <div className={className13x4}>{noise13x4}</div>
                    <div className={className13x5}>{noise13x5}</div>
                    <div className={className13x6}>{noise13x6}</div>
                    <div className={className13x7}>{noise13x7}</div>
                    <div className={className13x8}>{noise13x8}</div>
                    <div className={className13x9}>{noise13x9}</div>
                    <div className={className13x10}>{noise13x10}</div>
                    <div className={className13x11}>{noise13x11}</div>
                    <div className={className13x12}>{noise13x12}</div>
                    <div className={className13x13}>{noise13x13}</div>
                    <div className={className13x14}>{noise13x14}</div>
                    <div className={className13x15}>{noise13x15}</div>
                    <div className={className13x16}>{noise13x16}</div>
                    <div className={className13x17}>{noise13x17}</div>
                    <div className={className13x18}>{noise13x18}</div>
                    <div className={className13x19}>{noise13x19}</div>
                    <div className={className13x20}>{noise13x20}</div>
                </div>
                <button onClick={simulateNoise}>Simulate Noise</button>
                <button onClick={showFliped}>Show Fliped</button>
                <button onClick={passNoiseToLocal}>Pass results to storage</button>
                <p>Number of wrong bits: {numberOfWrongBits}</p>
            </div>
        </div>
    );
};

export default Noise;
