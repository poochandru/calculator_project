<script type="text/javascript" src="interpreter.js"></script>

function interpret(node) {
    if (node instanceof LiteralNode) {
        return parseFloat(node.data);
    }

    let left = interpret(node.left);
    let right = interpret(node.right);

    switch (node.data) {
        case "+": return left + right;
        case "-": return left - right;
        case "*": return left * right;
        case "/": return right !== 0 ? left / right : "Error";
        default: throw new Error("Unknown operator");
    }
}
