Blockly.Blocks['move_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("move forward");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

    Blockly.JavaScript['move_forward'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    let code = 'moveForward()';
    return code;
};