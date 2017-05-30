/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        $('#section-bio').css('font-family', 'helvetica');
        $('#section-quotes').css('font-family', 'tahoma')
                            .css('font-style', 'italic')
                            .css('background-color', '#e6e6fa')
                            .css('border-radius', '8px')
                            .css('padding','5px')
                            .css('margin-bottom', '20px');
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        var topRated = data.discography.topRated;
        var $topRated = $('#list-top-rated');
        var recordings = data.discography.recordings;
        var images = data.images.billy;
        
        
// Creating topRated list items

        _.map(topRated, function(recording) {
            var $list = $('<li>');
                $topRated.append(($list)
                    .attr('src', recording['art'])
                    .css('font-family', 'helvetica')
                    .css('font-size', '.75em')
                    .text(recording.title));
        });
        
        var $sectionRecordings = $('<section>').attr('id', 'section-recordings');
            $sectionRecordings
                .appendTo('#sidebar');
                
        var $sectionRecordingsHeader = $('<h2>').attr('class', 'section-recording-header');
            $sectionRecordingsHeader
                .appendTo($sectionRecordings)
                .text('Others');
        
        var $listRecordings = $('<ul>').attr('id', 'list-recordings');
            $listRecordings
                .appendTo($sectionRecordings);

// Create misc. recordings list items here
             
        _.map(recordings, function(recording) {
            var $list = $('<li>')
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
        
        var $topRatedImageContainer = ($('<div>').attr('id', 'image-container-topRated').addClass('image-container'));
        $topRatedImageContainer.appendTo('#header-top-rated');
        var $topRatedImage = $('<img>').attr('id', 'recording-image').attr('src', 'images/album/voice-in-the-night.jpg').addClass('image');
        $topRatedImage.appendTo($topRatedImageContainer);
        
        var $recordingImageContainer = ($('<div>').attr('id', 'image-container-recording').addClass('image-container'));
        $recordingImageContainer.appendTo($sectionRecordingsHeader);
        var $recordingImage = $('<img>').attr('id', 'recording-image').attr('src', 'images/album/eastern-rebellion.jpg').addClass('image');
        $recordingImage.appendTo($recordingImageContainer);
        
        var $imageBilly = $('#image-container-billy');

        var $image = $('#image-billy');
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
       
        var $topRatedListItem = $('#list-top-rated li');
        $topRatedListItem
            .on('click', clickHandler2)
            .css('cursor', 'pointer');
            
        
        const clickHandler3 = function(event){
            $recordingImage.attr('src', $(event.currentTarget).attr('src'));
        };
        
        var $recordingsListItem = $('#list-recordings li');
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

    var riderDrumSet = data.rider;
[{type: "John", desc: "Doe"}, {type: "Dick", desc: "Jones"}];
    createTable(riderDrumSet).appendTo("#section-praise");
    
    var $riderTable = $('#section-praise table');
        $riderTable
                .css('margin-bottom', '15px');
    
    var $riderHeader = $('<h3>').attr('id', 'rider-header');
        $riderHeader.prependTo($riderTable)
                    .text('Billy\'s Rider');
            
        // YOUR CODE ABOVE HERE //
    }) .fail(function() { console.log('getJSON on discography failed!'); });
});


