 Blockly.Blocks['lightswitch'] = {
            init: function() {
                this.appendDummyInput()
                    .appendField("Turn")
                    .appendField(new Blockly.FieldDropdown([["Red","R"], ["all","all"]]), "NAME")
                    .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(330);
                this.setTooltip("");
                this.setHelpUrl("");
            }
};

 Blockly.JavaScript['lightswitch'] = function(block) {
     var dropdown_name = block.getFieldValue('NAME');
     var dropdown_switch = block.getFieldValue('switch');
     if(dropdown_switch==='on') {
         var code = "document.getElementById('circle').style.backgroundColor = 'red';"
     }
     if(dropdown_switch==='off'){
         var code = "document.getElementById('circle').style.backgroundColor = 'white';"
     }

     return code;
 };