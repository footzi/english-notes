export const initSw = () => {
  window.addEventListener('load', () => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('./service-worker.js');
    }
  });
};
