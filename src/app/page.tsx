"use client";


// import FeaturesSection from "@/components/home/FeaturesSection";
import Hero from "@/components/home/hero";
import Insights from "@/components/home/insights";
import Products from "@/components/home/Products";
import ServicesSection from "@/components/home/services";
import TeamSection from "@/components/home/team";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";

export default function Home() {
  const team = [{
    name: "Akkil M G",
    role: "Team member",
    avatar: "akkil.png",
    linkedin: "akkilmg",
    socialLinks: {
      website: 'https://akkilmg.vercel.app/',
      github: 'akkilmg'
    },
    from: "1 Jan"
  },{
    name: "Srujan Rai",
    role: "Team member",
    avatar: "srujan.png",
    linkedin: "srujan-rai",
    socialLinks: {
      website: 'https://portfolio-omega-six-60.vercel.app/',
      github: 'Srujan-rai'
    },
    from: "1 Jan"
  }, {
    name: "Saiesh Savant",
    role: "Team member",
    avatar: "saiesh.png",
    linkedin: "saieshsavant",
    socialLinks: {
      website: '#',
      github: 'SaieshSavant'
    },
    from: "1 Jan"
  }, {
    name: "Aman",
    role: "Team member",
    avatar: "aman.png",
    linkedin: "amanshetty370",
    socialLinks: {
      website: '#',
      github: 'Aman-Shetty'
    },
    from: "1 Jan"
  }];
  return (
    <div className="bg-white">
      <div>
        <Header />
        <Hero team={team.slice(1)}/>
        <Insights />
        <ServicesSection />
        {/* <FeaturesSection /> */}
        {/* <TeamSection /> */}
        <Products />
        {/* <TeamCarousel teamMembers={[{
          name: "Akkil M G",
          role: "Team member",
          avatar: "akkil.png",
          linkedin: "akkilmg",
          from: "1 Jan"
        },{
          name: "Srujan Rai",
          role: "Team member",
          avatar: "srujan.png",
          linkedin: "srujan-rai",
          from: "1 Jan"
        }, {
          name: "Saiesh Savant",
          role: "Team member",
          avatar: "saiesh.png",
          linkedin: "saieshsavant",
          from: "1 Jan"
        }, {
          name: "Aman",
          role: "Team member",
          avatar: "aman.png",
          linkedin: "amanshetty370",
          from: "1 Jan"
        }]} /> */}
        <TeamSection teamMembers={team} />
        <Footer />
      </div>
    </div>
  );
}
