# Movies Project Turtle Ninja

Overall, this project achieves these
  - A landing filterable table that displays movie results from [movies.json](https://tender-mclean-00a2bd.netlify.app/web/movies.json)
  - Clicking on a movie should takes you to a comment screen
 
## Running the application
1. Copy `.env.sample` and rename as `.env` to get you started with relevant env vars
2. Do a simple `yarn start` to start your local development environ

## What could have been achieved with more time
  - Unit tests for components
  - Perfection of storybook components
  - Instead of passing comments data from component-to-component, we could use an internal message queueing structure, that manages all comments from different movies. With this, we can even operate an offline local DB for comments that syncs comments when user is offline/online, and also prevent multiple request for large data from firebase.
  - improve search algorithm for searching movie by title. Currently we use the native [String.search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
  - Implement a localStorage cache to prevent re-fetch of movies from [movies.json](https://tender-mclean-00a2bd.netlify.app/web/movies.json)
  - Translation/i18n setup
  

## Architecture used
1. Components ([from the components directory](src/components)) form the basic of every UI element used in [our containers](src/containers)
2. [Containers](src/containers) are assembled together with [components](src/components) or other fellow containers
3. All configuration-related files are found in [the config folder](src/config). All environment variables are extracted ONLY within the [settings.js](src/config/settings.js) file. This is best practise to prevent scattered env vars in the code
