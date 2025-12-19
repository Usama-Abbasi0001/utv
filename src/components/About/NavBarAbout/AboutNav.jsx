import AboutLeft from './AboutLeft';
import AboutCenter from './AboutCenter';
import AboutRight from './AboutRight';

function AboutNav() {
  return (
    <div className="w-full">
      <div className="max-w-[1220px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">
        <AboutLeft />
        <AboutCenter />
        <AboutRight />
      </div>
    </div>
  );
}

export default AboutNav;
