export function quickSort(arr){
    var plan = {
        sorted:[],
        pos:[],
        swap:[],
        isPartition:[]
    };
    console.log(":p")
    console.log(plan);
    
    quickSortRec(arr,0,arr.length-1,plan);
    console.log(arr);
    plan.sorted = arr;
    console.log(plan);
    return plan;
}

function quickSortRec(arr,start, end,plan){
    console.log(":)");
    console.log(plan);
    if(start === end || end < start || start < 0 || end >= arr.length){
     return;
    }
    var pivot = partition(arr,start,end,plan);
    
    quickSortRec(arr,start,pivot-1,plan);
    
    quickSortRec(arr,pivot+1,end,plan);

}

function partition(arr,start,end,plan)
{
    var pivot = Math.floor((end + start)/2);
    var key = arr[pivot];

    plan.pos.push([pivot,pivot]);
    plan.swap.push(true);
    plan.isPartition.push(true);
    console.log(plan);
    plan.pos.push([pivot,end]);
    plan.swap.push(true);
    plan.isPartition.push(false);
    swap(arr,pivot,end);

    var left = start;
    var right = end -1;
    plan.pos.push([left,right]);
    plan.swap.push(false);
    while(left< right){
        while(left < end && arr[left]<=key){
            left +=1;
            plan.pos.push([left,right]);
            plan.swap.push(false);
            plan.isPartition.push(false);
        }
        while(right >= start && arr[right] >key){
            right -=1;
            plan.pos.push([left,right]);
            plan.swap.push(false);
            plan.isPartition.push(false);
        }
        if(left< right){
           swap(arr,left,right);
            plan.pos.push([left,right]);
            plan.swap.push(true);
            console.log(arr);
        }
    }
    if(arr[left]>key){
        swap(arr,left,end);
        plan.pos.push([left,end]);
        plan.swap.push(true);
        plan.isPartition.push(false);
    }
    pivot = left;
    return pivot;
}
 
function swap(arr,i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}