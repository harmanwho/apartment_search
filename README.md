Reviewer comments:
1. Your service side code is beautiful and well organized for example the mongo function the you created and the way you have closed every connection. I am definitely going to use this as a standard for my next application.
2. Do remove any commented code that is there
3. Front end styling:
   a. Your background and images are great, you can use border and padding for some of your components like login page
   b. The colors can be more consistent: I suggest deciding a color-palette and sticking to it while development

Great work! Good luck!

# Home Sweet Home

### Author: Alex Yang 

### Class Link: https://johnguerra.co/classes/webDevelopment_fall_2020/
### Website: https://newapartmentapp.herokuapp.com/

## Objective:
### This website allows users to create posts for renting out their driveways and sechedule appointment when they need to use others'. 

### Instructions to build:
- in MongoDB, create a database name "apartment" , and the following collection "liked", "postings" and "users"
- up load the Apt file https://drive.google.com/file/d/1lIYL-mWYfB0L8L4tRXuIaZaxOM61J1YF/view?usp=sharing  to the postings collect. 
- git clone the files from this repository 
- npm install in the root folder
- type npm run dev to start the backend server  
- npm install in the Front-react folder  
- type yarn start to start the front end 
- go to localhoust://3000/ to see the web application. 

### Instructions for using the web app:
- Sign up as a user in the sign up page
- The web app uses passport-local strategy for authentications. This allows users remain login in multiple sessions until logout. 
- The database stores only the hashed passwords
- In the Search page, the selector form allows sorting and filtering the posts
- The pagination at the bottom of search page, Users can type in page numbers to the input box for navigating to different pages
- Users can like and unlike a post. The liked posts are kept in the Favorite page. Users can unlike the page to remove from the Favorite page
- Users clicking the posts will bring them to the post detail page. The page not only shows apartment details, but also recommends similar posts with $500 difference in price.
### App screen shot:
![alt text](https://github.com/AZYDEVE/apartment_search/blob/master/front-react/src/utility/images/loginPage.png)
![alt text](https://github.com/AZYDEVE/apartment_search/blob/master/front-react/src/utility/images/search%20page.png)
![alt text](https://github.com/AZYDEVE/apartment_search/blob/master/front-react/src/utility/images/postPage.png)
![alt text](https://github.com/AZYDEVE/apartment_search/blob/master/front-react/src/utility/images/favorite.png)



