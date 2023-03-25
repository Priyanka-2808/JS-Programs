let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = [1, 3, 5, 6, 7, 8];

	let res_arr = (arr1,arr2) => {
		let new_arr = [];
		for (let i = 0; i < arr1.length; i++) {
			for (let j = 0; j < arr2.length; j++) {
				if (arr1[i] === arr2[j]) {
					new_arr.push(arr1[i]);
				}
			}
		}
		return new_arr;
	};

	console.log("Intersected array obtain is:");
	console.log(res_arr(arr1, arr2));
	