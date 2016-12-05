uniform sampler2D map;
uniform sampler2D origin;
uniform float volume;

attribute vec3 color;
attribute float size;
varying vec3 vColor;

void main() {
	vec4 buffer = texture2D(map,uv);
	vec3 p = buffer.xyz;
	vColor = color;
	gl_PointSize = size * volume;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);

}
