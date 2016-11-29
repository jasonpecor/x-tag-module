import xtag from 'xtag'

export default function Mixin(name, options = {}) {
	if (!xtag.mixins[name])
		xtag.mixins[name] = options
	return name
}
