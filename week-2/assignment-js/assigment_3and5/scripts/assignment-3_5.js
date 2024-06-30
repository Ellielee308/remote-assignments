function calculate(data){
    let total = 0;
    for ( let i = 0; i < data.products.length; i++){
        total += data.products[i].price;
    }
    return total * (1 - data.discount);
}

function twoSum(nums, target){
    let indexFirst;
    let indexSecond;
    for ( let i = 0; i < nums.length; i++){
    indexFirst = i;
    let difference = target - nums[i]; 
        for ( let y = i + 1; y < nums.length; y++){
            if (nums[y] === difference){
                indexSecond = y;
                break;      // break from y loop
            }
        }
        if (nums[indexSecond] === difference){
            break;         // break from i loop
        }
    }
    let solution = [indexFirst, indexSecond];
    return  solution;
}