$(document).ready(function() {
    $('#search-podcasts').click(function(e) {
        var podcastUrl = $('#podcast-url').val();
        searchPodcasts(podcastUrl);
    });
});

function searchPodcasts(query) {
    var searchQuery = query;
    var itunesLib = 'https://itunes.apple.com/search?media=podcast';
    var results = [];

    $.ajax({
        url: itunesLib + '&term=' + encodeURIComponent(searchQuery),
        dataType: 'json',
        success: function(response, xhr) {
            if (!response || !response.results) {
                console.error('Bad response', response);
            } else {
                response.results.forEach(function(p) {
                    results.push({
                        logo_url: p.artworkUrl100,
                        url: p.feedUrl,
                        title: p.trackName
                    });
                });
                displaySearchResults(results);
            }
        },
        error: function(xhr, error) {
            console.error('Error: ', error);
        }
    });
}

function displaySearchResults(results) {
    console.log("results: ", results);
}

function subscribeToPodcast() {

}
