const debounceFunc = (func) => {
  const debounce = (callback, timeout = 300) => {
    let timer;

    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
      }, timeout);
    };
  };

  debounce();

  const db = debounce(func, 500);

  document.getElementById('search').addEventListener('keypress', () => {
    db();
  });
};

export { debounceFunc };
