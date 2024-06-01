"use client";
// import IconCloud from "@/components/magic/icon-cloud";
import TextRevealByWord from "@/components/magic/text-reveal";
import TypingAnimation from "@/components/magic/typing-animation";
import WavyText from "@/components/magic/wavy-text";
import WordRotate from "@/components/magic/word-rotate";
// import { Button } from "@/components/ui/button";
import Image from "next/image";


// import Link from "next/link";
// import { CreatePost } from "@/app/_components/create-post";
// import { api } from "@/trpc/server";

export default function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
      {/* Hero */}
      <div className="flex flex-col min-h-screen w-full bg-cover bg-center bg-no-repeat p-4 transition-all duration-200 ease-in-out bg-[url('https://anti-racism-landing.vercel.app/background.png')] ">

        <div id="nav" className="flex justify-between py-4 px-8 items-center">
          <div>
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255, 0, 0, 0.3)" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake hover:scale-110 hover:-mt-2 hover:rotate-12 transition-all duration-200"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
            {/* <Image
            src={"/logo.svg"}
            alt="BlM Logo"
            width={32}
            height={32}
            className="hover:scale-110 hover:-mt-2 hover:rotate-12 transition-all duration-200"
          /> */}
          </div>
          {/* Title */}
          <span className="text-white hidden md:flex hover:-mt-2 hover:scale-110 transition-all duration-200">
            STANDING AGAINST RACISM
          </span>
          <div>
            {/* Links */}
            <div className="flex gap-x-6 text-white items-center">
              <span className="hover:-mt-2 hover:scale-110 transition-all duration-200">ABOUT</span>
              <a className="hover:-mt-2 hover:scale-110 transition-all duration-200" href="#history">HISTORY</a>
              <div className="w-12 h-12 p-2 flex items-center justify-center bg-black/20 hover:bg-black/50 hover:border hover:border-red-500 hover:-rotate-12 hover:scale-110 backdrop-blur-2xl rounded-full transition-all duration-200" onClick={() => { window.location.assign('https://github.com/trifledmatter/anti-racism-landing') }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-grow">
          <div className="container flex flex-col w-full justify-end items-center pb-24 px-8">
            <WordRotate
              className="text-white/50 text-2xl scale-50 sm:scale-75 md:scale-[0.8] lg:scale-100 transition-all duration-200"
              words={["UNITED FOR CHANGE", "STANDING AGAINST RACISM"]}
            />
            <div className="scale-50 sm:scale-75 md:scale-[0.8] lg:scale-100 transition-all duration-200">
              <WavyText word="TOGETHER FOR EQUALITY AND JUSTICE" className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-7xl transition-all duration-200" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-grow">
          <div className="flex w-full justify-between items-end py-12 px-8">

            {/* center arrow */}
            <div className="flex max-w-sm lg:max-w-xl">
              <span className="text-white/50">
                Racism is a systemic issue that affects us all. It is crucial to understand its roots and work towards dismantling it at every level of society.
              </span>
            </div>
            <div className="flex flex-grow">
              <div className="flex w-full justify-end items-end md:justify-center md:items-center">
                <Image src={"/arrow.png"} alt="bottom arrow" width={24} height={24} />
              </div>
            </div>
            <div className="hidden md:flex md:flex-grow text-white/0">.</div>
          </div>
        </div>
      </div>

      {/* Extra content */}
      <div className="flex">
        <div className="z-10 flex min-h-[4rem] flex-grow justify-center items-center">
          <TextRevealByWord text="Stand in solidarity against all forms of racism and discrimination, and advocate for a world where everyone is treated with respect and dignity." invertColor={true} />
        </div>



      </div>
      <section id="history">
        <div className="px-12 py-12 overflow-hidden flex flex-col justify-start items-start">
          <div className="flex flex-col gap-y-3 w-full">
            <TypingAnimation text="History" className="text-5xl text-start my-4 text-white"/>

            <hr className="border border-white/20 w-full" />
          </div>

          {/* Introduction to the history of racism */}

          <TypingAnimation text="The history of racism is deeply rooted in the fabric of societies around the world. It has shaped and been shaped by social, economic, and political forces, leading to systemic inequalities that persist today. Understanding this history is crucial to addressing and dismantling racism in all its forms." className="mt-6 text-white text-start text-lg" duration={5}/>


          {/* Historical Events and Figures */}
          <div className="mt-6 text-white">
            <h2 className="text-3xl">Historical Events and Figures</h2>
          </div>
          <TypingAnimation text="Significant events such as the Civil Rights Movement in the United States, the abolition of apartheid in South Africa, and the ongoing struggles of Indigenous peoples globally highlight the fight against racial injustice. Key figures like Martin Luther King Jr., Nelson Mandela, and Malala Yousafzai have played pivotal roles in advocating for equality and human rights." className="mt-6 text-white text-start text-lg" duration={5}/>

          {/* Role of education and awareness */}
          <div className="mt-6 text-white">
            <h2 className="text-3xl">Role of Education and Awareness</h2>
          </div>
          <TypingAnimation text="Education and awareness are fundamental in combating racism. By learning about the history and impact of racism, individuals and communities can better understand the importance of diversity and inclusion. Promoting open dialogues and educational programs can foster a more inclusive and equitable society." className="mt-6 text-white text-start text-lg" duration={5}/>
        </div>
      </section>


      <div className="px-12 overflow-hidden flex flex-col justify-center items-center gap-y-4">
        <span className="text-xl text-white">
          STAND UP FOR WHAT IS RIGHT
        </span>
        <hr className="border border-white/20 w-[100px]" />


        <Image src={"/english_creative_text_visual.png"} alt="visual/multimedia creative text" width={1920 / 2} height={1080 / 2} className="rounded-3xl" />
      </div>

      {/* Call to action */}
      <section id="call-to-action" className="px-12 py-12 mt-12 flex flex-col justify-center items-center bg-red-950/30 text-white">
        {/* <h2 className="text-4xl mb-4">Join the Movement</h2> */}
        <TypingAnimation text="Join the Movement" className="text-5xl my-4"/>
        <p className="text-xl mb-6 text-center">
          Take a stand against racism. Get involved in your community, educate yourself and others, and advocate for policies that promote equality and justice. Together, we can create a world where everyone is treated with respect and dignity.
        </p>
        <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ">
          Get Involved
        </button>
      </section>

    </>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
