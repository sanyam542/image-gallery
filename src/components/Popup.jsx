import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CloseIcon from "@mui/icons-material/Close";
export default function Popup(props) {
  return (
    <>
      <div className=" fixed top-[15%] left-[10%] w-4/5 h-4/5 bg-white ease-in flex justify-center items-center flex-col dark:bg-neutral-800  rounded-xl transition-all ease-in-out duration-300">
        <img
          className="h-[80%] w-auto rounded-xl  "
          src={props.value.urls.regular}
          alt="error"
        />
        <button
          className=" left-[89%]   text-black bg-neutral-300  rounded-full  top-[14%] fixed "
          onClick={props.onClose}
        >
          <CloseIcon />
        </button>
        <div className="  w-full">
          <ul className="flex justify-around items-center p-2 pt-1 mt-4  dark:border-black  text-xs">
            <li>
              <img
                className="rounded-full w-10 mt-1 ml-6 "
                src={props.value.user.profile_image.large}
                alt=""
              ></img>
            </li>
            <ul className="flex flex-col space-y-0 text-black dark:text-white  mr-24  ">
              <li>{props.value.user.name}</li>
              <li className="italic text-neutral-400 font-thin text-xs ">
                {props.value.user.instagram_username !== null
                  ? "@" + props.value.user.instagram_username
                  : null}
              </li>
            </ul>
            <ul className="flex text-neutral-400  ">
              {props.value.user.instagram_username !== null ? (
                <li className="mr-2">
                  <InstagramIcon />
                  {props.value.user.instagram_username}
                </li>
              ) : null}

              {props.value.user.twitter_username !== null ? (
                <li>
                  <TwitterIcon />
                  {props.value.user.twitter_username}
                </li>
              ) : null}
            </ul>
            <li className="flex text-xs items-center text-neutral-400">
              <ThumbUpOffAltIcon />
              {props.value.likes}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
