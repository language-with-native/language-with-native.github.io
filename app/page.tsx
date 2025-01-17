import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import Subscribe from './components/Subscribe';


export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Subscribe/> */}
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQrn58duC2t7Ln-mc01x5zLnfHILaxzwIPr-A2eL9qTLL6pw/viewform?embedded=true" width="100%" height="1000px">Loading…</iframe>
      {/* <Companies /> */}
      <Courses />
      <Mentor />
      <Testimonials />
      {/* <Newsletter /> */}
    </main>
  )
}
