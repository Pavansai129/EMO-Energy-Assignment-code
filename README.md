#Title

#Objective

<h2>To create a signup, login and logout responsive page.
using Javascript, ReactJs, tailwind css</h2>

# Technologies Used

    - React.js
    - Javascript
    - localStorage(for Database)

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the user not registered then the user should register by navigating and providing user details to signup page
- When an unauthenticated user tries to access the Home Route, then the page should be navigated to the Login Route using the protected route
- When an authenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the respective route using the protected route

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

#### Description:

Returns a response based on the credentials provided using localStorage as Database

#### Sample Success Response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "error_msg": "User did not exist"
}
```

</details>

<details>
<summary>Components Structure</summary>

<h1>Home</h1>
<h1>Login</h1>
<h1>ProtectedRoute</h1>
<h1>Signup</h1>
</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Login/index.js`
- `src/components/Signup/index.js`
- `src/components/Home/index.js`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `Login` route should consist of `/login` in the URL path
- `Signup` route should consist of `/signup` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`

</details>

### Resources

<details>
<summary>Third party packages</summary>

- Tailwind-css(for styling)

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
