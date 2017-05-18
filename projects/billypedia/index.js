/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        $('#section-bio').css('font-family', 'helvetica');
        $('#section-quotes').css('font-family', 'tahoma').css('font-style', 'italic').css('background-color', '#e6e6fa').css('border-radius', '8px').css('padding', '10px');
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        let $topRated = $('#list-top-rated');
        let recordings = data.discography.recordings;
        
        _.map(topRated, function(recording) {
            let $list = $('<li>');
                $topRated.append(($list)
                    .css('font-family', 'helvetica')
                    .css('font-size', '.75em')
                    .text(recording.title));
        });
        
        let $sectionRecordings = $('<section>').attr('id', 'section-recordings');
            $sectionRecordings
                .appendTo('#sidebar');
                
        let $sectionRecordingHeader = $('<h2>').attr('class', 'section-recording-header');
            $sectionRecordingHeader
                .appendTo($sectionRecordings)
                .text('Others');
        
        let $listRecordings = $('<ul>').attr('id', 'list-recordings');
            $listRecordings
                .appendTo($sectionRecordings);
              
        _.map(recordings, function(recording) {
            let $list = $('<li>')
                .attr('class', 'recordings')
                .css('font-family', 'helvetica')
                .css('font-size', '.25em')
                .css('font-style', 'italic');
            $list.append($('<div>').addClass('title').text('Title: ' + recording.title))
                 .append($('<div>').addClass('artist').text('Artist: ' + recording.artist))
                 .append($('<div>').addClass('release').text('Release: ' + recording.release))
                 .append($('<div>').addClass('year').text('Year: ' + recording.year));
            $listRecordings.append($list);
        });
        
        let $topRatedImageContainer = ($('<div>').attr('id', 'image-container-topRated').addClass('image-container'));
        $topRatedImageContainer.appendTo('#header-top-rated');
        let $topRatedImage = $('<img>').attr('id', 'recording-image').attr('src', 'images/album/eastern-rebellion.jpg').addClass('image');
        $topRatedImage.appendTo($topRatedImageContainer);
        
        let $recordingImageContainer = ($('<div>').attr('id', 'image-container-recording').addClass('image-container'));
        $recordingImageContainer.appendTo($sectionRecordingHeader);
        let $recordingImage = $('<img>').attr('id', 'recording-image').attr('src', 'images/billy/billy-1.jpg').addClass('image');
        $recordingImage.appendTo($recordingImageContainer);
        
        // $('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


