import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { VoldemortElement } from '../src/VoldemortElement.js';
import '../voldemort-element.js';

storiesOf('voldemort-element', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(VoldemortElement))
  .add(
    'Alternative Title',
    () => html`
      <voldemort-element .title=${'Something else'}></voldemort-element>
    `,
  );
