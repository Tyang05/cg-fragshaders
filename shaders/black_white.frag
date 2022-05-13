#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    float l = .299*texture(image, texcoord).r + .587*texture(image, texcoord).g + .114*texture(image, texcoord).b;
    FragColor = vec4(l, l, l, 1.0);
}
