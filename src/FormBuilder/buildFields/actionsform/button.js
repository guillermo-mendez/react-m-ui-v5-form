function Button()  {
  this.metadata = {inputType: 'Button'}

  this.variant = function(vale) { // consultar API para mas tipos de variant [text,contained,outlined]
    this.metadata.variant = vale || 'contained';
    return this;
  }

  this.color = function(text) {
    this.metadata.color = text || 'name'
    return this;
  }

  this.label = function(text) {
    this.metadata.label = text || 'Field'
    return this;
  }

  this.onClick = function(functionEvent) {
    this.metadata.onClick = functionEvent || null;
    return this;
  }

  this.isVisible = function(value) {
    this.metadata.isVisible = value || true;
    return this;
  }

  this.disabled = function(value) {
    this.metadata.disabled = value || false;
    return this;
  }

  this.size = function(value) {
    this.metadata.size = value || 'Medium'; // [Small,Medium,Large]
    return this;
  }

  this.disableElevation = function(value) {
    this.metadata.disableElevation = value || false;
    return this;
  }

  this.column = function(value) {
    this.metadata.column = value || {xs: 12};
    return this;
  }

  this.get = function() {
    return this.metadata;
  }
}

export default Button;