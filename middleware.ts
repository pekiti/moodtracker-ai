import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/'],
})

/*
1. `'/((?!.*\\..*|_next).*)'`: 
This regular expression uses a negative lookahead `(?!...)` to match any string that does not contain a period `.` (which is escaped as `\\.`) or `_next`. 
The `.*` inside the lookahead means "any character (except a newline) 0 or more times". 
The outer `.*` matches any character (except a newline) 0 or more times. 
So, this pattern matches any string that doesn't contain a period or `_next`.

2. `'/'`: 
This is a simple regular expression that matches the forward slash character `/`.

3. `'/(api|trpc)(.*)'`: 
This regular expression uses a group `(api|trpc)` to match either `api` or `trpc` followed by any character (except a newline) 0 or more times. 
The `.*` means "any character (except a newline) 0 or more times". 
So, this pattern matches any string that starts with `api` or `trpc` followed by any characters.
*/

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}