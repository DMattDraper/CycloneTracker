## What is CycloneTracker?

CycloneTracker is a simple application meant to display important information about hurricanes.

This one-page site centers around a table that displays a record of every hurricane that has made landfall in the state of Florida since 1900. This is determined using the coordinates provided in each record in the HURDAT2 file, as well as the bounding coordinates of the state. This bounding box includes a large portion of water surrounding Florida, and as the state is irregularly shaped, some entries might not be entirely accurate.

The first column of the table displays the `Name` of the hurricane. Some entries were recorded before the naming convention came to be, so they are listed as `UNNAMED`

The second column displays the `Landfall Date`, or when the hurricane made landfall in Florida, using a `yyyy-mm-dd` format.

The third column displays the `Maximum Sustained Windspeed` of the hurricane in `knots (kn)`.

## How to run CycloneTracker

CycloneTracker was built using Node JS version 22.19.0. For best results, please proceed with this version.

This application can be run locally by dowloading the zipped repository and extracting it or cloning the repository to your computer.

At the root level of this project, run the command `npm install` or `npm i`. This will ensure that all of the required packages are installed.

Building the application may be required before running. To do so, simply run `npm run build`, and wait for the process to finish.

Finally, run the command `npm start`. This should launch the application and open it in your browser, located at localhost:3000
