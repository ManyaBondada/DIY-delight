# WEB103 Project 4 - *Bolt Bucket*

Submitted by: **Manya Bondada**

About this web app: **This app is a car personalizer that allows users to create new cars with specified features, view all cars, and update/delete submissions**

Time spent: **10** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured table**
  - [x] **NOTE: Your GIF must include a view of your Railway database that shows the contents of the table used by your app**
- [x] **The web app uses React to display data from the API**
- [x] **Users can view a list of options they can select for different aspects of a `CustomCar`**
- [x] **On selecting each option, the displayed visual icon for the `CustomCar` updates to match the option the user chose**
- [x] **The user can submit their choices to save the car to the list of created `CustomCar`**
- [x] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database**
- [x] **The app displays the total price of all features**
- [x] **Users can view a list of all submitted `CustomCar`**
- [x] **Users can edit or delete a submitted `CustomCar` from the list view of submitted `CustomCar`**
- [x] **Users can update or delete `CustomCar` that have been created from the detail page**

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/ManyaBondada/DIY-delight/blob/main/bolt%20bucket.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
GIF created with LICEcap

## Notes
This app uses React.js, HMTL/CSS on the front end, Node.js/Express.js for the API, and 2 Postgres SQL tables.
The customfeature table includes all predetermined color and model features.
The customeitem table includes all combinations of cars submitted by users.

## License

Copyright [2023] [Manya Bondada]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
