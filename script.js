main()

function main() {
	const collection = $('.current')

	collection.on('click', function () {
			collection.html('<sctrong>Привет</sctrong')
		collection.off('click', arguments.callee)
	})
}

function clickHandler () {
	console.log('click by me')
}