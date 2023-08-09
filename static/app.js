

const $storySelection = $("#storySelection");
$storySelection.on("change", storySelectionChange);

const stories = [
    {
        storyId: 0,
        content: "Once upon a time in a {place}, there lived a curious {noun}. It was a {adjective} creature that loved to {verb} around the {place}. One day, it found a group of {plural_noun} and joined their adventures.",
    },
    {
        storyId: 1,
        content: "In the magical land of {place}, a brave {noun} embarked on a {adjective} journey to {verb} a legendary {noun}. Along the way, they encountered friendly {plural_noun} who helped them on their quest.",
    },
    {
        storyId: 2,
        content: "Deep within the {place}, hidden behind a {adjective} {noun}, there was a secret {noun} that held the power to {verb} the world. Many {plural_noun} had searched for it, but only one could find the hidden treasure.",
    },
    {
        storyId: 3,
        content: "At the top of the {place}, a solitary {noun} stood overlooking the breathtaking {adjective} landscape. As the sun set, it felt a sense of {noun} and decided to {verb} its thoughts with the passing {plural_noun}.",
    },
    {
        storyId: 4,
        content: "In a bustling {place}, a group of {adjective} {plural_noun} decided to {verb} a grand {noun} contest. Each participant brought their most creative {noun}, and the event turned into a hilarious {noun} filled with laughter.",
    },
    {
        storyId: 5,
        content: "Once upon a time in a long-ago {place}, there lived a large {adjective} {noun}. It loved to {verb} {plural_noun}.",
    }
]

let selectedStory
let selectedStoryContent;

function storySelectionChange(evt) {
    $storyPreview.empty();
    const storyId = evt.currentTarget.options.selectedIndex;
    selectedStory = stories.filter(story => story.storyId === storyId);
    selectedStoryContent = selectedStory[0].content;
    const story = $("<p>");
    story.text(selectedStory[0].content);
    $storyPreview.append(story);
}

const $storyPreview = $("#storyPreview");

const $answersForm = $("#answersForm")
$answersForm.on("submit", function(evt) {
    sendStoryContent(selectedStoryContent);
});

async function sendStoryContent(content) {
    try {
        const response = await axios.post('http://localhost:5000/story', { content });

        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}