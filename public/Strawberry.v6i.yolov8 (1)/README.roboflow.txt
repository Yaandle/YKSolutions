
Strawberry  - v6 2024-04-29 9:28am
==============================

This dataset was exported via roboflow.com on April 28, 2024 at 11:28 PM GMT

Roboflow is an end-to-end computer vision platform that helps you
* collaborate with your team on computer vision projects
* collect & organize images
* understand and search unstructured image data
* annotate, and create datasets
* export, train, and deploy computer vision models
* use active learning to improve your dataset over time

For state of the art Computer Vision training notebooks you can use with this dataset,
visit https://github.com/roboflow/notebooks

To find over 100k other datasets and pre-trained models, visit https://universe.roboflow.com

The dataset includes 356 images.
Strawberries-stem are annotated in YOLOv8 format.

The following pre-processing was applied to each image:
* Auto-orientation of pixel data (with EXIF-orientation stripping)
* Resize to 640x640 (Stretch)

The following augmentation was applied to create 3 versions of each source image:
* Randomly crop between 0 and 2 percent of the image
* Random rotation of between -2 and +2 degrees
* Random brigthness adjustment of between -3 and +3 percent
* Random Gaussian blur of between 0 and 0.3 pixels


