function Container() {
    this.metadata = {};

    this.fieldSpacing = function(value) {
        this.metadata.spacing = value || 1;
        return this;
    }
    this.get = function() {
        return this.metadata;
    }

}

export default Container;