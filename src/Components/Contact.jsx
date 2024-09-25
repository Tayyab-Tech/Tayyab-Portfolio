import EMAILIMG from '../assets/email.png';
import CALLIMG from '../assets/call.png';
function Contact(props) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const emailLink = isMobile
    ? props.YourEmailLink
    : props.YourEmailLink2;

    
  return (
    <>
      <div
        id="contact"
        className="relative top-16 pt-24 pb-24 md:pl-20 md:pr-20 pl-3 pr-3 bg-slate-50 dark:bg-gray-700 dark:text-white text-gray-950"
      >
        <h1 className="sm:text-4xl text-4xl font-bold Primary-color flex justify-center items-center mb-3">
          Get in touch
        </h1>
        <p className="text-center text-xl">
          Looking to Grow Your Business through Front-end Development?
          <br className="hidden md-custom:block" />
          Let's Chat for Tips!
        </p>
        <div className="flex gap-4 md-custom:flex-row flex-col md-custom:justify-around md-custom:items-center items-center ">
          <div className="flex justify-center items-center gap-3">
            <img
              className="rounded-[50%] h-14"
              src={EMAILIMG}
              alt="email"
            />
            <div className="flex row">
              <h1 className="text-2xl Primary-color uppercase font-bold">
                Mail Me :
              </h1>
              <a
                className="text-md dark:text-white text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-600 no-underline"
                href={emailLink}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                {props.YourEmail}
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img className="rounded-[50%] h-14" src={CALLIMG} alt="call" />
            <div className="flex row">
              <h1 className="text-2xl Primary-color uppercase font-bold">
                Whatsapp Me :
              </h1>
              <a
                className="text-xl dark:text-white text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-600 no-underline"
                href={props.YourContactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.YourContact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
