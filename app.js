function tossCoin(){
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');

    coin.classList.remove('flip');

    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

    setTimeout(() => {
        coin.classList.add('flip');

        setTimeout(() => {
            resultText.textContent = result + 'Wins';

            const side = document.getElementById('side');
            side.textContent = result;
        }, 1000);
    }, 100);
}