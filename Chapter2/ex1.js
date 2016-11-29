process.stdin.setEncoding('utf8');
process.stdin.on('readable',function() {
	var input = process.stdin.read();
	if(input!==null) {
		process.stdout.write(input);
	}
});
//goto terminal and goto this file's path and run this file