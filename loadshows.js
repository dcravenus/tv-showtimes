var shows = [];
var shows_loaded = 0;
var show_ids = [
    290, 732, 1866, 49, 80, 1615, 107
];

for (var i=0; i<show_ids.length; i++) {
    var id = show_ids[i];
    url = 'http://api.tvmaze.com/shows/' + id + '?embed[]=episodes&embed[]=nextepisode&embed[]=previousepisode'

    $.ajax({
        url : url
    }).done(function(data){
        shows.push(data);
        shows_loaded++;
        if (shows_loaded==show_ids.length) {
            renderShows();
        }
    });
}

var sortShows = function() {
    shows.sort(function(a,b){
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
};

var renderShows = function(){
    sortShows();
    for (var i=0; i<shows.length; i++) {
        var template = $('#template').html();
        Mustache.parse(template);

        var rendered = Mustache.render(template, shows[i]);
        $('#shows').append(rendered);
    }
};
