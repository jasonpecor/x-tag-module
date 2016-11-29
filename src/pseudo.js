import xtag from 'xtag'

export default function Pseudo(name, {action = null, onAdd = null, onRemove = null, onCompiled = null}) {
	if (!xtag.pseudos[name])
		xtag.pseudos[name] = {action, onAdd, onRemove, onCompiled}
	return name
}
