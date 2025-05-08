import {motion} from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "IT Director",
      company: "TechCorp Solutions",
      content: "SoftSell helped us recover significant value from our unused Adobe licenses. The process was smooth and professional.",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "CFO",
      company: "Innovation Labs",
      content: "Outstanding service and excellent valuations. We've been using SoftSell for all our license reselling needs.",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  ];

  return (
    <section className="py-5 py-md-6 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <div className="row justify-content-center g-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="col-md-6"
              initial={{opacity: 0, x:index %2 ===0 ? -20 :20}}
              whileInView={{opacity:1,x: 0}}
              viewport={{once:true}}
            >
              <div className="testimonial-card">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle"
                    style={{width:60,height: 60,objectFit: 'cover'}}
                  />
                  <div className="ms-3">
                    <h3 className="h5 mb-1">{testimonial.name}</h3>
                    <p className="text-secondary mb-0">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="mb-0 fst-italic">"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
