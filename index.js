//alert("We are connected!")
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.interval = setInterval(this.tick, 1000);
    };
    tick = () => {
        this.tick();
        console.log('Tick');
    };
    pause = () => {
        clearInterval(this.interval);
    };

    importantMethodToCall() {
        console.log('Important thing completed!');
    };
}



const durationInput = document.querySelector("#duration");
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
timer.start();