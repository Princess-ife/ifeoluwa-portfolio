import Image from "next/image";
import { Fragment } from "react";
const PreLoader = () => {
  return (
    <Fragment>
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              <Image
                src="/images/prifea.jpg"
                alt="Ifeoluwa Oluwafemi - Personal Portfolio"
                width={100}
                height={100}
                className="rounded-full animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PreLoader;
