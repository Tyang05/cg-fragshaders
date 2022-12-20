# Fragment Shaders

In this project, I manipulated the fragment shaders of a short snippet video taken from the Transformers movie. These fragment shaders basically create the filter for the video. There are a total of six different fragment shaders, each affecting the video in different ways. 

The first of the six different fragment shaders is the normal fragment shader. This just converts the video back to its original colors. The black and white fragment shader does what its name suggests, it turns the video into black and white. It does this by looking at the colors in the original video and puts them on a scale from white to black. If the color is closer to the color white, it'll convert that part to be white. Then it'll do the opposite for black. The fish eye fragment shader adds the fish eye affect. It makes it look like you are watching the video through a fish eye where the middle portion of the video is zoomed in. The ripple fragment shader adds a ripple affect to the video. The toon fragment shader makes the video look more cartoonish by blending the colors a bit together. Then the custom fragment shader basically just adds a warm tone to the video, similar to adding a "summer" or "fall" filter to an Instagram photo. If you look into each of these fragment shader files, you can see how they were created. I basically used equations to manipulate the view plane and change the video to how I wanted it to look like. Not only can you apply these different shaders to a video, but you can apply it to a live video from your video camera.

From a domain-specific point of view, a user can use this application to add different filters to a video or a live video. This project helped me see how these filters are created by computer graphics. These concepts can be applied to any graphics as well, so users can for sure use this application for their own videos or photos. For example, if a user wanted their video/photo to look more warm, they can apply my custom fragment shader to put on a warm filter.
