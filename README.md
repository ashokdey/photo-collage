# nf-photo-collage

Combines several images into a photo collage.

This is slightly restructured version of original [photo-collage](https://github.com/classdojo/photo-collage) repo. It is also using [RectangleEquals fork](https://github.com/RectangleEquals/photo-collage)  so it is using Canvas v2.

### Changes
- Removed header and support for adding text
- Add support for adding image as background
- Add typings (`index.d.ts`)

## Installation
`yarn add nf-photo-collage`  


This library depends on `node-canvas` (v2), which may require additional setup. See [their installation page](https://github.com/Automattic/node-canvas/wiki/_pages) for details.

## Usage
```ts
import createCollage from "nf-photo-collage";

const options = {
  sources: [
    imageBufferObject, // source can be a buffer of jpg/png data
    canvasObject, // source can be a canvas object
    "http://myurl.com/image.jpg", // source can be a url string
    "https://myurl.com/image.jpg", // https/ftp is ok too.
    "./localfile.png", // source can be a relative file path
    "~/photos/file.png" // source can be an absolute file path
  ],
  width: 3, // number of images per row
  height: 2, // number of images per column
  imageWidth: 350, // width of each image
  imageHeight: 250, // height of each image
  // backgroundColor: "#cccccc", // optional, defaults to #eeeeee.
  backgroundImage: "./localfile.png" // same formats supported as source
  spacing: 2, // optional: pixels between each image
};

createCollage(options)
  .then((canvas) => {
    const src = canvas.jpegStream();
    const dest = fs.createWriteStream("myFile");
    src.pipe(dest);
  });
```

## Example

#### Source files
![Source file 1](https://github.com/classdojo/photo-collage/blob/master/img/src1.jpg?raw=true)
![Source file 2](https://github.com/classdojo/photo-collage/blob/master/img/src2.jpg?raw=true)
![Source file 3](https://github.com/classdojo/photo-collage/blob/master/img/src3.jpg?raw=true)
![Source file 4](https://github.com/classdojo/photo-collage/blob/master/img/src4.jpg?raw=true)
![Source file 5](https://github.com/classdojo/photo-collage/blob/master/img/src5.jpg?raw=true)
![Source file 6](https://github.com/classdojo/photo-collage/blob/master/img/src6.jpg?raw=true)

#### Result
![Result](https://github.com/classdojo/photo-collage/blob/master/img/result_no_spacing.png?raw=true)
