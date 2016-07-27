var coords = [
	{x: 0, y: -54},
	{x: 54, y: -54},
	{x: 108, y: -54},
	{x: 162, y: -54},
	{x: 216, y: -54},
	{x: 216, y: 0},
	{x: 216, y: 54},
	{x: 216, y: 108},
	{x: 216, y: 162},
	{x: 216, y: 216},
	{x: 162, y: 216},
	{x: 108, y: 216},
	{x: 54, y: 216},
	{x: 0, y: 216},
	{x: -54, y: 216},
	{x: -54, y: 162},
	{x: -54, y: 108},
	{x: -54, y: 54},
	{x: -54, y: 0},
	{x: -54, y: -54}
];

var casenb = 0, Security = Security || {};

Security.colorpass = (function(self){
	/**
	 * param(colortable): array
	 * param(container): tag
	 */
	self.new = function(colortable, container){
		if(colortable.length > 24) throw new Error('Outdated regulation size.');
		init(colortable, container);
	};

	/**
	 * param(colortable): array
	 * param(container): tag
	 */
	function init(colortable, container){
		for(var c = 0; c < 16; c++){
			var link = document.createElement('a');

			link.setAttribute('onclick', 'return Security.colorpass.set(this, "' + colortable + '")');
			link.setAttribute('href', '#' + c);
			link.setAttribute('class', 'digital');
			link.dataset.color = casenb;

			link.style.background = colortable[casenb];
			css(link);

			container.appendChild(link);

			if((c + 1) % 4 == 0) {
				var br = document.createElement('br');
				container.appendChild(br);
			}
		}

		for(var c = 0; c <= colortable.length - 1; c++){
			var link = document.createElement('a');

			link.setAttribute('onclick', 'return Security.colorpass.get(this)');
			link.setAttribute('href', '#');
			link.dataset.color = c;
			link.textContent = c;

			link.style.position = 'absolute';
			link.style.background = colortable[c];
			css(link);

			container.appendChild(link);

			var coord = coords.splice(self.random(0, coords.length - 1), 1);
			link.style.left = coord[0].x + 'px';
			link.style.top = coord[0].y + 'px';
		}
	}

	/**
	 * param(tag): tag
	 */
	function css(tag){
		tag.style.display = 'inline-block';
		tag.style.height = '50px';
		tag.style.width = '50px';
		tag.style.margin = '0 2px';
		tag.style.textDecoration = 'none';
		tag.style.color = '#1B1E24';
		tag.style.fontSize = '20px';
		tag.style.fontWeight = 'bold';
		tag.style.textAlign = 'center';
		tag.style.lineHeight = '50px';
		tag.style.borderRadius = '3px';
	}

	/**
	 * param(min): number
	 * param(max): number
	 * return {number}
	 */
	self.random = function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	/**
	 * param(el): tag
	 * return {string}
	 */
	self.get = function(el){
		casenb = el.dataset.color;
		return false;
	};

	/**
	 * param(el): tag
	 * param(colortable): string
	 * return {string}
	 */
	self.set = function(el, colortable){
		el.dataset.color = casenb;

		var colortable = colortable.split(',');
		el.style.background = colortable[casenb];

		return false;
	};

	/**
	 * return {number}
	 */
	self.score = function(){
		var digitals = document.getElementsByClassName('digital'), score = 0;
		
		for(var digital = 0; digital < digitals.length; digital++){
			var el = digitals[digital];
			var pow = el.dataset.color;

			score += Math.pow(digital + 2, parseInt(pow) + 1);
		}

		return score;
	}

	return self;
})(Security || {});