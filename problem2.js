function  onlyCharacter( str ) {
          if(typeof str === 'string'){
            return str.split(' ').join('').toUpperCase();
          }
          else{
            return "Invalid";
          }
}
// console.log(onlyCharacter(["hack", "me"]));