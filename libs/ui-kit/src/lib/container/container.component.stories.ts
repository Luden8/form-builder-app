import type { Meta, StoryObj } from '@storybook/angular';
import { ContainerComponent } from './container.component';

const meta: Meta<ContainerComponent> = {
  component: ContainerComponent,
  title: 'ContainerComponent',
};
export default meta;
type Story = StoryObj<ContainerComponent>;

export const Primary: Story = {
  args: {},
};
