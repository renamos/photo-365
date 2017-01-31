# photo-365

This is a labor of love. I designed and built my own daily photo blog to share with the world some of my photography. I have many photos over the last several years that I haven't showed to anyone except my wife, just because I'm not much of a Facebook or Instagram post-er kinda guy. This gives me a way to share some of my favorite photos with the world.

Key technologies used: HTML, CSS, JavaScript (ES6), React, React-router and Redux. Also had to build my own API to handle the Cloudinary upload, so this is a "full-stack" project.

Key features:
-Image-upload form with Dropzone component: On submit, image is uploaded to Cloudinary at half the original resolution. The image info sent to the DB through my API. This feature is utilized by yours truly. 
-Gallery: The gallery component was a nice little feature that I felt completes the user-experience. I may add more info to the caption portion, but that'll come in the future. For now, it all looks decent and works great.
-Responsive design: completed this project with a "mobile first" approach.
