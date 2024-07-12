function delayedResult(n1, n2, delayTime, callback) {
  window.setTimeout(() => callback(n1 + n2), delayTime);
}
