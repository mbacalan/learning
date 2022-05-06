const chat = document.getElementById("chat");
const msgs = document.getElementById("msgs");

// this will hold all the most recent messages
let allChat = [];

const INTERVAL = 3000;

chat.addEventListener("submit", function (e) {
  e.preventDefault();
  postNewMsg(chat.elements.user.value, chat.elements.text.value);
  chat.elements.text.value = "";
});

async function postNewMsg(user, text) {
  const data = {
    user,
    text,
  };

  // send POST request
  const res = await fetch("/poll", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function getNewMsgs() {
  let json;

  try {
    const res = await fetch("/poll");
    json = await res.json();
  } catch (e) {
    // back off could would go here
    console.error("polling error", e);
  }

  allChat = json.msg;
  render();
  setTimeout(getNewMsgs, INTERVAL);
}

function render() {
  const html = allChat.map(({ user, text, time, id }) =>
    template(user, text, time, id)
  );
  msgs.innerHTML = html.join("\n");
}

const template = (user, msg) => `<li class="collection-item"><span class="badge">${user}</span>${msg}</li>`;

getNewMsgs();
