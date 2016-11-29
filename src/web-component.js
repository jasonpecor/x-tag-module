import xtag from 'xtag'

export default function WebComponent(name, options = {}) {
	return xtag.tags[name] || xtag.register(name, options)
}
