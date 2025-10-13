import Header from "@/components/Header";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import ExportToPdf from "@/components/ExportToPdf";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="pdf-content">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <Header />
        <WorkExperience />
        <Projects />
        <TechStack />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-border text-center">
          {/*<p className="text-xs text-muted-foreground">
            Built with React • Deployed on Lovable
          </p> */}
          <ExportToPdf />
        </footer>
      </div>
    </div>
  );
};

export default Index;
