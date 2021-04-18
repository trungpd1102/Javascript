const listItem = [
    {
        line: 'Line1',
        process: ['Process1-1', 'Process1-2', 'Process1-3']
    },
    {
        line: 'Line2',
        process: ['Process2-1', 'Process2-2', 'Process2-3']
    }
]

var result = listItem.map( (item, index) => {
	console.log(item.line, index);
	item.process.map( (processItem, index) => {
		console.log(processItem, index);
	})
} )