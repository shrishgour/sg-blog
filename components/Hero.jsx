import heroBG from "@/public/heroBG-2.png";
import Image from "next/image";

function Hero({ heading, subHeading, showImage = false }) {
  return (
    <section className="relative mx-auto h-[60vh] w-screen sm:h-[50vh]">
      <div className="z-10 mx-auto grid h-full max-w-5xl grid-cols-1 items-center px-2">
        <h1 className="col-span-full mx-2 mt-auto mb-4 text-3xl font-bold sm:text-4xl">
          {heading}
        </h1>
        <p className="text-muted-foreground mx-2 mb-auto text-sm font-normal sm:text-base">
          {subHeading}
        </p>
      </div>
      {showImage && (
        <Image
          src={heroBG}
          alt="Image of the blog's owner"
          fill
          priority
          className="-z-10 overflow-auto object-cover object-left-top"
        />
      )}
      <div className="to-background absolute inset-0 -z-10 bg-gradient-to-b from-70% via-transparent/80"></div>

      <div className="from-primary/90 via-muted-foreground/50 to-background absolute inset-0 -z-20 -mt-25 animate-[scrollGradient_5.5s_linear_infinite] bg-gradient-to-b bg-[length:100%_100%]" />
    </section>
  );
}

export default Hero;
