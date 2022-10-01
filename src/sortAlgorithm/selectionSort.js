

export default async function selectionSort(delay) {
    var blocks = document.querySelectorAll(".block");
    var min_idx = 0;
    for (var i = 0; i < blocks.length; i += 1) {
        min_idx = i;
        blocks[min_idx].style.backgroundColor = "#16a085";
        for (var j = i + 1; j < blocks.length; j += 1) {
            blocks[j].style.backgroundColor = "red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000/delay)
            );
            var val1 = parseInt(blocks[j].innerHTML);
            var val2 = parseInt(blocks[min_idx].innerHTML);
            if (val1 < val2) {
                blocks[min_idx].style.backgroundColor="#6b5b95";
                min_idx = j;
                blocks[min_idx].style.backgroundColor = "#16a085";
            } else {
                blocks[j].style.backgroundColor = "#6b5b95";
            }
        }
        var temp1 = blocks[min_idx].style.height;
        var temp2 = blocks[min_idx].innerText;
        blocks[min_idx].style.height = blocks[i].style.height;
        blocks[i].style.height = temp1;
        blocks[min_idx].innerText = blocks[i].innerText;
        blocks[i].innerText = temp2;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            },1000/delay)
        );
        blocks[min_idx].style.backgroundColor = "#6b5b95";

        blocks[i].style.backgroundColor = "#13CE66";
    }
}
