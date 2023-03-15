let ascii_size = 256;
function maxoccuring(str)
{
    let count = new Array(ascii_size);
    let len = str.length;
    for(let i=0;i<ascii_size;i++) {
        count[i] = 0;
    }

    for (let i = 0; i < len; i++)
    {
        count[str[i].charCodeAt(0)] += 1;
    }
    let max = -1; 
    let result = ' ';  

    for (let i = 0; i < len; i++)
    {
        if (max < count[str[i].charCodeAt(0)])
        {
            max = count[str[i].charCodeAt(0)];
            result = str[i];
        }
    }
    return result;
}
let str="Hi Priyanka Singh ";
console.log("Maximum string occuring:",maxoccuring(str));