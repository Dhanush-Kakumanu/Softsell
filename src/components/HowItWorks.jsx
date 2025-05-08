import {motion} from 'framer-motion';
import {FaUpload,FaCalculator,FaMoneyCheckAlt} from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUpload size={40}/>,
      title: "Upload License",
      description: "Share your software license details through our secure portal"
    },
    {
      icon: <FaCalculator size={40}/>,
      title: "Get Valuation",
      description: "Receive a market-based valuation within 24 hours"
    },
    {
      icon: <FaMoneyCheckAlt size={40}/>,
      title: "Get Paid",
      description: "Accept our offer and receive payment within 3 business days"
    }
  ];

  return (
    <section className="py-5 py-md-6 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">How It Works</h2>
        <div className="row g-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              initial={{opacity:0,y: 20}}
              whileInView={{opacity:1,y: 0}}
              transition={{delay:index*0.2}}
              viewport={{once:true}}
            >
              <div className="feature-card text-center h-100">
                <div className="text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="h4 mb-3">{step.title}</h3>
                <p className="mb-0">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
