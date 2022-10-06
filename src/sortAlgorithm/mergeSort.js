let blocks = document.querySelectorAll(".block");
const itmd = [];
async function mergeArray(start, end) {
    let mid = parseInt((start + end)/2);
    let start1 = start, start2 = mid + 1
    let end1 = mid, end2 = end
     
    // Initial index of merged subarray
    let index = start
 
    while (start1 <= end1 && start2 <= end2) {
        if (blocks[start1] <= blocks[start2]) {
            itmd[index] = blocks[start1]
            index = index + 1
            start1 = start1 + 1;
        }
        else if(blocks[start1] > blocks[start2]) {
            itmd[index] = blocks[start2]
            index = index + 1
            start2 = start2 + 1;
        }
    }
 
    while (start1 <= end1) {
        itmd[index] = blocks[start1]
        index = index + 1
        start1 = start1 + 1;
    }
 
    while (start2 <= end2) {
        itmd[index] = blocks[start2]
        index = index + 1
        start2 = start2 + 1;
    }
 
    index = start
    while (index <= end) {
        blocks[index] = itmd[index];
        index++;
    }
}

export default async function mergeSort(start,end) {
    if (start < end) {
        let mid = parseInt((start + end) /2)
        await mergeSort(start, mid)
        await mergeSort(mid + 1, end)
        await mergeArray(start, end)

        // Waiting time is 800ms
        // await timeout(800)
    }
}
