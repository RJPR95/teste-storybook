// YourComponent.stories.ts

import { Meta, Story } from '@storybook/angular';


import  TestButtonComponent  from './testcomponent.component';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Test/YourComponent',
  component: TestButtonComponent,
} as Meta;

//π We create a βtemplateβ of how args map to rendering
const Template: Story = (args) => ({
  props:args, 
});

export const FirstStory = Template.bind({});
export const SecondStory = Template.bind({});

FirstStory.args= {
 //π The args you need here will depend on your component
};
SecondStory.args= {
 //π The args you need here will depend on your component
};