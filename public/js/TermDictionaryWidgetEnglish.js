(function() {
  var site = window.location.hostname;
  
  var widgetPath = '/widgets/TermDictionaryWidgetEnglish.htm';
  var widgetUri = 'https://www.cancer.gov' + widgetPath;

  if (site.indexOf('www-dev-acsf.cancer.gov') !== -1 || site.indexOf('www-test-acsf.cancer.gov') !== -1) {
    widgetUri = 'https://' + site + widgetPath;
  } else if (site === 'localhost') {
    widgetUri = window.location.protocol + '//' + window.location.host + widgetPath;
  }

  var iframe = document.createElement('IFRAME');
  iframe.style.width = '100%';
  iframe.style.height = '460px';
  iframe.frameBorder= '0';
  iframe.src = widgetUri + "?site=" + site;
  iframe.id = 'NCITermDictionaryWidgetContainerEnglish';
  iframe.title = 'NCI - Dictionary of Cancer Terms';
  iframe.title = document.URL;
  iframe.name = document.URL;
  document.write('<div id="NCITermDictionaryWidgetEnglish"></div>');
  document.getElementById('NCITermDictionaryWidgetEnglish').appendChild(iframe);
})();