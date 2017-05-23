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
        let images = data.images.billy;
        
        
// Creating topRated list items

        _.map(topRated, function(recording) {
            let $list = $('<li>');
                $topRated.append(($list)
                    .attr('src', recording['art'])
                    .css('font-family', 'helvetica')
                    .css('font-size', '.75em')
                    .text(recording.title));
        });
        
        let $sectionRecordings = $('<section>').attr('id', 'section-recordings');
            $sectionRecordings
                .appendTo('#sidebar');
                
        let $sectionRecordingsHeader = $('<h2>').attr('class', 'section-recording-header');
            $sectionRecordingsHeader
                .appendTo($sectionRecordings)
                .text('Others');
        
        let $listRecordings = $('<ul>').attr('id', 'list-recordings');
            $listRecordings
                .appendTo($sectionRecordings);

// Create misc. recordings list items here
             
        _.map(recordings, function(recording) {
            let $list = $('<li>')
                .attr('class', 'recordings')
                .attr('src', recording['art'])
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
        $recordingImageContainer.appendTo($sectionRecordingsHeader);
        let $recordingImage = $('<img>').attr('id', 'recording-image').attr('src', 'images/billy/billy-1.jpg').addClass('image');
        $recordingImage.appendTo($recordingImageContainer);
        
        let $imageBilly = $('#image-container-billy');

        let $image = $('#image-billy');
        $image.css('display', 'none');
        $image.fadeIn(3000);

        var counter = 0;

        const clickHandler = function(event){
            counter++;
            $image.attr('src', images[counter % 4]);
    };
        $imageBilly.on('click', clickHandler);
        // $('#theDiv').prepend('<img id="theImg" src="theImg.png" />')

// Creating functionality for changing through sidebar pictures

	    const clickHandler2 = function(event){
            $topRatedImage.attr('src', $(event.currentTarget).attr('src'));
    };
       
        let $topRatedListItem = $('#list-top-rated li');
        $topRatedListItem
            .on('click', clickHandler2)
            .css('cursor', 'pointer');
            
        
        const clickHandler3 = function(event){
            $recordingImage.attr('src', $(event.currentTarget).attr('src'));
        };
        
        let $recordingsListItem = $('#list-recordings li');
            $recordingsListItem
                .on('click', clickHandler3)
                .css('cursor', 'pointer');

// Here we make the table

var createTable = function(riderDrumSet){
    var createRow = function(riderPart){
        var $row = $("<tr>");
        var $type = $("<td>").text(riderPart.type);
        var $desc = $("<td>").text(riderPart.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    };
    
    var $table = $("<table>");
    var $rows = riderDrumSet.map(createRow);
    $table.append($rows);
    return $table;
};

    let riderDrumSet = data.rider;
[{type: "John", desc: "Doe"}, {type: "Dick", desc: "Jones"}];
    createTable(riderDrumSet).appendTo("#section-praise");
            
        // YOUR CODE ABOVE HERE //
    }) .fail(function() { console.log('getJSON on discography failed!'); });
});


