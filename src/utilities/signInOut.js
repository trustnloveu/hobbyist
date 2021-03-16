// libraries
import { toast } from "react-toastify";

// services
import * as groupService from "../services/groupService";

// export modules
// join group
export async function joinGroup(token, data) {
  if (token) {
    try {
      if (window.confirm(data.title + " 모임에 참여하시겠습니까?")) {
        const group = await groupService.joinNewGroup(data._id);
        toast.info(group.title + "에 가입하였습니다.", {
          position: "top-center",
        });
        window.location.reload();
      } else return;
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error(ex.response.data, {
          position: "top-center",
        });
      }
    }
  } else {
    toast.info("로그인이 필요한 서비스입니다.", {
      position: "top-center",
    });
  }
}

// sign-out group
export async function signOutGroup(token, data) {
  if (token) {
    try {
      if (window.confirm(data.title + " 모임에서 나가겠습니까?")) {
        await groupService.signOutGroup(data._id);
        window.location.reload();
      } else return;
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error(ex.response.data, {
          position: "top-center",
        });
      }
    }
  } else {
    toast.info("로그인이 필요한 서비스입니다.", {
      position: "top-center",
    });
  }
}
