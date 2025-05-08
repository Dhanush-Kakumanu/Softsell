import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <motion.div
            className="col-lg-8"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
          >
            <h1 className="display-4 fw-bold mb-4">
              Transform Unused Software Licenses into Revenue
            </h1>
            <p className="lead mb-5">
              The trusted marketplace for enterprise software license resale
            </p>
            <motion.button
              className="btn btn-primary btn-lg px-5 py-3"
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            >
              Get Your License Valuation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;