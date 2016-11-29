import xtag from 'xtag'

export default function CustomEvent(name, {attach = [], condition = null, capture = null}) {
	if (!xtag.customEvents[name])
		xtag.customEvents[name] = {attach, condition, capture}
	return name
}
