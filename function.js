{\rtf1\ansi\ansicpg1252\cocoartf2509
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var credits = 50;\
var plays = 0;\
var wins = 0;\
\
function renderStats()\{\
  document.getElementById("credits").innerHTML = credits;\
  document.getElementById("plays").innerHTML = plays;\
  document.getElementById("wins").innerHTML = wins; \
\} \
\
renderStats();\
\
//var x = document.getElementById("myNumber").value;\
//console.log(x);\
//for(i=0; i< x+1; i++)\{\
//  playSlots();\
//\}\
\
\
document.getElementById("play").addEventListener("click", playSlots); \
function playSlots() \{\
  if(credits<0)\{\
    alert("You are out of credits:(");\
    return;\
  \}\
  var one = Math.floor(Math.random() * 5);\
  var two = Math.floor(Math.random() * 5);\
  var three = Math.floor(Math.random() * 5);\
  var fruit = ["apple", "banana", "cherry", "strawberry", "watermelon"];\
  var fruitOne = fruit[one];\
  var fruitTwo = fruit[two];\
  var fruitThree = fruit[three];\
\
  document.getElementById('slotOne').classList = fruitOne;\
  document.getElementById('slotTwo').classList = fruitTwo;\
  document.getElementById('slotThree').classList = fruitThree;\
  if(one==two && two==three)\{\
  credits += 20;\
  wins += 1;\
  if(fruit[one]=="cherry")\{\
    credits += 10;\
  \}\
  alert("Congratulations! You won!");\
  \}\
  else\{\
   credits = credits - 1;\
  \}\
  plays += 1;\
  renderStats();\
  \}\
  \
\
\
\
\
\
\
}