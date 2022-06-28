export function mergeSort(arr){
    var plan = {
        sorted:[],
        pos:[],
        swap:[]
    };
    mergeSortRec(arr, 0, arr.length-1,plan);
    console.log('sorted->');
    plan.sorted = arr;
    for(var step =0; step < plan.pos.length;step++){
        console.log(`Step ${step} \n pos ${plan.pos[step]} \n Swap: ${plan.swap[step]}`);
    }
    return plan;
}

function merge(arr,beg,mid,end,plan){
    var start =  mid +1;

    plan.pos.push([beg,start]);
    plan.swap.push(false);
    if (arr[mid] <= arr[start]) {
        return;
    }
    while (beg <= mid && start <= end) {
 
        if (arr[beg] <= arr[start]) {
            beg++;
            plan.pos.push([beg,start]);
            plan.swap.push(false);
        }
        else {
            var value = arr[start];
            var index = start;
        
            while (index !== beg) {

                plan.pos.push([index,index -1]);
                plan.swap.push(true);

                arr[index] = arr[index - 1];
                index--;
            }
            arr[beg] = value;
            beg++;
            mid++;
            start++;
        }
    }

}

function mergeSortRec(arr, beg, end, plan){
    if (beg < end)
        {
            let mid = Math.floor((beg + end) / 2);
            mergeSortRec(arr, beg, mid, plan);


            mergeSortRec(arr, mid+1,end, plan);


            merge(arr, beg, mid, end, plan);


        }
}