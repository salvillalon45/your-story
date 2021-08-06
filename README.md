# [The Odin Project: Javascript] - Project: Final Project

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://your-story-sv.web.app/">
    <img alt="Your Story" src="./src/images/static/your_story_logo_1_cropped.png" width="300" />
  </a>
</p>
<h1 align="center">
  Your Story
</h1>

## Intro

-   This was the final project for the Odin Project Frontend module. I challenged myself to create something new, something that could help people. As I was thinking, I realized that something that I value and has helped me a lot is the power of reflection. Reflecting allows people to stop and thnk on what they are doing. Helps clarify what are the next steps you want to create and take. I wanted to create a tool that people can use to reflect. **This is how Your Story was born!** I create this logo above.
-   You can find more on the project here: [The Odin Project - Final Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/final-project)

### 📗 Fonts used

-   [Rufina by Martin Sommaruga](https://fonts.google.com/specimen/Rufina?query=rufina#about)
-   [Source Sans Pro by Paul D. Hunt](https://fonts.google.com/specimen/Source+Sans+Pro?query=sour#about)

### 🎨 Color Reference

|  Color            |  Hex                                                                 |
| ----------------- | -------------------------------------------------------------------- |
|  Turquoise        |  ![#80ccbc](https://via.placeholder.com/10/0c2d48?text=+) `#80ccbc`  |
|  Black            |  ![#141720](https://via.placeholder.com/10/b1d4e0?text=+) `#141720`  |
|  White            |  ![#fff](https://via.placeholder.com/10/fff?text=+) `#fff`           |
|  Grey             |  ![#1c1f2a](https://via.placeholder.com/10/fff?text=+) `#1c1f2a`     |
|  Orange           |  ![#f79e77](https://via.placeholder.com/10/000?text=+) `#f79e77`     |

## Overall

-   In this project I challenged myself to not use SASS. Instead, I practice using css-in-js and Styled Components
-   I also tried to deploy my app to Netlify but I learned that it only works for static websites

## Design

-   Design Inspiration Came From [Amie Chen](<[https://dribbble.com/shots/4265881-Dropcast-HTML-Template-for-Podcasts-Audio-Blogs](https://dribbble.com/shots/4265881-Dropcast-HTML-Template-for-Podcasts-Audio-Blogs)>). From this design I got the colors. I really like the style choice Amie picked
-   Design Inspiration Came From [Rron Berisha](<[https://dribbble.com/shots/4425712-REFLECTION/attachments/4425712-REFLECTION?mode=media](https://dribbble.com/shots/4425712-REFLECTION/attachments/4425712-REFLECTION?mode=media)>). From this design I got the idea for the landing page

## Styling

1. Learned how to use makeStyles to create custom css-in-js classes
2. Learned how to use withStyles to override Material UI Components
3. Learned how to override Material UI Components and use props to make styling appear based on props

```jsx
const FormTextField = styled(TextField)`
	.MuiInputBase-root {
		color: ${props => (props.white ? 'var(--white)' : 'var(--black)')};
		font-family: var(--source);
	}

	label.mui-focused: {
		color: ${props => (props.white ? 'var(--white)' : 'var(--black)')};
	}

	.MuiInput-underline:after {
		border-bottom-color: ${props =>
			props.white ? 'var(--white)' : 'var(--black)'};
	}

	.MuiInput-underline:before {
		border-bottom-color: ${props =>
			props.white ? 'var(--white)' : 'var(--black)'};
	}
`;
```

2. I learned how to use if and else statements in Styled Components

```jsx
const NavigationToolbar = styled(Toolbar)`
	background-color: ${props => {
		if (props.footer) {
			return 'var(--grey)';
		} else if (props.landingFooter) {
			return 'transparent';
		} else {
			return 'var(--white)';
		}
	}};
	align-content: center;
	justify-content: ${props => {
		if (props.footer) {
			return 'space-between';
		} else if (props.landingFooter) {
			return 'flex-end';
		}
	}};
	padding-top: 19px;

	&& {
		align-items: baseline;
	}
`;
```

## Development

-   Learned how to use React Context
    -   I came across React Context during my search for an alternative to Redux. In past applications, setting up Redux took time and this was going to be a small personal app that did not need the entire Redux setup. Also, when working with Gastby there is no such thing as Parent Component. So passing down props was going to be challenging
    -   Everything changed when I came across this article by [Yingqi Chen](<[https://medium.com/swlh/gatsbys-global-state-management-with-react-s-context-5f8064e93351](https://medium.com/swlh/gatsbys-global-state-management-with-react-s-context-5f8064e93351)>) where she answered all my questions!
    -   Thanks to this article as well from [Muhammad Muhsin](<[https://blog.openreplay.com/using-react-context-api-with-gatsby](https://blog.openreplay.com/using-react-context-api-with-gatsby)>) for helping me understand
-   I really liked how we wrote everything down first! I made a plan of all the things that were going to be involved. This is how I identified the problem of having a parent component
-   Learned how to create a shallow db to make it easier to retrieve data instead of nesting a lot things into it
-   Learned how to use Firebase Authentication to create, login, and logout users
-   Also, I wanted to become a better full stack developer and that means learning about the tools that we use everyday. One tool that I use everyday is `console.log()` I came across this article by [Harsha Vardhan](<[https://javascript.plainenglish.io/stop-using-console-log-in-javascript-d29d6c24dc26](https://javascript.plainenglish.io/stop-using-console-log-in-javascript-d29d6c24dc26)>) where it showed other functions of console!

    -   I tried many such as

        -   `console.group() and console.groupEnd()`
        -   Styling your logs

        ```jsx
        const spacing = '10px';
        const styles = `padding: ${spacing}; background-color: white; color: red; font-style: italic; border: 1px solid black; font-size: 2em;`;
        console.log('%cI am a styled log', styles);
        console.log('%cI am a styled log', styles);
        ```

## Technologies:

-   React
-   Material UI
-   Dribble
-   Styled Components
-   Firebase for Authentication and Hosting
-   Gatsby
