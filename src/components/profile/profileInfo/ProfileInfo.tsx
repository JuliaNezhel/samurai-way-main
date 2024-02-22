import { ProfileType } from "../../../redux/profile-reduser";
import { Preloader } from "../../common/Loader";
import s from "./ProfileInfo.module.css";
import plus from "../../../assets/image/plus.jpg";
import minus from "../../../assets/image/minus.jpg";
import { ProfileStaus } from "./ProfileStaus";

export const ProfileInfo = (props: { profile: ProfileType }) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      <div className={s.containerImg}>
        <img
          src="https://w-dog.ru/wallpapers/10/0/536091371634844/krasivyj-vodopad-vodopad-tropiki-yarkon-solnce-krasivoe-nebo-oblaka-raj.jpg"
          className={s.contentIMG}
        ></img>
      </div>
      <div className={s.deckriptionBlok}>
        {props.profile?.photos?.large === null ? null : (
          <img src={props.profile?.photos?.large} className={s.profileIMG} />
        )}
        <ProfileStaus status="dchbsdiyfozuygfv" />
        <div>{props.profile.aboutMe}</div>
        <div>
          Поиск работы -
          <img
            className={s.isFindJobIMG}
            src={props.profile.lookingForAJob ? plus : minus}
          />
        </div>
      </div>
    </div>
  );
};
