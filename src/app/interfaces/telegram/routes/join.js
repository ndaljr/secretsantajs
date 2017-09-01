import { controllerForInterface } from "lib/utils";
import { responses } from "lib/responses";
import { handleError, sendMessage, nameFromObject } from "lib/utils/telegram";
const controller = controllerForInterface("telegram");

const join = async message => {
  try {
    await controller.addUserToGroup(message.from.id, message.chat.id);
    const fullName = nameFromObject(message.from);
    await sendMessage(
      message.chat.id,
      responses.JOIN_GROUP_SUCCESS.replace("$0", fullName),
    );
  } catch (error) {
    handleError(error, message);
  }
};

export default join;