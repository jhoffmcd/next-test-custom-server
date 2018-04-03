# Testing Custom Server Routing + Data

This is a test using Express to pass data to routes via `getInitialProps`.

This code test was created from https://github.com/zeit/next.js/tree/canary/examples/custom-server-express

## Test 1

When using `Link` component, you can see that some of the data (`testObject` and `testArray`) are showing up as undefined when navigating to/from the two sample posts (also using the back/forward browser buttons - see console output). On refresh, they show correct values.

1. Open browser at `localhost:3000`
2. Click `<Link>` nav, see output. Does not show `testObject` and `testArray` unless page is reloaded.

When using the non `Link` nav, there is no such issue, `testObject` and `testArray` are passed correctly.

1. Open browser at `localhost:3000`
2. Click non `<Link>` nav, see output. Shows `testObject` and `testArray` correctly.

**Conclusion**, do not use `<Link>` with custom server implemenation?

## Test 2

Curiously, in Safari (11.1), `testObject` fails to be passed `getInitialProps` when using the non `Link` nav and then using back/forward browser buttons:

1. Open safari at `localhost:3000`
2. click non Link nav, post 1
3. click non link nav, post 2
4. Now use Safari back/forward button and view results.

**Question**: what is the proper way to handle routing when using Express. `<Link>`? no `<Link>`, `Router`? There must be some combination that does not result in loss of initial props.