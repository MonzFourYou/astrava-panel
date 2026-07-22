function saveBot(){

const bot = {

nama:document.getElementById("botName").value,

prefix:document.getElementById("prefix").value,

mode:document.getElementById("mode").value,

autoread:document.getElementById("autoread").value

}

localStorage.setItem("bot",JSON.stringify(bot));

alert("Bot berhasil disimpan!");

}