suite('Global Tests', function(){
	test('page has a valid test', function(){
		assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
	});

});