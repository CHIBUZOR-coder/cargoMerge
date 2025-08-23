import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookMessengerShareButton,
} from "react-share";

const Footer = () => {
  const shareUrl = "https://your-website.com";
  const title = "Check this out!";
  return (
    <div className="h-28 bg-main4">
      <div className="flexRow p-6 gap-3">
        <FacebookMessengerShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={40} round />
        </FacebookMessengerShareButton>

        <TwitterShareButton
          className="bg-green-300 p-4 text-white"
          url={shareUrl}
          title={title}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <WhatsappShareButton
          className="bg-green-300 p-4 text-white"
          url={shareUrl}
          title={title}
        >
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Footer;
