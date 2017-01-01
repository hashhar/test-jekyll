// This function manages which navigation tab is currently active
$(document).ready(function() {
    var current_href = window.location.href;
    // Filters out the leading folder from the url
    var re = /\/\w+\//i;
    var m;
    while ((m = re.exec(current_href)) !== null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
        var current_tab = m[0];
        // Iterate over all navigation tabs and update the active tab
        $(".nav li").each(function() {
            if (current_tab.indexOf(this.id) > -1) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        })
        break;
    };
})