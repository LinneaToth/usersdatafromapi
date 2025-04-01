# Users data from API

![site layout](https://github.com/LinneaToth/usersdatafromapi/blob/main/preview.jpg)

[LIVE PAGE](https://linneatoth.github.io/usersdatafromapi/)

This is made for a school assignment. The goal was to fetch users data from API, in this case we were using https://jsonplaceholder.typicode.com/.

We were instructed to implement a clear and readable design, with a clean and simplistic look. I aimed for a generic no-nonsense look, such as one would expect
to find in an internal system dialoge at your local municipality. 

## Features:
- HTML - Semantic, very basic HTML
- JS - Fetching data from API with error handling, async functions, dynamic DOM-content, code structured with modules using import & export. No libraries or frameworks were used
- SASS - Styled with SASS. I used this task as an opportunity to get acquainted with CSS preprocessors, in case of future encounters
- Responsiveness - The content is arranged with a simple vertical flexbox. On larger screens, it will utilize it's maximan width and be centered with "air" to the sides. On smaller screens, it will shrink to it's minimum width, and take up all of the screen width.

## Personal takeaways
I will not be using any CSS preprocessors from personal preference. I do not think there are any advantages compared to the functionality on offer in native CSS nowadays, that makes up for the inconvenience of switching to another syntax and having to compile the code all the time. 

Creating a basic, "naked" look for my simple page was actually more demanding that I would have expected. As soon as something is off, whether it is a color or proportions, it is very apparent. 

Having tried modules, there is no turning back! I will keep practicing creating tidy and effective code.

## The full details of the assignment are provided below - machine translated from Swedish, for your convenience!

>
> # About the Task
> 
> In this task, you will create a website that retrieves user data from an API and displays it on the page. You will use JavaScript to fetch the data via the fetch method and showcase it on a website designed with HTML and CSS. The task requires you to implement a user-friendly and responsive design.
>
>  # What You Should Do
> 
> ### 1. Test the URL with a tool like Postman or others
>
>- To understand what the data looks like and its format, start by testing the API using a tool like Postman or another API testing tool.
>- Use the URL https://jsonplaceholder.typicode.com/users to see user data in JSON format.
>- This helps you get a sense of the structure of the data and the available information.
> 
> ### 2. Display User Data
>
>- From the fetched user data, display the following information directly on the page:
>- Name (User's name)
>- Username (Username)
>- Email (User's email address)
> 
> ### 3. Button to Show More Information
> 
>- Add a button that, when clicked, shows more details about the user, such as:
>- City (City)
>- Phone (Phone number)
>- Company name (Company name)
>
> ### 4. Design
>
>- Your design should be clear and readable. Focus on user experience and ensure the text is easy to read and the page has a clean and simple appearance.
>
> ### 5. Responsive Design
>
>- Your design must be responsive, meaning it should work well on both large screens (like computers) and smaller screens (like mobiles and tablets).
>- Use CSS media queries or flexbox/grid to adjust the layout for different screen sizes.
> 
>### 6. Choice of Layout
> 
>- You can choose to display the user data as a table, cards, list, or any other layout that suits the information best. It’s important that the presentation is clear and easy to follow.
>
> ### 7. Use at Least Two JavaScript Functions
>
>- You must use at least two JavaScript functions. For example, you can create one function to fetch data and another to show more information when the button is clicked.
>
>  ### 8. Design Choices
>- You can freely choose colors, navigation menu (navbar), and footer. Customize the design to make the page more attractive and user-friendly.
>
> ### 9. Use Semantic HTML Tags
>
>- You must use semantic HTML tags, such as header, footer, section, article, and other relevant tags to create a structured and comprehensible HTML.
> 
> ### Description of Functionality
>
>- Fetching Data via API: You will use fetch in JavaScript to retrieve user data from the URL https://jsonplaceholder.typicode.com/users. This data will be in JSON format.
>- Displaying User Data: On the page, display the user's name, username, and email address initially. When the user clicks a button, more detailed information will be displayed, such as city, phone number, and company name.
>- Interactivity: Use the button to toggle between showing basic user data and detailed user data. This can be done with JavaScript functions to handle the display of extra information.
>- Responsive Layout: Ensure your layout adapts well to various screen sizes. Your design should be functional and user-friendly on all devices.
