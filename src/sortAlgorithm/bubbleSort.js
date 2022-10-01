
function swap(el1, el2,delay) {
    return new Promise((resolve) => {
        var temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;

        temp = el1.innerHTML;
        el1.innerHTML = el2.innerHTML;
        el2.innerHTML = temp;
        setTimeout(() => {
            resolve();
        }, 1000/delay);
    });
}

export default async function bubbleSort(delay) {
    var blocks = document.querySelectorAll(".block");
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000/delay)
            );

            var value1 = Number(blocks[j].innerHTML);
            var value2 = Number(blocks[j + 1].innerHTML);
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1],delay);
                blocks = document.querySelectorAll(".block");
            }

            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
}
