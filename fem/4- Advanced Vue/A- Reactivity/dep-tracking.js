// a class representing a dependency
window.Dep = class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    // Register the current active update as a subscriber
    if (activeUpdate) {
      this.subscribers.add(activeUpdate);
    }
  }

  notify() {
    // Run all subscriber functions
    this.subscribers.forEach(sub => sub());
  }
}

let activeUpdate = null;

function autorun(update) {
  const wrappedUpdate = () => {
    activeUpdate = wrappedUpdate;
    update();
    activeUpdate = null;
  }

  wrappedUpdate();
}
