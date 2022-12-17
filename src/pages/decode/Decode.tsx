import { useState } from 'react';
import './Decode.css';

const Decode = () => {
    //states for rows
    const [row1, setRow1] = useState<number[]>([]);
    const [row2, setRow2] = useState<number[]>([]);
    const [row3, setRow3] = useState<number[]>([]);
    const [row4, setRow4] = useState<number[]>([]);
    const [row5, setRow5] = useState<number[]>([]);
    const [row6, setRow6] = useState<number[]>([]);
    const [row7, setRow7] = useState<number[]>([]);
    const [row8, setRow8] = useState<number[]>([]);
    const [row9, setRow9] = useState<number[]>([]);
    const [row10, setRow10] = useState<number[]>([]);
    const [row11, setRow11] = useState<number[]>([]);
    const [row12, setRow12] = useState<number[]>([]);
    const [row13, setRow13] = useState<number[]>([]);

    // number of coincides of matrix row 1 x check rows
    const [numberOfCoincidences1x1, setNumberOfCoincidences1x1] = useState(0);
    const [numberOfCoincidences1x2, setNumberOfCoincidences1x2] = useState(0);
    const [numberOfCoincidences1x3, setNumberOfCoincidences1x3] = useState(0);
    const [numberOfCoincidences1x4, setNumberOfCoincidences1x4] = useState(0);
    const [numberOfCoincidences1x5, setNumberOfCoincidences1x5] = useState(0);

    // number of coincides of matrix row 2 x check rows
    const [numberOfCoincidences2x1, setNumberOfCoincidences2x1] = useState(0);
    const [numberOfCoincidences2x2, setNumberOfCoincidences2x2] = useState(0);
    const [numberOfCoincidences2x3, setNumberOfCoincidences2x3] = useState(0);
    const [numberOfCoincidences2x4, setNumberOfCoincidences2x4] = useState(0);
    const [numberOfCoincidences2x5, setNumberOfCoincidences2x5] = useState(0);

    // number of coincides of matrix row 3 x check rows
    const [numberOfCoincidences3x1, setNumberOfCoincidences3x1] = useState(0);
    const [numberOfCoincidences3x2, setNumberOfCoincidences3x2] = useState(0);
    const [numberOfCoincidences3x3, setNumberOfCoincidences3x3] = useState(0);
    const [numberOfCoincidences3x4, setNumberOfCoincidences3x4] = useState(0);
    const [numberOfCoincidences3x5, setNumberOfCoincidences3x5] = useState(0);

    // number of coincides of matrix row 4 x check rows
    const [numberOfCoincidences4x1, setNumberOfCoincidences4x1] = useState(0);
    const [numberOfCoincidences4x2, setNumberOfCoincidences4x2] = useState(0);
    const [numberOfCoincidences4x3, setNumberOfCoincidences4x3] = useState(0);
    const [numberOfCoincidences4x4, setNumberOfCoincidences4x4] = useState(0);
    const [numberOfCoincidences4x5, setNumberOfCoincidences4x5] = useState(0);

    // number of coincides of matrix row 5 x check rows
    const [numberOfCoincidences5x1, setNumberOfCoincidences5x1] = useState(0);
    const [numberOfCoincidences5x2, setNumberOfCoincidences5x2] = useState(0);
    const [numberOfCoincidences5x3, setNumberOfCoincidences5x3] = useState(0);
    const [numberOfCoincidences5x4, setNumberOfCoincidences5x4] = useState(0);
    const [numberOfCoincidences5x5, setNumberOfCoincidences5x5] = useState(0);

    // number of coincides of matrix row 6 x check rows
    const [numberOfCoincidences6x1, setNumberOfCoincidences6x1] = useState(0);
    const [numberOfCoincidences6x2, setNumberOfCoincidences6x2] = useState(0);
    const [numberOfCoincidences6x3, setNumberOfCoincidences6x3] = useState(0);
    const [numberOfCoincidences6x4, setNumberOfCoincidences6x4] = useState(0);
    const [numberOfCoincidences6x5, setNumberOfCoincidences6x5] = useState(0);

    // number of coincides of matrix row 7 x check rows
    const [numberOfCoincidences7x1, setNumberOfCoincidences7x1] = useState(0);
    const [numberOfCoincidences7x2, setNumberOfCoincidences7x2] = useState(0);
    const [numberOfCoincidences7x3, setNumberOfCoincidences7x3] = useState(0);
    const [numberOfCoincidences7x4, setNumberOfCoincidences7x4] = useState(0);
    const [numberOfCoincidences7x5, setNumberOfCoincidences7x5] = useState(0);

    // number of coincides of matrix row 8 x check rows
    const [numberOfCoincidences8x1, setNumberOfCoincidences8x1] = useState(0);
    const [numberOfCoincidences8x2, setNumberOfCoincidences8x2] = useState(0);
    const [numberOfCoincidences8x3, setNumberOfCoincidences8x3] = useState(0);
    const [numberOfCoincidences8x4, setNumberOfCoincidences8x4] = useState(0);
    const [numberOfCoincidences8x5, setNumberOfCoincidences8x5] = useState(0);

    // number of coincides of matrix row 9 x check rows
    const [numberOfCoincidences9x1, setNumberOfCoincidences9x1] = useState(0);
    const [numberOfCoincidences9x2, setNumberOfCoincidences9x2] = useState(0);
    const [numberOfCoincidences9x3, setNumberOfCoincidences9x3] = useState(0);
    const [numberOfCoincidences9x4, setNumberOfCoincidences9x4] = useState(0);
    const [numberOfCoincidences9x5, setNumberOfCoincidences9x5] = useState(0);

    // number of coincides of matrix row 10 x check rows
    const [numberOfCoincidences10x1, setNumberOfCoincidences10x1] = useState(0);
    const [numberOfCoincidences10x2, setNumberOfCoincidences10x2] = useState(0);
    const [numberOfCoincidences10x3, setNumberOfCoincidences10x3] = useState(0);
    const [numberOfCoincidences10x4, setNumberOfCoincidences10x4] = useState(0);
    const [numberOfCoincidences10x5, setNumberOfCoincidences10x5] = useState(0);

    // number of coincides of matrix row 11 x check rows
    const [numberOfCoincidences11x1, setNumberOfCoincidences11x1] = useState(0);
    const [numberOfCoincidences11x2, setNumberOfCoincidences11x2] = useState(0);
    const [numberOfCoincidences11x3, setNumberOfCoincidences11x3] = useState(0);
    const [numberOfCoincidences11x4, setNumberOfCoincidences11x4] = useState(0);
    const [numberOfCoincidences11x5, setNumberOfCoincidences11x5] = useState(0);

    // number of coincides of matrix row 12 x check rows
    const [numberOfCoincidences12x1, setNumberOfCoincidences12x1] = useState(0);
    const [numberOfCoincidences12x2, setNumberOfCoincidences12x2] = useState(0);
    const [numberOfCoincidences12x3, setNumberOfCoincidences12x3] = useState(0);
    const [numberOfCoincidences12x4, setNumberOfCoincidences12x4] = useState(0);
    const [numberOfCoincidences12x5, setNumberOfCoincidences12x5] = useState(0);

    // number of coincides of matrix row 13 x check rows
    const [numberOfCoincidences13x1, setNumberOfCoincidences13x1] = useState(0);
    const [numberOfCoincidences13x2, setNumberOfCoincidences13x2] = useState(0);
    const [numberOfCoincidences13x3, setNumberOfCoincidences13x3] = useState(0);
    const [numberOfCoincidences13x4, setNumberOfCoincidences13x4] = useState(0);
    const [numberOfCoincidences13x5, setNumberOfCoincidences13x5] = useState(0);

    //horizontal matrix data
    //row 1
    const horizonalMatrix1x1 = 1;
    const horizonalMatrix1x2 = 1;
    const horizonalMatrix1x3 = 1;
    const horizonalMatrix1x4 = 1;
    const horizonalMatrix1x5 = 0;
    const horizonalMatrix1x6 = 0;
    const horizonalMatrix1x7 = 0;
    const horizonalMatrix1x8 = 0;
    const horizonalMatrix1x9 = 0;
    const horizonalMatrix1x10 = 0;
    const horizonalMatrix1x11 = 1;
    const horizonalMatrix1x12 = 1;
    const horizonalMatrix1x13 = 1;
    const horizonalMatrix1x14 = 0;
    const horizonalMatrix1x15 = 0;
    const horizonalMatrix1x16 = 1;
    const horizonalMatrix1x17 = 0;
    const horizonalMatrix1x18 = 0;
    const horizonalMatrix1x19 = 0;
    const horizonalMatrix1x20 = 0;

    const horizontalRow1Arr = [
        horizonalMatrix1x1,
        horizonalMatrix1x2,
        horizonalMatrix1x3,
        horizonalMatrix1x4,
        horizonalMatrix1x5,
        horizonalMatrix1x6,
        horizonalMatrix1x7,
        horizonalMatrix1x8,
        horizonalMatrix1x9,
        horizonalMatrix1x10,
        horizonalMatrix1x11,
        horizonalMatrix1x12,
        horizonalMatrix1x13,
        horizonalMatrix1x14,
        horizonalMatrix1x15,
        horizonalMatrix1x16,
        horizonalMatrix1x17,
        horizonalMatrix1x18,
        horizonalMatrix1x19,
        horizonalMatrix1x20
    ];

    //row 2
    const horizonalMatrix2x1 = 1;
    const horizonalMatrix2x2 = 0;
    const horizonalMatrix2x3 = 0;
    const horizonalMatrix2x4 = 0;
    const horizonalMatrix2x5 = 1;
    const horizonalMatrix2x6 = 1;
    const horizonalMatrix2x7 = 1;
    const horizonalMatrix2x8 = 0;
    const horizonalMatrix2x9 = 0;
    const horizonalMatrix2x10 = 0;
    const horizonalMatrix2x11 = 1;
    const horizonalMatrix2x12 = 0;
    const horizonalMatrix2x13 = 0;
    const horizonalMatrix2x14 = 1;
    const horizonalMatrix2x15 = 1;
    const horizonalMatrix2x16 = 0;
    const horizonalMatrix2x17 = 1;
    const horizonalMatrix2x18 = 0;
    const horizonalMatrix2x19 = 0;
    const horizonalMatrix2x20 = 0;

    const horizontalRow2Arr = [
        horizonalMatrix2x1,
        horizonalMatrix2x2,
        horizonalMatrix2x3,
        horizonalMatrix2x4,
        horizonalMatrix2x5,
        horizonalMatrix2x6,
        horizonalMatrix2x7,
        horizonalMatrix2x8,
        horizonalMatrix2x9,
        horizonalMatrix2x10,
        horizonalMatrix2x11,
        horizonalMatrix2x12,
        horizonalMatrix2x13,
        horizonalMatrix2x14,
        horizonalMatrix2x15,
        horizonalMatrix2x16,
        horizonalMatrix2x17,
        horizonalMatrix2x18,
        horizonalMatrix2x19,
        horizonalMatrix2x20
    ];

    //row 3
    const horizonalMatrix3x1 = 0;
    const horizonalMatrix3x2 = 1;
    const horizonalMatrix3x3 = 0;
    const horizonalMatrix3x4 = 0;
    const horizonalMatrix3x5 = 1;
    const horizonalMatrix3x6 = 0;
    const horizonalMatrix3x7 = 0;
    const horizonalMatrix3x8 = 1;
    const horizonalMatrix3x9 = 1;
    const horizonalMatrix3x10 = 0;
    const horizonalMatrix3x11 = 1;
    const horizonalMatrix3x12 = 1;
    const horizonalMatrix3x13 = 0;
    const horizonalMatrix3x14 = 1;
    const horizonalMatrix3x15 = 0;
    const horizonalMatrix3x16 = 0;
    const horizonalMatrix3x17 = 0;
    const horizonalMatrix3x18 = 1;
    const horizonalMatrix3x19 = 0;
    const horizonalMatrix3x20 = 0;

    const horizontalRow3Arr = [
        horizonalMatrix3x1,
        horizonalMatrix3x2,
        horizonalMatrix3x3,
        horizonalMatrix3x4,
        horizonalMatrix3x5,
        horizonalMatrix3x6,
        horizonalMatrix3x7,
        horizonalMatrix3x8,
        horizonalMatrix3x9,
        horizonalMatrix3x10,
        horizonalMatrix3x11,
        horizonalMatrix3x12,
        horizonalMatrix3x13,
        horizonalMatrix3x14,
        horizonalMatrix3x15,
        horizonalMatrix3x16,
        horizonalMatrix3x17,
        horizonalMatrix3x18,
        horizonalMatrix3x19,
        horizonalMatrix3x20
    ];

    //row 4
    const horizonalMatrix4x1 = 0;
    const horizonalMatrix4x2 = 0;
    const horizonalMatrix4x3 = 1;
    const horizonalMatrix4x4 = 0;
    const horizonalMatrix4x5 = 0;
    const horizonalMatrix4x6 = 1;
    const horizonalMatrix4x7 = 0;
    const horizonalMatrix4x8 = 1;
    const horizonalMatrix4x9 = 0;
    const horizonalMatrix4x10 = 1;
    const horizonalMatrix4x11 = 0;
    const horizonalMatrix4x12 = 1;
    const horizonalMatrix4x13 = 1;
    const horizonalMatrix4x14 = 1;
    const horizonalMatrix4x15 = 1;
    const horizonalMatrix4x16 = 0;
    const horizonalMatrix4x17 = 0;
    const horizonalMatrix4x18 = 0;
    const horizonalMatrix4x19 = 1;
    const horizonalMatrix4x20 = 0;

    const horizontalRow4Arr = [
        horizonalMatrix4x1,
        horizonalMatrix4x2,
        horizonalMatrix4x3,
        horizonalMatrix4x4,
        horizonalMatrix4x5,
        horizonalMatrix4x6,
        horizonalMatrix4x7,
        horizonalMatrix4x8,
        horizonalMatrix4x9,
        horizonalMatrix4x10,
        horizonalMatrix4x11,
        horizonalMatrix4x12,
        horizonalMatrix4x13,
        horizonalMatrix4x14,
        horizonalMatrix4x15,
        horizonalMatrix4x16,
        horizonalMatrix4x17,
        horizonalMatrix4x18,
        horizonalMatrix4x19,
        horizonalMatrix4x20
    ];

    //row 5
    const horizonalMatrix5x1 = 0;
    const horizonalMatrix5x2 = 0;
    const horizonalMatrix5x3 = 0;
    const horizonalMatrix5x4 = 1;
    const horizonalMatrix5x5 = 0;
    const horizonalMatrix5x6 = 0;
    const horizonalMatrix5x7 = 1;
    const horizonalMatrix5x8 = 0;
    const horizonalMatrix5x9 = 1;
    const horizonalMatrix5x10 = 1;
    const horizonalMatrix5x11 = 0;
    const horizonalMatrix5x12 = 0;
    const horizonalMatrix5x13 = 1;
    const horizonalMatrix5x14 = 0;
    const horizonalMatrix5x15 = 1;
    const horizonalMatrix5x16 = 0;
    const horizonalMatrix5x17 = 0;
    const horizonalMatrix5x18 = 0;
    const horizonalMatrix5x19 = 0;
    const horizonalMatrix5x20 = 1;

    const horizontalRow5Arr = [
        horizonalMatrix5x1,
        horizonalMatrix5x2,
        horizonalMatrix5x3,
        horizonalMatrix5x4,
        horizonalMatrix5x5,
        horizonalMatrix5x6,
        horizonalMatrix5x7,
        horizonalMatrix5x8,
        horizonalMatrix5x9,
        horizonalMatrix5x10,
        horizonalMatrix5x11,
        horizonalMatrix5x12,
        horizonalMatrix5x13,
        horizonalMatrix5x14,
        horizonalMatrix5x15,
        horizonalMatrix5x16,
        horizonalMatrix5x17,
        horizonalMatrix5x18,
        horizonalMatrix5x19,
        horizonalMatrix5x20
    ];

    const setCoincidencesToZero = () => {
        setNumberOfCoincidences1x1(0);
        setNumberOfCoincidences1x2(0);
        setNumberOfCoincidences1x3(0);
        setNumberOfCoincidences1x4(0);
        setNumberOfCoincidences1x5(0);

        setNumberOfCoincidences2x1(0);
        setNumberOfCoincidences2x2(0);
        setNumberOfCoincidences2x3(0);
        setNumberOfCoincidences2x4(0);
        setNumberOfCoincidences2x5(0);

        setNumberOfCoincidences3x1(0);
        setNumberOfCoincidences3x2(0);
        setNumberOfCoincidences3x3(0);
        setNumberOfCoincidences3x4(0);
        setNumberOfCoincidences3x5(0);

        setNumberOfCoincidences4x1(0);
        setNumberOfCoincidences4x2(0);
        setNumberOfCoincidences4x3(0);
        setNumberOfCoincidences4x4(0);
        setNumberOfCoincidences4x5(0);

        setNumberOfCoincidences5x1(0);
        setNumberOfCoincidences5x2(0);
        setNumberOfCoincidences5x3(0);
        setNumberOfCoincidences5x4(0);
        setNumberOfCoincidences5x5(0);

        setNumberOfCoincidences6x1(0);
        setNumberOfCoincidences6x2(0);
        setNumberOfCoincidences6x3(0);
        setNumberOfCoincidences6x4(0);
        setNumberOfCoincidences6x5(0);

        setNumberOfCoincidences7x1(0);
        setNumberOfCoincidences7x2(0);
        setNumberOfCoincidences7x3(0);
        setNumberOfCoincidences7x4(0);
        setNumberOfCoincidences7x5(0);

        setNumberOfCoincidences8x1(0);
        setNumberOfCoincidences8x2(0);
        setNumberOfCoincidences8x3(0);
        setNumberOfCoincidences8x4(0);
        setNumberOfCoincidences8x5(0);

        setNumberOfCoincidences9x1(0);
        setNumberOfCoincidences9x2(0);
        setNumberOfCoincidences9x3(0);
        setNumberOfCoincidences9x4(0);
        setNumberOfCoincidences9x5(0);

        setNumberOfCoincidences10x1(0);
        setNumberOfCoincidences10x2(0);
        setNumberOfCoincidences10x3(0);
        setNumberOfCoincidences10x4(0);
        setNumberOfCoincidences10x5(0);

        setNumberOfCoincidences11x1(0);
        setNumberOfCoincidences11x2(0);
        setNumberOfCoincidences11x3(0);
        setNumberOfCoincidences11x4(0);
        setNumberOfCoincidences11x5(0);

        setNumberOfCoincidences12x1(0);
        setNumberOfCoincidences12x2(0);
        setNumberOfCoincidences12x3(0);
        setNumberOfCoincidences12x4(0);
        setNumberOfCoincidences12x5(0);

        setNumberOfCoincidences13x1(0);
        setNumberOfCoincidences13x2(0);
        setNumberOfCoincidences13x3(0);
        setNumberOfCoincidences13x4(0);
        setNumberOfCoincidences13x5(0);
    };

    const readNoiseMatrix1stTime = () => {
        const noiseGetRow1Str = localStorage.getItem('noiseRow1');
        const noiseGetRow2Str = localStorage.getItem('noiseRow2');
        const noiseGetRow3Str = localStorage.getItem('noiseRow3');
        const noiseGetRow4Str = localStorage.getItem('noiseRow4');
        const noiseGetRow5Str = localStorage.getItem('noiseRow5');
        const noiseGetRow6Str = localStorage.getItem('noiseRow6');
        const noiseGetRow7Str = localStorage.getItem('noiseRow7');
        const noiseGetRow8Str = localStorage.getItem('noiseRow8');
        const noiseGetRow9Str = localStorage.getItem('noiseRow9');
        const noiseGetRow10Str = localStorage.getItem('noiseRow10');
        const noiseGetRow11Str = localStorage.getItem('noiseRow11');
        const noiseGetRow12Str = localStorage.getItem('noiseRow12');
        const noiseGetRow13Str = localStorage.getItem('noiseRow13');

        if (
            noiseGetRow1Str &&
            noiseGetRow2Str &&
            noiseGetRow3Str &&
            noiseGetRow4Str &&
            noiseGetRow5Str &&
            noiseGetRow6Str &&
            noiseGetRow7Str &&
            noiseGetRow8Str &&
            noiseGetRow9Str &&
            noiseGetRow10Str &&
            noiseGetRow11Str &&
            noiseGetRow12Str &&
            noiseGetRow13Str
        ) {
            const matrixResultRow1 = Array.from(noiseGetRow1Str.replaceAll(',', ''), Number);
            setRow1(matrixResultRow1);

            const matrixResultRow2 = Array.from(noiseGetRow2Str.replaceAll(',', ''), Number);
            setRow2(matrixResultRow2);

            const matrixResultRow3 = Array.from(noiseGetRow3Str.replaceAll(',', ''), Number);
            setRow3(matrixResultRow3);

            const matrixResultRow4 = Array.from(noiseGetRow4Str.replaceAll(',', ''), Number);
            setRow4(matrixResultRow4);

            const matrixResultRow5 = Array.from(noiseGetRow5Str.replaceAll(',', ''), Number);
            setRow5(matrixResultRow5);

            const matrixResultRow6 = Array.from(noiseGetRow6Str.replaceAll(',', ''), Number);
            setRow6(matrixResultRow6);

            const matrixResultRow7 = Array.from(noiseGetRow7Str.replaceAll(',', ''), Number);
            setRow7(matrixResultRow7);

            const matrixResultRow8 = Array.from(noiseGetRow8Str.replaceAll(',', ''), Number);
            setRow8(matrixResultRow8);

            const matrixResultRow9 = Array.from(noiseGetRow9Str.replaceAll(',', ''), Number);
            setRow9(matrixResultRow9);

            const matrixResultRow10 = Array.from(noiseGetRow10Str.replaceAll(',', ''), Number);
            setRow10(matrixResultRow10);

            const matrixResultRow11 = Array.from(noiseGetRow11Str.replaceAll(',', ''), Number);
            setRow11(matrixResultRow11);

            const matrixResultRow12 = Array.from(noiseGetRow12Str.replaceAll(',', ''), Number);
            setRow12(matrixResultRow12);

            const matrixResultRow13 = Array.from(noiseGetRow13Str.replaceAll(',', ''), Number);
            setRow13(matrixResultRow13);
        }
    };

    const row1Function = () => {
        // 1 x 1 (1st matrix row x 1st check row)
        if (row1[0] === horizontalRow1Arr[0] && row1[0] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[1] === horizontalRow1Arr[1] && row1[1] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[2] === horizontalRow1Arr[2] && row1[2] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[3] === horizontalRow1Arr[3] && row1[3] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[4] === horizontalRow1Arr[4] && row1[4] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[5] === horizontalRow1Arr[5] && row1[5] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[6] === horizontalRow1Arr[6] && row1[6] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[6] === horizontalRow1Arr[6] && row1[6] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[7] === horizontalRow1Arr[7] && row1[7] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[8] === horizontalRow1Arr[8] && row1[8] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[9] === horizontalRow1Arr[9] && row1[9] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[10] === horizontalRow1Arr[10] && row1[10] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[11] === horizontalRow1Arr[11] && row1[11] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[12] === horizontalRow1Arr[12] && row1[12] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[13] === horizontalRow1Arr[13] && row1[13] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[14] === horizontalRow1Arr[14] && row1[14] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[15] === horizontalRow1Arr[15] && row1[15] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[16] === horizontalRow1Arr[16] && row1[16] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[17] === horizontalRow1Arr[17] && row1[17] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[18] === horizontalRow1Arr[18] && row1[18] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (row1[19] === horizontalRow1Arr[19] && row1[19] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        // 1 x 2
        if (row1[0] === horizontalRow2Arr[0] && row1[0] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
            console.log(row1[0], horizontalRow2Arr[0], ' match');
        }
        if (row1[1] === horizontalRow2Arr[1] && row1[1] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
            console.log(row1[1], horizontalRow2Arr[1], ' match');
        }
        if (row1[2] === horizontalRow2Arr[2] && row1[2] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
            console.log(row1[2], horizontalRow2Arr[2], ' match');
        }
        if (row1[3] === horizontalRow2Arr[3] && row1[3] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
            console.log(row1[3], horizontalRow2Arr[3], ' match');
        }
        if (row1[4] === horizontalRow2Arr[4] && row1[4] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
            console.log(row1[4], horizontalRow2Arr[4], ' match');
        }
        if (row1[5] === horizontalRow2Arr[5] && row1[5] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
            console.log(row1[5], horizontalRow2Arr[5], ' match');
        }
        if (row1[6] === horizontalRow2Arr[6] && row1[6] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
            console.log(row1[6], horizontalRow2Arr[6], ' match');
        }
        if (row1[7] === horizontalRow2Arr[7] && row1[7] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[8] === horizontalRow2Arr[8] && row1[8] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[9] === horizontalRow2Arr[9] && row1[9] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[10] === horizontalRow2Arr[10] && row1[10] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[11] === horizontalRow2Arr[11] && row1[11] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[12] === horizontalRow2Arr[12] && row1[12] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[13] === horizontalRow2Arr[13] && row1[13] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[14] === horizontalRow2Arr[14] && row1[14] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[15] === horizontalRow2Arr[15] && row1[15] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[16] === horizontalRow2Arr[16] && row1[16] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[17] === horizontalRow2Arr[17] && row1[17] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[18] === horizontalRow2Arr[18] && row1[18] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (row1[19] === horizontalRow2Arr[19] && row1[19] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        // 1 x 3 (1st matrix row x 2nd check row)
        if (row1[0] === horizontalRow3Arr[0] && row1[0] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[1] === horizontalRow3Arr[1] && row1[1] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[2] === horizontalRow3Arr[2] && row1[2] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[3] === horizontalRow3Arr[3] && row1[3] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[4] === horizontalRow3Arr[4] && row1[4] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[5] === horizontalRow3Arr[5] && row1[5] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[6] === horizontalRow3Arr[6] && row1[6] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[7] === horizontalRow3Arr[7] && row1[7] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[8] === horizontalRow3Arr[8] && row1[8] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[9] === horizontalRow3Arr[9] && row1[9] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[10] === horizontalRow3Arr[10] && row1[10] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[11] === horizontalRow3Arr[11] && row1[11] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[12] === horizontalRow3Arr[12] && row1[12] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[13] === horizontalRow3Arr[13] && row1[13] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[14] === horizontalRow3Arr[14] && row1[14] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[15] === horizontalRow3Arr[15] && row1[15] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[16] === horizontalRow3Arr[16] && row1[16] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[17] === horizontalRow3Arr[17] && row1[17] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[18] === horizontalRow3Arr[18] && row1[18] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (row1[19] === horizontalRow3Arr[19] && row1[19] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        // 1 x 4 (1st matrix row x 4th check row)
        if (row1[0] === horizontalRow4Arr[0] && row1[0] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[1] === horizontalRow4Arr[1] && row1[1] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[2] === horizontalRow4Arr[2] && row1[2] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[3] === horizontalRow4Arr[3] && row1[3] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[4] === horizontalRow4Arr[4] && row1[4] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[5] === horizontalRow4Arr[5] && row1[5] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[6] === horizontalRow4Arr[6] && row1[6] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[7] === horizontalRow4Arr[7] && row1[7] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[8] === horizontalRow4Arr[8] && row1[8] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[9] === horizontalRow4Arr[9] && row1[9] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[10] === horizontalRow4Arr[10] && row1[10] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[11] === horizontalRow4Arr[11] && row1[11] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[12] === horizontalRow4Arr[12] && row1[12] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[13] === horizontalRow4Arr[13] && row1[13] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[14] === horizontalRow4Arr[14] && row1[14] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[15] === horizontalRow4Arr[15] && row1[15] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[16] === horizontalRow4Arr[16] && row1[16] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[17] === horizontalRow4Arr[17] && row1[17] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[18] === horizontalRow4Arr[18] && row1[18] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (row1[19] === horizontalRow4Arr[19] && row1[19] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        // 1 x 5 (1st matrix row x 5th check row)
        if (row1[0] === horizontalRow5Arr[0] && row1[0] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[1] === horizontalRow5Arr[1] && row1[1] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[2] === horizontalRow5Arr[2] && row1[2] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[3] === horizontalRow5Arr[3] && row1[3] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[4] === horizontalRow5Arr[4] && row1[4] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[5] === horizontalRow5Arr[5] && row1[5] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[6] === horizontalRow5Arr[6] && row1[6] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[7] === horizontalRow5Arr[7] && row1[7] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[8] === horizontalRow5Arr[8] && row1[8] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[9] === horizontalRow5Arr[9] && row1[9] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[10] === horizontalRow5Arr[10] && row1[10] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[11] === horizontalRow5Arr[11] && row1[11] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[12] === horizontalRow5Arr[12] && row1[12] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[13] === horizontalRow5Arr[13] && row1[13] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[14] === horizontalRow5Arr[14] && row1[14] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[15] === horizontalRow5Arr[15] && row1[15] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[16] === horizontalRow5Arr[16] && row1[16] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[17] === horizontalRow5Arr[17] && row1[17] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[18] === horizontalRow5Arr[18] && row1[18] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
        if (row1[19] === horizontalRow5Arr[19] && row1[19] === 1) {
            setNumberOfCoincidences1x5((prevNumber) => prevNumber + 1);
        }
    };

    const row2Function = () => {
        // 2 x 1
        if (row2[0] === horizontalRow1Arr[0] && row2[0] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[1] === horizontalRow1Arr[1] && row2[1] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[2] === horizontalRow1Arr[2] && row2[2] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[3] === horizontalRow1Arr[3] && row2[3] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[4] === horizontalRow1Arr[4] && row2[4] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[5] === horizontalRow1Arr[5] && row2[5] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[6] === horizontalRow1Arr[6] && row2[6] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[7] === horizontalRow1Arr[7] && row2[7] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[8] === horizontalRow1Arr[8] && row2[8] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[9] === horizontalRow1Arr[9] && row2[9] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[10] === horizontalRow1Arr[10] && row2[10] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[11] === horizontalRow1Arr[11] && row2[11] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[12] === horizontalRow1Arr[12] && row2[12] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[13] === horizontalRow1Arr[13] && row2[13] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[14] === horizontalRow1Arr[14] && row2[14] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[15] === horizontalRow1Arr[15] && row2[15] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[16] === horizontalRow1Arr[16] && row2[16] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[17] === horizontalRow1Arr[17] && row2[17] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[18] === horizontalRow1Arr[18] && row2[18] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (row2[19] === horizontalRow1Arr[19] && row2[19] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        // 2 x 2
        if (row2[0] === horizontalRow2Arr[0] && row2[0] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[1] === horizontalRow2Arr[1] && row2[1] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[2] === horizontalRow2Arr[2] && row2[2] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[3] === horizontalRow2Arr[3] && row2[3] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[4] === horizontalRow2Arr[4] && row2[4] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[5] === horizontalRow2Arr[5] && row2[5] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[6] === horizontalRow2Arr[6] && row2[6] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[7] === horizontalRow2Arr[7] && row2[7] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[8] === horizontalRow2Arr[8] && row2[8] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[9] === horizontalRow2Arr[9] && row2[9] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[10] === horizontalRow2Arr[10] && row2[10] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[11] === horizontalRow2Arr[11] && row2[11] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[12] === horizontalRow2Arr[12] && row2[12] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[13] === horizontalRow2Arr[13] && row2[13] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[14] === horizontalRow2Arr[14] && row2[14] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[15] === horizontalRow2Arr[15] && row2[15] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[16] === horizontalRow2Arr[16] && row2[16] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[17] === horizontalRow2Arr[17] && row2[17] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[18] === horizontalRow2Arr[18] && row2[18] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (row2[19] === horizontalRow2Arr[19] && row2[19] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        // 2 x 3
        if (row2[0] === horizontalRow3Arr[0] && row2[0] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[1] === horizontalRow3Arr[1] && row2[1] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[2] === horizontalRow3Arr[2] && row2[2] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[3] === horizontalRow3Arr[3] && row2[3] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[4] === horizontalRow3Arr[4] && row2[4] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[5] === horizontalRow3Arr[5] && row2[5] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[6] === horizontalRow3Arr[6] && row2[6] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[7] === horizontalRow3Arr[7] && row2[7] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[8] === horizontalRow3Arr[8] && row2[8] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[9] === horizontalRow3Arr[9] && row2[9] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[10] === horizontalRow3Arr[10] && row2[10] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[11] === horizontalRow3Arr[11] && row2[11] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[12] === horizontalRow3Arr[12] && row2[12] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[13] === horizontalRow3Arr[13] && row2[13] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[14] === horizontalRow3Arr[14] && row2[14] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[15] === horizontalRow3Arr[15] && row2[15] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[16] === horizontalRow3Arr[16] && row2[16] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[17] === horizontalRow3Arr[17] && row2[17] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[18] === horizontalRow3Arr[18] && row2[18] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (row2[19] === horizontalRow3Arr[19] && row2[19] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        // 2 x 4
        if (row2[0] === horizontalRow4Arr[0] && row2[0] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[1] === horizontalRow4Arr[1] && row2[1] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[2] === horizontalRow4Arr[2] && row2[2] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[3] === horizontalRow4Arr[3] && row2[3] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[4] === horizontalRow4Arr[4] && row2[4] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[5] === horizontalRow4Arr[5] && row2[5] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[6] === horizontalRow4Arr[6] && row2[6] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[7] === horizontalRow4Arr[7] && row2[7] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[8] === horizontalRow4Arr[8] && row2[8] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[9] === horizontalRow4Arr[9] && row2[9] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[10] === horizontalRow4Arr[10] && row2[10] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[11] === horizontalRow4Arr[11] && row2[11] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[12] === horizontalRow4Arr[12] && row2[12] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[13] === horizontalRow4Arr[13] && row2[13] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[14] === horizontalRow4Arr[14] && row2[14] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[15] === horizontalRow4Arr[15] && row2[15] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[16] === horizontalRow4Arr[16] && row2[16] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[17] === horizontalRow4Arr[17] && row2[17] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[18] === horizontalRow4Arr[18] && row2[18] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (row2[19] === horizontalRow4Arr[19] && row2[19] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        // 2 x 5
        if (row2[0] === horizontalRow5Arr[0] && row2[0] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[1] === horizontalRow5Arr[1] && row2[1] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[2] === horizontalRow5Arr[2] && row2[2] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[3] === horizontalRow5Arr[3] && row2[3] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[4] === horizontalRow5Arr[4] && row2[4] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[5] === horizontalRow5Arr[5] && row2[5] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[6] === horizontalRow5Arr[6] && row2[6] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[7] === horizontalRow5Arr[7] && row2[7] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[8] === horizontalRow5Arr[8] && row2[8] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[9] === horizontalRow5Arr[9] && row2[9] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[10] === horizontalRow5Arr[10] && row2[10] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[11] === horizontalRow5Arr[11] && row2[11] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[12] === horizontalRow5Arr[12] && row2[12] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[13] === horizontalRow5Arr[13] && row2[13] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[14] === horizontalRow5Arr[14] && row2[14] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[15] === horizontalRow5Arr[15] && row2[15] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[16] === horizontalRow5Arr[16] && row2[16] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[17] === horizontalRow5Arr[17] && row2[17] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[18] === horizontalRow5Arr[18] && row2[18] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
        if (row2[19] === horizontalRow5Arr[19] && row2[19] === 1) {
            setNumberOfCoincidences2x5((prevNumber) => prevNumber + 1);
        }
    };

    const row3Function = () => {
        // 3 x 1
        if (row3[0] === horizontalRow1Arr[0] && row3[0] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[1] === horizontalRow1Arr[1] && row3[1] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[2] === horizontalRow1Arr[2] && row3[2] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[3] === horizontalRow1Arr[3] && row3[3] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[4] === horizontalRow1Arr[4] && row3[4] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[5] === horizontalRow1Arr[5] && row3[5] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[6] === horizontalRow1Arr[6] && row3[6] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[7] === horizontalRow1Arr[7] && row3[7] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[8] === horizontalRow1Arr[8] && row3[8] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[9] === horizontalRow1Arr[9] && row3[9] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[10] === horizontalRow1Arr[10] && row3[10] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[11] === horizontalRow1Arr[11] && row3[11] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[12] === horizontalRow1Arr[12] && row3[12] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[13] === horizontalRow1Arr[13] && row3[13] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[14] === horizontalRow1Arr[14] && row3[14] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[15] === horizontalRow1Arr[15] && row3[15] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[16] === horizontalRow1Arr[16] && row3[16] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[17] === horizontalRow1Arr[17] && row3[17] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[18] === horizontalRow1Arr[18] && row3[18] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (row3[19] === horizontalRow1Arr[19] && row3[19] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        // 3 x 2
        if (row3[0] === horizontalRow2Arr[0] && row3[0] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[1] === horizontalRow2Arr[1] && row3[1] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[2] === horizontalRow2Arr[2] && row3[2] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[3] === horizontalRow2Arr[3] && row3[3] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[4] === horizontalRow2Arr[4] && row3[4] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[5] === horizontalRow2Arr[5] && row3[5] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[6] === horizontalRow2Arr[6] && row3[6] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[7] === horizontalRow2Arr[7] && row3[7] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[8] === horizontalRow2Arr[8] && row3[8] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[9] === horizontalRow2Arr[9] && row3[9] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[10] === horizontalRow2Arr[10] && row3[10] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[11] === horizontalRow2Arr[11] && row3[11] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[12] === horizontalRow2Arr[12] && row3[12] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[13] === horizontalRow2Arr[13] && row3[13] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[14] === horizontalRow2Arr[14] && row3[14] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[15] === horizontalRow2Arr[15] && row3[15] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[16] === horizontalRow2Arr[16] && row3[16] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[17] === horizontalRow2Arr[17] && row3[17] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[18] === horizontalRow2Arr[18] && row3[18] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (row3[19] === horizontalRow2Arr[19] && row3[19] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        // 3 x 3 (1st matrix row x 2nd check row)
        if (row3[0] === horizontalRow3Arr[0] && row3[0] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[1] === horizontalRow3Arr[1] && row3[1] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[2] === horizontalRow3Arr[2] && row3[2] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[3] === horizontalRow3Arr[3] && row3[3] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[4] === horizontalRow3Arr[4] && row3[4] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[5] === horizontalRow3Arr[5] && row3[5] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[6] === horizontalRow3Arr[6] && row3[6] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[7] === horizontalRow3Arr[7] && row3[7] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[8] === horizontalRow3Arr[8] && row3[8] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[9] === horizontalRow3Arr[9] && row3[9] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[10] === horizontalRow3Arr[10] && row3[10] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[11] === horizontalRow3Arr[11] && row3[11] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[12] === horizontalRow3Arr[12] && row3[12] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[13] === horizontalRow3Arr[13] && row3[13] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[14] === horizontalRow3Arr[14] && row3[14] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[15] === horizontalRow3Arr[15] && row3[15] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[16] === horizontalRow3Arr[16] && row3[16] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[17] === horizontalRow3Arr[17] && row3[17] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[18] === horizontalRow3Arr[18] && row3[18] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (row3[19] === horizontalRow3Arr[19] && row3[19] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        // 3 x 4
        if (row3[0] === horizontalRow4Arr[0] && row3[0] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[1] === horizontalRow4Arr[1] && row3[1] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[2] === horizontalRow4Arr[2] && row3[2] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[3] === horizontalRow4Arr[3] && row3[3] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[4] === horizontalRow4Arr[4] && row3[4] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[5] === horizontalRow4Arr[5] && row3[5] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[6] === horizontalRow4Arr[6] && row3[6] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[7] === horizontalRow4Arr[7] && row3[7] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[8] === horizontalRow4Arr[8] && row3[8] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[9] === horizontalRow4Arr[9] && row3[9] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[10] === horizontalRow4Arr[10] && row3[10] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[11] === horizontalRow4Arr[11] && row3[11] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[12] === horizontalRow4Arr[12] && row3[12] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[13] === horizontalRow4Arr[13] && row3[13] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[14] === horizontalRow4Arr[14] && row3[14] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[15] === horizontalRow4Arr[15] && row3[15] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[16] === horizontalRow4Arr[16] && row3[16] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[17] === horizontalRow4Arr[17] && row3[17] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[18] === horizontalRow4Arr[18] && row3[18] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (row3[19] === horizontalRow4Arr[19] && row3[19] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        // 3 x 5
        if (row3[0] === horizontalRow5Arr[0] && row3[0] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[1] === horizontalRow5Arr[1] && row3[1] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[2] === horizontalRow5Arr[2] && row3[2] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[3] === horizontalRow5Arr[3] && row3[3] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[4] === horizontalRow5Arr[4] && row3[4] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[5] === horizontalRow5Arr[5] && row3[5] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[6] === horizontalRow5Arr[6] && row3[6] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[7] === horizontalRow5Arr[7] && row3[7] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[8] === horizontalRow5Arr[8] && row3[8] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[9] === horizontalRow5Arr[9] && row3[9] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[10] === horizontalRow5Arr[10] && row3[10] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[11] === horizontalRow5Arr[11] && row3[11] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[12] === horizontalRow5Arr[12] && row3[12] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[13] === horizontalRow5Arr[13] && row3[13] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[14] === horizontalRow5Arr[14] && row3[14] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[15] === horizontalRow5Arr[15] && row3[15] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[16] === horizontalRow5Arr[16] && row3[16] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[17] === horizontalRow5Arr[17] && row3[17] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[18] === horizontalRow5Arr[18] && row3[18] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
        if (row3[19] === horizontalRow5Arr[19] && row3[19] === 1) {
            setNumberOfCoincidences3x5((prevNumber) => prevNumber + 1);
        }
    };

    const row4Function = () => {
        // 4 x 1
        if (row4[0] === horizontalRow1Arr[0] && row4[0] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[1] === horizontalRow1Arr[1] && row4[1] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[2] === horizontalRow1Arr[2] && row4[2] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[3] === horizontalRow1Arr[3] && row4[3] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[4] === horizontalRow1Arr[4] && row4[4] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[5] === horizontalRow1Arr[5] && row4[5] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[6] === horizontalRow1Arr[6] && row4[6] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[7] === horizontalRow1Arr[7] && row4[7] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[8] === horizontalRow1Arr[8] && row4[8] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[9] === horizontalRow1Arr[9] && row4[9] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[10] === horizontalRow1Arr[10] && row4[10] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[11] === horizontalRow1Arr[11] && row4[11] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[12] === horizontalRow1Arr[12] && row4[12] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[13] === horizontalRow1Arr[13] && row4[13] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[14] === horizontalRow1Arr[14] && row4[14] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[15] === horizontalRow1Arr[15] && row4[15] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[16] === horizontalRow1Arr[16] && row4[16] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[17] === horizontalRow1Arr[17] && row4[17] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[18] === horizontalRow1Arr[18] && row4[18] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (row4[19] === horizontalRow1Arr[19] && row4[19] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        // 4 x 2
        if (row4[0] === horizontalRow2Arr[0] && row4[0] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[1] === horizontalRow2Arr[1] && row4[1] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[2] === horizontalRow2Arr[2] && row4[2] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[3] === horizontalRow2Arr[3] && row4[3] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[4] === horizontalRow2Arr[4] && row4[4] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[5] === horizontalRow2Arr[5] && row4[5] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[6] === horizontalRow2Arr[6] && row4[6] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[7] === horizontalRow2Arr[7] && row4[7] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[8] === horizontalRow2Arr[8] && row4[8] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[9] === horizontalRow2Arr[9] && row4[9] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[10] === horizontalRow2Arr[10] && row4[10] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[11] === horizontalRow2Arr[11] && row4[11] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[12] === horizontalRow2Arr[12] && row4[12] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[13] === horizontalRow2Arr[13] && row4[13] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[14] === horizontalRow2Arr[14] && row4[14] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[15] === horizontalRow2Arr[15] && row4[15] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[16] === horizontalRow2Arr[16] && row4[16] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[17] === horizontalRow2Arr[17] && row4[17] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[18] === horizontalRow2Arr[18] && row4[18] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (row4[19] === horizontalRow2Arr[19] && row4[19] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        // 4 x 3
        if (row4[0] === horizontalRow3Arr[0] && row4[0] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[1] === horizontalRow3Arr[1] && row4[1] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[2] === horizontalRow3Arr[2] && row4[2] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[3] === horizontalRow3Arr[3] && row4[3] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[4] === horizontalRow3Arr[4] && row4[4] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[5] === horizontalRow3Arr[5] && row4[5] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[6] === horizontalRow3Arr[6] && row4[6] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[7] === horizontalRow3Arr[7] && row4[7] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[8] === horizontalRow3Arr[8] && row4[8] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[9] === horizontalRow3Arr[9] && row4[9] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[10] === horizontalRow3Arr[10] && row4[10] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[11] === horizontalRow3Arr[11] && row4[11] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[12] === horizontalRow3Arr[12] && row4[12] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[13] === horizontalRow3Arr[13] && row4[13] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[14] === horizontalRow3Arr[14] && row4[14] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[15] === horizontalRow3Arr[15] && row4[15] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[16] === horizontalRow3Arr[16] && row4[16] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[17] === horizontalRow3Arr[17] && row4[17] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[18] === horizontalRow3Arr[18] && row4[18] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (row4[19] === horizontalRow3Arr[19] && row4[19] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        // 4 x 4
        if (row4[0] === horizontalRow4Arr[0] && row4[0] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[1] === horizontalRow4Arr[1] && row4[1] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[2] === horizontalRow4Arr[2] && row4[2] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[3] === horizontalRow4Arr[3] && row4[3] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[4] === horizontalRow4Arr[4] && row4[4] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[5] === horizontalRow4Arr[5] && row4[5] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[6] === horizontalRow4Arr[6] && row4[6] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[7] === horizontalRow4Arr[7] && row4[7] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[8] === horizontalRow4Arr[8] && row4[8] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[9] === horizontalRow4Arr[9] && row4[9] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[10] === horizontalRow4Arr[10] && row4[10] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[11] === horizontalRow4Arr[11] && row4[11] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[12] === horizontalRow4Arr[12] && row4[12] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[13] === horizontalRow4Arr[13] && row4[13] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[14] === horizontalRow4Arr[14] && row4[14] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[15] === horizontalRow4Arr[15] && row4[15] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[16] === horizontalRow4Arr[16] && row4[16] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[17] === horizontalRow4Arr[17] && row4[17] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[18] === horizontalRow4Arr[18] && row4[18] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (row4[19] === horizontalRow4Arr[19] && row4[19] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        // 4 x 5
        if (row4[0] === horizontalRow5Arr[0] && row4[0] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[1] === horizontalRow5Arr[1] && row4[1] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[2] === horizontalRow5Arr[2] && row4[2] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[3] === horizontalRow5Arr[3] && row4[3] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[4] === horizontalRow5Arr[4] && row4[4] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[5] === horizontalRow5Arr[5] && row4[5] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[6] === horizontalRow5Arr[6] && row4[6] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[7] === horizontalRow5Arr[7] && row4[7] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[8] === horizontalRow5Arr[8] && row4[8] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[9] === horizontalRow5Arr[9] && row4[9] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[10] === horizontalRow5Arr[10] && row4[10] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[11] === horizontalRow5Arr[11] && row4[11] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[12] === horizontalRow5Arr[12] && row4[12] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[13] === horizontalRow5Arr[13] && row4[13] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[14] === horizontalRow5Arr[14] && row4[14] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[15] === horizontalRow5Arr[15] && row4[15] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[16] === horizontalRow5Arr[16] && row4[16] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[17] === horizontalRow5Arr[17] && row4[17] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[18] === horizontalRow5Arr[18] && row4[18] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
        if (row4[19] === horizontalRow5Arr[19] && row4[19] === 1) {
            setNumberOfCoincidences4x5((prevNumber) => prevNumber + 1);
        }
    };

    const row5Function = () => {
        // 5 x 1
        if (row5[0] === horizontalRow1Arr[0] && row5[0] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[1] === horizontalRow1Arr[1] && row5[1] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[2] === horizontalRow1Arr[2] && row5[2] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[3] === horizontalRow1Arr[3] && row5[3] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[4] === horizontalRow1Arr[4] && row5[4] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[5] === horizontalRow1Arr[5] && row5[5] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[6] === horizontalRow1Arr[6] && row5[6] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[7] === horizontalRow1Arr[7] && row5[7] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[8] === horizontalRow1Arr[8] && row5[8] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[9] === horizontalRow1Arr[9] && row5[9] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[10] === horizontalRow1Arr[10] && row5[10] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[11] === horizontalRow1Arr[11] && row5[11] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[12] === horizontalRow1Arr[12] && row5[12] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[13] === horizontalRow1Arr[13] && row5[13] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[14] === horizontalRow1Arr[14] && row5[14] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[15] === horizontalRow1Arr[15] && row5[15] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[16] === horizontalRow1Arr[16] && row5[16] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[17] === horizontalRow1Arr[17] && row5[17] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[18] === horizontalRow1Arr[18] && row5[18] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (row5[19] === horizontalRow1Arr[19] && row5[19] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        // 5 x 2
        if (row5[0] === horizontalRow2Arr[0] && row5[0] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[1] === horizontalRow2Arr[1] && row5[1] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[2] === horizontalRow2Arr[2] && row5[2] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[3] === horizontalRow2Arr[3] && row5[3] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[4] === horizontalRow2Arr[4] && row5[4] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[5] === horizontalRow2Arr[5] && row5[5] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[6] === horizontalRow2Arr[6] && row5[6] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[7] === horizontalRow2Arr[7] && row5[7] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[8] === horizontalRow2Arr[8] && row5[8] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[9] === horizontalRow2Arr[9] && row5[9] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[10] === horizontalRow2Arr[10] && row5[10] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[11] === horizontalRow2Arr[11] && row5[11] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[12] === horizontalRow2Arr[12] && row5[12] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[13] === horizontalRow2Arr[13] && row5[13] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[14] === horizontalRow2Arr[14] && row5[14] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[15] === horizontalRow2Arr[15] && row5[15] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[16] === horizontalRow2Arr[16] && row5[16] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[17] === horizontalRow2Arr[17] && row5[17] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[18] === horizontalRow2Arr[18] && row5[18] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (row5[19] === horizontalRow2Arr[19] && row5[19] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        // 5 x 3
        if (row5[0] === horizontalRow3Arr[0] && row5[0] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[1] === horizontalRow3Arr[1] && row5[1] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[2] === horizontalRow3Arr[2] && row5[2] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[3] === horizontalRow3Arr[3] && row5[3] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[4] === horizontalRow3Arr[4] && row5[4] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[5] === horizontalRow3Arr[5] && row5[5] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[6] === horizontalRow3Arr[6] && row5[6] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[7] === horizontalRow3Arr[7] && row5[7] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[8] === horizontalRow3Arr[8] && row5[8] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[9] === horizontalRow3Arr[9] && row5[9] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[10] === horizontalRow3Arr[10] && row5[10] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[11] === horizontalRow3Arr[11] && row5[11] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[12] === horizontalRow3Arr[12] && row5[12] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[13] === horizontalRow3Arr[13] && row5[13] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[14] === horizontalRow3Arr[14] && row5[14] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[15] === horizontalRow3Arr[15] && row5[15] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[16] === horizontalRow3Arr[16] && row5[16] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[17] === horizontalRow3Arr[17] && row5[17] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[18] === horizontalRow3Arr[18] && row5[18] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (row5[19] === horizontalRow3Arr[19] && row5[19] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        // 5 x 4
        if (row5[0] === horizontalRow4Arr[0] && row5[0] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[1] === horizontalRow4Arr[1] && row5[1] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[2] === horizontalRow4Arr[2] && row5[2] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[3] === horizontalRow4Arr[3] && row5[3] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[4] === horizontalRow4Arr[4] && row5[4] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[5] === horizontalRow4Arr[5] && row5[5] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[6] === horizontalRow4Arr[6] && row5[6] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[7] === horizontalRow4Arr[7] && row5[7] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[8] === horizontalRow4Arr[8] && row5[8] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[9] === horizontalRow4Arr[9] && row5[9] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[10] === horizontalRow4Arr[10] && row5[10] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[11] === horizontalRow4Arr[11] && row5[11] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[12] === horizontalRow4Arr[12] && row5[12] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[13] === horizontalRow4Arr[13] && row5[13] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[14] === horizontalRow4Arr[14] && row5[14] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[15] === horizontalRow4Arr[15] && row5[15] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[16] === horizontalRow4Arr[16] && row5[16] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[17] === horizontalRow4Arr[17] && row5[17] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[18] === horizontalRow4Arr[18] && row5[18] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (row5[19] === horizontalRow4Arr[19] && row5[19] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        // 5 x 5
        if (row5[0] === horizontalRow5Arr[0] && row5[0] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[1] === horizontalRow5Arr[1] && row5[1] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[2] === horizontalRow5Arr[2] && row5[2] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[3] === horizontalRow5Arr[3] && row5[3] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[4] === horizontalRow5Arr[4] && row5[4] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[5] === horizontalRow5Arr[5] && row5[5] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[6] === horizontalRow5Arr[6] && row5[6] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[7] === horizontalRow5Arr[7] && row5[7] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[8] === horizontalRow5Arr[8] && row5[8] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[9] === horizontalRow5Arr[9] && row5[9] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[10] === horizontalRow5Arr[10] && row5[10] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[11] === horizontalRow5Arr[11] && row5[11] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[12] === horizontalRow5Arr[12] && row5[12] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[13] === horizontalRow5Arr[13] && row5[13] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[14] === horizontalRow5Arr[14] && row5[14] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[15] === horizontalRow5Arr[15] && row5[15] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[16] === horizontalRow5Arr[16] && row5[16] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[17] === horizontalRow5Arr[17] && row5[17] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[18] === horizontalRow5Arr[18] && row5[18] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
        if (row5[19] === horizontalRow5Arr[19] && row5[19] === 1) {
            setNumberOfCoincidences5x5((prevNumber) => prevNumber + 1);
        }
    };

    const row6Function = () => {
        // 6 x 1
        if (row6[0] === horizontalRow1Arr[0] && row6[0] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[1] === horizontalRow1Arr[1] && row6[1] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[2] === horizontalRow1Arr[2] && row6[2] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[3] === horizontalRow1Arr[3] && row6[3] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[4] === horizontalRow1Arr[4] && row6[4] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[5] === horizontalRow1Arr[5] && row6[5] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[6] === horizontalRow1Arr[6] && row6[6] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[7] === horizontalRow1Arr[7] && row6[7] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[8] === horizontalRow1Arr[8] && row6[8] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[9] === horizontalRow1Arr[9] && row6[9] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[10] === horizontalRow1Arr[10] && row6[10] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[11] === horizontalRow1Arr[11] && row6[11] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[12] === horizontalRow1Arr[12] && row6[12] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[13] === horizontalRow1Arr[13] && row6[13] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[14] === horizontalRow1Arr[14] && row6[14] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[15] === horizontalRow1Arr[15] && row6[15] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[16] === horizontalRow1Arr[16] && row6[16] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[17] === horizontalRow1Arr[17] && row6[17] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[18] === horizontalRow1Arr[18] && row6[18] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (row6[19] === horizontalRow1Arr[19] && row6[19] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        // 6 x 2
        if (row6[0] === horizontalRow2Arr[0] && row6[0] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[1] === horizontalRow2Arr[1] && row6[1] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[2] === horizontalRow2Arr[2] && row6[2] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[3] === horizontalRow2Arr[3] && row6[3] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[4] === horizontalRow2Arr[4] && row6[4] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[5] === horizontalRow2Arr[5] && row6[5] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[6] === horizontalRow2Arr[6] && row6[6] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[7] === horizontalRow2Arr[7] && row6[7] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[8] === horizontalRow2Arr[8] && row6[8] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[9] === horizontalRow2Arr[9] && row6[9] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[10] === horizontalRow2Arr[10] && row6[10] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[11] === horizontalRow2Arr[11] && row6[11] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[12] === horizontalRow2Arr[12] && row6[12] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[13] === horizontalRow2Arr[13] && row6[13] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[14] === horizontalRow2Arr[14] && row6[14] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[15] === horizontalRow2Arr[15] && row6[15] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[16] === horizontalRow2Arr[16] && row6[16] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[17] === horizontalRow2Arr[17] && row6[17] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[18] === horizontalRow2Arr[18] && row6[18] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (row6[19] === horizontalRow2Arr[19] && row6[19] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        // 6 x 3
        if (row6[0] === horizontalRow3Arr[0] && row6[0] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[1] === horizontalRow3Arr[1] && row6[1] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[2] === horizontalRow3Arr[2] && row6[2] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[3] === horizontalRow3Arr[3] && row6[3] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[4] === horizontalRow3Arr[4] && row6[4] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[5] === horizontalRow3Arr[5] && row6[5] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[6] === horizontalRow3Arr[6] && row6[6] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[7] === horizontalRow3Arr[7] && row6[7] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[8] === horizontalRow3Arr[8] && row6[8] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[9] === horizontalRow3Arr[9] && row6[9] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[10] === horizontalRow3Arr[10] && row6[10] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[11] === horizontalRow3Arr[11] && row6[11] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[12] === horizontalRow3Arr[12] && row6[12] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[13] === horizontalRow3Arr[13] && row6[13] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[14] === horizontalRow3Arr[14] && row6[14] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[15] === horizontalRow3Arr[15] && row6[15] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[16] === horizontalRow3Arr[16] && row6[16] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[17] === horizontalRow3Arr[17] && row6[17] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[18] === horizontalRow3Arr[18] && row6[18] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (row6[19] === horizontalRow3Arr[19] && row6[19] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        // 6 x 4
        if (row6[0] === horizontalRow4Arr[0] && row6[0] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[1] === horizontalRow4Arr[1] && row6[1] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[2] === horizontalRow4Arr[2] && row6[2] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[3] === horizontalRow4Arr[3] && row6[3] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[4] === horizontalRow4Arr[4] && row6[4] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[5] === horizontalRow4Arr[5] && row6[5] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[6] === horizontalRow4Arr[6] && row6[6] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[7] === horizontalRow4Arr[7] && row6[7] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[8] === horizontalRow4Arr[8] && row6[8] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[9] === horizontalRow4Arr[9] && row6[9] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[10] === horizontalRow4Arr[10] && row6[10] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[11] === horizontalRow4Arr[11] && row6[11] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[12] === horizontalRow4Arr[12] && row6[12] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[13] === horizontalRow4Arr[13] && row6[13] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[14] === horizontalRow4Arr[14] && row6[14] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[15] === horizontalRow4Arr[15] && row6[15] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[16] === horizontalRow4Arr[16] && row6[16] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[17] === horizontalRow4Arr[17] && row6[17] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[18] === horizontalRow4Arr[18] && row6[18] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (row6[19] === horizontalRow4Arr[19] && row6[19] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        // 6 x 5
        if (row6[0] === horizontalRow5Arr[0] && row6[0] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[1] === horizontalRow5Arr[1] && row6[1] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[2] === horizontalRow5Arr[2] && row6[2] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[3] === horizontalRow5Arr[3] && row6[3] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[4] === horizontalRow5Arr[4] && row6[4] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[5] === horizontalRow5Arr[5] && row6[5] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[6] === horizontalRow5Arr[6] && row6[6] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[7] === horizontalRow5Arr[7] && row6[7] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[8] === horizontalRow5Arr[8] && row6[8] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[9] === horizontalRow5Arr[9] && row6[9] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[10] === horizontalRow5Arr[10] && row6[10] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[11] === horizontalRow5Arr[11] && row6[11] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[12] === horizontalRow5Arr[12] && row6[12] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[13] === horizontalRow5Arr[13] && row6[13] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[14] === horizontalRow5Arr[14] && row6[14] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[15] === horizontalRow5Arr[15] && row6[15] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[16] === horizontalRow5Arr[16] && row6[16] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[17] === horizontalRow5Arr[17] && row6[17] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[18] === horizontalRow5Arr[18] && row6[18] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
        if (row6[19] === horizontalRow5Arr[19] && row6[19] === 1) {
            setNumberOfCoincidences6x5((prevNumber) => prevNumber + 1);
        }
    };

    const row7Function = () => {
        // 7 x 1
        if (row7[0] === horizontalRow1Arr[0] && row7[0] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[1] === horizontalRow1Arr[1] && row7[1] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[2] === horizontalRow1Arr[2] && row7[2] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[3] === horizontalRow1Arr[3] && row7[3] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[4] === horizontalRow1Arr[4] && row7[4] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[5] === horizontalRow1Arr[5] && row7[5] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[6] === horizontalRow1Arr[6] && row7[6] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[7] === horizontalRow1Arr[7] && row7[7] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[8] === horizontalRow1Arr[8] && row7[8] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[9] === horizontalRow1Arr[9] && row7[9] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[10] === horizontalRow1Arr[10] && row7[10] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[11] === horizontalRow1Arr[11] && row7[11] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[12] === horizontalRow1Arr[12] && row7[12] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[13] === horizontalRow1Arr[13] && row7[13] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[14] === horizontalRow1Arr[14] && row7[14] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[15] === horizontalRow1Arr[15] && row7[15] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[16] === horizontalRow1Arr[16] && row7[16] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[17] === horizontalRow1Arr[17] && row7[17] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[18] === horizontalRow1Arr[18] && row7[18] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (row7[19] === horizontalRow1Arr[19] && row7[19] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        // 7 x 2
        if (row7[0] === horizontalRow2Arr[0] && row7[0] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[1] === horizontalRow2Arr[1] && row7[1] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[2] === horizontalRow2Arr[2] && row7[2] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[3] === horizontalRow2Arr[3] && row7[3] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[4] === horizontalRow2Arr[4] && row7[4] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[5] === horizontalRow2Arr[5] && row7[5] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[6] === horizontalRow2Arr[6] && row7[6] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[7] === horizontalRow2Arr[7] && row7[7] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[8] === horizontalRow2Arr[8] && row7[8] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[9] === horizontalRow2Arr[9] && row7[9] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[10] === horizontalRow2Arr[10] && row7[10] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[11] === horizontalRow2Arr[11] && row7[11] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[12] === horizontalRow2Arr[12] && row7[12] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[13] === horizontalRow2Arr[13] && row7[13] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[14] === horizontalRow2Arr[14] && row7[14] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[15] === horizontalRow2Arr[15] && row7[15] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[16] === horizontalRow2Arr[16] && row7[16] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[17] === horizontalRow2Arr[17] && row7[17] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[18] === horizontalRow2Arr[18] && row7[18] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (row7[19] === horizontalRow2Arr[19] && row7[19] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        // 7 x 3
        if (row7[0] === horizontalRow3Arr[0] && row7[0] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[1] === horizontalRow3Arr[1] && row7[1] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[2] === horizontalRow3Arr[2] && row7[2] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[3] === horizontalRow3Arr[3] && row7[3] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[4] === horizontalRow3Arr[4] && row7[4] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[5] === horizontalRow3Arr[5] && row7[5] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[6] === horizontalRow3Arr[6] && row7[6] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[7] === horizontalRow3Arr[7] && row7[7] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[8] === horizontalRow3Arr[8] && row7[8] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[9] === horizontalRow3Arr[9] && row7[9] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[10] === horizontalRow3Arr[10] && row7[10] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[11] === horizontalRow3Arr[11] && row7[11] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[12] === horizontalRow3Arr[12] && row7[12] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[13] === horizontalRow3Arr[13] && row7[13] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[14] === horizontalRow3Arr[14] && row7[14] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[15] === horizontalRow3Arr[15] && row7[15] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[16] === horizontalRow3Arr[16] && row7[16] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[17] === horizontalRow3Arr[17] && row7[17] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[18] === horizontalRow3Arr[18] && row7[18] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (row7[19] === horizontalRow3Arr[19] && row7[19] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        // 7 x 4
        if (row7[0] === horizontalRow4Arr[0] && row7[0] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[1] === horizontalRow4Arr[1] && row7[1] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[2] === horizontalRow4Arr[2] && row7[2] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[3] === horizontalRow4Arr[3] && row7[3] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[4] === horizontalRow4Arr[4] && row7[4] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[5] === horizontalRow4Arr[5] && row7[5] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[6] === horizontalRow4Arr[6] && row7[6] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[7] === horizontalRow4Arr[7] && row7[7] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[8] === horizontalRow4Arr[8] && row7[8] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[9] === horizontalRow4Arr[9] && row7[9] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[10] === horizontalRow4Arr[10] && row7[10] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[11] === horizontalRow4Arr[11] && row7[11] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[12] === horizontalRow4Arr[12] && row7[12] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[13] === horizontalRow4Arr[13] && row7[13] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[14] === horizontalRow4Arr[14] && row7[14] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[15] === horizontalRow4Arr[15] && row7[15] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[16] === horizontalRow4Arr[16] && row7[16] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[17] === horizontalRow4Arr[17] && row7[17] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[18] === horizontalRow4Arr[18] && row7[18] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (row7[19] === horizontalRow4Arr[19] && row7[19] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        // 7 x 5
        if (row7[0] === horizontalRow5Arr[0] && row7[0] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[1] === horizontalRow5Arr[1] && row7[1] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[2] === horizontalRow5Arr[2] && row7[2] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[3] === horizontalRow5Arr[3] && row7[3] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[4] === horizontalRow5Arr[4] && row7[4] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[5] === horizontalRow5Arr[5] && row7[5] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[6] === horizontalRow5Arr[6] && row7[6] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[7] === horizontalRow5Arr[7] && row7[7] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[8] === horizontalRow5Arr[8] && row7[8] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[9] === horizontalRow5Arr[9] && row7[9] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[10] === horizontalRow5Arr[10] && row7[10] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[11] === horizontalRow5Arr[11] && row7[11] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[12] === horizontalRow5Arr[12] && row7[12] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[13] === horizontalRow5Arr[13] && row7[13] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[14] === horizontalRow5Arr[14] && row7[14] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[15] === horizontalRow5Arr[15] && row7[15] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[16] === horizontalRow5Arr[16] && row7[16] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[17] === horizontalRow5Arr[17] && row7[17] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[18] === horizontalRow5Arr[18] && row7[18] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
        if (row7[19] === horizontalRow5Arr[19] && row7[19] === 1) {
            setNumberOfCoincidences7x5((prevNumber) => prevNumber + 1);
        }
    };

    const doHorizontalDecodeCheck = () => {
        setCoincidencesToZero();

        row1Function();
        row2Function();
        row3Function();
        row4Function();
        row5Function();
        row6Function();
        row7Function();

        // 8 x 1
        if (row8[0] === horizontalRow1Arr[0] && row8[0] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[1] === horizontalRow1Arr[1] && row8[1] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[2] === horizontalRow1Arr[2] && row8[2] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[3] === horizontalRow1Arr[3] && row8[3] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[4] === horizontalRow1Arr[4] && row8[4] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[5] === horizontalRow1Arr[5] && row8[5] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[6] === horizontalRow1Arr[6] && row8[6] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[7] === horizontalRow1Arr[7] && row8[7] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[8] === horizontalRow1Arr[8] && row8[8] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[9] === horizontalRow1Arr[9] && row8[9] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[10] === horizontalRow1Arr[10] && row8[10] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[11] === horizontalRow1Arr[11] && row8[11] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[12] === horizontalRow1Arr[12] && row8[12] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[13] === horizontalRow1Arr[13] && row8[13] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[14] === horizontalRow1Arr[14] && row8[14] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[15] === horizontalRow1Arr[15] && row8[15] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[16] === horizontalRow1Arr[16] && row8[16] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[17] === horizontalRow1Arr[17] && row8[17] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[18] === horizontalRow1Arr[18] && row8[18] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (row8[19] === horizontalRow1Arr[19] && row8[19] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        // 8 x 2
        if (row8[0] === horizontalRow2Arr[0] && row8[0] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[1] === horizontalRow2Arr[1] && row8[1] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[2] === horizontalRow2Arr[2] && row8[2] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[3] === horizontalRow2Arr[3] && row8[3] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[4] === horizontalRow2Arr[4] && row8[4] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[5] === horizontalRow2Arr[5] && row8[5] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[6] === horizontalRow2Arr[6] && row8[6] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[7] === horizontalRow2Arr[7] && row8[7] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[8] === horizontalRow2Arr[8] && row8[8] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[9] === horizontalRow2Arr[9] && row8[9] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[10] === horizontalRow2Arr[10] && row8[10] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[11] === horizontalRow2Arr[11] && row8[11] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[12] === horizontalRow2Arr[12] && row8[12] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[13] === horizontalRow2Arr[13] && row8[13] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[14] === horizontalRow2Arr[14] && row8[14] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[15] === horizontalRow2Arr[15] && row8[15] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[16] === horizontalRow2Arr[16] && row8[16] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[17] === horizontalRow2Arr[17] && row8[17] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[18] === horizontalRow2Arr[18] && row8[18] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (row8[19] === horizontalRow2Arr[19] && row8[19] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        // 8 x 3
        if (row8[0] === horizontalRow3Arr[0] && row8[0] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[1] === horizontalRow3Arr[1] && row8[1] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[2] === horizontalRow3Arr[2] && row8[2] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[3] === horizontalRow3Arr[3] && row8[3] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[4] === horizontalRow3Arr[4] && row8[4] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[5] === horizontalRow3Arr[5] && row8[5] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[6] === horizontalRow3Arr[6] && row8[6] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[7] === horizontalRow3Arr[7] && row8[7] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[8] === horizontalRow3Arr[8] && row8[8] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[9] === horizontalRow3Arr[9] && row8[9] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[10] === horizontalRow3Arr[10] && row8[10] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[11] === horizontalRow3Arr[11] && row8[11] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[12] === horizontalRow3Arr[12] && row8[12] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[13] === horizontalRow3Arr[13] && row8[13] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[14] === horizontalRow3Arr[14] && row8[14] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[15] === horizontalRow3Arr[15] && row8[15] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[16] === horizontalRow3Arr[16] && row8[16] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[17] === horizontalRow3Arr[17] && row8[17] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[18] === horizontalRow3Arr[18] && row8[18] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (row8[19] === horizontalRow3Arr[19] && row8[19] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        // 8 x 4
        if (row8[0] === horizontalRow4Arr[0] && row8[0] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[1] === horizontalRow4Arr[1] && row8[1] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[2] === horizontalRow4Arr[2] && row8[2] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[3] === horizontalRow4Arr[3] && row8[3] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[4] === horizontalRow4Arr[4] && row8[4] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[5] === horizontalRow4Arr[5] && row8[5] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[6] === horizontalRow4Arr[6] && row8[6] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[7] === horizontalRow4Arr[7] && row8[7] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[8] === horizontalRow4Arr[8] && row8[8] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[9] === horizontalRow4Arr[9] && row8[9] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[10] === horizontalRow4Arr[10] && row8[10] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[11] === horizontalRow4Arr[11] && row8[11] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[12] === horizontalRow4Arr[12] && row8[12] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[13] === horizontalRow4Arr[13] && row8[13] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[14] === horizontalRow4Arr[14] && row8[14] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[15] === horizontalRow4Arr[15] && row8[15] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[16] === horizontalRow4Arr[16] && row8[16] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[17] === horizontalRow4Arr[17] && row8[17] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[18] === horizontalRow4Arr[18] && row8[18] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (row8[19] === horizontalRow4Arr[19] && row8[19] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        // 8 x 5
        if (row8[0] === horizontalRow5Arr[0] && row8[0] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[1] === horizontalRow5Arr[1] && row8[1] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[2] === horizontalRow5Arr[2] && row8[2] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[3] === horizontalRow5Arr[3] && row8[3] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[4] === horizontalRow5Arr[4] && row8[4] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[5] === horizontalRow5Arr[5] && row8[5] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[6] === horizontalRow5Arr[6] && row8[6] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[7] === horizontalRow5Arr[7] && row8[7] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[8] === horizontalRow5Arr[8] && row8[8] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[9] === horizontalRow5Arr[9] && row8[9] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[10] === horizontalRow5Arr[10] && row8[10] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[11] === horizontalRow5Arr[11] && row8[11] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[12] === horizontalRow5Arr[12] && row8[12] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[13] === horizontalRow5Arr[13] && row8[13] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[14] === horizontalRow5Arr[14] && row8[14] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[15] === horizontalRow5Arr[15] && row8[15] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[16] === horizontalRow5Arr[16] && row8[16] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[17] === horizontalRow5Arr[17] && row8[17] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[18] === horizontalRow5Arr[18] && row8[18] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }
        if (row8[19] === horizontalRow5Arr[19] && row8[19] === 1) {
            setNumberOfCoincidences8x5((prevNumber) => prevNumber + 1);
        }

        // 9 x 1
        if (row9[0] === horizontalRow1Arr[0] && row9[0] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[1] === horizontalRow1Arr[1] && row9[1] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[2] === horizontalRow1Arr[2] && row9[2] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[3] === horizontalRow1Arr[3] && row9[3] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[4] === horizontalRow1Arr[4] && row9[4] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[5] === horizontalRow1Arr[5] && row9[5] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[6] === horizontalRow1Arr[6] && row9[6] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[7] === horizontalRow1Arr[7] && row9[7] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[8] === horizontalRow1Arr[8] && row9[8] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[9] === horizontalRow1Arr[9] && row9[9] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[10] === horizontalRow1Arr[10] && row9[10] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[11] === horizontalRow1Arr[11] && row9[11] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[12] === horizontalRow1Arr[12] && row9[12] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[13] === horizontalRow1Arr[13] && row9[13] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[14] === horizontalRow1Arr[14] && row9[14] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[15] === horizontalRow1Arr[15] && row9[15] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[16] === horizontalRow1Arr[16] && row9[16] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[17] === horizontalRow1Arr[17] && row9[17] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[18] === horizontalRow1Arr[18] && row9[18] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (row9[19] === horizontalRow1Arr[19] && row9[19] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        // 9 x 2
        if (row9[0] === horizontalRow2Arr[0] && row9[0] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[1] === horizontalRow2Arr[1] && row9[1] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[2] === horizontalRow2Arr[2] && row9[2] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[3] === horizontalRow2Arr[3] && row9[3] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[4] === horizontalRow2Arr[4] && row9[4] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[5] === horizontalRow2Arr[5] && row9[5] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[6] === horizontalRow2Arr[6] && row9[6] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[7] === horizontalRow2Arr[7] && row9[7] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[8] === horizontalRow2Arr[8] && row9[8] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[9] === horizontalRow2Arr[9] && row9[9] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[10] === horizontalRow2Arr[10] && row9[10] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[11] === horizontalRow2Arr[11] && row9[11] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[12] === horizontalRow2Arr[12] && row9[12] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[13] === horizontalRow2Arr[13] && row9[13] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[14] === horizontalRow2Arr[14] && row9[14] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[15] === horizontalRow2Arr[15] && row9[15] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[16] === horizontalRow2Arr[16] && row9[16] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[17] === horizontalRow2Arr[17] && row9[17] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[18] === horizontalRow2Arr[18] && row9[18] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (row9[19] === horizontalRow2Arr[19] && row9[19] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        // 9 x 3
        if (row9[0] === horizontalRow3Arr[0] && row9[0] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[1] === horizontalRow3Arr[1] && row9[1] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[2] === horizontalRow3Arr[2] && row9[2] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[3] === horizontalRow3Arr[3] && row9[3] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[4] === horizontalRow3Arr[4] && row9[4] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[5] === horizontalRow3Arr[5] && row9[5] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[6] === horizontalRow3Arr[6] && row9[6] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[7] === horizontalRow3Arr[7] && row9[7] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[8] === horizontalRow3Arr[8] && row9[8] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[9] === horizontalRow3Arr[9] && row9[9] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[10] === horizontalRow3Arr[10] && row9[10] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[11] === horizontalRow3Arr[11] && row9[11] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[12] === horizontalRow3Arr[12] && row9[12] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[13] === horizontalRow3Arr[13] && row9[13] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[14] === horizontalRow3Arr[14] && row9[14] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[15] === horizontalRow3Arr[15] && row9[15] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[16] === horizontalRow3Arr[16] && row9[16] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[17] === horizontalRow3Arr[17] && row9[17] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[18] === horizontalRow3Arr[18] && row9[18] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (row9[19] === horizontalRow3Arr[19] && row9[19] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        // 9 x 4
        if (row9[0] === horizontalRow4Arr[0] && row9[0] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[1] === horizontalRow4Arr[1] && row9[1] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[2] === horizontalRow4Arr[2] && row9[2] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[3] === horizontalRow4Arr[3] && row9[3] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[4] === horizontalRow4Arr[4] && row9[4] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[5] === horizontalRow4Arr[5] && row9[5] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[6] === horizontalRow4Arr[6] && row9[6] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[7] === horizontalRow4Arr[7] && row9[7] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[8] === horizontalRow4Arr[8] && row9[8] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[9] === horizontalRow4Arr[9] && row9[9] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[10] === horizontalRow4Arr[10] && row9[10] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[11] === horizontalRow4Arr[11] && row9[11] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[12] === horizontalRow4Arr[12] && row9[12] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[13] === horizontalRow4Arr[13] && row9[13] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[14] === horizontalRow4Arr[14] && row9[14] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[15] === horizontalRow4Arr[15] && row9[15] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[16] === horizontalRow4Arr[16] && row9[16] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[17] === horizontalRow4Arr[17] && row9[17] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[18] === horizontalRow4Arr[18] && row9[18] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (row9[19] === horizontalRow4Arr[19] && row9[19] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        // 9 x 5
        if (row9[0] === horizontalRow5Arr[0] && row9[0] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[1] === horizontalRow5Arr[1] && row9[1] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[2] === horizontalRow5Arr[2] && row9[2] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[3] === horizontalRow5Arr[3] && row9[3] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[4] === horizontalRow5Arr[4] && row9[4] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[5] === horizontalRow5Arr[5] && row9[5] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[6] === horizontalRow5Arr[6] && row9[6] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[7] === horizontalRow5Arr[7] && row9[7] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[8] === horizontalRow5Arr[8] && row9[8] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[9] === horizontalRow5Arr[9] && row9[9] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[10] === horizontalRow5Arr[10] && row9[10] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[11] === horizontalRow5Arr[11] && row9[11] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[12] === horizontalRow5Arr[12] && row9[12] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[13] === horizontalRow5Arr[13] && row9[13] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[14] === horizontalRow5Arr[14] && row9[14] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[15] === horizontalRow5Arr[15] && row9[15] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[16] === horizontalRow5Arr[16] && row9[16] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[17] === horizontalRow5Arr[17] && row9[17] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[18] === horizontalRow5Arr[18] && row9[18] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }
        if (row9[19] === horizontalRow5Arr[19] && row9[19] === 1) {
            setNumberOfCoincidences9x5((prevNumber) => prevNumber + 1);
        }

        // 10 x 1
        if (row10[0] === horizontalRow1Arr[0] && row10[0] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[1] === horizontalRow1Arr[1] && row10[1] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[2] === horizontalRow1Arr[2] && row10[2] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[3] === horizontalRow1Arr[3] && row10[3] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[4] === horizontalRow1Arr[4] && row10[4] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[5] === horizontalRow1Arr[5] && row10[5] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[6] === horizontalRow1Arr[6] && row10[6] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[7] === horizontalRow1Arr[7] && row10[7] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[8] === horizontalRow1Arr[8] && row10[8] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[9] === horizontalRow1Arr[9] && row10[9] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[10] === horizontalRow1Arr[10] && row10[10] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[11] === horizontalRow1Arr[11] && row10[11] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[12] === horizontalRow1Arr[12] && row10[12] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[13] === horizontalRow1Arr[13] && row10[13] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[14] === horizontalRow1Arr[14] && row10[14] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[15] === horizontalRow1Arr[15] && row10[15] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[16] === horizontalRow1Arr[16] && row10[16] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[17] === horizontalRow1Arr[17] && row10[17] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[18] === horizontalRow1Arr[18] && row10[18] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (row10[19] === horizontalRow1Arr[19] && row10[19] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        // 10 x 2
        if (row10[0] === horizontalRow2Arr[0] && row10[0] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[1] === horizontalRow2Arr[1] && row10[1] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[2] === horizontalRow2Arr[2] && row10[2] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[3] === horizontalRow2Arr[3] && row10[3] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[4] === horizontalRow2Arr[4] && row10[4] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[5] === horizontalRow2Arr[5] && row10[5] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[6] === horizontalRow2Arr[6] && row10[6] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[7] === horizontalRow2Arr[7] && row10[7] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[8] === horizontalRow2Arr[8] && row10[8] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[9] === horizontalRow2Arr[9] && row10[9] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[10] === horizontalRow2Arr[10] && row10[10] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[11] === horizontalRow2Arr[11] && row10[11] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[12] === horizontalRow2Arr[12] && row10[12] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[13] === horizontalRow2Arr[13] && row10[13] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[14] === horizontalRow2Arr[14] && row10[14] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[15] === horizontalRow2Arr[15] && row10[15] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[16] === horizontalRow2Arr[16] && row10[16] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[17] === horizontalRow2Arr[17] && row10[17] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[18] === horizontalRow2Arr[18] && row10[18] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (row10[19] === horizontalRow2Arr[19] && row10[19] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        // 10 x 3
        if (row10[0] === horizontalRow3Arr[0] && row10[0] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[1] === horizontalRow3Arr[1] && row10[1] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[2] === horizontalRow3Arr[2] && row10[2] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[3] === horizontalRow3Arr[3] && row10[3] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[4] === horizontalRow3Arr[4] && row10[4] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[5] === horizontalRow3Arr[5] && row10[5] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[6] === horizontalRow3Arr[6] && row10[6] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[7] === horizontalRow3Arr[7] && row10[7] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[8] === horizontalRow3Arr[8] && row10[8] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[9] === horizontalRow3Arr[9] && row10[9] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[10] === horizontalRow3Arr[10] && row10[10] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[11] === horizontalRow3Arr[11] && row10[11] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[12] === horizontalRow3Arr[12] && row10[12] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[13] === horizontalRow3Arr[13] && row10[13] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[14] === horizontalRow3Arr[14] && row10[14] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[15] === horizontalRow3Arr[15] && row10[15] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[16] === horizontalRow3Arr[16] && row10[16] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[17] === horizontalRow3Arr[17] && row10[17] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[18] === horizontalRow3Arr[18] && row10[18] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (row10[19] === horizontalRow3Arr[19] && row10[19] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        // 10 x 4
        if (row10[0] === horizontalRow4Arr[0] && row10[0] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[1] === horizontalRow4Arr[1] && row10[1] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[2] === horizontalRow4Arr[2] && row10[2] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[3] === horizontalRow4Arr[3] && row10[3] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[4] === horizontalRow4Arr[4] && row10[4] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[5] === horizontalRow4Arr[5] && row10[5] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[6] === horizontalRow4Arr[6] && row10[6] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[7] === horizontalRow4Arr[7] && row10[7] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[8] === horizontalRow4Arr[8] && row10[8] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[9] === horizontalRow4Arr[9] && row10[9] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[10] === horizontalRow4Arr[10] && row10[10] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[11] === horizontalRow4Arr[11] && row10[11] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[12] === horizontalRow4Arr[12] && row10[12] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[13] === horizontalRow4Arr[13] && row10[13] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[14] === horizontalRow4Arr[14] && row10[14] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[15] === horizontalRow4Arr[15] && row10[15] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[16] === horizontalRow4Arr[16] && row10[16] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[17] === horizontalRow4Arr[17] && row10[17] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[18] === horizontalRow4Arr[18] && row10[18] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (row10[19] === horizontalRow4Arr[19] && row10[19] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        // 10 x 5
        if (row10[0] === horizontalRow5Arr[0] && row10[0] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[1] === horizontalRow5Arr[1] && row10[1] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[2] === horizontalRow5Arr[2] && row10[2] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[3] === horizontalRow5Arr[3] && row10[3] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[4] === horizontalRow5Arr[4] && row10[4] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[5] === horizontalRow5Arr[5] && row10[5] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[6] === horizontalRow5Arr[6] && row10[6] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[7] === horizontalRow5Arr[7] && row10[7] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[8] === horizontalRow5Arr[8] && row10[8] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[9] === horizontalRow5Arr[9] && row10[9] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[10] === horizontalRow5Arr[10] && row10[10] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[11] === horizontalRow5Arr[11] && row10[11] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[12] === horizontalRow5Arr[12] && row10[12] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[13] === horizontalRow5Arr[13] && row10[13] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[14] === horizontalRow5Arr[14] && row10[14] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[15] === horizontalRow5Arr[15] && row10[15] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[16] === horizontalRow5Arr[16] && row10[16] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[17] === horizontalRow5Arr[17] && row10[17] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[18] === horizontalRow5Arr[18] && row10[18] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }
        if (row10[19] === horizontalRow5Arr[19] && row10[19] === 1) {
            setNumberOfCoincidences10x5((prevNumber) => prevNumber + 1);
        }

        // 11 x 1
        if (row11[0] === horizontalRow1Arr[0] && row11[0] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[1] === horizontalRow1Arr[1] && row11[1] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[2] === horizontalRow1Arr[2] && row11[2] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[3] === horizontalRow1Arr[3] && row11[3] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[4] === horizontalRow1Arr[4] && row11[4] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[5] === horizontalRow1Arr[5] && row11[5] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[6] === horizontalRow1Arr[6] && row11[6] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[7] === horizontalRow1Arr[7] && row11[7] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[8] === horizontalRow1Arr[8] && row11[8] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[9] === horizontalRow1Arr[9] && row11[9] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[10] === horizontalRow1Arr[10] && row11[10] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[11] === horizontalRow1Arr[11] && row11[11] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[12] === horizontalRow1Arr[12] && row11[12] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[13] === horizontalRow1Arr[13] && row11[13] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[14] === horizontalRow1Arr[14] && row11[14] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[15] === horizontalRow1Arr[15] && row11[15] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[16] === horizontalRow1Arr[16] && row11[16] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[17] === horizontalRow1Arr[17] && row11[17] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[18] === horizontalRow1Arr[18] && row11[18] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (row11[19] === horizontalRow1Arr[19] && row11[19] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        // 11 x 2
        if (row11[0] === horizontalRow2Arr[0] && row11[0] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[1] === horizontalRow2Arr[1] && row11[1] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[2] === horizontalRow2Arr[2] && row11[2] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[3] === horizontalRow2Arr[3] && row11[3] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[4] === horizontalRow2Arr[4] && row11[4] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[5] === horizontalRow2Arr[5] && row11[5] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[6] === horizontalRow2Arr[6] && row11[6] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[7] === horizontalRow2Arr[7] && row11[7] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[8] === horizontalRow2Arr[8] && row11[8] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[9] === horizontalRow2Arr[9] && row11[9] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[10] === horizontalRow2Arr[10] && row11[10] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[11] === horizontalRow2Arr[11] && row11[11] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[12] === horizontalRow2Arr[12] && row11[12] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[13] === horizontalRow2Arr[13] && row11[13] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[14] === horizontalRow2Arr[14] && row11[14] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[15] === horizontalRow2Arr[15] && row11[15] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[16] === horizontalRow2Arr[16] && row11[16] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[17] === horizontalRow2Arr[17] && row11[17] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[18] === horizontalRow2Arr[18] && row11[18] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (row11[19] === horizontalRow2Arr[19] && row11[19] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        // 11 x 3
        if (row11[0] === horizontalRow3Arr[0] && row11[0] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[1] === horizontalRow3Arr[1] && row11[1] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[2] === horizontalRow3Arr[2] && row11[2] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[3] === horizontalRow3Arr[3] && row11[3] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[4] === horizontalRow3Arr[4] && row11[4] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[5] === horizontalRow3Arr[5] && row11[5] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[6] === horizontalRow3Arr[6] && row11[6] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[7] === horizontalRow3Arr[7] && row11[7] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[8] === horizontalRow3Arr[8] && row11[8] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[9] === horizontalRow3Arr[9] && row11[9] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[10] === horizontalRow3Arr[10] && row11[10] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[11] === horizontalRow3Arr[11] && row11[11] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[12] === horizontalRow3Arr[12] && row11[12] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[13] === horizontalRow3Arr[13] && row11[13] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[14] === horizontalRow3Arr[14] && row11[14] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[15] === horizontalRow3Arr[15] && row11[15] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[16] === horizontalRow3Arr[16] && row11[16] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[17] === horizontalRow3Arr[17] && row11[17] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[18] === horizontalRow3Arr[18] && row11[18] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (row11[19] === horizontalRow3Arr[19] && row11[19] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        // 11 x 4
        if (row11[0] === horizontalRow4Arr[0] && row11[0] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[1] === horizontalRow4Arr[1] && row11[1] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[2] === horizontalRow4Arr[2] && row11[2] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[3] === horizontalRow4Arr[3] && row11[3] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[4] === horizontalRow4Arr[4] && row11[4] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[5] === horizontalRow4Arr[5] && row11[5] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[6] === horizontalRow4Arr[6] && row11[6] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[7] === horizontalRow4Arr[7] && row11[7] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[8] === horizontalRow4Arr[8] && row11[8] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[9] === horizontalRow4Arr[9] && row11[9] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[10] === horizontalRow4Arr[10] && row11[10] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[11] === horizontalRow4Arr[11] && row11[11] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[12] === horizontalRow4Arr[12] && row11[12] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[13] === horizontalRow4Arr[13] && row11[13] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[14] === horizontalRow4Arr[14] && row11[14] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[15] === horizontalRow4Arr[15] && row11[15] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[16] === horizontalRow4Arr[16] && row11[16] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[17] === horizontalRow4Arr[17] && row11[17] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[18] === horizontalRow4Arr[18] && row11[18] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (row11[19] === horizontalRow4Arr[19] && row11[19] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        // 11 x 5
        if (row11[0] === horizontalRow5Arr[0] && row11[0] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[1] === horizontalRow5Arr[1] && row11[1] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[2] === horizontalRow5Arr[2] && row11[2] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[3] === horizontalRow5Arr[3] && row11[3] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[4] === horizontalRow5Arr[4] && row11[4] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[5] === horizontalRow5Arr[5] && row11[5] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[6] === horizontalRow5Arr[6] && row11[6] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[7] === horizontalRow5Arr[7] && row11[7] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[8] === horizontalRow5Arr[8] && row11[8] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[9] === horizontalRow5Arr[9] && row11[9] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[10] === horizontalRow5Arr[10] && row11[10] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[11] === horizontalRow5Arr[11] && row11[11] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[12] === horizontalRow5Arr[12] && row11[12] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[13] === horizontalRow5Arr[13] && row11[13] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[14] === horizontalRow5Arr[14] && row11[14] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[15] === horizontalRow5Arr[15] && row11[15] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[16] === horizontalRow5Arr[16] && row11[16] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[17] === horizontalRow5Arr[17] && row11[17] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[18] === horizontalRow5Arr[18] && row11[18] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }
        if (row11[19] === horizontalRow5Arr[19] && row11[19] === 1) {
            setNumberOfCoincidences11x5((prevNumber) => prevNumber + 1);
        }

        // 12 x 1
        if (row12[0] === horizontalRow1Arr[0] && row12[0] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[1] === horizontalRow1Arr[1] && row12[1] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[2] === horizontalRow1Arr[2] && row12[2] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[3] === horizontalRow1Arr[3] && row12[3] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[4] === horizontalRow1Arr[4] && row12[4] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[5] === horizontalRow1Arr[5] && row12[5] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[6] === horizontalRow1Arr[6] && row12[6] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[7] === horizontalRow1Arr[7] && row12[7] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[8] === horizontalRow1Arr[8] && row12[8] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[9] === horizontalRow1Arr[9] && row12[9] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[10] === horizontalRow1Arr[10] && row12[10] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[11] === horizontalRow1Arr[11] && row12[11] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[12] === horizontalRow1Arr[12] && row12[12] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[13] === horizontalRow1Arr[13] && row12[13] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[14] === horizontalRow1Arr[14] && row12[14] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[15] === horizontalRow1Arr[15] && row12[15] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[16] === horizontalRow1Arr[16] && row12[16] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[17] === horizontalRow1Arr[17] && row12[17] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[18] === horizontalRow1Arr[18] && row12[18] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (row12[19] === horizontalRow1Arr[19] && row12[19] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        // 12 x 2
        if (row12[0] === horizontalRow2Arr[0] && row12[0] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[1] === horizontalRow2Arr[1] && row12[1] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[2] === horizontalRow2Arr[2] && row12[2] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[3] === horizontalRow2Arr[3] && row12[3] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[4] === horizontalRow2Arr[4] && row12[4] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[5] === horizontalRow2Arr[5] && row12[5] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[6] === horizontalRow2Arr[6] && row12[6] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[7] === horizontalRow2Arr[7] && row12[7] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[8] === horizontalRow2Arr[8] && row12[8] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[9] === horizontalRow2Arr[9] && row12[9] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[10] === horizontalRow2Arr[10] && row12[10] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[11] === horizontalRow2Arr[11] && row12[11] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[12] === horizontalRow2Arr[12] && row12[12] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[13] === horizontalRow2Arr[13] && row12[13] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[14] === horizontalRow2Arr[14] && row12[14] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[15] === horizontalRow2Arr[15] && row12[15] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[16] === horizontalRow2Arr[16] && row12[16] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[17] === horizontalRow2Arr[17] && row12[17] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[18] === horizontalRow2Arr[18] && row12[18] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (row12[19] === horizontalRow2Arr[19] && row12[19] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        // 12 x 3
        if (row12[0] === horizontalRow3Arr[0] && row12[0] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[1] === horizontalRow3Arr[1] && row12[1] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[2] === horizontalRow3Arr[2] && row12[2] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[3] === horizontalRow3Arr[3] && row12[3] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[4] === horizontalRow3Arr[4] && row12[4] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[5] === horizontalRow3Arr[5] && row12[5] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[6] === horizontalRow3Arr[6] && row12[6] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[7] === horizontalRow3Arr[7] && row12[7] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[8] === horizontalRow3Arr[8] && row12[8] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[9] === horizontalRow3Arr[9] && row12[9] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[10] === horizontalRow3Arr[10] && row12[10] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[11] === horizontalRow3Arr[11] && row12[11] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[12] === horizontalRow3Arr[12] && row12[12] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[13] === horizontalRow3Arr[13] && row12[13] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[14] === horizontalRow3Arr[14] && row12[14] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[15] === horizontalRow3Arr[15] && row12[15] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[16] === horizontalRow3Arr[16] && row12[16] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[17] === horizontalRow3Arr[17] && row12[17] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[18] === horizontalRow3Arr[18] && row12[18] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (row12[19] === horizontalRow3Arr[19] && row12[19] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        // 12 x 4
        if (row12[0] === horizontalRow4Arr[0] && row12[0] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[1] === horizontalRow4Arr[1] && row12[1] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[2] === horizontalRow4Arr[2] && row12[2] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[3] === horizontalRow4Arr[3] && row12[3] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[4] === horizontalRow4Arr[4] && row12[4] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[5] === horizontalRow4Arr[5] && row12[5] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[6] === horizontalRow4Arr[6] && row12[6] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[7] === horizontalRow4Arr[7] && row12[7] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[8] === horizontalRow4Arr[8] && row12[8] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[9] === horizontalRow4Arr[9] && row12[9] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[10] === horizontalRow4Arr[10] && row12[10] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[11] === horizontalRow4Arr[11] && row12[11] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[12] === horizontalRow4Arr[12] && row12[12] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[13] === horizontalRow4Arr[13] && row12[13] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[14] === horizontalRow4Arr[14] && row12[14] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[15] === horizontalRow4Arr[15] && row12[15] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[16] === horizontalRow4Arr[16] && row12[16] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[17] === horizontalRow4Arr[17] && row12[17] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[18] === horizontalRow4Arr[18] && row12[18] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (row12[19] === horizontalRow4Arr[19] && row12[19] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        // 12 x 5
        if (row12[0] === horizontalRow5Arr[0] && row12[0] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[1] === horizontalRow5Arr[1] && row12[1] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[2] === horizontalRow5Arr[2] && row12[2] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[3] === horizontalRow5Arr[3] && row12[3] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[4] === horizontalRow5Arr[4] && row12[4] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[5] === horizontalRow5Arr[5] && row12[5] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[6] === horizontalRow5Arr[6] && row12[6] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[7] === horizontalRow5Arr[7] && row12[7] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[8] === horizontalRow5Arr[8] && row12[8] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[9] === horizontalRow5Arr[9] && row12[9] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[10] === horizontalRow5Arr[10] && row12[10] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[11] === horizontalRow5Arr[11] && row12[11] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[12] === horizontalRow5Arr[12] && row12[12] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[13] === horizontalRow5Arr[13] && row12[13] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[14] === horizontalRow5Arr[14] && row12[14] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[15] === horizontalRow5Arr[15] && row12[15] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[16] === horizontalRow5Arr[16] && row12[16] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[17] === horizontalRow5Arr[17] && row12[17] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[18] === horizontalRow5Arr[18] && row12[18] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }
        if (row12[19] === horizontalRow5Arr[19] && row12[19] === 1) {
            setNumberOfCoincidences12x5((prevNumber) => prevNumber + 1);
        }

        // 13 x 1
        if (row13[0] === horizontalRow1Arr[0] && row13[0] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[1] === horizontalRow1Arr[1] && row13[1] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[2] === horizontalRow1Arr[2] && row13[2] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[3] === horizontalRow1Arr[3] && row13[3] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[4] === horizontalRow1Arr[4] && row13[4] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[5] === horizontalRow1Arr[5] && row13[5] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[6] === horizontalRow1Arr[6] && row13[6] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[7] === horizontalRow1Arr[7] && row13[7] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[8] === horizontalRow1Arr[8] && row13[8] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[9] === horizontalRow1Arr[9] && row13[9] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[10] === horizontalRow1Arr[10] && row13[10] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[11] === horizontalRow1Arr[11] && row13[11] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[12] === horizontalRow1Arr[12] && row13[12] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[13] === horizontalRow1Arr[13] && row13[13] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[14] === horizontalRow1Arr[14] && row13[14] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[15] === horizontalRow1Arr[15] && row13[15] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[16] === horizontalRow1Arr[16] && row13[16] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[17] === horizontalRow1Arr[17] && row13[17] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[18] === horizontalRow1Arr[18] && row13[18] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (row13[19] === horizontalRow1Arr[19] && row13[19] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        // 13 x 2
        if (row13[0] === horizontalRow2Arr[0] && row13[0] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[1] === horizontalRow2Arr[1] && row13[1] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[2] === horizontalRow2Arr[2] && row13[2] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[3] === horizontalRow2Arr[3] && row13[3] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[4] === horizontalRow2Arr[4] && row13[4] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[5] === horizontalRow2Arr[5] && row13[5] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[6] === horizontalRow2Arr[6] && row13[6] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[7] === horizontalRow2Arr[7] && row13[7] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[8] === horizontalRow2Arr[8] && row13[8] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[9] === horizontalRow2Arr[9] && row13[9] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[10] === horizontalRow2Arr[10] && row13[10] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[11] === horizontalRow2Arr[11] && row13[11] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[12] === horizontalRow2Arr[12] && row13[12] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[13] === horizontalRow2Arr[13] && row13[13] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[14] === horizontalRow2Arr[14] && row13[14] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[15] === horizontalRow2Arr[15] && row13[15] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[16] === horizontalRow2Arr[16] && row13[16] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[17] === horizontalRow2Arr[17] && row13[17] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[18] === horizontalRow2Arr[18] && row13[18] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (row13[19] === horizontalRow2Arr[19] && row13[19] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        // 13 x 3
        if (row13[0] === horizontalRow3Arr[0] && row13[0] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[1] === horizontalRow3Arr[1] && row13[1] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[2] === horizontalRow3Arr[2] && row13[2] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[3] === horizontalRow3Arr[3] && row13[3] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[4] === horizontalRow3Arr[4] && row13[4] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[5] === horizontalRow3Arr[5] && row13[5] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[6] === horizontalRow3Arr[6] && row13[6] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[7] === horizontalRow3Arr[7] && row13[7] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[8] === horizontalRow3Arr[8] && row13[8] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[9] === horizontalRow3Arr[9] && row13[9] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[10] === horizontalRow3Arr[10] && row13[10] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[11] === horizontalRow3Arr[11] && row13[11] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[12] === horizontalRow3Arr[12] && row13[12] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[13] === horizontalRow3Arr[13] && row13[13] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[14] === horizontalRow3Arr[14] && row13[14] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[15] === horizontalRow3Arr[15] && row13[15] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[16] === horizontalRow3Arr[16] && row13[16] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[17] === horizontalRow3Arr[17] && row13[17] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[18] === horizontalRow3Arr[18] && row13[18] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (row13[19] === horizontalRow3Arr[19] && row13[19] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        // 13 x 4
        if (row13[0] === horizontalRow4Arr[0] && row13[0] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[1] === horizontalRow4Arr[1] && row13[1] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[2] === horizontalRow4Arr[2] && row13[2] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[3] === horizontalRow4Arr[3] && row13[3] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[4] === horizontalRow4Arr[4] && row13[4] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[5] === horizontalRow4Arr[5] && row13[5] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[6] === horizontalRow4Arr[6] && row13[6] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[7] === horizontalRow4Arr[7] && row13[7] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[8] === horizontalRow4Arr[8] && row13[8] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[9] === horizontalRow4Arr[9] && row13[9] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[10] === horizontalRow4Arr[10] && row13[10] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[11] === horizontalRow4Arr[11] && row13[11] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[12] === horizontalRow4Arr[12] && row13[12] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[13] === horizontalRow4Arr[13] && row13[13] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[14] === horizontalRow4Arr[14] && row13[14] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[15] === horizontalRow4Arr[15] && row13[15] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[16] === horizontalRow4Arr[16] && row13[16] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[17] === horizontalRow4Arr[17] && row13[17] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[18] === horizontalRow4Arr[18] && row13[18] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (row13[19] === horizontalRow4Arr[19] && row13[19] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        // 13 x 5
        if (row13[0] === horizontalRow5Arr[0] && row13[0] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[1] === horizontalRow5Arr[1] && row13[1] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[2] === horizontalRow5Arr[2] && row13[2] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[3] === horizontalRow5Arr[3] && row13[3] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[4] === horizontalRow5Arr[4] && row13[4] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[5] === horizontalRow5Arr[5] && row13[5] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[6] === horizontalRow5Arr[6] && row13[6] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[7] === horizontalRow5Arr[7] && row13[7] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[8] === horizontalRow5Arr[8] && row13[8] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[9] === horizontalRow5Arr[9] && row13[9] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[10] === horizontalRow5Arr[10] && row13[10] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[11] === horizontalRow5Arr[11] && row13[11] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[12] === horizontalRow5Arr[12] && row13[12] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[13] === horizontalRow5Arr[13] && row13[13] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[14] === horizontalRow5Arr[14] && row13[14] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[15] === horizontalRow5Arr[15] && row13[15] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[16] === horizontalRow5Arr[16] && row13[16] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[17] === horizontalRow5Arr[17] && row13[17] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[18] === horizontalRow5Arr[18] && row13[18] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
        if (row13[19] === horizontalRow5Arr[19] && row13[19] === 1) {
            setNumberOfCoincidences13x5((prevNumber) => prevNumber + 1);
        }
    };

    // row 1
    const isEven1x1 = numberOfCoincidences1x1 % 2 === 0;
    const resultText1x1 = isEven1x1 ? '0' : '1';

    const isEven1x2 = numberOfCoincidences1x2 % 2 === 0;
    const resultText1x2 = isEven1x2 ? '0' : '1';

    const isEven1x3 = numberOfCoincidences1x3 % 2 === 0;
    const resultText1x3 = isEven1x3 ? '0' : '1';

    const isEven1x4 = numberOfCoincidences1x4 % 2 === 0;
    const resultText1x4 = isEven1x4 ? '0' : '1';

    const isEven1x5 = numberOfCoincidences1x5 % 2 === 0;
    const resultText1x5 = isEven1x5 ? '0' : '1';

    // row 2
    const isEven2x1 = numberOfCoincidences2x1 % 2 === 0;
    const resultText2x1 = isEven2x1 ? '0' : '1';

    const isEven2x2 = numberOfCoincidences2x2 % 2 === 0;
    const resultText2x2 = isEven2x2 ? '0' : '1';

    const isEven2x3 = numberOfCoincidences2x3 % 2 === 0;
    const resultText2x3 = isEven2x3 ? '0' : '1';

    const isEven2x4 = numberOfCoincidences2x4 % 2 === 0;
    const resultText2x4 = isEven2x4 ? '0' : '1';

    const isEven2x5 = numberOfCoincidences2x5 % 2 === 0;
    const resultText2x5 = isEven2x5 ? '0' : '1';

    // row 3
    const isEven3x1 = numberOfCoincidences3x1 % 2 === 0;
    const resultText3x1 = isEven3x1 ? '0' : '1';

    const isEven3x2 = numberOfCoincidences3x2 % 2 === 0;
    const resultText3x2 = isEven3x2 ? '0' : '1';

    const isEven3x3 = numberOfCoincidences3x3 % 2 === 0;
    const resultText3x3 = isEven3x3 ? '0' : '1';

    const isEven3x4 = numberOfCoincidences3x4 % 2 === 0;
    const resultText3x4 = isEven3x4 ? '0' : '1';

    const isEven3x5 = numberOfCoincidences3x5 % 2 === 0;
    const resultText3x5 = isEven3x5 ? '0' : '1';

    // row 4
    const isEven4x1 = numberOfCoincidences4x1 % 2 === 0;
    const resultText4x1 = isEven4x1 ? '0' : '1';

    const isEven4x2 = numberOfCoincidences4x2 % 2 === 0;
    const resultText4x2 = isEven4x2 ? '0' : '1';

    const isEven4x3 = numberOfCoincidences4x3 % 2 === 0;
    const resultText4x3 = isEven4x3 ? '0' : '1';

    const isEven4x4 = numberOfCoincidences4x4 % 2 === 0;
    const resultText4x4 = isEven4x4 ? '0' : '1';

    const isEven4x5 = numberOfCoincidences4x5 % 2 === 0;
    const resultText4x5 = isEven4x5 ? '0' : '1';

    // row 5
    const isEven5x1 = numberOfCoincidences5x1 % 2 === 0;
    const resultText5x1 = isEven5x1 ? '0' : '1';

    const isEven5x2 = numberOfCoincidences5x2 % 2 === 0;
    const resultText5x2 = isEven5x2 ? '0' : '1';

    const isEven5x3 = numberOfCoincidences5x3 % 2 === 0;
    const resultText5x3 = isEven5x3 ? '0' : '1';

    const isEven5x4 = numberOfCoincidences5x4 % 2 === 0;
    const resultText5x4 = isEven5x4 ? '0' : '1';

    const isEven5x5 = numberOfCoincidences5x5 % 2 === 0;
    const resultText5x5 = isEven5x5 ? '0' : '1';

    // row 6
    const isEven6x1 = numberOfCoincidences6x1 % 2 === 0;
    const resultText6x1 = isEven6x1 ? '0' : '1';

    const isEven6x2 = numberOfCoincidences6x2 % 2 === 0;
    const resultText6x2 = isEven6x2 ? '0' : '1';

    const isEven6x3 = numberOfCoincidences6x3 % 2 === 0;
    const resultText6x3 = isEven6x3 ? '0' : '1';

    const isEven6x4 = numberOfCoincidences6x4 % 2 === 0;
    const resultText6x4 = isEven6x4 ? '0' : '1';

    const isEven6x5 = numberOfCoincidences6x5 % 2 === 0;
    const resultText6x5 = isEven6x5 ? '0' : '1';

    // row 7
    const isEven7x1 = numberOfCoincidences7x1 % 2 === 0;
    const resultText7x1 = isEven7x1 ? '0' : '1';

    const isEven7x2 = numberOfCoincidences7x2 % 2 === 0;
    const resultText7x2 = isEven7x2 ? '0' : '1';

    const isEven7x3 = numberOfCoincidences7x3 % 2 === 0;
    const resultText7x3 = isEven7x3 ? '0' : '1';

    const isEven7x4 = numberOfCoincidences7x4 % 2 === 0;
    const resultText7x4 = isEven7x4 ? '0' : '1';

    const isEven7x5 = numberOfCoincidences7x5 % 2 === 0;
    const resultText7x5 = isEven7x5 ? '0' : '1';

    // row 8
    const isEven8x1 = numberOfCoincidences8x1 % 2 === 0;
    const resultText8x1 = isEven8x1 ? '0' : '1';

    const isEven8x2 = numberOfCoincidences8x2 % 2 === 0;
    const resultText8x2 = isEven8x2 ? '0' : '1';

    const isEven8x3 = numberOfCoincidences8x3 % 2 === 0;
    const resultText8x3 = isEven8x3 ? '0' : '1';

    const isEven8x4 = numberOfCoincidences8x4 % 2 === 0;
    const resultText8x4 = isEven8x4 ? '0' : '1';

    const isEven8x5 = numberOfCoincidences8x5 % 2 === 0;
    const resultText8x5 = isEven8x5 ? '0' : '1';

    // row 9
    const isEven9x1 = numberOfCoincidences9x1 % 2 === 0;
    const resultText9x1 = isEven9x1 ? '0' : '1';

    const isEven9x2 = numberOfCoincidences9x2 % 2 === 0;
    const resultText9x2 = isEven9x2 ? '0' : '1';

    const isEven9x3 = numberOfCoincidences9x3 % 2 === 0;
    const resultText9x3 = isEven9x3 ? '0' : '1';

    const isEven9x4 = numberOfCoincidences9x4 % 2 === 0;
    const resultText9x4 = isEven9x4 ? '0' : '1';

    const isEven9x5 = numberOfCoincidences9x5 % 2 === 0;
    const resultText9x5 = isEven9x5 ? '0' : '1';

    // row 10
    const isEven10x1 = numberOfCoincidences10x1 % 2 === 0;
    const resultText10x1 = isEven10x1 ? '0' : '1';

    const isEven10x2 = numberOfCoincidences10x2 % 2 === 0;
    const resultText10x2 = isEven10x2 ? '0' : '1';

    const isEven10x3 = numberOfCoincidences10x3 % 2 === 0;
    const resultText10x3 = isEven10x3 ? '0' : '1';

    const isEven10x4 = numberOfCoincidences10x4 % 2 === 0;
    const resultText10x4 = isEven10x4 ? '0' : '1';

    const isEven10x5 = numberOfCoincidences10x5 % 2 === 0;
    const resultText10x5 = isEven10x5 ? '0' : '1';

    // row 11
    const isEven11x1 = numberOfCoincidences11x1 % 2 === 0;
    const resultText11x1 = isEven11x1 ? '0' : '1';

    const isEven11x2 = numberOfCoincidences11x2 % 2 === 0;
    const resultText11x2 = isEven11x2 ? '0' : '1';

    const isEven11x3 = numberOfCoincidences11x3 % 2 === 0;
    const resultText11x3 = isEven11x3 ? '0' : '1';

    const isEven11x4 = numberOfCoincidences11x4 % 2 === 0;
    const resultText11x4 = isEven11x4 ? '0' : '1';

    const isEven11x5 = numberOfCoincidences11x5 % 2 === 0;
    const resultText11x5 = isEven11x5 ? '0' : '1';

    // row 12
    const isEven12x1 = numberOfCoincidences12x1 % 2 === 0;
    const resultText12x1 = isEven12x1 ? '0' : '1';

    const isEven12x2 = numberOfCoincidences12x2 % 2 === 0;
    const resultText12x2 = isEven12x2 ? '0' : '1';

    const isEven12x3 = numberOfCoincidences12x3 % 2 === 0;
    const resultText12x3 = isEven12x3 ? '0' : '1';

    const isEven12x4 = numberOfCoincidences12x4 % 2 === 0;
    const resultText12x4 = isEven12x4 ? '0' : '1';

    const isEven12x5 = numberOfCoincidences12x5 % 2 === 0;
    const resultText12x5 = isEven12x5 ? '0' : '1';

    // row 13
    const isEven13x1 = numberOfCoincidences13x1 % 2 === 0;
    const resultText13x1 = isEven13x1 ? '0' : '1';

    const isEven13x2 = numberOfCoincidences13x2 % 2 === 0;
    const resultText13x2 = isEven13x2 ? '0' : '1';

    const isEven13x3 = numberOfCoincidences13x3 % 2 === 0;
    const resultText13x3 = isEven13x3 ? '0' : '1';

    const isEven13x4 = numberOfCoincidences13x4 % 2 === 0;
    const resultText13x4 = isEven13x4 ? '0' : '1';

    const isEven13x5 = numberOfCoincidences13x5 % 2 === 0;
    const resultText13x5 = isEven13x5 ? '0' : '1';

    console.log(row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13);

    return (
        <div className="decode-wrapper">
            <button onClick={readNoiseMatrix1stTime}>Get rows 1st time</button>
            <button onClick={doHorizontalDecodeCheck}>Do horizontal decode</button>
            <div className="horizontal-matrix-wrapper">
                <p>Horizontal check matrix</p>
                <div className="horizontal-row column-numbers">
                    <div className="horizontal-number column-number">Pos</div>
                    <div className="horizontal-number column-number">1</div>
                    <div className="horizontal-number column-number">2</div>
                    <div className="horizontal-number column-number">3</div>
                    <div className="horizontal-number column-number">4</div>
                    <div className="horizontal-number column-number">5</div>
                    <div className="horizontal-number column-number">6</div>
                    <div className="horizontal-number column-number">7</div>
                    <div className="horizontal-number column-number">8</div>
                    <div className="horizontal-number column-number">9</div>
                    <div className="horizontal-number column-number">10</div>
                    <div className="horizontal-number column-number">11</div>
                    <div className="horizontal-number column-number">12</div>
                    <div className="horizontal-number column-number">13</div>
                    <div className="horizontal-number column-number">14</div>
                    <div className="horizontal-number column-number">15</div>
                    <div className="horizontal-number column-number">16</div>
                    <div className="horizontal-number column-number">17</div>
                    <div className="horizontal-number column-number">18</div>
                    <div className="horizontal-number column-number">19</div>
                    <div className="horizontal-number column-number">20</div>
                </div>
                <div className="horizontal-row row-1">
                    <div className="horizontal-number row-number">1</div>
                    <div className="horizontal-number ">{horizonalMatrix1x1}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x2}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x3}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x4}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x5}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x6}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x7}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x8}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x9}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x10}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x11}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x12}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x13}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x14}</div>
                    <div className="horizontal-number ">{horizonalMatrix1x15}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix1x16}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix1x17}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix1x18}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix1x19}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix1x20}</div>
                </div>
                <div className="horizontal-row row-2">
                    <div className="horizontal-number row-number">2</div>
                    <div className="horizontal-number ">{horizonalMatrix2x1}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x2}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x3}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x4}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x5}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x6}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x7}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x8}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x9}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x10}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x11}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x12}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x13}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x14}</div>
                    <div className="horizontal-number ">{horizonalMatrix2x15}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix2x16}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix2x17}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix2x18}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix2x19}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix2x20}</div>
                </div>
                <div className="horizontal-row row-3">
                    <div className="horizontal-number row-number">3</div>
                    <div className="horizontal-number ">{horizonalMatrix3x1}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x2}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x3}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x4}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x5}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x6}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x7}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x8}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x9}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x10}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x11}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x12}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x13}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x14}</div>
                    <div className="horizontal-number ">{horizonalMatrix3x15}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix3x16}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix3x17}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix3x18}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix3x19}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix3x20}</div>
                </div>
                <div className="horizontal-row row-4">
                    <div className="horizontal-number row-number">4</div>
                    <div className="horizontal-number ">{horizonalMatrix4x1}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x2}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x3}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x4}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x5}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x6}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x7}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x8}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x9}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x10}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x11}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x12}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x13}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x14}</div>
                    <div className="horizontal-number ">{horizonalMatrix4x15}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix4x16}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix4x17}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix4x18}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix4x19}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix4x20}</div>
                </div>
                <div className="horizontal-row row-5">
                    <div className="horizontal-number row-number">5</div>
                    <div className="horizontal-number ">{horizonalMatrix5x1}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x2}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x3}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x4}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x5}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x6}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x7}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x8}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x9}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x10}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x11}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x12}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x13}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x14}</div>
                    <div className="horizontal-number ">{horizonalMatrix5x15}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix5x16}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix5x17}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix5x18}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix5x19}</div>
                    <div className="horizontal-number horizontal-checking">{horizonalMatrix5x20}</div>
                </div>
            </div>
            <div className="decode-matrix-wrapper">
                <p>Matrix to decode</p>
                <div className="decode-row column-numbers">
                    <div className="decode-number column-number">Pos</div>
                    <div className="decode-number column-number">1</div>
                    <div className="decode-number column-number">2</div>
                    <div className="decode-number column-number">3</div>
                    <div className="decode-number column-number">4</div>
                    <div className="decode-number column-number">5</div>
                    <div className="decode-number column-number">6</div>
                    <div className="decode-number column-number">7</div>
                    <div className="decode-number column-number">8</div>
                    <div className="decode-number column-number">9</div>
                    <div className="decode-number column-number">10</div>
                    <div className="decode-number column-number">11</div>
                    <div className="decode-number column-number">12</div>
                    <div className="decode-number column-number">13</div>
                    <div className="decode-number column-number">14</div>
                    <div className="decode-number column-number">15</div>
                    <div className="decode-number column-number">16</div>
                    <div className="decode-number column-number">17</div>
                    <div className="decode-number column-number">18</div>
                    <div className="decode-number column-number">19</div>
                    <div className="decode-number column-number">20</div>
                    <div className="horizontal-number column-number">d-h</div>
                    <div className="horizontal-number column-number">d-h</div>
                    <div className="horizontal-number column-number">d-h</div>
                    <div className="horizontal-number column-number">d-h</div>
                    <div className="horizontal-number column-number">d-h</div>
                </div>
                <div className="decode-row row-1">
                    <div className="decode-number row-number">1</div>
                    <div className="decode-number">{row1[0]}</div>
                    <div className="decode-number">{row1[1]}</div>
                    <div className="decode-number">{row1[2]}</div>
                    <div className="decode-number">{row1[3]}</div>
                    <div className="decode-number">{row1[4]}</div>
                    <div className="decode-number">{row1[5]}</div>
                    <div className="decode-number">{row1[6]}</div>
                    <div className="decode-number">{row1[7]}</div>
                    <div className="decode-number">{row1[8]}</div>
                    <div className="decode-number">{row1[9]}</div>
                    <div className="decode-number">{row1[10]}</div>
                    <div className="decode-number">{row1[11]}</div>
                    <div className="decode-number">{row1[12]}</div>
                    <div className="decode-number">{row1[13]}</div>
                    <div className="decode-number">{row1[14]}</div>
                    <div className="decode-number decode-checking">{row1[15]}</div>
                    <div className="decode-number decode-checking">{row1[16]}</div>
                    <div className="decode-number decode-checking">{row1[17]}</div>
                    <div className="decode-number decode-checking">{row1[18]}</div>
                    <div className="decode-number decode-checking">{row1[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText1x1}</div>
                    <div className="decode-number decode-horizontal">{resultText1x2}</div>
                    <div className="decode-number decode-horizontal">{resultText1x3}</div>
                    <div className="decode-number decode-horizontal">{resultText1x4}</div>
                    <div className="decode-number decode-horizontal">{resultText1x5}</div>
                </div>
                <div className="decode-row row-2">
                    <div className="decode-number row-number">2</div>
                    <div className="decode-number">{row2[0]}</div>
                    <div className="decode-number">{row2[1]}</div>
                    <div className="decode-number">{row2[2]}</div>
                    <div className="decode-number">{row2[3]}</div>
                    <div className="decode-number">{row2[4]}</div>
                    <div className="decode-number">{row2[5]}</div>
                    <div className="decode-number">{row2[6]}</div>
                    <div className="decode-number">{row2[7]}</div>
                    <div className="decode-number">{row2[8]}</div>
                    <div className="decode-number">{row2[9]}</div>
                    <div className="decode-number">{row2[10]}</div>
                    <div className="decode-number">{row2[11]}</div>
                    <div className="decode-number">{row2[12]}</div>
                    <div className="decode-number">{row2[13]}</div>
                    <div className="decode-number">{row2[14]}</div>
                    <div className="decode-number decode-checking">{row2[15]}</div>
                    <div className="decode-number decode-checking">{row2[16]}</div>
                    <div className="decode-number decode-checking">{row2[17]}</div>
                    <div className="decode-number decode-checking">{row2[18]}</div>
                    <div className="decode-number decode-checking">{row2[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText2x1}</div>
                    <div className="decode-number decode-horizontal">{resultText2x2}</div>
                    <div className="decode-number decode-horizontal">{resultText2x3}</div>
                    <div className="decode-number decode-horizontal">{resultText2x4}</div>
                    <div className="decode-number decode-horizontal">{resultText2x5}</div>
                </div>
                <div className="decode-row row-3">
                    <div className="decode-number row-number">3</div>
                    <div className="decode-number">{row3[0]}</div>
                    <div className="decode-number">{row3[1]}</div>
                    <div className="decode-number">{row3[2]}</div>
                    <div className="decode-number">{row3[3]}</div>
                    <div className="decode-number">{row3[4]}</div>
                    <div className="decode-number">{row3[5]}</div>
                    <div className="decode-number">{row3[6]}</div>
                    <div className="decode-number">{row3[7]}</div>
                    <div className="decode-number">{row3[8]}</div>
                    <div className="decode-number">{row3[9]}</div>
                    <div className="decode-number">{row3[10]}</div>
                    <div className="decode-number">{row3[11]}</div>
                    <div className="decode-number">{row3[12]}</div>
                    <div className="decode-number">{row3[13]}</div>
                    <div className="decode-number">{row3[14]}</div>
                    <div className="decode-number decode-checking">{row3[15]}</div>
                    <div className="decode-number decode-checking">{row3[16]}</div>
                    <div className="decode-number decode-checking">{row3[17]}</div>
                    <div className="decode-number decode-checking">{row3[18]}</div>
                    <div className="decode-number decode-checking">{row3[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText3x1}</div>
                    <div className="decode-number decode-horizontal">{resultText3x2}</div>
                    <div className="decode-number decode-horizontal">{resultText3x3}</div>
                    <div className="decode-number decode-horizontal">{resultText3x4}</div>
                    <div className="decode-number decode-horizontal">{resultText3x5}</div>
                </div>
                <div className="decode-row row-4">
                    <div className="decode-number row-number">4</div>
                    <div className="decode-number">{row4[0]}</div>
                    <div className="decode-number">{row4[1]}</div>
                    <div className="decode-number">{row4[2]}</div>
                    <div className="decode-number">{row4[3]}</div>
                    <div className="decode-number">{row4[4]}</div>
                    <div className="decode-number">{row4[5]}</div>
                    <div className="decode-number">{row4[6]}</div>
                    <div className="decode-number">{row4[7]}</div>
                    <div className="decode-number">{row4[8]}</div>
                    <div className="decode-number">{row4[9]}</div>
                    <div className="decode-number">{row4[10]}</div>
                    <div className="decode-number">{row4[11]}</div>
                    <div className="decode-number">{row4[12]}</div>
                    <div className="decode-number">{row4[13]}</div>
                    <div className="decode-number">{row4[14]}</div>
                    <div className="decode-number decode-checking">{row4[15]}</div>
                    <div className="decode-number decode-checking">{row4[16]}</div>
                    <div className="decode-number decode-checking">{row4[17]}</div>
                    <div className="decode-number decode-checking">{row4[18]}</div>
                    <div className="decode-number decode-checking">{row4[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText4x1}</div>
                    <div className="decode-number decode-horizontal">{resultText4x2}</div>
                    <div className="decode-number decode-horizontal">{resultText4x3}</div>
                    <div className="decode-number decode-horizontal">{resultText4x4}</div>
                    <div className="decode-number decode-horizontal">{resultText4x5}</div>
                </div>
                <div className="decode-row row-5">
                    <div className="decode-number row-number">5</div>
                    <div className="decode-number">{row5[0]}</div>
                    <div className="decode-number">{row5[1]}</div>
                    <div className="decode-number">{row5[2]}</div>
                    <div className="decode-number">{row5[3]}</div>
                    <div className="decode-number">{row5[4]}</div>
                    <div className="decode-number">{row5[5]}</div>
                    <div className="decode-number">{row5[6]}</div>
                    <div className="decode-number">{row5[7]}</div>
                    <div className="decode-number">{row5[8]}</div>
                    <div className="decode-number">{row5[9]}</div>
                    <div className="decode-number">{row5[10]}</div>
                    <div className="decode-number">{row5[11]}</div>
                    <div className="decode-number">{row5[12]}</div>
                    <div className="decode-number">{row5[13]}</div>
                    <div className="decode-number">{row5[14]}</div>
                    <div className="decode-number decode-checking">{row5[15]}</div>
                    <div className="decode-number decode-checking">{row5[16]}</div>
                    <div className="decode-number decode-checking">{row5[17]}</div>
                    <div className="decode-number decode-checking">{row5[18]}</div>
                    <div className="decode-number decode-checking">{row5[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText5x1}</div>
                    <div className="decode-number decode-horizontal">{resultText5x2}</div>
                    <div className="decode-number decode-horizontal">{resultText5x3}</div>
                    <div className="decode-number decode-horizontal">{resultText5x4}</div>
                    <div className="decode-number decode-horizontal">{resultText5x5}</div>
                </div>
                <div className="decode-row row-6">
                    <div className="decode-number row-number">6</div>
                    <div className="decode-number">{row6[0]}</div>
                    <div className="decode-number">{row6[1]}</div>
                    <div className="decode-number">{row6[2]}</div>
                    <div className="decode-number">{row6[3]}</div>
                    <div className="decode-number">{row6[4]}</div>
                    <div className="decode-number">{row6[5]}</div>
                    <div className="decode-number">{row6[6]}</div>
                    <div className="decode-number">{row6[7]}</div>
                    <div className="decode-number">{row6[8]}</div>
                    <div className="decode-number">{row6[9]}</div>
                    <div className="decode-number">{row6[10]}</div>
                    <div className="decode-number">{row6[11]}</div>
                    <div className="decode-number">{row6[12]}</div>
                    <div className="decode-number">{row6[13]}</div>
                    <div className="decode-number">{row6[14]}</div>
                    <div className="decode-number decode-checking">{row6[15]}</div>
                    <div className="decode-number decode-checking">{row6[16]}</div>
                    <div className="decode-number decode-checking">{row6[17]}</div>
                    <div className="decode-number decode-checking">{row6[18]}</div>
                    <div className="decode-number decode-checking">{row6[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText6x1}</div>
                    <div className="decode-number decode-horizontal">{resultText6x2}</div>
                    <div className="decode-number decode-horizontal">{resultText6x3}</div>
                    <div className="decode-number decode-horizontal">{resultText6x4}</div>
                    <div className="decode-number decode-horizontal">{resultText6x5}</div>
                </div>
                <div className="decode-row row-7">
                    <div className="decode-number row-number">7</div>
                    <div className="decode-number">{row7[0]}</div>
                    <div className="decode-number">{row7[1]}</div>
                    <div className="decode-number">{row7[2]}</div>
                    <div className="decode-number">{row7[3]}</div>
                    <div className="decode-number">{row7[4]}</div>
                    <div className="decode-number">{row7[5]}</div>
                    <div className="decode-number">{row7[6]}</div>
                    <div className="decode-number">{row7[7]}</div>
                    <div className="decode-number">{row7[8]}</div>
                    <div className="decode-number">{row7[9]}</div>
                    <div className="decode-number">{row7[10]}</div>
                    <div className="decode-number">{row7[11]}</div>
                    <div className="decode-number">{row7[12]}</div>
                    <div className="decode-number">{row7[13]}</div>
                    <div className="decode-number">{row7[14]}</div>
                    <div className="decode-number decode-checking">{row7[15]}</div>
                    <div className="decode-number decode-checking">{row7[16]}</div>
                    <div className="decode-number decode-checking">{row7[17]}</div>
                    <div className="decode-number decode-checking">{row7[18]}</div>
                    <div className="decode-number decode-checking">{row7[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText7x1}</div>
                    <div className="decode-number decode-horizontal">{resultText7x2}</div>
                    <div className="decode-number decode-horizontal">{resultText7x3}</div>
                    <div className="decode-number decode-horizontal">{resultText7x4}</div>
                    <div className="decode-number decode-horizontal">{resultText7x5}</div>
                </div>
                <div className="decode-row row-8">
                    <div className="decode-number row-number">8</div>
                    <div className="decode-number">{row8[0]}</div>
                    <div className="decode-number">{row8[1]}</div>
                    <div className="decode-number">{row8[2]}</div>
                    <div className="decode-number">{row8[3]}</div>
                    <div className="decode-number">{row8[4]}</div>
                    <div className="decode-number">{row8[5]}</div>
                    <div className="decode-number">{row8[6]}</div>
                    <div className="decode-number">{row8[7]}</div>
                    <div className="decode-number">{row8[8]}</div>
                    <div className="decode-number">{row8[9]}</div>
                    <div className="decode-number">{row8[10]}</div>
                    <div className="decode-number">{row8[11]}</div>
                    <div className="decode-number">{row8[12]}</div>
                    <div className="decode-number">{row8[13]}</div>
                    <div className="decode-number">{row8[14]}</div>
                    <div className="decode-number decode-checking">{row8[15]}</div>
                    <div className="decode-number decode-checking">{row8[16]}</div>
                    <div className="decode-number decode-checking">{row8[17]}</div>
                    <div className="decode-number decode-checking">{row8[18]}</div>
                    <div className="decode-number decode-checking">{row8[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText8x1}</div>
                    <div className="decode-number decode-horizontal">{resultText8x2}</div>
                    <div className="decode-number decode-horizontal">{resultText8x3}</div>
                    <div className="decode-number decode-horizontal">{resultText8x4}</div>
                    <div className="decode-number decode-horizontal">{resultText8x5}</div>
                </div>
                <div className="decode-row row-9">
                    <div className="decode-number row-number">9</div>
                    <div className="decode-number">{row9[0]}</div>
                    <div className="decode-number">{row9[1]}</div>
                    <div className="decode-number">{row9[2]}</div>
                    <div className="decode-number">{row9[3]}</div>
                    <div className="decode-number">{row9[4]}</div>
                    <div className="decode-number">{row9[5]}</div>
                    <div className="decode-number">{row9[6]}</div>
                    <div className="decode-number">{row9[7]}</div>
                    <div className="decode-number">{row9[8]}</div>
                    <div className="decode-number">{row9[9]}</div>
                    <div className="decode-number">{row9[10]}</div>
                    <div className="decode-number">{row9[11]}</div>
                    <div className="decode-number">{row9[12]}</div>
                    <div className="decode-number">{row9[13]}</div>
                    <div className="decode-number">{row9[14]}</div>
                    <div className="decode-number decode-checking">{row9[15]}</div>
                    <div className="decode-number decode-checking">{row9[16]}</div>
                    <div className="decode-number decode-checking">{row9[17]}</div>
                    <div className="decode-number decode-checking">{row9[18]}</div>
                    <div className="decode-number decode-checking">{row9[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText9x1}</div>
                    <div className="decode-number decode-horizontal">{resultText9x2}</div>
                    <div className="decode-number decode-horizontal">{resultText9x3}</div>
                    <div className="decode-number decode-horizontal">{resultText9x4}</div>
                    <div className="decode-number decode-horizontal">{resultText9x5}</div>
                </div>
                <div className="decode-row row-10">
                    <div className="decode-number row-number">10</div>
                    <div className="decode-number decode-vertical">{row10[0]}</div>
                    <div className="decode-number decode-vertical">{row10[1]}</div>
                    <div className="decode-number decode-vertical">{row10[2]}</div>
                    <div className="decode-number decode-vertical">{row10[3]}</div>
                    <div className="decode-number decode-vertical">{row10[4]}</div>
                    <div className="decode-number decode-vertical">{row10[5]}</div>
                    <div className="decode-number decode-vertical">{row10[6]}</div>
                    <div className="decode-number decode-vertical">{row10[7]}</div>
                    <div className="decode-number decode-vertical">{row10[8]}</div>
                    <div className="decode-number decode-vertical">{row10[9]}</div>
                    <div className="decode-number decode-vertical">{row10[10]}</div>
                    <div className="decode-number decode-vertical">{row10[11]}</div>
                    <div className="decode-number decode-vertical">{row10[12]}</div>
                    <div className="decode-number decode-vertical">{row10[13]}</div>
                    <div className="decode-number decode-vertical">{row10[14]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row10[15]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row10[16]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row10[17]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row10[18]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row10[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText10x1}</div>
                    <div className="decode-number decode-horizontal">{resultText10x2}</div>
                    <div className="decode-number decode-horizontal">{resultText10x3}</div>
                    <div className="decode-number decode-horizontal">{resultText10x4}</div>
                    <div className="decode-number decode-horizontal">{resultText10x5}</div>
                </div>
                <div className="decode-row row-11">
                    <div className="decode-number row-number">11</div>
                    <div className="decode-number decode-vertical">{row11[0]}</div>
                    <div className="decode-number decode-vertical">{row11[1]}</div>
                    <div className="decode-number decode-vertical">{row11[2]}</div>
                    <div className="decode-number decode-vertical">{row11[3]}</div>
                    <div className="decode-number decode-vertical">{row11[4]}</div>
                    <div className="decode-number decode-vertical">{row11[5]}</div>
                    <div className="decode-number decode-vertical">{row11[6]}</div>
                    <div className="decode-number decode-vertical">{row11[7]}</div>
                    <div className="decode-number decode-vertical">{row11[8]}</div>
                    <div className="decode-number decode-vertical">{row11[9]}</div>
                    <div className="decode-number decode-vertical">{row11[10]}</div>
                    <div className="decode-number decode-vertical">{row11[11]}</div>
                    <div className="decode-number decode-vertical">{row11[12]}</div>
                    <div className="decode-number decode-vertical">{row11[13]}</div>
                    <div className="decode-number decode-vertical">{row11[14]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row11[15]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row11[16]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row11[17]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row11[18]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row11[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText11x1}</div>
                    <div className="decode-number decode-horizontal">{resultText11x2}</div>
                    <div className="decode-number decode-horizontal">{resultText11x3}</div>
                    <div className="decode-number decode-horizontal">{resultText11x4}</div>
                    <div className="decode-number decode-horizontal">{resultText11x5}</div>
                </div>
                <div className="decode-row row-12">
                    <div className="decode-number row-number">12</div>
                    <div className="decode-number decode-vertical">{row12[0]}</div>
                    <div className="decode-number decode-vertical">{row12[1]}</div>
                    <div className="decode-number decode-vertical">{row12[2]}</div>
                    <div className="decode-number decode-vertical">{row12[3]}</div>
                    <div className="decode-number decode-vertical">{row12[4]}</div>
                    <div className="decode-number decode-vertical">{row12[5]}</div>
                    <div className="decode-number decode-vertical">{row12[6]}</div>
                    <div className="decode-number decode-vertical">{row12[7]}</div>
                    <div className="decode-number decode-vertical">{row12[8]}</div>
                    <div className="decode-number decode-vertical">{row12[9]}</div>
                    <div className="decode-number decode-vertical">{row12[10]}</div>
                    <div className="decode-number decode-vertical">{row12[11]}</div>
                    <div className="decode-number decode-vertical">{row12[12]}</div>
                    <div className="decode-number decode-vertical">{row12[13]}</div>
                    <div className="decode-number decode-vertical">{row12[14]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row12[15]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row12[16]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row12[17]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row12[18]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row12[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText12x1}</div>
                    <div className="decode-number decode-horizontal">{resultText12x2}</div>
                    <div className="decode-number decode-horizontal">{resultText12x3}</div>
                    <div className="decode-number decode-horizontal">{resultText12x4}</div>
                    <div className="decode-number decode-horizontal">{resultText12x5}</div>
                </div>
                <div className="decode-row row-13">
                    <div className="decode-number row-number">13</div>
                    <div className="decode-number decode-vertical">{row13[0]}</div>
                    <div className="decode-number decode-vertical">{row13[1]}</div>
                    <div className="decode-number decode-vertical">{row13[2]}</div>
                    <div className="decode-number decode-vertical">{row13[3]}</div>
                    <div className="decode-number decode-vertical">{row13[4]}</div>
                    <div className="decode-number decode-vertical">{row13[5]}</div>
                    <div className="decode-number decode-vertical">{row13[6]}</div>
                    <div className="decode-number decode-vertical">{row13[7]}</div>
                    <div className="decode-number decode-vertical">{row13[8]}</div>
                    <div className="decode-number decode-vertical">{row13[9]}</div>
                    <div className="decode-number decode-vertical">{row13[10]}</div>
                    <div className="decode-number decode-vertical">{row13[11]}</div>
                    <div className="decode-number decode-vertical">{row13[12]}</div>
                    <div className="decode-number decode-vertical">{row13[13]}</div>
                    <div className="decode-number decode-vertical">{row13[14]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row13[15]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row13[16]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row13[17]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row13[18]}</div>
                    <div className="decode-number decode-vertical decode-checking">{row13[19]}</div>
                    <div className="decode-number decode-horizontal">{resultText13x1}</div>
                    <div className="decode-number decode-horizontal">{resultText13x2}</div>
                    <div className="decode-number decode-horizontal">{resultText13x3}</div>
                    <div className="decode-number decode-horizontal">{resultText13x4}</div>
                    <div className="decode-number decode-horizontal">{resultText13x5}</div>
                </div>
            </div>
        </div>
    );
};

export default Decode;
