var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    //con startEl, en body, empieza a recorrer por el body:
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  // TU CÓDIGO AQUÍ
  //startEl => <body></body>
  for(let i = 0; i<startEl.children.length; i++){
    let element = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    //result pasa a ser una copia de lo que tiene hasta el momento, más
    // lo que tenga element;
    resultSet = [...resultSet, ...element];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  //selector = 'li' > tag
  if(selector[0] === '#') {
    return 'id';
  } else if (selector[0] === '.'){
    return 'class';
  } else if (selector.split('.').length > 1) {
    return 'tag.class';
  } else {
    return 'tag';
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(el) {
      return '#' + el.id === selector;
    }
  } else if (selectorType === "class") {
//    <div class='clase1 clase2 clase3'></div>
    matchFunction = function(el){
      let classes = el.classList; //[clase1, clase2, clase3]
      classes.forEach(e => {if(`.${e}` === selector) return true})
      return false;
    }    
  } else if (selectorType === "tag.class") {
    //<p class="small"></p>
    matchFunction = function(el){
      var[tagBuscado, classBuscada] = selector.split('.');
      //matchFunction(tagBuscado) => devuelve una función
      //se le pasa (el) para que devuelva true or false
      return matchFunction(tagBuscado)(el) && matchFunction(`.${classBuscada}`)(el); 
    }
      
  } else if (selectorType === "tag") {
    matchFunction = function(el) {
      //el => <div class="primero">Hola!</div> 
      //el.tagName => 'DIV'
      //el.tagName.toLowerCasse => 'div'
      return el.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
