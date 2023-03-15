function maxSubArray(str) {
    
    var max=0
    var current=0
    for(let i=0;i<str.length;i++)
    {
        current=max+str[i];
        if(current>max) {
            max=current;
        }
        if(current<0)
        {
            current=0;
        }
    }
    return max;
}
var str1=[-2,-3,4,-1,-2,1,5,-3]
console.log(maxSubArray(str1));