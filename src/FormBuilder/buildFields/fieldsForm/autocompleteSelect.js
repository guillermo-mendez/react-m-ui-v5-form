function AutocompleteSelect()  {
    this.metadata = {inputType: 'AutocompleteSelect'}

    this.name = function(text) {
        this.metadata['name'] = text || 'name'
        return this;
    }

    this.label = function(text) {
        this.metadata.label = text || 'Field'
        return this;
    }

    this.optionKeys = function(name,value) {
        this.metadata.optionKeys = { name: name || 'name', value: value || 'id' };
        return this;
    }

    this.optionsData = function(data) {
        this.metadata.optionsData = data || [];
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

    this.disabled = function(value) {
        this.metadata.disabled = value || false;
        return this;
    }

    this.disableClearable = function(value) {
        this.metadata.disabled = value || false;
        return this;
    }

    this.freeSolo = function(value) {
        this.metadata.freeSolo = value || true;
        return this;
    }

    this.isVisible = function(value) {
        this.metadata.isVisible = value || true;
        return this;
    }

    this.fullWidth = function(value) {
        this.metadata.fullWidth = value || true;
        return this;
    }

    this.variant = function(vale) { // consultar API para mas tipos de variant [outlined,filled,standard]
        this.metadata.variant = vale || 'standard';
        return this;
    }

    this.column = function(value) {
        this.metadata.column = value || {xs: 12, sm: 12, md: 12, lg: 12, xl: 12};
        return this;
    }

    this.get = function() {
        return this.metadata;
    }
}

export default AutocompleteSelect;