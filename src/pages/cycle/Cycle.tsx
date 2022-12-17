import React, { useEffect, useState } from 'react';
import { horizontalMatrix, horizontalMatrixTransposed, verticalMatrix, verticalMatrixTransposed } from '../../data/HorizontalMatrix';
import _ from 'lodash';
import './Cycle.css';

const Cycle = () => {
    const [horizontalDecodeResult, setHorizontalDecodeResult] = useState<number[][]>([]);

    const [targetMatrix, setTargetMatrix] = useState<number[][]>([]);

    const [verticalTargetMatrix, setVerticalTargetMatrix] = useState<number[][]>([]);
    const [verticalDecodeResult, setVerticalDecodeResult] = useState<number[][]>([]);

    const [isMatrixReachable, setMatrixReachable] = useState(false);
    const [isVerticalMatrixReachable, setVerticalMatrixReachable] = useState(false);

    // console.log('horizontal transposed: ', horizontalMatrixTransposed);
    // console.log('vertical transposed: ', verticalMatrixTransposed);

    const readNoiseMatrix = () => {
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
            const matrixResultRow2 = Array.from(noiseGetRow2Str.replaceAll(',', ''), Number);
            const matrixResultRow3 = Array.from(noiseGetRow3Str.replaceAll(',', ''), Number);
            const matrixResultRow4 = Array.from(noiseGetRow4Str.replaceAll(',', ''), Number);
            const matrixResultRow5 = Array.from(noiseGetRow5Str.replaceAll(',', ''), Number);
            const matrixResultRow6 = Array.from(noiseGetRow6Str.replaceAll(',', ''), Number);
            const matrixResultRow7 = Array.from(noiseGetRow7Str.replaceAll(',', ''), Number);
            const matrixResultRow8 = Array.from(noiseGetRow8Str.replaceAll(',', ''), Number);
            const matrixResultRow9 = Array.from(noiseGetRow9Str.replaceAll(',', ''), Number);
            const matrixResultRow10 = Array.from(noiseGetRow10Str.replaceAll(',', ''), Number);
            const matrixResultRow11 = Array.from(noiseGetRow11Str.replaceAll(',', ''), Number);
            const matrixResultRow12 = Array.from(noiseGetRow12Str.replaceAll(',', ''), Number);
            const matrixResultRow13 = Array.from(noiseGetRow13Str.replaceAll(',', ''), Number);

            setTargetMatrix([
                matrixResultRow1,
                matrixResultRow2,
                matrixResultRow3,
                matrixResultRow4,
                matrixResultRow5,
                matrixResultRow6,
                matrixResultRow7,
                matrixResultRow8,
                matrixResultRow9,
                matrixResultRow10,
                matrixResultRow11,
                matrixResultRow12,
                matrixResultRow13
            ]);
        }
    };

    useEffect(() => {
        readNoiseMatrix();
    }, []);

    const findNumberOfCoincidences = (matrix1: number[], matrix2: number[]) => {
        let counter = 0;

        for (let i = 0; i < matrix1.length; i++) {
            if (matrix1[i] === matrix2[i] && matrix1[i] === 1) {
                counter++;
            }
        }

        return counter;
    };

    const doHorizontalDecode = () => {
        let parityCheckResults = [];

        for (let i = 0; i < targetMatrix.length; i++) {
            const targetMatrixRow = targetMatrix[i];

            let resultArr = [];

            for (let j = 0; j < horizontalMatrix.length; j++) {
                const horizontalMatrixRow = horizontalMatrix[j];

                const targetAndHorizontal = findNumberOfCoincidences(targetMatrixRow, horizontalMatrixRow);

                const isEven = targetAndHorizontal % 2 === 0;
                const parityCheckResult = isEven ? 0 : 1;

                resultArr.push(parityCheckResult);
            }

            // console.log('result array: ', resultArr);
            parityCheckResults.push(resultArr);
        }

        // console.log('results array: ', parityCheckResults);
        setHorizontalDecodeResult(parityCheckResults);
        setMatrixReachable(true);
    };

    // console.log('horizontal checks result: ', horizontalDecodeResult);

    const findSyndromFunc = (horizontalChecksResult: number[][], horizontalMatrixTransposed: number[][]) => {
        for (let i = 0; i < horizontalChecksResult.length; i++) {
            const horizontalChecksResultElement = horizontalChecksResult[i];
            const isEqualToZeroArray = _.isEqual(horizontalChecksResultElement, [0, 0, 0, 0, 0]);

            // console.log(isEqualToZeroArray);

            if (!isEqualToZeroArray) {
                // console.log('at least 1 error in row ', i + 1);

                for (let j = 0; j < horizontalMatrixTransposed.length; j++) {
                    const horizontalMatrixTransposedElement = horizontalMatrixTransposed[j];

                    const isEqualHorizotalElementToTransposed = _.isEqual(horizontalChecksResultElement, horizontalMatrixTransposedElement);

                    if (isEqualHorizotalElementToTransposed) {
                        // console.log(horizontalMatrixTransposedElement, '===', horizontalChecksResultElement, '(row ', i + 1, '=== row ', j + 1, ')');

                        if (targetMatrix[i][j] === 1) {
                            let targetMatrixToEdit = _.clone(targetMatrix);
                            targetMatrixToEdit[i][j] = 0;

                            setTargetMatrix(targetMatrixToEdit);
                        } else {
                            let targetMatrixToEdit = _.clone(targetMatrix);
                            targetMatrixToEdit[i][j] = 1;

                            setTargetMatrix(targetMatrixToEdit);
                        }
                    }
                }
            } else {
                console.log('row ', i + 1, ' is correct');
            }
        }
    };

    const fixErrorsHorizontal = () => {
        findSyndromFunc(horizontalDecodeResult, horizontalMatrixTransposed);
        doHorizontalDecode();
    };

    // const findVerticalTargetMatrix = () => {
    //     const verticalRow1 = [...targetMatrix[0]];
    //     const verticalRow2 = [...targetMatrix[1]];
    //     const verticalRow3 = [...targetMatrix[2]];
    //     const verticalRow4 = [...targetMatrix[3]];
    //     const verticalRow5 = [...targetMatrix[4]];
    //     const verticalRow6 = [...targetMatrix[5]];
    //     const verticalRow7 = [...targetMatrix[6]];
    //     const verticalRow8 = [...targetMatrix[7]];
    //     const verticalRow9 = [...targetMatrix[8]];
    //     const verticalRow10 = [...targetMatrix[9]];
    //     const verticalRow11 = [...targetMatrix[10]];
    //     const verticalRow12 = [...targetMatrix[11]];
    //     const verticalRow13 = [...targetMatrix[12]];

    //     setVerticalDecodeTargetMatrix([
    //         verticalRow1,
    //         verticalRow2,
    //         verticalRow3,
    //         verticalRow4,
    //         verticalRow5,
    //         verticalRow6,
    //         verticalRow7,
    //         verticalRow8,
    //         verticalRow9,
    //         verticalRow10,
    //         verticalRow11,
    //         verticalRow12,
    //         verticalRow13
    //     ]);
    // };

    const getVerticalTargetMatrix = (targetMatrix: number[][]) => {
        const result: any = _.zip.apply(_, targetMatrix);
        setVerticalTargetMatrix(result);
    };

    const callVerticalTargetMatrix = () => {
        getVerticalTargetMatrix(targetMatrix);
    };

    const findNumberOfCoincidencesVertical = (matrix1: number[], matrix2: number[]) => {
        let counter = 0;

        for (let i = 0; i < matrix1.length; i++) {
            if (matrix1[i] === matrix2[i] && matrix1[i] === 1) {
                counter++;
            }
        }

        return counter;
    };

    const doVerticalDecode = () => {
        let parityCheckResults = [];

        for (let i = 0; i < verticalTargetMatrix.length; i++) {
            const targetMatrixColumn = verticalTargetMatrix[i];

            let resultArr = [];

            for (let j = 0; j < verticalMatrix.length; j++) {
                const verticalMatrixColumn = verticalMatrix[j];

                const targetAndVertical = findNumberOfCoincidencesVertical(targetMatrixColumn, verticalMatrixColumn);

                const isEven = targetAndVertical % 2 === 0;
                const parityCheckResult = isEven ? 0 : 1;

                resultArr.push(parityCheckResult);
            }

            // console.log('result array: ', resultArr);
            parityCheckResults.push(resultArr);
        }

        console.log('parity vertical check results array: ', parityCheckResults);
        setVerticalDecodeResult(parityCheckResults);
        setVerticalMatrixReachable(true);
    };

    const findSyndromFuncVertical = (verticalDecodeResult: number[][], verticalMatrixTransposed: number[][]) => {
        for (let i = 0; i < verticalDecodeResult.length; i++) {
            const verticalChecksResultElement = verticalDecodeResult[i];
            const isEqualToZeroArray = _.isEqual(verticalChecksResultElement, [0, 0, 0, 0]);

            // console.log(isEqualToZeroArray);

            if (!isEqualToZeroArray) {
                // console.log('at least 1 error in column ', i + 1);

                for (let j = 0; j < verticalMatrixTransposed.length; j++) {
                    const verticalMatrixTransposedElement = verticalMatrixTransposed[j];

                    const isEqualVerticalElementToTransposed = _.isEqual(verticalChecksResultElement, verticalMatrixTransposedElement);

                    if (isEqualVerticalElementToTransposed) {
                        // console.log(verticalMatrixTransposedElement, '===', verticalChecksResultElement, '(row vertical ', i + 1, '=== row vertical ', j + 1, ')');

                        if (verticalTargetMatrix[i][j] === 1) {
                            let verticalTargetMatrixToEdit = _.clone(verticalTargetMatrix);
                            verticalTargetMatrixToEdit[i][j] = 0;

                            setVerticalTargetMatrix(verticalTargetMatrixToEdit);
                        } else {
                            let verticalTargetMatrixToEdit = _.clone(verticalTargetMatrix);
                            verticalTargetMatrixToEdit[i][j] = 1;

                            setVerticalTargetMatrix(verticalTargetMatrixToEdit);
                        }
                    }
                }
            } else {
                console.log('column ', i + 1, ' is correct');
            }
        }
    };

    const fixErrorsVertical = () => {
        findSyndromFuncVertical(verticalDecodeResult, verticalMatrixTransposed);
        doVerticalDecode();
    };

    const transposeFromVerticalToTarget = (verticalTargetMatrix: number[][]) => {
        const result: any = _.zip.apply(_, verticalTargetMatrix);
        setTargetMatrix(result);
        console.log('transpose back result', result);
    };

    const callTransposeBack = () => {
        transposeFromVerticalToTarget(verticalTargetMatrix);
    };

    console.log('target matrix: ', targetMatrix);
    console.log('vertical target matrix: ', verticalTargetMatrix);

    // const oneIterationMatrixTrasposeFunc = (verticalTargetMatrix: number[][]) => {
    //     const result: any = _.zip.apply(_, verticalTargetMatrix);

    //     console.log('one decode iteration result', result);
    // };

    // const getResultFunction = () => {
    //     oneIterationMatrixTrasposeFunc(verticalDecodeTargetMatrix);
    // };

    // console.log('vertical decode target matrix: ', verticalDecodeTargetMatrix);

    return (
        <div className="some-shit">
            <button onClick={doHorizontalDecode}>Do horizontal decode</button>
            <button onClick={fixErrorsHorizontal}>Fix errors Horizontal</button>
            <button onClick={callVerticalTargetMatrix}>Get vertical target matrix</button>
            <button onClick={doVerticalDecode}>Do vertical decode</button>
            <button onClick={fixErrorsVertical}>Fix errors Vertical</button>
            <button onClick={callTransposeBack}>Transpose back</button>
            {/* <button onClick={findVerticalTargetMatrix}>Find target matrix for vertical decode</button>
            <button onClick={callVerticalTransposed}>Transpose target matrix for vertical decode</button>
            <button onClick={doVerticalDecode}>Do vertical decode</button>
            <button onClick={fixErrorsVertical}>Fix errors Vertical</button>
            <button onClick={getResultFunction}>Get final result</button> */}
            {isMatrixReachable && (
                <div className="cycle-wrapper">
                    <div className="final-matrix-wrapper">
                        <div className="column-numbers-wrapper matrix-row">
                            <div className="column-number">Pos</div>
                            {targetMatrix[0].map((element, index) => {
                                return (
                                    <div key={index} className="column-number">
                                        {index + 1}
                                    </div>
                                );
                            })}
                        </div>
                        {targetMatrix.map((row, index) => {
                            return (
                                <div key={index} className="matrix-row">
                                    <div className="matrix-element column-number">{index + 1}</div>
                                    {row.map((element, zalupa) => {
                                        return (
                                            <div key={zalupa} className="matrix-element">
                                                {element}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>

                    <div className="horizontal-matrix-wrapper">
                        <div className="column-numbers-wrapper matrix-row">
                            {horizontalDecodeResult[0].map((element, index) => {
                                return (
                                    <div key={index} className="column-number">
                                        h-d
                                    </div>
                                );
                            })}
                        </div>
                        {horizontalDecodeResult.map((row, index) => {
                            return (
                                <div key={index} className="matrix-row">
                                    {row.map((element, zalupa) => {
                                        return (
                                            <div key={zalupa} className="matrix-element">
                                                {element}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {isVerticalMatrixReachable && (
                <div className="vertical-decode-wrapper">
                    <div className="row-numbers-wrapper">
                        {verticalDecodeResult[0].map((element, index) => {
                            return (
                                <div key={index} className="row-number">
                                    v-d
                                </div>
                            );
                        })}
                    </div>
                    {verticalDecodeResult.map((column, index) => {
                        return (
                            <div key={index} className="vertical-column">
                                {column.map((element, item) => {
                                    return (
                                        <div key={item} className="vertical-element">
                                            {element}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Cycle;
