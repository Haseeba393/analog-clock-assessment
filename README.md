# Analog Clock Assessment

A responsive React Native analog clock application built using React Native CLI and TypeScript without using any third-party analog clock libraries.

The application displays a real-time analog clock, supports multiple time zones using the TimeZoneDB API, and provides offline functionality using SQLite local caching.

## Features

<ul>
    <li>Real-time analog clock</li>
    <li>Hour, minute, and second hands</li>
    <li>Responsive UI for different screen sizes</li>
    <li>Portrait and landscape orientation support</li>
    <li>Timezone selection</li>
    <li>Timezone data fetched from online API</li>
    <li>Offline support using SQLite</li>
    <li>Persisted selected timezone</li>
    <li>Graceful fallback when offline</li>
    <li>Clean and scalable project architecture</li>
</ul>

## Tech Stack

<ul>
    <li>React Native CLI</li>
    <li>TypeScript</li>
    <li>SQLite</li>
    <li>Axios</li>
    <li>React Hooks</li>
    <li>TimeZoneDB API</li>
</ul>

## Implementation

As we are not using any third party library for creating this clock, so we are
using Mathematical formula for Clock Hand rotations:

```
Hour Angle   = (hours % 12) * 30 + minutes * 0.5
Minute Angle = minutes * 6 + seconds * 0.1
Second Angle = seconds * 6
```

You can find this code inside <i><strong>/utils/clock.ts</strong></i>.

We are also showing numbers of clock using Trignomatery methods:

```
Math.cos()
Math.sin()
```

## TimeZone API

To fetch timezones, I am using following free API:
<a href="https://timezonedb.com/api?utm_source=chatgpt.com">TimezoneDB</a>

## Offline Support

For this I'm using SQLite DB and NetInfo package. First, I'm checking either I'm connected to internet or not. If I'm than first check for timezones in local storage if they are present then fetch from local otherwie use API and save them in local storage.

Similarly, if user is clicking on specific timezone to see its time, then I'm also using same SQLiteDB to store that value to persist on next launch.

## Orientation Support

For this, I didn't any library just put a simple if

```
if(mobileWidth > mobileHeight)
```

This means that mobile is in Landscape and now we can do whatever we want to our UI. In My case, it just change home screen main container flex direction from column to row or vice versa.

Make sure, you should add support for multiple orientation in your info.plist firl for iOS.

# How you can run the code

By following these simple steps you can run the code on your side. Here are these:

## Step 1

Clone the repo

```
git clone git@github.com:Haseeba393/analog-clock-assessment.git
```

## Step 2

Install node modules and pods

```
npm install
cd ios && pod install
```

## Step 3

Run on your desired platform by using following commands

```
npm run android # For Android
npm run ios # For iOS
```

# Thanks for reading the readme file. Please let me know if you have any suggestions or feedback. Thanks.
