# Testing Custom Server Routing + Data

This is a test using Express to pass data to routes via `getInitialProps`.

When using `Link` component, you can see that some of the data (`testObject` and `testArray`) are showing up as undefined when navigating to/from the two sample posts (also using the back/forward browser buttons - see console output). On refresh, they show correct values.

When using the non `Link` nav, there is no such issue, `testObject` and `testArray` are passed correctly.

Curiously, in Safari (11.1), `testObject` fails to be passed `getInitialProps` when using the non `Link` nav and then using back/forward browser buttons:

1. Open safari at `localhost:3000`
2. click non Link nav, post 1
3. click non link nav, post 2
4. Now use Safari back/forward button and view results.

