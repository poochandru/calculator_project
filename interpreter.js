<script type="text/javascript" src="interpreter.js"></script>

function interpret(node) {
    if (node instanceof LiteralNode) {
        console.log(`Interpreting LiteralNode with value: ${node.data}`);
        return parseFloat(node.data);
    }

    let left = interpret(node.left);
    let right = interpret(node.right);

    console.log(`Interpreting OperatorNode with operator: ${node.data}`);
    console.log(`Left value: ${left}, Right value: ${right}`);

    switch (node.data) {
        case "+":
            return left + right;
        case "-":
            return left - right;
        case "*":
            return left * right;
        case "/":
            if (right === 0) {
                console.log("Division by zero error!");
                return "Error";
            }
            return left / right;
        default:
            throw new Error("Unknown operator");
    }
}

