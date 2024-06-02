import { AppUrl } from "@/constants";

export function AnnouncementBar() {
  return (
    <div className="bg-[#2d72d2] bg-blue-600 text-white px-4 py-1 md:py-2 text-center justify-center z-50 text-xs sm:text-sm">
      <span className="bg-[#00cfb7] px-[6px] py-[1px] md:px-[6px] md:py-[2px] rounded-md text-black text-xs mr-2">
        New
      </span>
      {
        "We've launched the Bigcapital Cloud, the 200 early adopters will get all the features access and unlimited users."
      }
      <a
        className={
          'hidden md:inline-block bg-white px-[6px] py-[2px] rounded-md inline-block text-black leading-none text-[13px] ml-2 hover:underline'
        }
        href={AppUrl.SignUp}
      >
        Subscribe $29
      </a>
    </div>
  );
}