import { Injectable } from '@nestjs/common';

@Injectable()
export class StepsService {
  private steps = [{
    question: 'Question 1',
    id: '1',
    controls: [
      {
        id: 2,
        type: 'radio',
        slug: 'radio',
        label: 'Radio label',
        options: [
          {
            label: 'Option 1',
            value: 'a'
          },
          {
            label: 'Option 2',
            value: 'b'
          },
          {
            label: 'Option 3',
            value: 'c'
          }
        ],
        required: true
      },
      {
        id: 3,
        type: 'checkbox',
        slug: 'checkbox',
        label: 'Checkbox title',
        options: [
          {
            label: 'Option 1',
            value: 'd'
          },
          {
            label: 'Option 2',
            value: 'f'
          },
          {
            label: 'Option 3',
            value: 'e'
          }
        ],
        required: true
      },
      {
        id: 1,
        slug: 'text',
        type: 'text',
        label: 'Field label',
        required: true
      },
    ]
  },
    {
      question: 'Question 2',
      id: '2',
      controls: [
        {
          id: 2,
          type: 'radio',
          slug: 'radio',
          label: 'Radio label',
          options: [
            {
              label: 'Option 2',
              value: 'b'
            },
            {
              label: 'Option 3',
              value: 'c'
            }
          ],
          required: true
        },
        {
          id: 3,
          type: 'checkbox',
          slug: 'checkbox',
          label: 'Checkbox title',
          options: [
            {
              label: 'Option 1',
              value: 'd'
            },
          ],
          required: true
        },
        {
          id: 1,
          type: 'text',
          slug: 'text',
          label: 'Field label',
          required: true
        },
      ]
    }]

  findAll() {
    return this.steps;
  }
}
