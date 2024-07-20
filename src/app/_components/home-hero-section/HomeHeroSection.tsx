import Image from "next/image";
import Button from "../button/Button";

export const HomeHeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern  bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex-1 flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
          <h3 className="text-xl dark:text-info xl:text-2xl">
            خوش آمدی به ...
          </h3>
          <h1 className="text-3xl gradient font-black lg:text-5xl xl:text-5xl">
            مسیر صعود به قله‌های برنامه‌نویسی
          </h1>
          <p className="text-lg font-bold leading-8">
            هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
            کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
            هواتو داریم.
          </p>
          <div className="mt-5 flex gap-4">
            <Button variant="primary" size="large">
              دوره های ری اکت و نکست
            </Button>
            <Button variant="neutral" size="large">
              مشاوره برنامه نویسی
            </Button>
          </div>
          <Image
            className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            src="/images/frameworks.png"
            alt=""
            width={412}
            height={39}
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          alt="کلاسبن"
          width={702}
          height={521}
        />
      </div>
    </section>
  );
};
