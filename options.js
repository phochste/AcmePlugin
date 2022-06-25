// Saves options to chrome.storage
function save_options() {
    var editor    = document.getElementById('editor').value;
    var waceditor = document.getElementById('waceditor').value;
    chrome.storage.sync.set({
      editor: editor,
      waceditor: waceditor 
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default values
    chrome.storage.sync.get({
      editor: 'https://solideditor.patrickhochstenbach.net/?resource={resource}',
      waceditor: 'https://waceditor.patrickhochstenbach.net/?resource={resource}'
    }, function(items) {
      document.getElementById('editor').value = items.editor;
      document.getElementById('waceditor').value = items.waceditor;
    });
  }

  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);