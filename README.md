# x-tag-module
ES6 module wrapper for x-tag Web Components

## Purpose

The `x-tag-module` wrapper allows Web Components and related features created using [x-tag](https://www.npmjs.com/package/x-tag) to be used as ES6 modules.

## Install

`npm install x-tag x-tag-module --save`

## Web Components

### Create a component

> Note: WebComponent is not a constructor; do not use `new`

```javascript
import WebComponent from 'x-tag-module'

export default WebComponent('x-foo', {
	content: `
	<section>
		<h1>x-foo component</h1>
	</section>
	`
})
```

### Use x-tag utility functions

Here we create a basic modal component. Clicking `button.close` fires a preventable `close` event on the component using [`xtag.fireEvent()`](http://x-tag.github.io/docs#api_xtag_fireevent).

```javascript
import WebComponent from 'x-tag-module'
import { xtag } from 'x-tag-module'

export default WebComponent('x-modal', {
	content: `
		<header><button class="close">×</button></header>
		<section class="contents"></section>
	`,
	events: {
		'tap:delegate(button.close)': function (e) {
			xtag.fireEvent(e.currentTarget, 'close')
		},
		'close:preventable': function (e) {
			this.style.display = 'none'
		}
	}
})
```

## Mixins

### Create a Mixin

Mixins allow you to bundle common functionality into reusable modules which can be applied to one or more Web Components. If we have lots of components with a `close` button, we might make a mixin to handle this.

```javascript
// mixins/close.js

import { Mixin, xtag } from 'x-tag-module'

export default Mixin('close', {
	events: {
		'tap:delegate(button.close)': function (e) {
			xtag.fireEvent(e.currentTarget, 'close')
		}
	}
})
```

### Using a Mixin

```javascript
import WebComponent from 'x-tag-module'
import close from 'mixins/close'

export default WebComponent('x-modal', {
	mixins: [ close ],
	...
})
```

## Pseudos

## Custom Events
