#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 finaltex = (2.0 * texcoord) - 1.0;
    float theta = atan(finaltex.y, finaltex.x);
    float radius = pow(length(finaltex), 1.5);
    finaltex = vec2(radius * cos(theta), radius * sin(theta));
    finaltex = 0.5 * (finaltex + 1.0);
    FragColor = texture(image, finaltex);
}
