var i = 0;
var txt = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, vitae architecto possimus, maiores dolorum tenetur aliquid voluptatibus facilis corporis pariatur autem consectetur blanditiis dicta placeat fugiat ipsam magnam aliquam fuga voluptate nulla ullam praesentium! Corrupti magnam, quo perferendis iure doloribus velit aut, in dignissimos laborum vel sint, consequatur similique dolores quibusdam blanditiis mollitia facere. Numquam asperiores culpa, tempora saepe nam quis ut sunt distinctio nostrum, assumenda iusto! Eveniet expedita inventore nobis eum numquam ea saepe ratione ducimus? Dolorum perspiciatis nobis natus itaque eveniet ab ratione possimus necessitatibus suscipit. Iste molestiae rem excepturi fuga ab quia quis, natus a optio recusandae?!'; /* The text */
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
// Start the effect:    
window.onload = function () {
    //txtType();
    typeWriter();
    };