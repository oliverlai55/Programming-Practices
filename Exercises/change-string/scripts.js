var value;

var reverse = function() {
  value = document.getElementById('reverse-btn').innerHTML.toLowerCase();
    console.log(value);
    document.getElementById("filter-btn").innerHTML = "Reverse";
}

var uppercase = function() {
  value = document.getElementById('uppercase-btn').innerHTML.toLowerCase();
  document.getElementById("filter-btn").innerHTML = "Uppercase";
  console.log(value);
}

var lowercase = function() {
  value = document.getElementById('lowercase-btn').innerHTML.toLowerCase();
  document.getElementById("filter-btn").innerHTML = "Lowercase";
  console.log(value);
}

var removeVowel = function() {
  console.log("remove-vowels");
  value = document.getElementById('remove-vowel-btn').innerHTML.toLowerCase();
  document.getElementById("filter-btn").innerHTML = "Remove Vowels";
  console.log("hello");
  console.log(value);
}

var replaceVowel = function() {
  value = document.getElementById('replace-vowel-btn').innerHTML.toLowerCase();
  document.getElementById("filter-btn").innerHTML = "Replace Vowels";
  console.log(value);
}

var changeTerm = function() {
  var changeText;
  input = document.getElementById("input-box").value
  console.log(input);
  output = document.getElementById("output").innerHTML;
  console.log(output);


  if(value == "reverse") {
    changeText = input.split('').reverse().join('');
    document.getElementById("output").innerHTML = changeText;
  }
  if(value == "uppercase") {
    changeText = input.toUpperCase();
    document.getElementById("output").innerHTML = changeText;
  }
  if(value == "lowercase") {
    changeText = input.toLowerCase();
    document.getElementById("output").innerHTML = changeText;
  }
  if(value == "remove vowels") {
    var vowels = [];
    vowels = input.split('');
    console.log(vowels);
    for(i=0; i<vowels.length; i++) {
      if((vowels[i].indexOf("a") != -1) || (vowels[i].indexOf("e") != -1) || (vowels[i].indexOf("i") != -1) || (vowels[i].indexOf("o") != -1) || (vowels[i].indexOf("u") != -1))
      { vowels.splice(i, 1);
        console.log(vowels);
        changeText = vowels.join('');
        document.getElementById("output").innerHTML = changeText;
      }
    }
  }

  if(value == "replace vowels") {
    var vowels = [];
    vowels = input.split('');
    var number = Math.floor(Math.random() * 5) + 1;
    console.log(number);
    for(i=0; i<vowels.length; i++) {
      if((vowels[i].indexOf("a") != -1) || (vowels[i].indexOf("e") != -1) || (vowels[i].indexOf("i") != -1) || (vowels[i].indexOf("o") != -1) || (vowels[i].indexOf("u") != -1))
      { vowels.splice(i, 1, number);
        console.log(vowels);
        changeText = vowels.join('');
        document.getElementById("output").innerHTML = changeText;
      }
    }
  }
}
