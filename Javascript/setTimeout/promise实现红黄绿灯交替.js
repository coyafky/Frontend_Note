function sleep(duration) {
	return new Promise(resolve => {
		setTimeout(resolve,duration)
	})
}

function changeColor(duration,color) {
	return new Promise(resolve => {
		console.log('color: ' + color +'	'+new Date().getSeconds())
		sleep(duration).then(resolve)
	})
}

function bar() {
	return new Promise(resolve => {
		changeColor(2000,'red').then(() => {
			changeColor(1000,'yellow').then(() => {
				changeColor(3000,'green').then(() => {
					bar()
				})
			})
		})
	})
}

bar()