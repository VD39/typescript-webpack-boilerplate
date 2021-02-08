// Import Configuration.
import { WebpackDevConfig } from './webpack/dev';
import { WebpackProdConfig } from './webpack/prod';
import { config } from './webpack/configuration';

export default config.IS_DEV ? WebpackDevConfig : WebpackProdConfig;
