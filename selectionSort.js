function selectionSort(nums){

    let min = 0;
    for (let i = 0; i < nums.length; i++){
        min = i;
        for (let j = i + 1; j < nums.length; j++){
            if(nums[j]<nums[min]){
                min=j;
            }
        } 
        // also check out : https://www.doabledanny.com/selection-sort-javascript , for selection sort in javascript.
        if(min !== i){
            [nums[i],nums[min]] = [nums[min],nums[i]];
        }
    }
    return nums;
}

console.log(selectionSort([1,2,45,5,3,8,9]));