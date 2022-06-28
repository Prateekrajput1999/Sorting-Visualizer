export function insertionSort(arr){
    var moves = {
        sorted:[],
        pos:[],
        swap:[]
    };
    console.log(arr);
    for(let i = 1; i < arr.length; i++){
        var j = i-1;
        var key = i;
        while(j>=0 && arr[key] < arr[j]){
            console.log('in');
            console.log(1);
            console.log([key,j]);
            moves.pos.push([key,j]);
            moves.swap.push(true);
            swap(arr,key,j);

            moves.pos.push([key,j]);
            moves.swap.push(false);

            key = j;
            j = j-1;
        }
        console.log('OUT');
        console.log(1);
        console.log([key,j]);
        moves.pos.push([key,j]);
        moves.swap.push(false);
    }
    moves.sorted = arr;
    return moves;
}

function swap(arr,i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}