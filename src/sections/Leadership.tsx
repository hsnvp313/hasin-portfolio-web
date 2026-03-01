import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import gdsc from "@/assets/gdsc.png"
import nss from "@/assets/nss.png"
import th from "@/assets/tinker.png"
import iedc from "@/assets/iedc.png"

const roles = [
  {
    title: "Vice Lead",
    dur:"2023-24",
    org: "Google Developer Student Clubs (GDSC)",
    desc: "Co-led technical initiatives and organized developer workshops for the campus community.",
    logo: gdsc,
  },
  {
    title: "Campus Lead",
    dur:"2023-24",
    org: "TinkerHub",
    desc: "Managed learning programs and coordinated peer-to-peer tech sessions on campus.",
    logo: th,
  },
  {
    title: "Quality & Operations Lead",
    dur:"2023-24",
    org: "IEDC",
    desc: "Oversaw project quality and streamlined operational workflows for the innovation cell.",
    logo: iedc,
  },
  {
    title:"Poster Committee Head",
    dur:"2022-24",
    org:"National Service Scheme",
    desc:" Designed numerous posters for NSS Unit-224, ensuring creative and impactful visuals.",
    logo: nss,
  },
  {
    title: "Creative & Innovation Lead",
    dur:"2022-23",
    org: "IEDC",
    desc: "Oversaw project quality and streamlined operational workflows for the innovation cell.",
    logo: iedc,
  },
  {
    title:"Creative Head",
    dur:"2019-21",
    org:"National Service Scheme",
    desc:"Leaded the planning and execution of creative activities for social outreach and awareness programs",
    logo: nss
  },
];

const Leadership = () => {
  const { ref, controls } = useScrollFadeIn();

  return (
    <section id="leadership" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl mb-12">Leadership & Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="p-5 rounded-xl bg-background border border-border shadow-sm flex gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-heading mb-0.5">
                    {role.title}
                  </h3>
                  <p className="text-xs font-semibold text-medium mb-0.1">
                    {role.dur}
                    </p>
                  <p className="text-sm text-primary font-medium mb-2">
                    {role.org}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {role.desc}
                  </p>
                </div>
                <img
                  src={role.logo}
                  alt={role.org}
                  className="w-16 h-16 rounded-full flex-shrink-0 object-cover"
                />
              </div>
              
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
