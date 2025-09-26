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

const AboutUs = () => {
  return (
    <>
      <Header></Header>
      <div className="px-10">
        <section className="hero mt-20 text-center">
          <h1 className="text-[#1B5E20] font-bold text-7xl">
            Get to know
            <br />
            Party Next Door
          </h1>
          <p className="text-lg/7 mt-10">
            Seamlessly plan, organize, and host unforgettable events with <br />{" "}
            Party Next Door, your all-in-one solution for stress-free event
            management.
          </p>

          <button className="bg-[#2E7D32] w-50 p-2 py-4 mb-2 mt-10 rounded-full font-bold">
            Sign Up For Free
          </button>
        </section>

        <section className="mt-20 text-center">
          <h3 className="text-[#1B5E20] font-bold text-3xl ">
            Mission | Value | Goals{" "}
          </h3>
          <p className="mt-10 text-balance">
            At <b>Party Next Door</b>, we believe that every great event starts
            with seamless planning. Whether it’s an intimate birthday, a vibrant
            wedding, a corporate gathering, or a night out with friends, our
            mission is to make event scheduling simple, stress-free, and fun.
          </p>
          <p className="text-balance mt-5">
            Our platform is designed to help you plan, organize, and coordinate
            events effortlessly — all in one place. From setting dates and
            sending invites to tracking RSVPs and managing updates, Party Next
            Door puts everything you need at your fingertips.
          </p>
        </section>
        <section className="mt-20">
          <h3 className="text-[#1B5E20] font-bold text-3xl ">
            What Can Party Next Door do for you?
          </h3>
          <div className="cardSec flex flex-col md:flex-row gap-10">
            <Card className="mt-5 w-full border-[#C8E6C9] cursor-pointer">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">
                  Seamless Event Scheduling{" "}
                </CardTitle>
                <CardDescription className="mt-3">
                  Say goodbye to messy group chats and endless back-and-forths.
                  Set your event date, time, and details in just a few taps.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="mt-5 w-full border-[#C8E6C9] cursor-pointer">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">
                  Smart Invites & RSVP Tracking{" "}
                </CardTitle>
                <CardDescription className="mt-3">
                  Send digital invites, track responses in real-time, and know
                  exactly who’s coming — without the stress.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="mt-5 w-full border-[#C8E6C9] cursor-pointer">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">
                  Real-Time Updates & Reminders
                </CardTitle>
                <CardDescription className="mt-3">
                  {" "}
                  Connect with your people. Send invitations, track responses,
                  and watch your community come together. Your event becomes
                  real when others join the journey.{" "}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="mt-5 w-full border-[#C8E6C9] cursor-pointer">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">
                  Manage Events
                </CardTitle>
                <CardDescription className="mt-3">
                  Take full control of your celebrations with powerful event
                  management tools. From creating and editing event details to
                  organizing guest lists, sending updates, and tracking RSVPs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
      <FooterTab></FooterTab>
    </>
  );
};

export default AboutUs;
