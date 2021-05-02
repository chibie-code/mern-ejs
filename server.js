const nouns = ["appearance", "appointment", "argument", "arrival", "awareness", "cabinet", "candidate", "charity", "cigarette", "committee", "conclusion", "confusion", "customer", "direction", "director", "discussion", "editor", "emotion", "employee", "employment", "energy", "family", "government", "importance", "industry", "inflation", "management", "manager", "measurement", "media", "medicine", "membership", "memory", "passenger", "percentage", "perception", "poetry", "possession", "preference", "president", "procedure", "professor", "quality", "quantity", "ratio", "relation", "requirement", "revenue", "solution", "sympathy", "actor", "area", "aspect", "audience", "birthday", "category", "chemistry", "city", "climate", "complaint", "context", "contribution", "courage", "currency", "dealer", "departure", "depression", "description", "device", "enthusiasm", "equipment", "establishment", "family", "feedback", "fishing", "history", "improvement", "inflation", "injury", "maintenance", "marriage", "office", "penalty", "percentage", "permission", "possession", "reading", "reality", "recommendation", "relation", "republic", "salad", "secretary", "selection", "software", "system", "television", "theory", "transportation", "writing"];
const adj = ["abrupt", "accidental", "agreeable", "animated", "bashful", "calm", "careless", "chunky", "coordinated", "difficult", "disturbed", "drab", "drunk", "efficient", "equable", "far", "first", "grouchy", "incandescent", "joyous", "kindly", "lethal", "long", "loud", "loving", "married", "materialistic", "obeisant", "optimal", "perpetual", "premium", "public", "regular", "righteous", "sexy", "shy", "skillful", "slippery", "spiky", "subdued", "successfully", "tender", "unable", "unsightly", "various", "victorious", "wide-eyed", "witty", "wooden", "yielding", "yummy", "abandoned", "abject", "absent", "attractive", "auspicious", "bewildered", "blushing", "boorish", "bored", "boundless", "caring", "chief", "cooing", "dull", "earsplitting", "efficacious", "eight", "embarrassed", "entertaining", "faded", "few", "filthy", "five", "giant", "graceful", "guttural", "highfalutin", "knowledgeable", "light", "limping", "loutish", "magnificent", "next", "obvious", "ordinary", "overt", "parallel", "pastoral", "scrawny", "screeching", "silky", "slippery", "slow", "smoggy", "strict", "swift", "unaccountable", "vague", "wet", "wooden"];
const emojis = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "#️⃣", "*⃣", "©️", "®️", "‼️", "⁉️", "™️", "ℹ️", "↔️", "↕️", "↖️", "↗️", "↘️", "↙️", "↩️", "↪️", "⌚️", "⌛️", "⌨", "⏏", "⏩", "⏪", "⏫", "⏬", "⏭", "⏮", "⏯", "⏰", "⏱", "⏲", "⏳", "⏸", "⏹", "⏺", "Ⓜ️", "▪️", "▫️", "▶️", "◀️", "◻️", "◽️", "◾️", "☀️", "☁️", "☂", "☃", "☄", "☎️", "☑️", "☔️", "☕️", "☘", "☝️", "☠", "☢", "☣", "☦", "☪", "☮", "☯", "☸", "☹", "☺️", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "♠️", "♣️", "♥️", "♦️", "♨️", "♻️", "♿️", "⚓️", "⚔", "⚖", "⚗", "⚙", "⚛", "⚜", "⚠️", "⚡️", "⚪️", "⚫️", "⚱", "⚽️", "⚾️", "⛄️", "⛅️", "⛈", "⛎", "⛏", "⛑", "⛓", "⛔️", "⛩", "⛪️", "⛰", "⛱", "⛲️", "⛳️", "⛴", "⛵️", "⛷", "⛸", "⛹", "⛺️", "⛽️", "✂️", "✅", "✈️", "✉️", "✋", "✌️", "✍", "✏️", "✒️", "✔️", "✖️", "✝", "✡", "✨", "✳️", "✴️", "❄️", "❇️", "❌", "❎", "❓", "❕", "❗️", "❣", "❤️", "➕", "➖", "➗", "➡️", "➰", "➿", "⤴️", "⤵️", "⬅️", "⬆️", "⬇️", "⬛️", "⬜️", "⭐️", "⭕️", "〰️", "〽️", "㊗️", "㊙️", "🀄️", "🃏", "🅰️", "🅱️", "🅾️", "🅿️", "🆎", "🆑", "🆒", "🆓", "🆔", "🆕", "🆖", "🆗", "🆘", "🆙", "🆚", "🈁", "🈂️", "🈚️", "🈯️", "🈲", "🈳", "🈴", "🈵", "🈶", "🈷️", "🈸", "🈹", "🈺", "🉐", "🉑", "🌀", "🌁", "🌂", "🌃", "🌄", "🌅", "🌆", "🌇", "🌈", "🌉", "🌊", "🌋", "🌌", "🌍", "🌎", "🌏", "🌐", "🌑", "🌒", "🌓", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌝", "🌞", "🌠", "🌡", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "🌭", "🌮", "🌯", "🌰", "🌱", "🌲", "🌳", "🌴", "🌵", "🌶", "🌷", "🌸", "🌹", "🌺", "🌻", "🌼", "🌽", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🍅", "🍆", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🍽", "🍾", "🍿", "🎀", "🎁", "🎂", "🎃", "🎄", "🎅", "🎆", "🎇", "🎈", "🎉", "🎊", "🎋", "🎌", "🎍", "🎎", "🎏", "🎐", "🎒", "🎓", "🎖", "🎗", "🎙", "🎚", "🎛", "🎞", "🎟", "🎠", "🎡", "🎢", "🎣", "🎤", "🎥", "🎦", "🎧", "🎨", "🎩", "🎪", "🎫", "🎬", "🎭", "🎮", "🎯", "🎰", "🎱", "🎲", "🎳", "🎴", "🎵", "🎶", "🎷", "🎸", "🎹", "🎺", "🎼", "🎽", "🎾", "🎿", "🏀", "🏁", "🏂", "🏃", "🏄", "🏅", "🏆", "🏇", "🏈", "🏉", "🏊", "🏋", "🏌", "🏍", "🏎", "🏏", "🏐", "🏑", "🏒", "🏓", "🏔", "🏕", "🏖", "🏗", "🏘", "🏙", "🏚", "🏛", "🏜", "🏝", "🏞", "🏟", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🏰", "🏳", "🏴", "🏵", "🏷", "🏸", "🏹", "🏺", "🐀", "🐁", "🐂", "🐃", "🐄", "🐅", "🐆", "🐇", "🐈", "🐉", "🐊", "🐋", "🐌", "🐍", "🐎", "🐏", "🐐", "🐑", "🐒", "🐓", "🐔", "🐕", "🐖", "🐗", "🐘", "🐙", "🐚", "🐛", "🐜", "🐝", "🐞", "🐟", "🐠", "🐡", "🐢", "🐣", "🐤", "🐥", "🐦", "🐧", "🐨", "🐩", "🐪", "🐫", "🐬", "🐭", "🐮", "🐯", "🐰", "🐱", "🐲", "🐳", "🐴", "🐵", "🐶", "🐷", "🐸", "🐹", "🐺", "🐼", "🐽", "🐾", "🐿", "👀", "👁", "👂", "👃", "👄", "👅", "👆", "👇", "👈", "👉", "👊", "👋", "👌", "👍", "👎", "👏", "👐", "👑", "👒", "👓", "👔", "👕", "👖", "👗", "👘", "👚", "👛", "👜", "👝", "👞", "👟", "👠", "👡", "👢", "👣", "👤", "👥", "👦", "👧", "👨", "👩", "👪", "👫", "👬", "👭", "👮", "👯", "👰", "👱", "👲", "👳", "👴", "👵", "👶", "👷", "👸", "👹", "👺", "👻", "👼", "👾", "👿", "💀", "💁", "💂", "💃", "💄", "💅", "💆", "💇", "💈", "💉", "💊", "💋", "💌", "💍", "💎", "💏", "💐", "💑", "💒", "💓", "💔", "💕", "💖", "💗", "💘", "💙", "💚", "💛", "💜", "💝", "💞", "💟", "💠", "💡", "💢", "💣", "💤", "💥", "💦", "💧", "💨", "💩", "💪", "💫", "💬", "💭", "💮", "💯", "💰", "💱", "💲", "💳", "💴", "💵", "💶", "💷", "💸", "💹", "💺", "💻", "💼", "💽", "💾", "💿", "📀", "📁", "📂", "📃", "📄", "📅", "📆", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "📏", "📐", "📑", "📒", "📓", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📛", "📝", "📞", "📟", "📠", "📡", "📢", "📣", "📤", "📥", "📦", "📧", "📨", "📩", "📪", "📫", "📬", "📭", "📮", "📯", "📰", "📱", "📲", "📳", "📵", "📶", "📷", "📸", "📹", "📺", "📻", "📼", "📽", "📿", "🔀", "🔁", "🔂", "🔃", "🔄", "🔅", "🔆", "🔇", "🔈", "🔉", "🔊", "🔋", "🔌", "🔍", "🔎", "🔏", "🔐", "🔑", "🔒", "🔓", "🔔", "🔕", "🔖", "🔗", "🔘", "🔙", "🔚", "🔛", "🔜", "🔝", "🔞", "🔟", "🔠", "🔡", "🔢", "🔣", "🔤", "🔥", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "🔬", "🔭", "🔮", "🔯", "🔰", "🔱", "🔲", "🔳", "🔴", "🔵", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔼", "🔽", "🕉", "🕊", "🕋", "🕌", "🕍", "🕎", "🕐", "🕑", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧", "🕯", "🕰", "🕳", "🕴", "🕵", "🕶", "🕷", "🕸", "🕹", "🖇", "🖊", "🖋", "🖌", "🖍", "🖐", "🖕", "🖖", "🖥", "🖨", "🖱", "🖲", "🖼", "🗂", "🗃", "🗄", "🗑", "🗒", "🗓", "🗜", "🗝", "🗞", "🗡", "🗣", "🗨", "🗯", "🗳", "🗺", "🗻", "🗼", "🗽", "🗾", "🗿", "😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😶", "😷", "😸", "😹", "😺", "😻", "😼", "😽", "😾", "😿", "🙀", "🙁", "🙂", "🙃", "🙄", "🙅", "🙆", "🙇", "🙈", "🙉", "🙋", "🙌", "🙍", "🙎", "🙏", "🚀", "🚁", "🚂", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚋", "🚌", "🚍", "🚎", "🚏", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🚝", "🚞", "🚟", "🚠", "🚡", "🚢", "🚣", "🚤", "🚥", "🚦", "🚧", "🚨", "🚩", "🚪", "🚫", "🚬", "🚭", "🚮", "🚯", "🚰", "🚱", "🚲", "🚳", "🚴", "🚵", "🚶", "🚷", "🚸", "🚹", "🚺", "🚼", "🚽", "🚾", "🚿", "🛀", "🛁", "🛂", "🛃", "🛄", "🛅", "🛋", "🛌", "🛍", "🛎", "🛏", "🛐", "🛠", "🛡", "🛢", "🛣", "🛤", "🛥", "🛩", "🛫", "🛬", "🛰", "🛳", "🤐", "🤑", "🤒", "🤓", "🤔", "🤕", "🤖", "🤗", "🤘", "🦀", "🦁", "🦂", "🦃", "🦄", "🧀"];

var express = require('express');

var app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

var rug = require('random-username-generator');

rug.setSeperator('.');

rug.setNames([...nouns]);

rug.setAdjectives([...adj]);

var messagesArray = [];

// const wss = new Server({ server });

function getCurrentdateTime() { // date-time timestamp function. returns final date-time object

    const timestampNow = Date.now() // get current timestamp in milliseconds
    const date = new Date(timestampNow); // convert timestamp to date object

    const humanDateFormat = date.toLocaleString(); // then convert fate object to human readable format

    const splitDateTime = humanDateFormat.split(', '); // split date and time. date at idx 0 and time at idx 1

    const finalDateTime = {
        date: splitDateTime[0],
        time: splitDateTime[1] + ' UTC'
    };
    // console.log('finalDateTime:',finalDateTime);
    return finalDateTime; // obj => { date: '', time: '' }
}

// set the '/views' root to the views directory
app.set('views', __dirname + '/views');

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

server.listen(port, function() {
    console.log('Server running on PORT:' + port);
});

// Routes

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

// set the about page route
app.get('/about', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('about');
});

// set the about page route
app.get('/example_api', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('example_api');
});

// set the about page route
app.get('/socket_demo', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('socket_demo');
});

app.use(function(req, res) {
    res.status(404).render('404');
});

function setNewUserLoginData(socketId) {
    return userData = { // user date object to be sent back to the user [FUNCTION]
        username: rug.generate(),
        userID: socketId,
    };
}

function addNewMessage(userData, messageObjectData) {
    const newMessageObject = { // [FUNCTION]
        sender: userData.username,
        msg: messageObjectData.msg,
        log: {
            date: getCurrentdateTime().date,
            time: getCurrentdateTime().time
        }
    }
    messagesArray.push(newMessageObject); // push the message object to the messages array [FUNCTION]
}

io.sockets.on('connection', (socket) => {

    socket.on('typing', (payload) => {
        if (payload.isTyping) {
            // console.log('Someone is typing...');
            socket.broadcast.emit('someone is typing', { isTyping: true });
        } else {
            // console.log('No one is typing.');
            socket.broadcast.emit('someone is typing', { isTyping: false });
        }
    })

    io.emit('broadcast all messages to clients', messagesArray);

    const newSocketUserData = setNewUserLoginData(socket.id);

    console.log('socket.id: ', socket.id);

    socket.on('get newly joined user data', (sendUserDataAndMessages) => {

        io.emit('broadcast all messages to clients', messagesArray);

        sendUserDataAndMessages(newSocketUserData, messagesArray);

    });

    socket.on('send new message', (sentMessageObject) => {

        addNewMessage(newSocketUserData, sentMessageObject);

        console.log('User sent:', sentMessageObject);

        io.emit('broadcast all messages to clients', messagesArray);

    });
});