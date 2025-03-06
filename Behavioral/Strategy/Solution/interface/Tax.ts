// Strategy

export default interface Tax {
  taxPercentage: number
  calculate(initialValue: number): number
}