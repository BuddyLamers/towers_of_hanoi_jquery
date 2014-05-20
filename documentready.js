$(document).ready(function() {

  var renderTowers = function(diskHash) {
    $('li').removeClass();
    for (var disk in diskHash) {
      var classString = 'disk' + disk;
      var idString = '#' + diskHash[disk][0] + '' + diskHash[disk][1];
      $(idString).addClass(classString);
    }
  }

  renderTowers(window.myGame.objectifyTowers());

  $('ul').click(function() {
    var stackId = $(this).attr('id');
    var stackNum = parseInt(stackId[stackId.length - 1]);

    window.myGame.readClick(stackNum, function(diskHash) {
      renderTowers(diskHash);
    });
  });

});