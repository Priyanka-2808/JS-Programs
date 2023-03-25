function rotate(arr,d,n)
{
	var temp=new Array(n);
	let k = 0;
	for (let i = d; i < n; i++) {
		temp[k] = arr[i];
		k++;
	}
	for (let i = 0; i < d; i++) {
		temp[k] = arr[i];
		k++;
	}
	for (let i = 0; i < n; i++) {
		process.stdout.write(temp[i]+" ");
	}
}

let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d = 4; 
rotate(arr, d, n);



