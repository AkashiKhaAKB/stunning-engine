var Cmd, Count;


Cmd = '';
Count = -10;
for (var count = 0; count < 11; count++) {
  Count = (typeof Count === 'number' ? Count : 0) + 10;
  alert('Hax96.js - 111.11.1: Loading ' + String(String(Count) + '%'));
}
Cmd = prompt('Enter JavaScript Command: ');
Cmd
alert('Command successfully ran');
