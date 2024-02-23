import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.jpg";
import { motion } from "framer-motion";

import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "High-energy classes designed to improve cardiovascular fitness and burn calories.",
    image: image3,
  },
  {
    name: "Strength Training",
    description:
      "Classes focusing on building muscle strength and endurance using weights and resistance training.",
    image: image4,
  },
  {
    name: "personal Trainers ",
    image: image5,
  },
  {
    name: "Cardio Classes",
    description:
      "combine physical postures, breathing techniques, and meditation to improve flexibility, strength, and mental well-being.",
    image: image6,
  },
  {
    name: "Boxing Classes ",
    description:
      "focus on core strength, flexibility, and overall body awareness through controlled movements.",
    image: image7,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-full">
          <h1 className="w-full font-montserrat text-secondary-100 text-center mb-4 text-5xl font-bold">
             Evolve Fitness Gym offers a variety of classes
          </h1>
          <p className="my-5 text-2xl text-center p-4">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
