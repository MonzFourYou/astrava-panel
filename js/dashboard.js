import { supabase } from "../config/supabase.js";

async function loadDashboard(){

const owner = await supabase
.from("owner")
.select("*")
.limit(1)
.maybeSingle();

if(owner.data){

document.getElementById("ownerName").textContent =
owner.data.owner_name;

}

const users = await supabase
.from("users")
.select("*",{count:"exact",head:true});

document.getElementById("totalUsers").textContent =
users.count || 0;

const bot = await supabase
.from("bot_settings")
.select("*",{count:"exact",head:true});

document.getElementById("totalBot").textContent =
bot.count || 0;

const activity = await supabase
.from("activity")
.select("*",{count:"exact",head:true});

document.getElementById("totalActivity").textContent =
activity.count || 0;

document.getElementById("dbStatus").textContent =
"🟢 Connected";

}

loadDashboard();