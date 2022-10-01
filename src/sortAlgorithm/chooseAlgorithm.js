import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";
import quickSort from "./quickSort";
import selectionSort from "./selectionSort";


export default async function chooseAlgorithm() {
    const algo = Number(document.getElementById('algo_menu').value);
    const delay = Number(document.getElementById('speed_menu').value);
    alert(delay)
    switch (algo) {
        case 1:
            await bubbleSort(delay);
            break;
        case 2:
            await selectionSort(delay);
            break;
        case 3:
            await insertionSort(delay);
            break;
        case 4:
            await mergeSort(delay);
            break;
        case 5:
            await quickSort(delay);
            break;
        default:
            alert("Choose a algorithm");
    }
}
