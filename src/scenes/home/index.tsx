
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-8 bg-gray-20 py-10 md:h-full md:pb-0">

      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 mb-12"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >

        <div className="z-10 mt-32 md:mt-72 md:w-screen md:h-full">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            
            <div className="relative md:w-creen md:ml-20">
                <img alt="home-page-text" src={HomePageText} />
            </div>
            <div className="w-">
              <p className="mt-8 text-2xl md:text-[22px]	h-4/5   text-primary-500 text-center">
              At Evolve Fitness, we believe in the power of transformation and growth. Our gym is not just a place to work out; it's a space where you can evolve into the best version of yourself. With state-of-the-art equipment, expert trainers, and a supportive community, we are here to help you reach your fitness goals and go beyond.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p className="text-[16px]">Learn More</p>
              </AnchorLink>
            </motion.div>
        </div>


        <div
          className="flex basis-full justify-center md:z-10
              md:ml-60 md:mt-12 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>


      {isAboveMediumScreens && (
        <div className="h-[140px] w-full bg-primary-100 py-10 ">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
