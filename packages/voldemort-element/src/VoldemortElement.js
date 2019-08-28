import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { openWcLogo } from './open-wc-logo.js';

import '../../page-main/page-main.js';
import '../../page-one/page-one.js';
import { templateAbout } from './templateAbout.js';

export class VoldemortElement extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  constructor() {
    super();
    this.page = 'main';
  }

  _renderPage() {
    switch (this.page) {
      case 'main':
        return html`
          <page-main .logo=${openWcLogo}></page-main>
        `;
      case 'pageOne':
        return html`
          <page-one></page-one>
        `;
      case 'about':
        return templateAbout;
      default:
        return html`
          <p>Page not found try going to <a href="#main">Main</a></p>
        `;
    }
  }

  __clickPageLink(ev) {
    ev.preventDefault();
    this.page = ev.target.hash.substring(1);
  }

  __addActiveIf(page) {
    return classMap({ active: this.page === page });
  }

  render() {
    return html`
    <link rel="stylesheet" href="/packages/voldemort-element/src/style.css">
      <header>
        <ul>
          <li>
            <a href="#main" class=${this.__addActiveIf('main')} @click=${this.__clickPageLink}
              >Main</a
            >
          </li>
          <li>
            <a href="#pageOne" class=${this.__addActiveIf('pageOne')} @click=${this.__clickPageLink}
              >Page One</a
            >
          </li>
          <li>
            <a href="#about" class=${this.__addActiveIf('about')} @click=${this.__clickPageLink}
              >About</a
            >
          </li>
        </ul>
      </header>

      <main>
        ${this._renderPage()}
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
      </p>
    `;
  }
}
