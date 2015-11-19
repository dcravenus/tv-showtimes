crossroads.addRoute('/show/{id}', function(id){
    var show = $.grep(shows, function(e){return e.id == id})[0];

    var template = $('#template2').html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, show);
    $('#shows').html(rendered);

});

crossroads.addRoute('/home', function(){
    $('#shows').html('');
    renderShows();
});
