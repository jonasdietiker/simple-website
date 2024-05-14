document.getElementById('menuButton').addEventListener('click', function() {
    var smileyContainer = document.getElementById('smileyContainer');
    if (smileyContainer.style.display === 'none') {
        smileyContainer.style.display = 'block';
    } else {
        smileyContainer.style.display = 'none';
    }
});
