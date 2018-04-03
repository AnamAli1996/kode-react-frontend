var demoWorkspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox')});
Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
    demoWorkspace);


function runCode() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }

}

function next() {
    var Jscode = Blockly.JavaScript.workspaceToCode(demoWorkspace);
    if(Jscode === 'if (6 * 7 == 42) {\n' +
        '  window.alert(\'Hello World\');\n' +
        '} else {\n' +
        '  window.alert(\'Panic\');\n' +
        '}\n'){window.location.href="CircleBlockly.html";}else
        window.alert("Have you written Hello World yet?");
}

function myUpdateFunction(event) {
    var Jscode = Blockly.JavaScript.workspaceToCode(demoWorkspace);
    document.getElementById('text').value = Jscode;

}
demoWorkspace.addChangeListener(myUpdateFunction);