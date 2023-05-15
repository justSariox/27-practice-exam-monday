export interface IOperationsPropsType  {
    increment?: () => void
    reset?: () => void
    setInitial: () => void
    counter: number
    min: number
    max: number
}