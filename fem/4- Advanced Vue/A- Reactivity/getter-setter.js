function convert(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key];

    Object.defineProperty(obj, key, {
      get() {
        console.log(`Getting key "${key}": ${internalValue}`);
        return internalValue;
      },
      set(newValue) {
        console.log(`Setting key "${key}" to ${newValue}`);
        internalValue = newValue;
      }
    })
  });
}
