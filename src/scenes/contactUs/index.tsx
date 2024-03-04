import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto bg-gray-20 w-full pt-24 pb-32 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >

        <motion.div
          className="md:w-4/5 items-center md:justify-center md:align-middle md:ml-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="w-4/5 font-montserrat text-primary-500 text-center mb-4 text-5xl font-bold ml-20">
            <span className="text-secondary-400">JOIN NOW</span> TO GET IN SHAPE
          </h1>
          <p className="my-5 text-2xl text-center p-4">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>


        <div className="mt-10  justify-center w-4/5 items-center md:ml-40  gap-8 md:flex ml-28">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              <input
                className="  w-4/6 rounded-lg bg-primary-300/50  px-5 py-3 mb-8 placeholder-grey "
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-secondary-300">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="mb-8 w-4/6 rounded-lg bg-primary-300/50  px-5 py-3 placeholder-grey"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-secondary-300">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
                <input
                className="mb-8  w-4/6 rounded-lg bg-primary-300/50 px-5 py-3 placeholder-grey"
                type="number"
                placeholder="Phone Number "
                {...register("number", {
                  required: true,
                  maxLength: 10,
                })}
              />
              {errors.number && (
                <p className="mt-1 text-secondary-300">
                  {errors.number.type === "required" && "This field is required."}
                  {errors.number.type === "maxLength" &&
                    "enter a vaild number"}
                </p>
              )}
              <input
                className="mb-8  w-4/6 rounded-lg bg-primary-300/50  px-5 py-3 placeholder-grey"
                type="number"
                placeholder="AGE"
                {...register("age", {
                  required: false,
                  maxLength: 100,
                })}
              />
              {errors.age && (
                <p className="mt-1 text-secondary-300">
                  {errors.age.type === "required" && "This field is not required."}
                  {errors.age.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <textarea
                className="mb-8 w-5/6 rounded-lg bg-primary-300/50  px-5 py-3 placeholder-grey "
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-secondary-300">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-2 rounded-lg bg-secondary-500 hover:bg-gray-100 px-20 py-3 transition duration-500 hover:text-white lg:ml-20"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0 mr-12 lg:mr-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-10 befor">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
