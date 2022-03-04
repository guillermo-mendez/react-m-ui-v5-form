import Button from "../actionsform/button";

function Actions()  {
    this.metadata = {};

    this.button = function() {
        this.metadata.textField = new Button();
        return  new Button();
    }

}

export default Actions;