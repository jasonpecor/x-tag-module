import 'element.matches.polyfill'
import xtag from 'x-tag/dist/x-tag-core'

export default (function () {
	if (typeof window.__XTAG__ === 'undefined')
		window.__XTAG__ = xtag
	return window.__XTAG__
}())
