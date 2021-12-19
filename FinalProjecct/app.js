
function Checkbox() {
  var Gender1 = document.getElementById('male')
  var Gender2 = document.getElementById('female')
  if (Gender1.checked == true && Gender2.checked == true) {
    return document.getElementById("result").innerHTML = "Please choose only one gender either Male or Female";
  }
  else if (Gender1.checked == false && Gender2.checked == false) {
    return document.getElementById("result").innerHTML = "Please choose your gender";
  }
  else if (Gender1.checked == true) {
    var weight = document.getElementById('inputWeight').value;
    var height = document.getElementById('inputHeight').value;
    var bmi = weight / (height / 100 * height / 100);
    var age = document.getElementById('inputAge').value;
    var bfp = (1.2 * bmi) + (0.23 * age) - 16.2;
    document.getElementById("result").innerHTML = "Your Body Fat % : " + bfp.toFixed(2)
    //Men Under 20
    if (age <= 19 && bfp <= 8) {
      document.getElementById("desc").innerHTML = "*You are Underfat*";
    }
    if (age <= 19 && bfp >= 8 && bfp <= 19) {
      document.getElementById("desc").innerHTML = "*You are Healthy*";
    }
    if (age <= 19 && bfp >= 19 && bfp <= 25) {
      document.getElementById("desc").innerHTML = "*You are Overweight*";
    }
    if (age <= 19 && bfp > 25) {
      document.getElementById("desc").innerHTML = "*You are Obese*";
    }
    //Men 20-40
    if (age >= 20 && age <= 40 && bfp <= 8) {
      document.getElementById("desc").innerHTML = "*You are Underfat*";
    }
    if (age >= 20 && age <= 40 && bfp >= 8 && bfp <= 19) {
      document.getElementById("desc").innerHTML = "*You are Healthy*";
    }
    if (age >= 20 && age <= 40 && bfp >= 19 && bfp <= 25) {
      document.getElementById("desc").innerHTML = "*You are Overweight*";
    }
    if (age >= 20 && age <= 40 && bfp > 25) {
      document.getElementById("desc").innerHTML = "*You are Obese*";
    }
    //Men 41-60
    if (age >= 41 && age <= 60 && bfp <= 11) {
      document.getElementById("desc").innerHTML = "*You are Underfat*";
    }
    if (age >= 41 && age <= 60 && bfp >= 11 && bfp <= 22) {
      document.getElementById("desc").innerHTML = "*You are Healthy*";
    }
    if (age >= 41 && age <= 60 && bfp >= 22 && bfp <= 27) {
      document.getElementById("desc").innerHTML = "*You are Overweight*";
    }
    if (age >= 41 && age <= 60 && bfp > 27) {
      document.getElementById("desc").innerHTML = "*You are Obese*";
    }
    //Men 61-80
    if (age >= 61 && age <= 80 && bfp <= 13) {
      document.getElementById("desc").innerHTML = "*You are Underfat*";
    }
    if (age >= 61 && age <= 80 && bfp >= 13 && bfp <= 25) {
      document.getElementById("desc").innerHTML = "*You are Healthy*";
    }
    if (age >= 61 && age <= 80 && bfp >= 25 && bfp <= 30) {
      document.getElementById("desc").innerHTML = "*You are Overweight*";
    }
    if (age >= 61 && age <= 80 && bfp > 30) {
      document.getElementById("desc").innerHTML = "*You are Obese*";
    }
  }
  else if (Gender2.checked == true) {
    var weight = document.getElementById('inputWeight').value;
    var height = document.getElementById('inputHeight').value;
    var bmi = weight / (height / 100 * height / 100);
    var age = document.getElementById('inputAge').value;
    var bfp = (1.2 * bmi) + (0.23 * age) - 5.4;
    document.getElementById("result").innerHTML = "Your Body Fat % : " + bfp.toFixed(2)
  //Women Under 20
  if (age <= 19 && bfp <= 21) {
    document.getElementById("desc").innerHTML = "*You are Underfat*";
  }
  if (age <= 19 && bfp >= 21 && bfp <= 33) {
    document.getElementById("desc").innerHTML = "*You are Healthy*";
  }
  if (age <= 19 && bfp >= 33 && bfp <= 39) {
    document.getElementById("desc").innerHTML = "*You are Overweight*";
  }
  if (age <= 19 && bfp > 39) {
    document.getElementById("desc").innerHTML = "*You are Obese*";
  }
  //Women 20-40
  if (age >= 20 && age <= 40 && bfp <= 21) {
    document.getElementById("desc").innerHTML = "*You are Underfat*";
  }
  if (age >= 20 && age <= 40 && bfp >= 21 && bfp <= 33) {
    document.getElementById("desc").innerHTML = "*You are Healthy*";
  }
  if (age >= 20 && age <= 40 && bfp >= 33 && bfp <= 39) {
    document.getElementById("desc").innerHTML = "*You are Overweight*";
  }
  if (age >= 20 && age <= 40 && bfp > 39) {
    document.getElementById("desc").innerHTML = "*You are Obese*";
  }
  //Women 41-60
  if (age >= 41 && age <= 60 && bfp <= 23) {
    document.getElementById("desc").innerHTML = "*You are Underfat*";
  }
  if (age >= 41 && age <= 60 && bfp >= 23 && bfp <= 35) {
    document.getElementById("desc").innerHTML = "*You are Healthy*";
  }
  if (age >= 41 && age <= 60 && bfp >= 35 && bfp <= 40) {
    document.getElementById("desc").innerHTML = "*You are Overweight*";
  }
  if (age >= 41 && age <= 60 && bfp > 40) {
    document.getElementById("desc").innerHTML = "*You are Obese*";
  }
  //Women 61-80
  if (age >= 61 && age <= 80 && bfp <= 24) {
    document.getElementById("desc").innerHTML = "*You are Underfat*";
  }
  if (age >= 61 && age <= 80 && bfp >= 24 && bfp <= 36) {
    document.getElementById("desc").innerHTML = "*You are Healthy*";
  }
  if (age >= 61 && age <= 80 && bfp >= 36 && bfp <= 42) {
    document.getElementById("desc").innerHTML = "*You are Overweight*";
  }
  if (age >= 61 && age <= 80 && bfp > 42) {
    document.getElementById("desc").innerHTML = "*You are Obese*";
  }
 }
}