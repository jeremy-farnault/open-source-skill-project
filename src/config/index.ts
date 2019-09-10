import { commonConfig } from './common'
import { devConfig } from './dev'
import { prodConfig } from './prod'
import { testConfig } from './test'

type modes = 'DEV' | 'TEST' | 'PROD'
const ENV_MODE: modes = (process.env.ENV_MODE as modes) || 'DEV'

export interface IConfigType {
  /** Application Version */
  appVersion?: string
  apolloClient?: string
  offlineMode?: boolean
}

const configFiles = {
  DEV: devConfig,
  TEST: testConfig,
  PROD: prodConfig
}
const baseConfig: IConfigType = { ...commonConfig, ...configFiles[ENV_MODE] }

export const config: IConfigType = {
  ...baseConfig,
  offlineMode: true
}
