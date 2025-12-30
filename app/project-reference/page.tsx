import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

const projects = [
    {
        title: "National University Hospital Main Building",
        description: "Comprehensive ironmongery solutions for medical facilities.",
        image: "/projects/nuh.jpeg",
        inProgress: false
    },
    {
        title: "National University Hospital Kent Ridge Wing",
        description: "Supplied specialized hardware for healthcare environments.",
        image: "/projects/nuh_kr.jpg",
        inProgress: false
    },
    {
        title: "Interpol Global Complex",
        description: "High-security facility door solutions.",
        image: "/projects/interpol.jpg",
        inProgress: false
    },
    {
        title: "Sengkang Fire Station",
        description: "Heavy-duty hardware for emergency service facilities.",
        image: "/projects/sk_firestation.jpeg",
        inProgress: false
    },
    {
        title: "Union Gas Factory @ Genting Road",
        description: "Industrial grade security and door solutions.",
        image: "/projects/union.jpeg",
        inProgress: false
    },
    {
        title: "Jalan Lam Huat Industrial",
        description: "Robust ironmongery for industrial developments.",
        image: "/projects/lam_huat.jpeg",
        inProgress: false
    },
    {
        title: "Kampung Siglap Mosque",
        description: "Architectural hardware for religious institutions.",
        image: "/projects/kampung_siglap.jpg",
        inProgress: false
    },
    {
        title: "Singapore Polytechnic Science Blk",
        description: "Specialized laboratory and classroom door hardware.",
        image: "/projects/sp.jpeg",
        inProgress: false
    },
    {
        title: "Northwood Condominium @ Jln Mata Ayer",
        description: "Premium residential ironmongery sets.",
        image: "/projects/northwood.jpeg",
        inProgress: false
    },
    {
        title: "Old Custom House",
        description: "Heritage building restoration hardware.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "West Pharmaceutical Services (S) Pte Ltd @ Benoi Rd",
        description: "Pharmaceutical grade hardware solutions.",
        image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Sui Generis Condominium @ Balmoral Crescent",
        description: "Luxury condominium door accessories.",
        image: "/projects/sui_generis.jpeg",
        inProgress: false
    },
    {
        title: "OLA Residential Flats @ Mountbatten Rd",
        description: "Modern residential housing hardware.",
        image: "/projects/ola_resi.jpeg",
        inProgress: false
    },
    {
        title: "Nivana Temple @ Old Choa Chu Kang Rd",
        description: "Cultural and religious facility ironmongery.",
        image: "/projects/nivana.jpeg",
        inProgress: false
    },
    {
        title: "Scape Youth Community Ctr @ Orchard Rd",
        description: "Contemporary community center door solutions.",
        image: "/projects/scape.jpeg",
        inProgress: false
    },
    {
        title: "St Andrew Autism School @ Elliot Rd",
        description: "Specialized educational facility hardware.",
        image: "/projects/sa_autism.jpeg",
        inProgress: false
    },
    {
        title: "West Point Bizhub @ Tuas South Ave 2",
        description: "Commercial business hub ironmongery.",
        image: "/projects/westpoint.jpeg",
        inProgress: false
    },
    {
        title: "New Worker Dormitory @ Mandai Estate",
        description: "Durable hardware for communal living spaces.",
        image: "/projects/worker_dorm.jpeg",
        inProgress: false
    },
    {
        title: "I Biz @ Old Toh Tuck Rd",
        description: "Modern office and business center hardware.",
        image: "/projects/ibiz.jpeg",
        inProgress: false
    },
    {
        title: "Solstice Business Ctr @ New Industrial Rd",
        description: "Industrial business center ironmongery.",
        image: "/projects/solstice.jpeg",
        inProgress: false
    },
    {
        title: "Dorsett Residences",
        description: "Premium hotel and residential development.",
        image: "/projects/dorsett.jpeg",
        inProgress: false
    },
    {
        title: "Tan Tock Seng Hospital",
        description: "Blk 101: Hospital grade security and door controls.",
        image: "/projects/ttsh.jpeg",
        inProgress: false
    },
    {
        title: "Infinite Studio @ Portsdown Rd",
        description: "Creative studio space specialized hardware.",
        image: "/projects/infinite.jpeg",
        inProgress: false
    },
    {
        title: "Temasek Polytechnic",
        description: "Educational campus architectural ironmongery.",
        image: "/projects/tp.jpeg",
        inProgress: false
    },
    {
        title: "Sentosa Gateway Tunnel",
        description: "Specialized hardware for tunnel infrastructure.",
        image: "/projects/sentosa.jpeg",
        inProgress: false
    },
    {
        title: "Perumal Temple",
        description: "Cultural heritage site architectural hardware.",
        image: "/projects/perumal.jpeg",
        inProgress: false
    },
    {
        title: "St. Luke's Community Hospital",
        description: "Specialised hardware for hospital infrastructure.",
        image: "/projects/st_lukes.jpeg",
        inProgress: false
    },
    {
        title: "Upgrading A & A Works @ ACJC School",
        description: "Educational facility hardware upgrades.",
        image: "/projects/acjc.jpeg",
        inProgress: false
    }
]

export default function ProjectReferencePage() {
    return (
        <div>
            <PageHeader
                title="Project References"
                description="A showcase of our work in prestigious residential and commercial developments."
            />

            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <Card key={i} className="overflow-hidden border-none shadow-none bg-transparent group relative">
                            <div className="aspect-[4/3] bg-muted rounded-xl mb-4 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                {project.inProgress && (
                                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg animate-pulse">
                                        <Clock className="w-3 h-3" />
                                        IN PROGRESS
                                    </div>
                                )}
                            </div>
                            <CardContent className="p-0">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
