function timer(duration, onComplete) {
  if (typeof duration !== 'number' || duration < 0) {
    throw new Error('Duration must be a positive number');
  }

  if (typeof onComplete !== 'function') {
    throw new Error('onComplete must be a function');
  }

  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

module.exports = timer;