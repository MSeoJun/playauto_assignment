var rp = require('request-promise');

rp('http://www.playauto.co.kr')
.then(function(res) {

    for (let index = 0; index < 5; index++){
    console.log('-----------택배사------------');
    console.log(index);
    }   

})