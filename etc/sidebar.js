var html = '<h3>Navigation</h3><div class="navlink"><a href="/">Index</a>';

var section1 = ['webmaster', 'art', 'writing', 'fun', 'links']
for (i = 0; i<section1.length; i++){
	html += '<div class="navlink"><a href="' + section1[i] + '.html">' + section1[i] + '</a></div>'
}


document.getElementById("sidebar").innerHTML = html;