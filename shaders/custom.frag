#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    FragColor.z = 0.001 - FragColor.z;
}
