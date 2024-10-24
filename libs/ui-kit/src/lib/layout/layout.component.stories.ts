import type { Meta, StoryObj } from '@storybook/angular';
import { LayoutComponent } from './layout.component';

const meta: Meta<LayoutComponent> = {
  component: LayoutComponent,
  title: 'LayoutComponent',
};
export default meta;
type Story = StoryObj<LayoutComponent>;

export const Primary: Story = {
  args: {},
};
