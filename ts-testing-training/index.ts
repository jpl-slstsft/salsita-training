import {isEven} from "./some-lib";

export const isOdd = (input: number): boolean => {
    return !isEven(input)
}