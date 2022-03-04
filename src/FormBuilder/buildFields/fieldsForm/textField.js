function TextField()  {
    this.metadata = {inputType: 'TextField'}

    this.name = function(text) {
        this.metadata['name'] = text || 'name'
        return this;
    }

    this.label = function(text) {
        this.metadata.label = text || 'Field'
        return this;
    }

    this.text = function() {
        this.metadata.type = 'text';
        return this;
    }

    this.number = function() {
        this.metadata.type = 'number';
        return this;
    }

    this.onChange = function(functionEvent) {
        this.metadata.onChange = functionEvent || null;
        return this;
    }

    this.required = function(value) {
        this.metadata.required = value || true;
        return this;
    }

    this.value= function(data) {
        this.metadata.value = data || '';
        return this;
    }

    this.isVisible = function(value) {
        this.metadata.isVisible = value || true;
        return this;
    }

    this.validationOptions = function(functionEvent) {
        this.metadata.customValidate = functionEvent || null;
        return this;
    }

    this.variant = function(vale) { // consultar API para mas tipos de variant [outlined,filled,standard]
        this.metadata.variant = vale || 'standard';
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

export default TextField;