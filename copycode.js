
  function copyCode(button) {
    // Traverse up the DOM to find the parent code box
    const codeBox = button.closest('.code-box');
    // Find the code element within the code box
    const codeElement = codeBox.querySelector('.black-code-area code');
    // Extract the text content of the code element
    const codeText = codeElement.innerText;
    // Copy the code text to the clipboard
    navigator.clipboard.writeText(codeText).then(function() {
      alert('Code copied to clipboard!');
    }, function(err) {
      console.error('Could not copy code: ', err);
    });
  }
