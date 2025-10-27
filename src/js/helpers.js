function throttle(callback, ms) {
  let lastCall = 0;
  let timeout = null;
  let lastArgs, lastThis;

  return function (...args) {
    const now = Date.now();
    const remaining = ms - (now - lastCall);

    lastArgs = args;
    lastThis = this;

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      callback.apply(lastThis, lastArgs);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastCall = Date.now();
        timeout = null;
        callback.apply(lastThis, lastArgs);
      }, remaining);
    }
  };
}

function sizeCheck() {
  const viewport = window.visualViewport || window;
  document.documentElement.style.setProperty('--vh', `${viewport.height / 100}px`);
  document.documentElement.style.setProperty('--vw', `${viewport.width / 100}px`);
};

function initScrollCheck() {
  const sentinel = document.createElement('div');
  sentinel.style.cssText = "position: absolute; top: 0; height: 1px; width: 1px; pointer-events: none;";
  document.body.prepend(sentinel);

  const observer = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle('is-scrolled', !entry.isIntersecting);
  });
  observer.observe(sentinel);
}
initScrollCheck();

window.addEventListener('resize', throttle(sizeCheck, 100));
window.addEventListener('load', sizeCheck);
document.addEventListener('DOMContentLoaded', sizeCheck);

export { throttle };
