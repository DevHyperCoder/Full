import Config from 'webpack-config';
 
export default new Config().extend(
    'mdreizin/base',
    'mdreizin/css',
    'mdreizin/html',
    'webpack-config-mdreizin/json'
    // etc
);
import Config, { environment } from 'webpack-config';
 
environment.setAll({
    env: () => process.env.NODE_ENV
});
 
// Also you may use `'conf/webpack.[NODE_ENV].config.js'`
export default new Config().extend('conf/webpack.[env].config.js');