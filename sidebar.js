var html = '<a href="/"><button style="background-image: url(/images/backgrounds/buttons/index.png);">Index</button></a>';

html +='<button style="background-image: url(/images/backgrounds/buttons/personal.png);">Personal</button></summary><ul><li><a href="/about.html">About</a></li><li><a href="/blog.html">Blog</a></li><li><a href="/characters.html">Character hub</a></li></ul>';

html +=
    '<button style="background-image: url(/images/backgrounds/buttons/artwork.png);">Artwork</button></summary><ul><li><a href="/gallery.html">Art gallery</a></li><li><a href="/comix.html">Comics</a></li></ul>';

html +=
    '<button style="background-image: url(/images/backgrounds/buttons/foryou.png);">For you</button><ul><li><a href="/accessibility.html">Web accessibility guide</a></li><li><a href="/freebies.html">Free graphics</a></li><li><a href="/scans.html">Scans</a></li></ul>';

html +=
    '<button style="background-image: url(/images/backgrounds/buttons/etcetera.png);">Et cetera</button></summary><ul><li><a href="https://dungbeetle.neocities.org/" target="_blank">Linkroll</a></li><li><a href="/updates.html">Update log</a></li></ul>';

document.getElementById("sidebar").innerHTML = html;