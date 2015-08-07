function infoHint(){
  var hints = [
  	{ 'code' :	'Spi92' ,
	  'title' :	'Michael Spivak, Cálculo Infinitesimal, Editorial Reverté, segunda ed., 1992, reimpresión 2007.',
	},
	{ 'code' :	'Apo84',
	  'title' :	'Tom M. Apostol, Cálculo con funciones de una variable, con una introducción al Álgebra Lineal, Editorial Reverté, 1984, reimpresión 2007. '
	},
	{ 'code' :	'KKCS89',
	  'title' :	'L. D. Kudriávtsev, Kutásov, A. D., Chejlov, V. I., and Shabunin, M. I., Problemas de análisis matemático, Editorial Mir, Moscú, 1989.'
	},
	{ 'code' :	'Prol',
	  'title' :	'Notas al prólogo de [Spi92]',
	  'url' :	'/pdfs/prologo.pdf'
	}
  ]


  //Crafting hints
  var l = hints.length;
  var cls,elements,hint,m;
  
  for (var i=0; i<l; i++){
    hint = hints[i]
    cls = hint['code'].toLowerCase();
    els = document.getElementsByClassName(cls);
    m = els.length;
    for (var j=0; j<m; j++){
      el = els[j];
      el.title = hint['title'];
      el.style.fontWeight = 'bold';
      el.innerHTML = '[' + hint['code'] + ']';
      if (hint['url']){
	el.href = hint['url'];
      }
    }
  }
}
