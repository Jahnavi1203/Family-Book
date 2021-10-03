var images = ["MyFamily.jpg", "Janu.jpg", "Chiltu.jpg", "Dad.jpg", "Mom.jpg" ];
var names = ["MyFamily", "Jahnavi", "Snithik", "Mukundan", "Sowmya"];

var i = 0;
function update()
{
     i++;
     var family_number_array = 4
     if(i > family_number_array)
     {
         i = 0;
     }

     var updatedImage = images[i];
     var updatedName = names[i];

     document.getElementById("family_image").src = updatedImage;
     document.getElementById("family_name").innerHTML = updatedName;
}