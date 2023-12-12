# react-toggletip

[![npm version](https://badge.fury.io/js/react-toggletip.svg)](https://badge.fury.io/js/react-toggletip)
[![Build Status](https://travis-ci.org/rcdexta/react-toggletip.svg?branch=master)](https://travis-ci.org/rcdexta/react-toggletip)

Simple toggletip and tooltip for your react apps

![toggletip](https://github.com/rcdexta/react-toggletip/raw/master/assets/screenshot.png)

### Why?

I wanted a simple light-weight tooltip library for react that just does one good thing and does it well - displaying tooltips on hover 

For context as to why it's called a  "toggletip", read this [blog](https://inclusive-components.design/tooltips-toggletips/) for details

### Features

* works on all mainstream browsers
* css only tooltip without additional javascript dependencies
* uses `aria` attributes for accessibility and to work with screen readers
* works on icons and other elements
* supports multiline tooltips

### Installation

```bash
npm install --save react-toggletip
```

or if you are using `yarn`

```bash
yarn add react-toggletip
```

### Demo

https://rcdexta.github.io/react-toggletip

### Documentation

ToggleTip component will render a info icon by default. The default icon can be overridden with props given below. If you want to display tooltips over custom content, wrap ToggleTip around the content.

| Name      | Type                       | Description                                                  |
| --------- | -------------------------- | ------------------------------------------------------------ |
| content   | String or array of strings | The tooltip content. Pass array of strings if you want multiline tooltips |
| placement | string                     | one of `bottom-right`, `bottom`, `bottom-left`,`right`,`left`,`top-right`,`top`,`top-left` |
| animated  | boolean                    | Disable tooltip animations. Default: true                    |
| icon      | node                       | Replace info icon with custom icon                           |
| children  | node                       | Display tooltip on top of custom content instead of icons    |


### License

MIT

