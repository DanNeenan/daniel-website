import { Config } from '@jest/types'

const jestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['./src', 'node_modules'],
}

export default jestConfig
