class LinkExpander {
	constructor(elementSelector, linkSelector) {
		const elements = Array.from(document.querySelectorAll(elementSelector))
		this.linkSelector = linkSelector

		if (elements.length > 0) {
			this.connectElements(elements, linkSelector)
			this.addListener()
		}
	}

	connectElements(elements) {
		elements.forEach(el => {
			if (el.querySelector(this.linkSelector) != null) {
				el.dataset.expandLink = true
			}
		})
	}

	addListener() {
		document.documentElement.addEventListener('click', event => {
			const container = event.target.closest('[data-expand-link="true"]')
			if (container) {
				const link = container.querySelector(this.linkSelector)
				if (link.hasAttribute('href')) {
					link.click()
				}
			}
		})
	}
}

export default LinkExpander
