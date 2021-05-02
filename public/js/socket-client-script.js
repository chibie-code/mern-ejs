// import io from 'socket.io-client';
var socket = io();

var state = {
    joined: false,
    username: '',
    userID: '',
    message: '',
    messages: Array(),
    test: null,
    increment: 0
};

var i = 0;

$(document).ready(function() {
    socket.on("someone is typing", (isTypingObj) => {
        if (isTypingObj.isTyping) {
            document.getElementById("isTyping").innerHTML = "someone is typing";
            // console.log("Typing...");
        } else {
            document.getElementById("isTyping").innerHTML = "";
            // console.log("No one's typing");
        }
    })
    $("input").keyup(function(e) {
        if (e.target.value !== "") {
            setMessage(e);
            socket.emit('typing', { isTyping: true });
        } else {
            console.log("[empty]e.value:", e.target.value);
            socket.emit('typing', { isTyping: false });
            // $("input").css("background-color", "pink");
        }
    });
    socket.on('someone is typing', (typingObject) => {
        console.log('Typing:', typingObject.isTyping);
    });
});

function joinAnim() {
    $("#chat-area").show("slow");
    $("#join-button").hide("slow");
}
// Can pass in function name
$("#join-button").click(joinAnim);

const inpt = document.getElementById('message-input-box'); // the message-input-box

function loadMessages() {

    document.getElementById('scroll-area').innerHTML = state.messages.map(msgObj => {
        return (
            `
      <div class='message-container d-flex ${((msgObj.sender === state.username)?'justify-content-end':'justify-content-start')}' style='margin: 0;'>
        <span class='d-flex flex-column msg-inner'>
          <div class='d-flex ${((msgObj.sender === state.username)?'text-right justify-content-end':'text-left justify-content-start')}'>
            <span class='message-sender ${((msgObj.sender === state.username)?'text-right':'text-left')} font-weight-bold'>
              ${msgObj.sender}
            </span>
            <span class='text-muted'>
              @ ${msgObj.log.date}, ${msgObj.log.time}:
            </span>
          </div>
          <span class='d-block ${((msgObj.sender === state.username)?'text-right':'text-left')}' style="overflow-wrap: break-word;">${msgObj.msg}</span>
        </span>
        </div>
      `
        );
    });
    var objDiv = document.getElementById("scroll-container");
    objDiv.scrollTop = objDiv.scrollHeight - objDiv.clientHeight;
}

function setMessage(e) {
    state.message = e.target.value;
    // console.log('state.message:', state.message);
}

function getMessages(retreivedMessages) {
    state.messages = retreivedMessages;
    console.log('messages:', retreivedMessages);
    loadMessages();
}

function retreiveUserDataAndUpdateMessages(retreivedUserData, retreivedMessages) {
    state.username = retreivedUserData.username;
    state.userID = retreivedUserData.userID;
    document.getElementById('user-name-display').innerHTML = `<kbd class='username-display-chip' style='font-size: 15px;'>:${state.username}</kbd>`;
    console.log('retreivedUserData:', retreivedUserData);
    getMessages(retreivedMessages);
}

function sendMessage() {
    if (!state.joined) {
        console.log('Can\'t send message as you haven\'t joined the chatroom');
        return;
    }

    if (state.message !== '') {
        socket.emit('send new message', { msg: state.message });
        socket.on('broadcast all messages to clients', getMessages);
        console.log('Sent message!');
        state.message = "";
        document.getElementById('message-input-box').target.value = "";
        return;
    }
}

function joinChatroom() {
    console.log('Join chatroom!');
    state.joined = true;

    socket.emit('get newly joined user data', retreiveUserDataAndUpdateMessages);

    socket.on('broadcast all messages to clients', getMessages);
}

inpt.addEventListener('change', setMessage);
inpt.addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {
        sendMessage();
        socket.emit('typing', { isTyping: false });
        document.getElementById("isTyping").innerHTML = "";
        console.log("No one's typing");
        e.target.value = "";
        return;
    }
});