import postcss from 'rollup-plugin-postcss';
import { createCompatibilityConfig } from '@open-wc/building-rollup';

export default createCompatibilityConfig({
    input: './index.html',
    plugins: [
        postcss({
            plugins: []
        })
    ]
});
