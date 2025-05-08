import {motion} from 'framer-motion';
import {FaShieldAlt,FaBolt,FaGem,FaHeadset} from 'react-icons/fa';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaShieldAlt size={35}/>,
      title: "Secure Transactions",
      description: "Enterprise-grade security with encrypted data transfer and escrow protection"
    },
    {
      icon: <FaBolt size={35}/>,
      title: "Fast Processing",
      description: "Complete transactions in as little as 72 hours"
    },
    {
      icon: <FaGem size={35}/>,
      title: "Best Market Value",
      description: "Get up to 70% of original license value through our network of verified buyers"
    },
    {
      icon: <FaHeadset size={35}/>,
      title: "Dedicated Support",
      description: "Personal account manager for enterprise clients"
    }
  ];

  return (
    <section className="py-5 py-md-6">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-3"
              initial={{opacity:0,y:20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay:index*0.1}}
              viewport={{once:true}}
            >
              <div className="feature-card h-100">
                <div className="text-primary mb-3">
                  {benefit.icon}
                </div>
                <h3 className="h5 mb-3">{benefit.title}</h3>
                <p className="mb-0 text-secondary">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
