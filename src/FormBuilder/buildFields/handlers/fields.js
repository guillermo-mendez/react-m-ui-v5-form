import TextField from "../fieldsForm/textField";
import AutocompleteSelect from "../fieldsForm/autocompleteSelect";

function Field()  {
    this.metadata = {};

    this.textField = function() {
        this.metadata.textField = new TextField();
        return  new TextField();
    }
    this.autocompleteSelect = function() {
        this.metadata.autocompleteSelect = new AutocompleteSelect();
        return  new AutocompleteSelect();
    }
}

export default Field;