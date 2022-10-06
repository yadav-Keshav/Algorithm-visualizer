export default async function insertionSort(delay) {
    let blocks = document.querySelectorAll(".block");
    blocks[0].style.backgroundColor = "#13CE66";
    for (var i = 1; i < blocks.length; i += 1) {
        var j = i - 1;
        var key =parseInt(blocks[i].innerHTML);
        var height = blocks[i].style.height;
        blocks[i].style.backgroundColor = "#FF4949";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 1000/delay)
        );

        while (j >= 0 && parseInt(blocks[j].innerHTML) >= key) {
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.height = blocks[j].style.height;
            blocks[j + 1].innerText =
            blocks[j].innerText;
            j = j - 1;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000/delay)
            );
            for (var k = i; k >= 0; k--) {
                blocks[k].style.backgroundColor = "#13CE66";
            }
        }
        blocks[j + 1].style.height = height;
        blocks[j + 1].innerHTML = key;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 1000/delay)
        );
        blocks[i].style.backgroundColor = "#13CE66";
    }
}
