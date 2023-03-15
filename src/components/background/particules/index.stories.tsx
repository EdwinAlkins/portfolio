import { ComponentMeta, ComponentStory } from '@storybook/react';

import BackgroundParticulesAnimated from './index';

import "../../../index.css"

export default {
    title: 'Background/Particules',
    component: BackgroundParticulesAnimated,
} as ComponentMeta<typeof BackgroundParticulesAnimated>;


const Template: ComponentStory<typeof BackgroundParticulesAnimated> = () => <BackgroundParticulesAnimated />;

export const ExampleStory = Template.bind({});
ExampleStory.storyName = "Example ButtonSwipe";