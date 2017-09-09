var example = "In the last section we examined some early aspects of memory In this section what we’re going to do is discuss some factors that influence memory So let’s do that by beginning with the concept on slide two and that concept is overlearning Basically in overlearning the idea is that you continue to study something after you can recall it perfectly So you study some particular topic whatever that topic is When you can recall it perfectly you continue to study it  is a classic way to help when one is taking comprehensive finals later in the semester So when you study for exam one and after you really know it all you continue to study it That will make your comprehensive final easier The next factor that will influence memory relates to what we call organization In general if you can organize material you can recall it better There are lots of different types of organizational strategies and I’ve listed those on slide four So let’s begin by talking about the first organizational strategy called clustering and is located on page five In clustering basically you recall items better if you can recognize that there are two or more types of things in a particular list So let’s give a couple of lists and show you some examples of that These examples are shown in slide six";

var request = require('request');

// Set the headers
var headers = {
    'Content-Type':     'form-data'
}

// Configure the request
var options = {
    url: 'https://bark.phon.ioc.ee/punctuator',
    method: 'POST',
    headers: headers,
    form: {'text': example}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        //console.log(body)
        var arrayOfSentences = body.split('.');
        console.log(arrayOfSentences);
    }
})
