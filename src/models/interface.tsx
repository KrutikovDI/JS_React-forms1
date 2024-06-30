export interface IInput {
    useName: string,
    result: string,
    color: string,
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void
  }

export interface IPropsData {
  data: IInput
}