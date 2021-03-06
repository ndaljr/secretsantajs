const GROUP_ALREADY_EXISTS = new Error(
  "The secret santa group for this chat already exists.",
);
GROUP_ALREADY_EXISTS.name = "GroupAlreadyExists";
const GROUP_DOES_NOT_EXIST = new Error(
  "No one has started the secret santa for this chat group yet! Type /start to start.",
);
GROUP_DOES_NOT_EXIST.name = "GroupDoesNotExist";
const USER_ALREADY_IN_GROUP = new Error(
  "You have already joined the secret santa!",
);
USER_ALREADY_IN_GROUP.name = "UserAlreadyInGroup";
const USER_NOT_IN_GROUP = new Error(
  "You have yet to join the secret santa, type /join to join!",
);
USER_NOT_IN_GROUP.name = "UserNotInGroup";
const NOT_ENOUGH_PARTICIPANTS = new Error(
  "You need at least 4 participants to play secret santa!",
);
NOT_ENOUGH_PARTICIPANTS.name = "NotEnoughParticipants";

const errors = {
  GROUP_ALREADY_EXISTS,
  GROUP_DOES_NOT_EXIST,
  USER_ALREADY_IN_GROUP,
  USER_NOT_IN_GROUP,
  NOT_ENOUGH_PARTICIPANTS,
};
export default errors;
