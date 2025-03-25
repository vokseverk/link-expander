# Link Expander

A tiny module for use when you need to expand a link to take over an entire component (e.g. a Card or similar),
but you're unable to use the ususal CSS method:

```css
.card {
	position: relative;
	cursor: pointer;
}

.card .link::before {
	content: "";
	position: absolute;
	display: block;
	inset: 0;
}

.card .link {
	position: static;
}
```

## Usage

Import the module in your main JavaScript file, and create an instance, supplying a selector for the element(s)
you want to enhance, and the selector for the link inside, e.g.:

```javascript
import LinkExpander from './path/to/link-expander.js'

new LinkExpander('.card', '.link')

```

When an element has been "enhanced" with an expanded link, it gets a data-attribute that you can use from CSS;
maybe so you're only adding the `pointer` cursor to the full element when it's _actually_ clickable:

```css
[data-expand-link="true"] {
	cursor: pointer;
}
```

