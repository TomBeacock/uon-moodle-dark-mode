let style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.runtime.getURL('dark.css');
(document.head||document.documentElement).appendChild(style);