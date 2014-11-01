function download() {
	window.location.href = "https://github.com/Magmoz/galaxy/archive/master.zip";
}

$(document).ready(function(){
	$(document).pjax('a', '#content');
});