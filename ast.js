<script type="text/javascript" src="ast.js"></script>

class LiteralNode {
    constructor(data) {
        this.data = data;
    }
}

class OperatorNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function parseToAST(tokens) {
    console.log(`Parsing tokens: ${JSON.stringify(tokens)}`);  

    if (tokens.length === 1) {
        return new LiteralNode(tokens[0].data);
    }

    let operatorIndex = -1;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type === TOKEN_TYPE_OPERATOR && (tokens[i].data === "*" || tokens[i].data === "/")) {
            operatorIndex = i;
            break;
        }
    }

    if (operatorIndex !== -1) {
        let left = parseToAST(tokens.slice(0, operatorIndex));
        let right = parseToAST(tokens.slice(operatorIndex + 1));
        return new OperatorNode(tokens[operatorIndex].data, left, right);
    }

   
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type === TOKEN_TYPE_OPERATOR && (tokens[i].data === "+" || tokens[i].data === "-")) {
            let left = parseToAST(tokens.slice(0, i));
            let right = parseToAST(tokens.slice(i + 1));
            return new OperatorNode(tokens[i].data, left, right);
        }
    }

    throw new Error("Invalid expression");
}
