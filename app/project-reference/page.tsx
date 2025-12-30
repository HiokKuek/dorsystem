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
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Jalan Lam Huat Industrial",
        description: "Robust ironmongery for industrial developments.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Upgrading A & A Works @ ACJC School",
        description: "Educational facility hardware upgrades.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Kampung Siglap Mosque",
        description: "Architectural hardware for religious institutions.",
        image: "https://images.unsplash.com/photo-1564769625805-2410bc30e377?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Singapore Polytechnic Science Blk",
        description: "Specialized laboratory and classroom door hardware.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Northwood Condominium @ Jln Mata Ayer",
        description: "Premium residential ironmongery sets.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "OLA Residential Flats @ Mountbatten Rd",
        description: "Modern residential housing hardware.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec239ec363b?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Nivana Temple @ Old Choa Chu Kang Rd",
        description: "Cultural and religious facility ironmongery.",
        image: "https://images.unsplash.com/photo-1590059374637-23469145693b?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Scape Youth Community Ctr @ Orchard Rd",
        description: "Contemporary community center door solutions.",
        image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "St Andrew Autism School @ Elliot Rd",
        description: "Specialized educational facility hardware.",
        image: "https://images.unsplash.com/photo-1503945438818-0155b1fec998?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "West Point Bizhub @ Tuas South Ave 2",
        description: "Commercial business hub ironmongery.",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "3 Blks of New Worker Dormitory @ Mandai Estate",
        description: "Durable hardware for communal living spaces.",
        image: "https://images.unsplash.com/photo-1555854817-5b2559a2249c?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "I Biz @ Old Toh Tuck Rd",
        description: "Modern office and business center hardware.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Solstice Business Ctr @ New Industrial Rd",
        description: "Industrial business center ironmongery.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Dorsett Residences",
        description: "Premium hotel and residential development.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Blk 101 Tan Tock Seng Hospital",
        description: "Hospital grade security and door controls.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Infinite Studio @ Portsdown Rd",
        description: "Creative studio space specialized hardware.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "7 Storey Temasek Polytechnic",
        description: "Educational campus architectural ironmongery.",
        image: "https://images.unsplash.com/photo-1541339906649-c43918b95f26?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Interpol Global Complex",
        description: "High-security facility door solutions.",
        image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Sentosa Gateway Tunnel",
        description: "Specialized hardware for tunnel infrastructure.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
        inProgress: false
    },
    {
        title: "Perumal Temple",
        description: "Cultural heritage site architectural hardware.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
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
