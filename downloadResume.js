function downloadResume() {
    // Replace "path/to/resume.pdf" with the actual path to your PDF file
    var fileUrl = 'resources/Ryhor Mudrahel Senior Software Engineer. v 1.0.4.pdf';
    
    // Create a link element
    var link = document.createElement('a');
    
    // Set the download attribute and file URL
    link.download = 'Ryhor Mudrahel resume.pdf';
    link.href = fileUrl;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to initiate the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}