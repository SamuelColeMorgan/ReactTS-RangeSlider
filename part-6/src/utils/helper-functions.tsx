function clampNumberBetweenAMinAndMax(
    number: number,
    min: number,
    max: number
): number {
    if(number <= min) return min;
    if(number >= max) return max;
    return number;
}

function getNumberAsPercentageOfAnother(
    numberA: number,
    numberB: number
): number {
    return Math.floor(numberA / numberB * 100);
}

function getPercentageOfANumber(
    percentage: number, 
    number: number
): number {
    return Math.floor(percentage / 100 * number);
}

export { 
    clampNumberBetweenAMinAndMax, 
    getNumberAsPercentageOfAnother,
    getPercentageOfANumber
};
