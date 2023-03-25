//2. Subsequence

function Subseq(arr1, arr2, m, n)
    {
        let i,j=0;
        for (i = 0; i < n; i++) {
            for (j = 0; j < m; j++)
                if (arr2[i] == arr1[j])
                    break;
            if (j == m)
                return false;
        }
        return true;
    }

    let arr1=prompt('enter values array1')
    let arr2=prompt('enter values array1')
    // let arr1 = [ 1, 2, 21, 3, 7 ];
    // let arr2 = [ 11, 2, 7, 1 ];
    let m = arr1.length;
    let n = arr2.length;
    if (Subseq(arr1, arr2, m, n))
      console.log("arr2[] is "
                     + "subsequence of arr1[] ");
    else
      console.log("arr2[] is "
                    + "not a subsequence of arr1[]");


// Write a javascript function that returns 1 for 1,
//  22 for 2, 333 for 3, 4444 for 4.

// 1 -- 1
// 2 -- 22+1=23
// 3 -- 333+23=356
// 4 -- 4444+356=4800

for (i = 1; i <= 5; i++) {
	var res = [];
	for (a = 1; a <= i; a++) {
		res.push(i);
	}
	console.log(res.join(""));
}


let sum
for(let i=1;i<=3;i++){
    let num = "";
    for(let j=0; j<i;j++){
        num += i.toString();
    }
    sum += parseInt(num);
 }
 console.log(sum);