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
    if (tokens.length === 1) return new LiteralNode(tokens[0].data);

    let operatorIndex = -1;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type === TOKEN_TYPE_OPERATOR) {
            operatorIndex = i;
            break;
        }
    }

    let left = parseToAST(tokens.slice(0, operatorIndex));
    let right = parseToAST(tokens.slice(operatorIndex + 1));

    return new OperatorNode(tokens[operatorIndex].data, left, right);
}
