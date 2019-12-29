class Timer {
	constructor(durationInput, startBtn, pauseBtn, callbacks) {
		this.durationInput = durationInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;
		this.startBtn.addEventListener('click', this.start);
		this.pauseBtn.addEventListener('click', this.pause);
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}
	}
	start = () => {
		if (this.onStart) this.onStart(this.timeRemaining);
		this.tick();
		this.interval = setInterval(
			this.tick, 10);
	}
	pause = () => {
		clearInterval(this.interval);
		console.log('paused');
	}
	tick = () => {
		if (this.timeRemaining <= 0) {
			if (this.onComplete) this.onComplete();
			return this.pause();
		}
		this.timeRemaining = this.timeRemaining - .01;

		if (this.onTick) {
			this.onTick(this.timeRemaining);
		}
	}
	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
}

// export default Timer;