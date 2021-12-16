const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateTopicEditInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.topic = !isEmpty(data.topic) ? data.topic : "";
    data.video = !isEmpty(data.video) ? data.video : "";

    // Name checks
    if (Validator.isEmpty(data.topic)) {
        errors.topic = "Topic Name is required";
    }

    // Name checks
    if (Validator.isEmpty(data.video)) {
        errors.video = "Video URL is required";
    } else if (data.video.startsWith("https://youtu.be/") === false && data.video.startsWith("https://www.youtube.com/embed/") === false && data.video.startsWith("https://www.youtube.com/watch?v=") === false && data.video.startsWith("https://www.youtube.com/embed/") === false && data.video.startsWith("https://vimeo.com/") === false && data.video.startsWith("https://player.vimeo.com/video/") === false && data.video.startsWith("https://drive.google.com/file/")) {
        errors.video = "Invalid video URL";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
