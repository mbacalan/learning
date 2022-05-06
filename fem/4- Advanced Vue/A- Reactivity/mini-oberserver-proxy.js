/*
  This is a greatly simplified version of the dependency tracking
  system used in Vue, Knockout, MobX and Meteor Tracker (each with different
  implementation details, of course). It doesn't cover all the possible edge
  cases in detection, nor does it handle Arrays; The goal is simply to better
  understand how the tracking takes place and how data becomes "reactive".
*/
class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeUpdate) {
      this.subscribers.add(activeUpdate);
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub());
  }
}

/*
  Made-up implementation of a (new) reactivity-system.
  Biggest lacking feature is props not having their own Dep() instance,
  but is it really needed?
*/
function observe(obj) {
  const dep = new Dep();

  const proxy = new Proxy(obj, {
    // getter is responsible for registering subscribers
    get(target, key) {
      dep.depend();
      return target[key];
    },
    // setter is responsible for notifying change
    set(target, key, val, receiver) {
      const changed = target[key] !== val;

      Reflect.set(...arguments);

      // Trigger re-computation
      if (changed) {
        dep.notify()
      }
    }
  })

  return proxy;
}

let activeUpdate = null;

function autorun(update) {
  // Wrap the raw update function into a "job" function that registers and
  // unregisters itself as the current active job when invoked
  const wrappedUpdate = () => {
    activeUpdate = wrappedUpdate;
    update();
    activeUpdate = null;
  }

  wrappedUpdate();
}

// Run it & Test it
let state = {
  iceCream: 0,
  cookie: 1,
}

const incButton = document.getElementById('incrementIceCream');
const incCounter = document.getElementById('iceCreamCounter');

const incButton2 = document.getElementById('incrementCookie');
const incCounter2 = document.getElementById('cookieCounter');

state = observe(state);

autorun(function renderCounter1() {
  incCounter.innerHTML = state.iceCream;
});

autorun(function renderCounter2() {
  incCounter2.innerHTML = state.cookie;
});

incButton.addEventListener('click', function() {
  state.iceCream++
});

incButton2.addEventListener('click', function() {
  state.cookie++
});
