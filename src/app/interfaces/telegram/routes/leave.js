import { controllerForInterface } from "lib/utils";
import { responses } from "lib";
import { handleError, sendMessage, nameFromObject } from "lib/utils/telegram";
const controller = controllerForInterface("telegram");

const leave = async message => {
  try {
    await controller.removeUserFromGroup(message.from.id, message.chat.id);
    const fullName = nameFromObject(message.from);
    await sendMessage(
      message.chat.id,
      responses.LEAVE_GROUP_SUCCESS.replace("$0", fullName),
    );
  } catch (error) {
    handleError(error, message);
  }
};

export default leave;