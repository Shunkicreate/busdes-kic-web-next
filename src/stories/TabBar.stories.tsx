import TabBar from './TabBar'

export default {
	component: TabBar,
	title: 'TabBar',
}

const emptyFunc = () => {}

export const Default = {
	args: {
		selectedPage: {
			addRoute: true,
			nextBus: false,
			timeTable: false,
		},
		onClick: emptyFunc
	}
}

export const ALLSelected = {
	args: {
		selectedPage: {
			addRoute: true,
			nextBus: true,
			timeTable: true,
		},
		onClick: emptyFunc
	}
}


export const NotALLSelected = {
	args: {
		selectedPage: {
			addRoute: false,
			nextBus: false,
			timeTable: false,
		},
		onClick: emptyFunc
	}
}

