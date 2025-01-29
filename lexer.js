<script type="text/javascript" src="lexer.js"></script> // Allowing HTML file to access lexer.js functions

const TOKEN_TYPE_LITERAL = 0;
const TOKEN_TYPE_OPERATOR = 1;

function lexer(text) {
    let tokens = [];
    let numBuffer = "";

    for (let char of text) {
        console.log(`Processing character: ${char}`);
        
        if ("0123456789.".includes(char)) {
            numBuffer += char;
        } else if ("+-*/".includes(char)) {
            if (numBuffer) {
                tokens.push({ type: TOKEN_TYPE_LITERAL, data: numBuffer });
                numBuffer = "";
            }
            tokens.push({ type: TOKEN_TYPE_OPERATOR, data: char });
            console.log(`Added operator token: ${char}`); 
        }
    }

if (numBuffer) {
        tokens.push({ type: TOKEN_TYPE_LITERAL, data: numBuffer });
        console.log(`Added final literal token: ${numBuffer}`);  
    }

    console.log(`Tokens generated: ${JSON.stringify(tokens)}`);  
    return tokens;
}

// Example usage
console.log(lexer("5 + 3.14 * 2")); // Should output an array of tokens
