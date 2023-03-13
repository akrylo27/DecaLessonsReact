const debounceFunc = (func, sec) => {
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

  const db = debounce(func, sec);

  document.getElementById('search').addEventListener('keypress', () => {
    db();
  });
};

export { debounceFunc };
