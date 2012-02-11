# headband

## Overview

**HEADBAND** is a JavaScript module to easily add a scroll-activated slidedown (the "headband") to your page. The headband is made up of one or more "stripes" which contain their own content and may be styled individually.

## Usage

1. Add `headband.css` and `headband.js` to your page.

        <link href='/headband.css' rel='stylesheet' type='text/css'>
        <script src='headband.js' type='text/javascript'></script>

2. Create a `#headband` div.

        <div id='headband'></div>

3. Add stripes to your headband:
        
        <script type='text/javascript'>
            HEADBAND.addStripe('Hello, world!');
        </script>

## Syntax

The `addStripe()` function takes a couple of optional parameters to give you some styling options:

        HEADBAND.addStripe(notice, style_map, height_px);

* *style_map* is a dictionary object of CSS properties, e.g., `{'background': 'violet', 'font-family': 'Comic Sans MS'}`
* *height_px* is an integer specifying the height of the stripe, in pixels (defaults to 24)

> While you might be tempted to set the height in the *style_map* like any other CSS property, this needs to be split out as its used to calculate the band positioning throughout the animation.

## Plugins

Stripe content doesn't have to be static, and you can plug in other scripts to make things more interesting. 

As an example, `headband.lastfm.js` is a plugin for [last.fm](http://www.last.fm/) scrobblers to show what they're listening to right now. To use it, add script like the following to your page:

        HEADBAND.LASTFM.for('sevennineteen');

If you're not scrobbling anything when someone views your page, nothing happens. If you are, a scroll-activated slidedown bar will be created showing a message like:

> Right now, sevennineteen is listening to [“20 Miles Up”](http://www.last.fm/music/Tarwater/_/20+Miles+Up) by Tarwater.

## Notes

1. Requires [JQuery](http://jquery.com/). (Tested with version 1.7.1.)