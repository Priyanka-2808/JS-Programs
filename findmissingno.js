function find(arr,N,i) {
    let temp = [];
    for (i = 0; i <= N; i++) {
                temp[i] = 0;
            }
            for (i = 0; i < N; i++) {
                temp[arr[i] - 1] = 1;
            }
            let num = 0;
            for(i=0;i<=N; i++) {
                if(temp[i]==0)
                num=i+1;
            }
            console.log(num);
    }
            let arr = [ 1,3,4,5];
            let n = arr.length;
            find(arr,n)
    