import Tpl from './template.eft'

export default class Illust extends Tpl {
    constructor(illust) {
		super({
			$data: illust
		})
	}
}
