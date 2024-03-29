import { ProfileType } from "../../../redux/profile-reducer";
import { Preloader } from "../../common/preloader/Loader";
import s from "./ProfileInfo.module.css";
import plus from "../../../assets/image/plus.jpg";
import minus from "../../../assets/image/minus.jpg";
import { ProfileStatus } from "./ProfileStatus";

type ProfileInfoType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
};

export const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      <div className={s.descriptionBlok}>
        {props.profile?.photos?.large === null ? null : (
          <img
            src={props.profile?.photos?.large}
            className={s.profileIMG}
            alt="avatar"
          />
        )}
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>{props.profile.aboutMe}</div>
        <div>
          Поиск работы -
          <img
            className={s.isFindJobIMG}
            src={props.profile.lookingForAJob ? plus : minus}
            alt="smile"
          />
        </div>
      </div>
    </div>
  );
};
