import Hero from './components/Hero';
import SampleWorkspace from './components/SampleWorkspace';
import SiteNav from './components/SiteNav';
import Workflow from './components/Workflow';
import ClassOverview from './components/ClassOverview';
import Limitations from './components/Limitations';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="site-shell">
      <SiteNav />
      <main id="main-content">
        <Hero />
        <SampleWorkspace />
        <Workflow />
        <ClassOverview />
        <Limitations />
      </main>
      <SiteFooter />
    </div>
  );
}
