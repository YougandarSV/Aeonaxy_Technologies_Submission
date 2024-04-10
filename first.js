document.getElementById("button").addEventListener("click", function() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.addEventListener("change", function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();

            reader.onload = function() {
                var previewContainer = document.getElementById("previewContainer");
                previewContainer.style.backgroundImage = "url('" + reader.result + "')";
                previewContainer.style.borderStyle = "none";
                
                // Hide the plus icon when an image is selected
                document.getElementById("plusIcon").style.display = "none";
            }

            reader.readAsDataURL(file);
        }
    });
});

function dimNextButton() {
    var nextButton = document.getElementById("next-btn");
    nextButton.style.backgroundColor = "lightgray";
}
  
function normalizeNextButton() {
    var nextButton = document.getElementById("next-btn");
    nextButton.style.backgroundColor = "#d93d76"; 
}
  
dimNextButton();
  
document.getElementById("location-input").addEventListener("input", function(event) {
    var locationInput = event.target.value.trim();
    var nextButton = document.getElementById("next-btn");
    var orReturn = document.getElementById("or-return");
  
    if (locationInput !== '') {
        nextButton.disabled = false;
        normalizeNextButton();
        orReturn.style.color = 'rgba(104, 104, 104, 0.978)';
    } else {
        nextButton.disabled = true;
        dimNextButton();
        orReturn.style.color = 'transparent';
    }
});
  
document.getElementById("next-btn").addEventListener("click", function(event) {
    var locationInput = document.getElementById("location-input").value.trim();

    if (locationInput !== '') {
        window.location.href = "landing.html";
    }
});

const returnBtn = document.querySelector('.return');

returnBtn.addEventListener('click', () => {
    window.location.href = "index.html";  
});
