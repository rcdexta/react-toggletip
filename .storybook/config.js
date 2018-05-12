import {configure} from '@storybook/react'
import {setOptions} from '@storybook/addon-options'

setOptions({
  name: 'React ToggleTip',
  url: 'https://github.com/rcdexta/react-toggletip'
})


// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}


configure(loadStories, module)
