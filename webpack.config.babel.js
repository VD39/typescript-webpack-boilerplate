// Import Configuration.
import { WebpackDevConfig } from './webpack/dev';
import { WebpackProdConfig } from './webpack/prod';
import { config } from './webpack/configuration/config';

export default config.IS_DEV ? WebpackDevConfig : WebpackProdConfig;
