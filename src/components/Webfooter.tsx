import Image from "next/image";

type Props = {
  className?: HTMLDivElement["className"];
};

const WebFooter = (props: Props) => {
  return (
    <div
      className={
        "flex justify-between items-center text-xs sm:text-base text-white/80 gap-8 " +
        props.className
      }
    >
      <div>
        <p>
          Magically molded with 🤍 and a sprinkle of{" "}
          <a
            href="http://twitter.com/hackodisha"
            className="hover:underline underline-offset-4 hover:text-white transition-colors ease-in"
          >
            Chemical 𝕏{" "}
          </a>{" "}
          by{" "}
          <a
            href="http://teamwebwiz.dev/"
            className="hover:border-b-2 hover:text-white transition-colors ease-in "
          >
            <span className="inline-flex justify-between items-center text-white  gap-2 ">
              {" "}
              Team{" "}
              <Image
                src={"/webwiz.svg"}
                alt="</WEBWIZ"
                width={120}
                height={15}
                className="invert object-contain object-center w-[80px] h-auto sm:w-[120px] sm:h-auto"
              ></Image>
            </span>
          </a>
        </p>
      </div>
      <div className="hover:border hover:border-white p-2 rounded-3xl transition-all ease-in hover:bg-white/5">
        <Image
          src={"/nuxww.svg"}
          alt="nu x webwiz"
          width={80}
          height={80}
        ></Image>
      </div>
    </div>
  );
};

export default WebFooter;