# open-source-skill-project

Website project

## Purpose

- Help people to invest their free time in projects that matters / projects they care about
- Anyone can list their skills (dev, design, project management, analysis...) and / or submit projects

## Ideas

- Projects have to be open source
- Login with Github
- Projects can be linked to a github repo, a Slack channel, a Trello board
- Categories to sort the projects
- Projects that can have a positive impact on the world will be hightlighted
- The MVP only contains a way to create a project and link it to different tools, create a user, list skills and needs
- Product owner can modify the project and highlight various data (issues, pr, trello cards etc)
- User can sort the projects by skills needed to find where he/she can help
- Not logged in
  - Can see and browse projects
  - Can login / register
  - Can sort projects on different filters / categories
  - Can view all the details of the projects
- Logged in
  - Can create new projects
  - Can offer help on projects
  - Can modify profile
  - Projects list on the left like Github
  - Dashboard is default page when logged in with hist of last actions

## Stack

- Use Auth0 for easy login integration
- Use AWS to build/deploy
- Use Github Actions to host the project

## Design

- Categories like YP
- Logged in page like GitHub
- List like Sens Critique with new, trending etc

## Resources

- https://developer.github.com/v3/

## Todo

- Define interfaces
- Define enums
- Create fake data
