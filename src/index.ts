import { Devvit } from '@devvit/public-api';

// Define a custom post type
Devvit.addCustomPostType({
  name: 'puzzle-post',
  description: 'A custom post to share puzzles',
  render: () => (
    <blocks height="regular">
      <vstack alignment="center" spacing="medium">
        <text size="xlarge" style="heading">
          🧩 Puzzle Challenge
        </text>
        <textarea id="inputField" placeholder="Enter a number..." />
        <button
          icon="send"
          appearance="primary"
          onPress={() => {
            const inputElement = document.getElementById('inputField') as HTMLTextAreaElement;
            const inputValue = Number(inputElement?.value);

            if (!isNaN(inputValue)) {
              alert(`Your input +10: ${inputValue + 10}`);
            } else {
              alert('Please enter a valid number');
            }
          }}
        >
          Submit
        </button>
      </vstack>
    </blocks>
  ),
});

export default Devvit;
