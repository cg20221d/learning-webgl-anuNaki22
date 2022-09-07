function main(){
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    //vertex shader
    var vertesShaderCode = `
    void main(){
    
    }
    `;
    var vertesShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject); //sudah jadi .o

    //fragment shader
    var fragmentShaderCode = `
    void main(){
    
    }
    `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject); //sudah jadi .o

    var shaderProgram = gl.createProgram(); //wadah dari .exe
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.clearColor(0.0, 0.0, 0.0, 1.0); // (R, G, B, Transparancy)
    gl.clear(gl.COLOR_BUFFER_AT);
}