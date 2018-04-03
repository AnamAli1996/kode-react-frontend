Blockly.Blocks['draw'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Draw")
            .appendField(new Blockly.FieldDropdown([["Circle", "Circle"], ["Triangle", "Triangle"], ["Rectangle", "Rectangle"]]), "shape")
            .appendField(new Blockly.FieldDropdown([["red", "red"], ["green", "green"], ["blue", "blue"], ["pink", "pink"]]), "color");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



Blockly.JavaScript['draw'] = function(block) {
    var dropdown_shape = block.getFieldValue('shape');
    var dropdown_color = block.getFieldValue('color');

    if((dropdown_shape==='Circle' ) && dropdown_color === 'red') {
        var code = "document.getElementById('drawCircle').style.cssText = 'display:block;background-color:red' ";
    }else if((dropdown_shape==='Circle' ) && dropdown_color === 'green'){
        var code = "document.getElementById('drawCircle').style.cssText = 'display:block;background-color:green' ";
    }else if((dropdown_shape==='Circle' ) && dropdown_color === 'blue'){
        var code = "document.getElementById('drawCircle').style.cssText = 'display:block;background-color:blue' ";
    }else if((dropdown_shape==='Circle' ) && dropdown_color === 'pink'){
        var code = "document.getElementById('drawCircle').style.cssText = 'display:block;background-color:pink' ";
    }

    document.getElementById('drawCircle').style.display='none';


    if((dropdown_shape==='Rectangle' ) && dropdown_color === 'red') {
        var code = "document.getElementById('rectangle').style.cssText = 'display:block;background-color:red' ";
    }else if((dropdown_shape==='Rectangle' ) && dropdown_color === 'green'){
        var code = "document.getElementById('rectangle').style.cssText = 'display:block;background-color:green' ";
    }else if((dropdown_shape==='Rectangle' ) && dropdown_color === 'blue'){
        var code = "document.getElementById('rectangle').style.cssText = 'display:block;background-color:blue' ";
    }else if((dropdown_shape==='Rectangle' ) && dropdown_color === 'pink'){
        var code = "document.getElementById('rectangle').style.cssText = 'display:block;background-color:pink' ";
    }

    document.getElementById('rectangle').style.display='none';

    if((dropdown_shape==='Triangle' ) && dropdown_color === 'red') {
        var code = "document.getElementById('triangle').style.cssText = 'display:block;border-bottom: solid 120px red' ";
    }else if((dropdown_shape==='Triangle' ) && dropdown_color === 'green'){
        var code = "document.getElementById('triangle').style.cssText = 'display:block;border-bottom: solid 120px green' ";
    }else if((dropdown_shape==='Triangle' ) && dropdown_color === 'blue'){
        var code = "document.getElementById('triangle').style.cssText = 'display:block;border-bottom: solid 120px blue' ";
    }else if((dropdown_shape==='Triangle' ) && dropdown_color === 'pink'){
        var code = "document.getElementById('triangle').style.cssText = 'display:block;border-bottom: solid 120px pink' ";
    }

    document.getElementById('triangle').style.display='none';
    document.getElementById('drawCircle').style.display='none';
    document.getElementById('rectangle').style.display='none';





    return code;
};