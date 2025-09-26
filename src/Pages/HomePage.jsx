import FooterTab from "@/Components/FooterTab";
import Header from "@/Components/MainHeader";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="main-container px-10">
        <section className="hero mt-20 text-center">
          <h1 className="text-[#1B5E20] font-bold text-7xl">
            Manage Your Upcoming <br /> Event With <br />
            Party Next Door
          </h1>
          <p className="text-lg/7 mt-10">
            Seamlessly plan, organize, and host unforgettable events with <br />{" "}
            Party Next Door, your all-in-one solution for stress-free event
            management.
          </p>

          <button className="bg-[#2E7D32] w-50 p-2 py-4 mb-2 mt-10 rounded-full font-bold">
            Sign Up
          </button>
          <p>Event no suppose hard, no be Koleosho FAMILY</p>
        </section>

        <section className="how-it-works mt-30">
          <aside className="text-5xl  font-bold my-15">
            <h2>Lets' Create Magic</h2>
            <h3>Host Event In Three Steps Party</h3>
          </aside>

          <div className="cardSec flex flex-col md:flex-row gap-10">
            <Card className="mt-5 w-full border-[#C8E6C9]">
              <CardHeader>
                <CardTitle className="text-7xl">Create Your Event </CardTitle>
                <CardDescription className="mt-3">
                  {" "}
                  Launch your vision into reality. Choose your event type, set
                  the foundation, and begin building something memorable. Every
                  great event starts with a single click.{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="mt-5 w-full border-[#C8E6C9]">
              <CardHeader>
                <CardTitle className="text-7xl">Fill Event Details </CardTitle>
                <CardDescription className="mt-3">
                  {" "}
                  Add the essence that makes your event unique. Set date, time,
                  location, and all the details that turn a simple gathering
                  into an unforgettable experience.{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="mt-5 w-full border-[#C8E6C9]">
              <CardHeader>
                <CardTitle className="text-7xl">Send Event to Guest </CardTitle>
                <CardDescription className="mt-3">
                  {" "}
                  Connect with your people. Send invitations, track responses,
                  and watch your community come together. Your event becomes
                  real when others join the journey.{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className=" bg-[#F5F5F5] w-[100%] md:w-[70%]  mx-auto mt-20 rounded-3xl p-5 text-center">
          <h3 className="font-bold text-3xl py-5">Watch DEMO</h3>
          <iframe
            class="rounded-xl shadow-lg"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>

        <section className="  w-[100%] md:w-[70%] mx-auto mt-20 rounded-3xl p-5 text-center">
          <h2 className="font-bold text-5xl py-5">
            Questions? <br /> We gat answers!
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-1xl cursor-pointer hover:no-underline">
                What is PartyVibe?
              </AccordionTrigger>
              <AccordionContent >
                PartyVibe is a modern platform designed to bring people together
                through fresh, engaging, and interactive experiences. Whether
                it’s events, networking, or community building, we keep the vibe
                fun and seamless.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold text-1xl cursor-pointer hover:no-underline">
                How do I create an account?
              </AccordionTrigger>
              <AccordionContent>
                Click the Sign Up button at the top right corner of the page,
                fill in your details, and you’ll be ready to go in minutes. You
                can also sign up with Google faster access.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-1xl cursor-pointer hover:no-underline">
                Is PartyVibe free to use?
              </AccordionTrigger>
              <AccordionContent>
                Yes, creating an account is free! Some premium features or event
                tools may require a subscription, but most features are
                accessible to all users.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-bold text-1xl cursor-pointer hover:no-underline">
                Can I access PartyVibe on mobile?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. PartyVibe is fully responsive and works smoothly on
                both desktop and mobile browsers. We’re also working on a mobile
                app version to make your experience even better.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-bold text-1xl cursor-pointer hover:no-underline">
                How do I reset my password?
              </AccordionTrigger>
              <AccordionContent>
                If you’ve forgotten your password, click “Forgot Password” on
                the login page. You’ll receive an email with instructions to
                reset it safely.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>

      <FooterTab></FooterTab>
    </>
  );
};

export default Home;
