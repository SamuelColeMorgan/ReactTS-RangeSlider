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

export { clampNumberBetweenAMinAndMax, getNumberAsPercentageOfAnother };
