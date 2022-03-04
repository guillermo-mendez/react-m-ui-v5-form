import Container from "./handlers/container";
import Field from "./handlers/fields";
import Actions from "./handlers/actions";

function BuildFields() {
    this.metadata = {};

    this.container = function() {
        this.metadata.workForm = new Container();
        return new Container();
    }

    this.field = function() {
        return  new Field();
    }

    this.actions = function() {
        return  new Actions();
    }


    this.build = function({container={},fields={},actions={}}) {
        return {
            ...container,
            fields: Object.values(fields),
            actions: Object.values(actions)
        };
    }
}


export default BuildFields;
