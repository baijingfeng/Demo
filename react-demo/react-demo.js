// 父组件
class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			number: 0,
			targetNum: 0,
		}
		console.log('父组件，constructor', Date.now())
		this.handleClick = this.handleClick.bind(this)
		this.setNum = this.setNum.bind(this)
	}

	// UNSAFE_componentWillMount() {
	// 	console.log('父组件，UNSAFE_componentWillMount')
	// }

	componentDidMount() {
		console.log('父组件，componentDidMount', Date.now())
	}

	shouldComponentUpdate(newProps, newState) {
		console.log('父组件，shouldComponentUpdate')
		// if (newState.number < 15) return true
		// return false
		return true
	}

	// UNSAFE_componentWillUpdate() {
	// 	console.log('父组件，UNSAFE_componentWillUpdate')
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('父组件， getSnapshotBeforeUpdate', prevProps, prevState)
	// 	return null
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('父组件，componentDidUpdate', prevProps, prevState, snapshot)
	}

	handleClick() {
		this.setState({
			number: this.state.number + 1,
		})
		console.log('父组件，handleClick')
	}

	setNum() {
		this.setState((prevState, props) => {
			console.log('父组件, setState-targetNum', prevState, props, this.state)
			return {
				targetNum: prevState.targetNum + 1,
			}
		})

		console.log('父组件，setNum')

		return true
	}

	render() {
		console.log('父组件, render', this.state)
		return (
			<div style={{ fontSize: '50px' }}>
				{/* <p>{`${this.state.number}-父组件number`}</p>
				<p>{`${this.state.targetNum}-父组件targetNum`}</p>
				<button onClick={this.handleClick} style={{ fontSize: '100px' }}>
					{'父组件+'}
				</button>
				{this.state.number < 10 ? (
					<SubCounter
						// key={Math.random()}
						number={this.state.number}
						targetNum={this.state.targetNum}
						setNum={this.setNum}
					/>
				) : null} */}

				{[
					{
						key: '1',
						number: 1,
					},
					{
						key: '2',
						number: 2,
					},
					{
						key: '3',
						number: 3,
					},
				].map(({ key, number }) => (
					<SubCounter
						key={key}
						number={number}
						// targetNum={this.state.targetNum}
						// setNum={this.setNum}
					/>
				))}
				<SubCounter2
					number={7}
					// targetNum={this.state.targetNum}
					// setNum={this.setNum}
				/>
			</div>
		)
	}
}

// 子组件
class SubCounter extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			// index: 1,
			_targetNum: props.targetNum,

			myObj: {
				index: 1,
			},
			myValue: 1,
		}
		this.setNum = this.setNum.bind(this)
		this.setObj = this.setObj.bind(this)
		// console.log('子组件，constructor')
		console.log(`${this.props.number}子组件，constructor, ${Date.now()}`)
	}

	// UNSAFE_componentWillReceiveProps(nextProps) {
	// 	console.log('子组件，UNSAFE_componentWillReceiveProps', nextProps)
	// }

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('子组件，getDerivedStateFromProps', props, state)
	// 	// return {
	// 	//     _targetNum: prevState._targetNum + 2
	// 	// }
	// 	return null
	// }

	componentDidMount() {
		console.log(`${this.props.number}子组件，componentDidMount, ${Date.now()}`)
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('子组件，shouldComponentUpdate', nextProps, nextState, this.state)
	// 	// if (nextProps.number < 5) return true
	// 	// return false
	// 	// console.log('nextState.myObj === this.state.myObj', nextState.myObj === this.state.myObj)
	// 	// if (nextState.myObj === this.state.myObj) {
	// 	//     return false
	// 	// }

	// 	// if (nextState.myValue === this.state.myValue) {
	// 	// 	console.log(
	// 	// 		'nextState.myValue === this.state.myValue',
	// 	// 		nextState.myValue === this.state.myValue
	// 	// 	)
	// 	// 	return false
	// 	// }
	// 	return true
	// }

	// UNSAFE_componentWillUpdate() {
	// 	console.log('子组件，UNSAFE_componentWillUpdate')
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('子组件， getSnapshotBeforeUpdate', prevProps, prevState)
	// 	return null
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('子组件， componentDidUpdate', prevProps, prevState, snapshot, this.state)
		// console.table({prevProps, prevState, snapshot, thisState: this.state})
	}

	// UNSAFE_componentWillUnmount() {
	// 	console.log('子组件，UNSAFE_componentWillUnmount')
	// }

	setNum() {
		// this.setState((prevState, props) => {
		//     // console.table('子组件派生更新, _targetNum', prevState, props, this.state)
		//     console.log('子组件, setState-_targetNum', prevState, props, this.state)
		//     return {
		//         _targetNum: prevState._targetNum + 2
		//     }
		// })

		console.log('子组件，setNum')

		const isCanUpdate = this.props.setNum()
		if (isCanUpdate) {
			this.setState((prevState, props) => {
				// console.table('子组件派生更新, _targetNum', prevState, props, this.state)
				console.log('子组件, setState-_targetNum', prevState, props, this.state)
				return {
					_targetNum: prevState._targetNum + 1,
				}
			})
		}
	}

	setObj() {
		console.log('子组件，setObj')
		this.setState(prevState => {
			console.log('子组件，setState-myObj', prevState)
			return {
				// myObj: {
				// 	...prevState.myObj,
				// },
				myValue: 1,
			}
		})
	}

	render() {
		console.log(`${this.props.number}子组件，render`)
		return (
			<React.Fragment>
				<p>{`${this.props.number}-子组件number`}</p>
				{/* <p>{`${this.state._targetNum}-子组件派生targetNum`}</p>
				<button onClick={this.setNum} style={{ fontSize: '100px' }}>
					{'子组件+'}
				</button>
				<div>
					<button onClick={this.setObj} style={{ fontSize: '100px' }}>
						{'子组件Obj+'}
					</button>
				</div> */}
			</React.Fragment>
		)
	}
}

// 子组件2
class SubCounter2 extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			// index: 1,
			_targetNum: props.targetNum,

			myObj: {
				index: 1,
			},
			myValue: 1,
		}
		this.setNum = this.setNum.bind(this)
		this.setObj = this.setObj.bind(this)
		// console.log('子组件，constructor')
		console.log(`${this.props.number}子组件，constructor, ${Date.now()}`)
	}

	// UNSAFE_componentWillReceiveProps(nextProps) {
	// 	console.log('子组件，UNSAFE_componentWillReceiveProps', nextProps)
	// }

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('子组件，getDerivedStateFromProps', props, state)
	// 	// return {
	// 	//     _targetNum: prevState._targetNum + 2
	// 	// }
	// 	return null
	// }

	componentDidMount() {
		console.log(`${this.props.number}子组件2，componentDidMount, ${Date.now()}`)
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('子组件，shouldComponentUpdate', nextProps, nextState, this.state)
		// if (nextProps.number < 5) return true
		// return false
		// console.log('nextState.myObj === this.state.myObj', nextState.myObj === this.state.myObj)
		// if (nextState.myObj === this.state.myObj) {
		//     return false
		// }

		// if (nextState.myValue === this.state.myValue) {
		// 	console.log(
		// 		'nextState.myValue === this.state.myValue',
		// 		nextState.myValue === this.state.myValue
		// 	)
		// 	return false
		// }
		return true
	}

	// UNSAFE_componentWillUpdate() {
	// 	console.log('子组件，UNSAFE_componentWillUpdate')
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('子组件， getSnapshotBeforeUpdate', prevProps, prevState)
	// 	return null
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('子组件， componentDidUpdate', prevProps, prevState, snapshot, this.state)
		// console.table({prevProps, prevState, snapshot, thisState: this.state})
	}

	// UNSAFE_componentWillUnmount() {
	// 	console.log('子组件，UNSAFE_componentWillUnmount')
	// }

	setNum() {
		// this.setState((prevState, props) => {
		//     // console.table('子组件派生更新, _targetNum', prevState, props, this.state)
		//     console.log('子组件, setState-_targetNum', prevState, props, this.state)
		//     return {
		//         _targetNum: prevState._targetNum + 2
		//     }
		// })

		console.log('子组件，setNum')

		const isCanUpdate = this.props.setNum()
		if (isCanUpdate) {
			this.setState((prevState, props) => {
				// console.table('子组件派生更新, _targetNum', prevState, props, this.state)
				console.log('子组件, setState-_targetNum', prevState, props, this.state)
				return {
					_targetNum: prevState._targetNum + 1,
				}
			})
		}
	}

	setObj() {
		console.log('子组件，setObj')
		this.setState(prevState => {
			console.log('子组件，setState-myObj', prevState)
			return {
				// myObj: {
				// 	...prevState.myObj,
				// },
				myValue: 1,
			}
		})
	}

	render() {
		console.log(`${this.props.number}子组件2，render`)
		return (
			<React.Fragment>
				<p>{`${this.props.number}-子组件2`}</p>
				{/* <p>{`${this.state._targetNum}-子组件派生targetNum`}</p>
				<button onClick={this.setNum} style={{ fontSize: '100px' }}>
					{'子组件+'}
				</button>
				<div>
					<button onClick={this.setObj} style={{ fontSize: '100px' }}>
						{'子组件Obj+'}
					</button>
				</div> */}
			</React.Fragment>
		)
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'))
