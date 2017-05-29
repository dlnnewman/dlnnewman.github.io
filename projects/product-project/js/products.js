/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data/product.json', function (data) {
  // ALL YOUR CODE GOES BELOW HERE //
  
//Item Appearance Baseline
  
    let $body = $('body');
    let allData = data;
    let $productLaunch = $('#container');

//dropDown madness

    const dropDown = allData.reduce( function(array, item) {
          if (!array.includes(item.type)) {
              array.push(item.type);
          } 
          return array;
        }, [] );

    let $dropDownLive = dropDown.forEach( function(ell, x, arr){
        $('<li>')
            .text(ell)
            .css('color', 'black')
            .css('padding-left', '10px')
            .css('cursor', 'pointer')
            .appendTo('.dropdown-menu');
    });
    
// search functionality
    
    let searchString = $('.form-control'); 
    
    let dropDownSelected = _.map(dropDown, function (ell, x, arr){
        return ell.type;
    });
 
    let searchFunc = function (allData, dropDownSelected, searchString) {
        console.log('click');
        
        var searchResults = [];
        
        _.forEach(allData, function (obj, x, arr){
            if (obj.type === dropDownSelected) {
                _.forEach(obj, function (ell, x, arr) {
                    
                    if (typeof ell !== 'number') {
                    
                        if (typeof ell === 'string') {
                            if (ell.includes(searchString)) {
                                searchResults.push(ell);
                            }
                        }
                
                        else if (typeof ell === 'object') {
                            _.forEach(ell, function (innerEll, x, arr) {
                                if (innerEll.includes(searchString)) {
                                    searchResults.push(innerEll);
                                }
                            });
                        }
                    }
                });    
            }
         
        });
        
        return searchResults;
    
    };

    $body
        .css('color', 'white')
        .css('background-color','#FFD700');
  
// Controlling button action

    let $buttonReal = $('#btn-real');
    
    $buttonReal
        .on('click', searchFunc)
        .css('font-weight', 'bold');
        
  
// Here all our items show up

    _.map(allData, function(item) {
    
        let $itemList = $('<div>');
     
        $productLaunch.append(($itemList)
            .css('border-radius', '10px')
            .css('min-height', '200px')
            .css('background-color', '#74AD1B')
            .css('margin', '20px auto')
            .css('padding', '25px')
            .css('cursor', 'pointer')
            .css('max-width', '600px'));
            
        let $itemDesc = $('<div>');
        
        $itemList.append(($itemDesc)
            .text((item.desc))
            .css('font-family', 'verdana')
            .css('text-align', 'left')
            .css('max-width', '350px')
            .css('float', 'left'));
        
        let $itemThumbDiv = $('<div>');
        
        $itemList.append($itemThumbDiv);
        
        let $itemThumb = $('<img>');
        
        $itemThumbDiv.append(($itemThumb)
            .attr('src', 'img/product/thumbs/' + item.image)
            .css('float', 'right')
            .css('border-radius', '10%')
            .css('max-width', '120px')
            .css('margin-top', '10px'));
           
        let $itemPrice = $('<div>');
        
        $itemList.append(($itemPrice)
            .text("$"+item.price)
            .css('font-weight', 'bold')
            .css('font-size', '1.1em')
            .css('padding', '50px')
            .css('max-width', '120px')
            .css('float', 'right')
            );

// Make new pop-out modal divs
        
            $(function() {
            //----- OPEN
                $itemList.on('click', function($itemList)  {
                // let $itemPopDiv = 
                    $('<div>')
                    .appendTo($body)
                    .css('width', '400px')
                    .css('background-color', 'white');
                     console.log('click');
                    // .addClass('popup')
                    // .css('class', 'popup-inner');
            });

        //     //----- CLOSE
        //         $('[data-popup-close]').on('click', function(e)  {
        //         var targeted_popup_class = (this).attr('data-popup-close');
        //         $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        //         e.preventDefault();
        //     });
        });
            
            
        //         $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);    
            
      });

  
  
  // ALL YOUR CODE GOES ABOVE HERE //

    });
});