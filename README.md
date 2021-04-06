# JetFuel Take Home Exercise

This is a frontend exercise that will give you the chance to see what kind of things we build at JetFuel!

You will be building a simplified version of our main app, the Plug (www.plugco.in). This is the app through which our influencer access our offers, track their earnings, and manage their account. In particular, you will be recreating our main 'offer' feed:

We've spun up an endpoint on our server to return a sample feed of offers as a JSON blob. You can access that here:
https://www.plugco.in/public/take_home_sample_feed

Your job is set up a react project that calls the sample endpoint and renders feed based on the JSON data returned. 

You can find the design and an explanation of each component in this Figma file:
https://www.figma.com/file/1exs9yHG251QWdUy2YztUg/takehome_template_ios_01?node-id=0%3A1

If you prefer Sketch, I've also included the same design in a sketch file, in this repository: 'feed_template_react_01.sketch'.

![starter-screenshot](https://i.imgur.com/ynkHNTC.png)

Note - We're only providing mobile designs. For the sake of this exercise, there's no need to build this for desktop!

We have a starter app provided in the `./app` directory, please complete your project here.

We're giving you 3 hours to make as much progress on this project as possible. While we recognize it will be difficult to finish everything, part of the goal is to see how you prioritize, and how much you're able to get through.


## Getting started

Run the following commands:

```
cd app
npm start
```

After that, your browser should open up a skeleton React app. You can edit any file in `./src/` and in _most_ cases the website will hot-reload.

For more info, you can check out https://github.com/facebook/create-react-app

## Bonus


- Can you handle failed API requests gracefully? Maybe redirect to a 'failed' UI state with a rety option? 
- Can you get the videos to play inline when the 'play' icon is tapped?
- What steps can you take to optimize the load time of cover photos? How about the scroll performance? 
- Can you add pull-to-refresh? 

## Questions?

Feel free to reach out if you have any questions!
