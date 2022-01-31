Array.prototype.shuffle = function(){
  return this.concat().sort(
    function(){return Math.random() - Math.random();}
  );
}


function getBookmark_folders(){
  return new Promise(function(resolve, reject){
    chrome.bookmarks.getTree(function(bookmarkTreeNodes){
      var temp_select_list = $('<select id="bookmark-folder">');
      var folder_list = traverseBookmarks(bookmarkTreeNodes, temp_select_list);
      $(".bookmark-folders").append(folder_list);
      resolve()
    })
  });
}


function get_choosen_cache(){
  return new Promise(function(resolve, reject){
    chrome.storage.sync.get((data)=>{
      resolve(data.bookmark_folder);
      $('#bookmark-folder option[value=' + data.bookmark_folder + ']').prop("selected", true);
      $('#bookmark-num option[value=' + data.bookmark_num + ']').prop("selected", true);
    })
  });
}


function add_bookmark_folder_change(){
  $('.bookmark-folders').change(function () {
    $('.bookmark-contents').empty();
    dumpBookmarks($("#bookmark-folder option:selected").val());

    chrome.storage.sync.set({
      "bookmark_folder": $("#bookmark-folder option:selected").val()
    });
  });
}

function add_bookmark_num_change(){
  $('.bookmark-nums').change(function(){
    $('.bookmark-contents').empty();
    dumpBookmarks($("#bookmark-folder option:selected").val());

    chrome.storage.sync.set({
      "bookmark_num": $("#bookmark-num option:selected").val()
    });
  });
}

function traverseBookmarks(bookmarkTreeNodes, temp_select_list) {
  for(var bookmarkNode of bookmarkTreeNodes) {
    if(bookmarkNode.children) {
      if(bookmarkNode.title != ""){
        var option = $('<option>');
        option.attr("value", bookmarkNode.title);
        option.text(bookmarkNode.title);
        temp_select_list.append(option);
      }
      traverseBookmarks(bookmarkNode.children, temp_select_list);
    } 
  }
  return temp_select_list
}


function dumpBookmarks(folder_name) {
  chrome.bookmarks.getTree(
    function(bookmarkTreeNodes) {
      dumpTreeNodes(bookmarkTreeNodes, folder_name);
    });
}

function dumpTreeNodes(bookmarkNodes, folder_name) {
  for (var bookmarkNode of bookmarkNodes) {
    if(String(bookmarkNode.title).indexOf(folder_name) != -1){
      chrome.bookmarks.getChildren(bookmarkNode.id, function(childs){
        var bookmark_contents = $(".bookmark-contents");
        var bookmark_num = parseInt($("#bookmark-num").val());
        var list = $('<ul>');
        var temp_list = [];
        for(var child of childs)
          if(child.url) temp_list.push(dumpNode(child));  
        
        temp_list = temp_list.shuffle();                  
        for(var j in temp_list){
          if(j < bookmark_num) list.append(temp_list[j]); 
        }
        bookmark_contents.append(list);
      });
    }
    else if(bookmarkNode.children && bookmarkNode.children.length > 0){
      dumpTreeNodes(bookmarkNode.children, folder_name);
    }
  }
}

function dumpNode(bookmarkNode){
  var anchor = $('<a>');
  anchor.attr('href', bookmarkNode.url);
  anchor.text(bookmarkNode.title);
  anchor.click(function() {
    chrome.tabs.create({url: bookmarkNode.url});
  });
  var span = $('<span>');
  span.append(anchor);
  var li = $(bookmarkNode.title ? '<li>' : '<div>').append(span);
  return li;
}


function main(){
  getBookmark_folders().then(get_choosen_cache).then(dumpBookmarks);
  add_bookmark_folder_change();
  add_bookmark_num_change();
}

document.addEventListener('DOMContentLoaded', function () {
  $('.bookmark-contents').empty();
  main();
});
