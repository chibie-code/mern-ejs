// import io from 'socket.io-client';
var socket = io();

var state = {
  joined: false,
  username: '',
  userID: '',
  message: '',
  messages: Array(),
  test: null
};

onload = (e) => {
}

function joinAnim() {
  $( "#chat-area" ).show( "slow" );
  $( "#join-button" ).hide( "slow" );
}
// Can pass in function name
$( "#join-button" ).click( joinAnim );

const inpt = document.getElementById('message-input-box'); // the message-input-box

function loadMessages(){
  // document.getElementById('scroll-area').innerHTML += `
  // <div class='message-container'>
  //   <span><span class='message-sender font-weight-bold'>~${state.username}</span> <span class='text-muted'>@ ${data.log.date}, ${data.log.time}:</span></span>
  //   <span>${data.msg}</span>
  // </div>
  // `;
  document.getElementById('scroll-area').innerHTML = state.messages.map(msgObj=>{
    return(
      `
      <div class='message-container d-flex ${((msgObj.sender === state.username)?'justify-content-end':'justify-content-start')}' style='margin: 0;'>
        <span class='d-flex flex-column msg-inner'>
          <div class='d-flex ${((msgObj.sender === state.username)?'text-right justify-content-end':'text-left justify-content-start')}'>
            <span class='message-sender ${((msgObj.sender === state.username)?'text-right':'text-left')} font-weight-bold'>
              😎${msgObj.sender}
            </span>
            <span class='text-muted'>
              @ ${msgObj.log.date}, ${msgObj.log.time}:
            </span>
          </div>
          <span class='d-block ${((msgObj.sender === state.username)?'text-right':'text-left')}'>${msgObj.msg}</span>
        </span>
      </div>`
    );
  })
    var objDiv = document.getElementById("scroll-container");
    objDiv.scrollTop = objDiv.scrollHeight - objDiv.clientHeight;
}

function setMessage(e){
  state.message = e.target.value;
  console.log('state.message:',state.message);
}
function sendMessage(){
  if(!state.joined){
    console.log('Can;t send message as you haven\'t joined the chatroom');
    return;
  }
  if(state.message !== null || state.message !== ''){
    socket.emit('message', { msg: state.message }, (received_msgs)=>{
    // get messages
    console.log('received_msgs:',received_msgs);
    state.messages = received_msgs;
    loadMessages();
    });
    console.log('Sent message!');
    return;
  }
  socket.emit('update_client_messages', (client_messages)=>{
    //
  });
}

const test_chats = [
  {
    senderID: 'R3eRzjdjQCLlxAlcAAAF',
    username: 'discharged-cypher-69',
    date: 1619681520,
    timestamp: 1619681520,
    msg: 'Oh nice, the chart is working',
  }
];

function joinChatroom(){
  console.log('Join chatroom!');
  state.joined = true;

  socket.emit('requesting_all_messages', (all_messages)=>{
    console.log('server returned all_messages:', all_messages);
    state.messages = all_messages;
    loadMessages();
  });

  socket.on('get_all_messages', (msgs)=>{
    state.messages = msgs;
    console.log('messages:',msgs);
    loadMessages();
  });
  
  socket.on('get_user_data', ( data)=>{
    console.log('after await', data);
    state.username = data.username;
    state.userID = data.userID;
    document.getElementById('user-name-display').innerHTML = `<kbd class='username-display-chip' style='font-size: 15px;'>:${state.username}</kbd>`;
    console.log('data:',data);
  });
  socket.on('user_msg', ( data)=>{
    console.log('after msg', data);
    socket.on('get_all_messages', (msgs)=>{
    state.messages = msgs;
    loadMessages();
    console.log('messages:',msgs);
  });
    // console.log('result:',result);
  });

}

inpt.addEventListener('change', setMessage);
inpt.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    setMessage(e);
    sendMessage();
    return;
  }
});