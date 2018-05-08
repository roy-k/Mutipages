(function(doc, win) {
	var docEl = doc.documentElement,
		isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
		dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

	docEl.dataset.dpr = dpr;
	var recalc = function() {
		var width = docEl.clientWidth;
		var fs =parseInt(100 * (width /750)) ;
		docEl.style.fontSize = fs + 'px';
		var rfs =window.getComputedStyle(docEl).fontSize.replace('px','');
		if(rfs!=fs){
			fs = fs*(fs/rfs);
			docEl.style.fontSize = fs + 'px';
		}
	};
	recalc();
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
})(document, window);