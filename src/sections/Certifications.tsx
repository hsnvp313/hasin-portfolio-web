import { Link } from "lucide-react";

const certificates=[
    {
        name:"Pre Security (New) Certificate",
        org:"TryHackMe",
        issue:"Feb 2026",
        credId:"THM-TDTL1LL3VK",
        url:"https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-TDTL1LL3VK.pdf",
        desc:"Foundational concepts in cybersecurity including networking basics, Linux fundamentals, web security principles, and threat awareness.",

    },
    {
        name:"Technical Support Fundamentals",
        org:"Google",
        issue:"Feb 2026",
        credId:"QXAAVI5KOOP0",
        url:"https://www.coursera.org/account/accomplishments/records/QXAAVI5KOOP0",
        desc:"Foundations in IT support, hardware and software troubleshooting, Windows & Linux systems, networking concepts, and end-user technical assistance. Achieved a final grade of 98.32%."
    }
];

const Certifications = () =>{
    
return(
    <section id="certificates" className="py-20 md:py-28 bg-card">
        <div className="container max-w-5xl">
            <div>
                <h2 className="text-3xl mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((certificates)=>(
                        <div
                        className="p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                            <h3>{certificates.name}</h3>
                            <div>
                                <span className="text-sm text-primary font-semibold mb-2">{certificates.org}</span>
                            </div>
                            <p className="text-xs text-medium font-semibold mb-0.1">{certificates.issue}</p>
                            <p className="text-xs text-medium font-semibold mb-1"> Credential ID: {certificates.credId}</p>
                            <a href={certificates.url} className="inline-flex items-center gap-2 rounded-lg border border-border px-2 py-2 text-sm text-primary font-medium hover:border-primary/40 hover:text-primary-hover transition-colors shadow-sm"><Link className="w-3.5 h-3.5"/>Verify</a>
                            <p>{certificates.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
)
};
export default Certifications;
