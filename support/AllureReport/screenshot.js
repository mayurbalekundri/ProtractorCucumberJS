module.exports = function(){

    this.registerHandler('StepResult', function (stepResult) {
      console.log('.........'+stepResult);
        if (stepResult.getStatus() == 'failed'){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function(){ return new Buffer(png, 'base64')}, 'image/png')();

            });

        } else {

        }
    });
}