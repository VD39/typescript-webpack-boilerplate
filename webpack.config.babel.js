// Import Configuration.
import { WebpackDevConfig } from './webpack/dev.js';
import { WebpackProdConfig } from './webpack/prod.js';
import { config } from './configuration/index.js';

export default config.IS_DEV ? WebpackDevConfig : WebpackProdConfig;
